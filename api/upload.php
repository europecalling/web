<?php
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/cors.php';
require_once __DIR__ . '/verify-auth.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

if (!verifyAdminToken()) {
    http_response_code(401);
    echo json_encode(['success' => false, 'message' => 'Unauthorized']);
    exit;
}

if (!isset($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'No file uploaded or upload error']);
    exit;
}

$file = $_FILES['image'];
$ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));

if (!in_array($ext, ALLOWED_EXTENSIONS)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid file type. Allowed: ' . implode(', ', ALLOWED_EXTENSIONS)]);
    exit;
}

if ($file['size'] > UPLOAD_MAX_SIZE) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'File too large. Max 2MB']);
    exit;
}

$uploadDir = UPLOAD_DIR;
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

$filename = 'gallery_' . time() . '_' . bin2hex(random_bytes(4)) . '.' . $ext;
$path = $uploadDir . $filename;

if (!move_uploaded_file($file['tmp_name'], $path)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to save file']);
    exit;
}

$url = rtrim(API_BASE_URL, '/') . '/uploads/' . $filename;
echo json_encode(['success' => true, 'url' => $url, 'filename' => $filename]);
