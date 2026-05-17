<?php
/**
 * Public endpoint: send Contact / Feedback form notifications via Gmail SMTP.
 */
require_once __DIR__ . '/cors.php';
require_once __DIR__ . '/mail.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
    exit;
}

$secret = mailConfig('FORM_NOTIFY_SECRET');
if ($secret) {
    $provided = $_SERVER['HTTP_X_FORM_SECRET'] ?? '';
    if (!hash_equals($secret, $provided)) {
        http_response_code(403);
        echo json_encode(['status' => 'error', 'message' => 'Forbidden']);
        exit;
    }
}

$input = json_decode(file_get_contents('php://input'), true);
if (!is_array($input)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid JSON body']);
    exit;
}

$name = trim((string) ($input['name'] ?? ''));
$phone = trim((string) ($input['phone'] ?? ''));
$email = trim((string) ($input['email'] ?? ''));
$message = trim((string) ($input['message'] ?? ''));
$formType = trim((string) ($input['form_type'] ?? 'Website Form'));
$country = trim((string) ($input['country'] ?? ''));
$rating = isset($input['rating']) ? (int) $input['rating'] : null;

if ($name === '' || $phone === '') {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Name and phone are required']);
    exit;
}

if (mb_strlen($name) > 200) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Name is too long']);
    exit;
}
if (mb_strlen($phone) > 50) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Phone is too long']);
    exit;
}
if (mb_strlen($email) > 254) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Email is too long']);
    exit;
}
if (mb_strlen($message) > 5000) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Message is too long']);
    exit;
}
if (mb_strlen($country) > 100) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Country is too long']);
    exit;
}
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid email address']);
    exit;
}

$allowedTypes = ['Contact Us Form', 'Feedback Form'];
if (!in_array($formType, $allowedTypes, true)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid form type']);
    exit;
}

$result = sendFormNotificationEmail([
    'form_type' => $formType,
    'name' => $name,
    'phone' => $phone,
    'email' => $email,
    'message' => $message,
    'country' => $country,
    'rating' => $rating,
]);

if (!$result['ok']) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => $result['message']]);
    exit;
}

echo json_encode(['status' => 'success', 'message' => $result['message']]);
