<?php
/**
 * Deploy to public_html/web/submit-form.php (https://web.europecalling.co/submit-form.php)
 *
 * Requires the api/ folder next to this file:
 *   web/api/send-form-email.php, mail.php, cors.php, vendor/
 */
$handlers = [
    __DIR__ . '/api/send-form-email.php',
    __DIR__ . '/send-form-email.php',
];

foreach ($handlers as $handler) {
    if (is_file($handler)) {
        require $handler;
        exit;
    }
}

require_once __DIR__ . '/api/cors.php';
header('Content-Type: application/json');
http_response_code(500);
echo json_encode([
    'status' => 'error',
    'message' => 'Form API not installed. Upload the api/ folder to web/api/.',
]);
