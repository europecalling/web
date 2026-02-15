<?php
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/cors.php';
require_once __DIR__ . '/verify-auth.php';

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$pdo = getDbConnection();

try {
    switch ($method) {
        case 'GET':
            // Public - list all gallery items
            $stmt = $pdo->query("SELECT id, title, location, category, image_url, sort_order, created_at FROM galleries ORDER BY sort_order ASC, id DESC");
            $items = $stmt->fetchAll();
            echo json_encode(['success' => true, 'data' => $items]);
            break;

        case 'POST':
            $userId = verifyAdminToken();
            if (!$userId) {
                http_response_code(401);
                echo json_encode(['success' => false, 'message' => 'Unauthorized']);
                exit;
            }
            $input = json_decode(file_get_contents('php://input'), true) ?: [];
            $title = trim($input['title'] ?? '');
            $location = trim($input['location'] ?? '');
            $category = trim($input['category'] ?? 'all');
            $imageUrl = trim($input['image_url'] ?? '');
            if (empty($title) || empty($imageUrl)) {
                http_response_code(400);
                echo json_encode(['success' => false, 'message' => 'Title and image_url are required']);
                exit;
            }
            $stmt = $pdo->prepare("INSERT INTO galleries (title, location, category, image_url) VALUES (?, ?, ?, ?)");
            $stmt->execute([$title, $location, $category, $imageUrl]);
            $id = $pdo->lastInsertId();
            $stmt = $pdo->prepare("SELECT id, title, location, category, image_url, sort_order, created_at FROM galleries WHERE id = ?");
            $stmt->execute([$id]);
            echo json_encode(['success' => true, 'data' => $stmt->fetch()]);
            break;

        case 'PUT':
            $userId = verifyAdminToken();
            if (!$userId) {
                http_response_code(401);
                echo json_encode(['success' => false, 'message' => 'Unauthorized']);
                exit;
            }
            $id = (int)($_GET['id'] ?? 0);
            if (!$id) {
                http_response_code(400);
                echo json_encode(['success' => false, 'message' => 'ID required']);
                exit;
            }
            $input = json_decode(file_get_contents('php://input'), true) ?: [];
            $title = trim($input['title'] ?? '');
            $location = trim($input['location'] ?? '');
            $category = trim($input['category'] ?? 'all');
            $imageUrl = trim($input['image_url'] ?? '');
            $sortOrder = isset($input['sort_order']) ? (int)$input['sort_order'] : null;
            if (empty($title) || empty($imageUrl)) {
                http_response_code(400);
                echo json_encode(['success' => false, 'message' => 'Title and image_url are required']);
                exit;
            }
            $updates = ['title' => $title, 'location' => $location, 'category' => $category, 'image_url' => $imageUrl];
            if ($sortOrder !== null) {
                $updates['sort_order'] = $sortOrder;
            }
            $set = implode(', ', array_map(fn($k) => "$k = ?", array_keys($updates)));
            $values = array_values($updates);
            $values[] = $id;
            $stmt = $pdo->prepare("UPDATE galleries SET $set WHERE id = ?");
            $stmt->execute($values);
            $stmt = $pdo->prepare("SELECT id, title, location, category, image_url, sort_order, created_at FROM galleries WHERE id = ?");
            $stmt->execute([$id]);
            echo json_encode(['success' => true, 'data' => $stmt->fetch()]);
            break;

        case 'DELETE':
            $userId = verifyAdminToken();
            if (!$userId) {
                http_response_code(401);
                echo json_encode(['success' => false, 'message' => 'Unauthorized']);
                exit;
            }
            $id = (int)($_GET['id'] ?? 0);
            if (!$id) {
                http_response_code(400);
                echo json_encode(['success' => false, 'message' => 'ID required']);
                exit;
            }
            $stmt = $pdo->prepare("DELETE FROM galleries WHERE id = ?");
            $stmt->execute([$id]);
            echo json_encode(['success' => true, 'message' => 'Deleted']);
            break;

        default:
            http_response_code(405);
            echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Server error: ' . $e->getMessage()]);
}
