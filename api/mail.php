<?php
/**
 * Gmail SMTP helper for form notification emails.
 */

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '/vendor/autoload.php';

/** Load optional local overrides (gitignored). */
$mailLocal = __DIR__ . '/mail.local.php';
if (is_file($mailLocal)) {
    require_once $mailLocal;
}

function mailConfig(string $key, ?string $default = null): ?string
{
    $envKey = strtoupper($key);
    $value = getenv($envKey);
    if ($value !== false && $value !== '') {
        return $value;
    }
    return $default;
}

/**
 * @param array<string, mixed> $data
 * @return array{ok: bool, message: string}
 */
function sendFormNotificationEmail(array $data): array
{
    $gmailUser = mailConfig('GMAIL_USER');
    $gmailPass = mailConfig('GMAIL_APP_PASSWORD');
    $notifyTo = mailConfig('NOTIFY_TO', 'mail.europecalling@gmail.com');

    if (!$gmailUser || !$gmailPass) {
        return ['ok' => false, 'message' => 'Mail is not configured on the server'];
    }

    $formType = (string) ($data['form_type'] ?? 'Website Form');
    $name = (string) ($data['name'] ?? '');
    $email = (string) ($data['email'] ?? '');
    $phone = (string) ($data['phone'] ?? '');
    $message = (string) ($data['message'] ?? '');
    $country = (string) ($data['country'] ?? '');
    $rating = isset($data['rating']) ? (int) $data['rating'] : null;

    $isFeedback = stripos($formType, 'feedback') !== false;
    $prefix = $isFeedback ? 'Feedback' : 'Contact';
    $subject = "[{$prefix}] New submission from {$name}";

    if ($isFeedback && $rating !== null && $rating > 0) {
        $stars = str_repeat('★', min(5, max(1, $rating))) . str_repeat('☆', 5 - min(5, max(1, $rating)));
        $subject = "[Feedback] {$rating}/5 ({$stars}) from {$name}";
    }

    $tz = new DateTimeZone('Asia/Kolkata');
    $submittedAt = (new DateTime('now', $tz))->format('d M Y, h:i A T');

    $rows = [
        'Form Type' => $formType,
        'Name' => $name,
        'Email' => $email ?: '(not provided)',
        'Phone' => $phone,
        'Submitted At' => $submittedAt,
    ];

    if ($country !== '') {
        $rows['Country of Interest'] = $country;
    }
    if ($rating !== null && $rating > 0) {
        $rows['Rating'] = (string) $rating . ' / 5';
    }
    if ($message !== '') {
        $rows['Message'] = $message;
    }

    $plainLines = ["New {$prefix} form submission on europecalling.co", ''];
    $htmlRows = '';
    foreach ($rows as $label => $value) {
        $escapedLabel = htmlspecialchars($label, ENT_QUOTES, 'UTF-8');
        $escapedValue = nl2br(htmlspecialchars($value, ENT_QUOTES, 'UTF-8'));
        $plainLines[] = "{$label}: {$value}";
        $htmlRows .= "<tr><td style=\"padding:8px 12px;border:1px solid #eee;font-weight:600;color:#555;\">{$escapedLabel}</td>"
            . "<td style=\"padding:8px 12px;border:1px solid #eee;\">{$escapedValue}</td></tr>";
    }
    $plainBody = implode("\n", $plainLines);

    $htmlBody = '<!DOCTYPE html><html><body style="font-family:Arial,sans-serif;color:#222;">'
        . '<h2 style="color:#FF7700;">' . htmlspecialchars($prefix, ENT_QUOTES, 'UTF-8') . ' Form</h2>'
        . '<table style="border-collapse:collapse;width:100%;max-width:600px;">' . $htmlRows . '</table>'
        . '</body></html>';

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = $gmailUser;
        $mail->Password = preg_replace('/\s+/', '', $gmailPass);
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
        $mail->CharSet = PHPMailer::CHARSET_UTF8;

        $mail->setFrom($gmailUser, 'Europe Calling Website');
        $mail->addAddress($notifyTo);

        if ($email !== '' && filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $mail->addReplyTo($email, $name);
        }

        $mail->Subject = $subject;
        $mail->Body = $htmlBody;
        $mail->AltBody = $plainBody;
        $mail->isHTML(true);

        $mail->send();
        return ['ok' => true, 'message' => 'Email sent'];
    } catch (Exception $e) {
        error_log('Form email failed: ' . $mail->ErrorInfo);
        return ['ok' => false, 'message' => 'Failed to send email'];
    }
}
