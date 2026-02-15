<?php
/**
 * Verify admin token - include this in protected endpoints
 * Returns user_id if valid, exits with 401 otherwise
 */
require_once __DIR__ . '/config.php';

function verifyAdminToken(): ?int {
    $auth = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
    if (!preg_match('/^Bearer\s+(.+)$/i', $auth, $m)) {
        return null;
    }
    $token = trim($m[1]);

    $pdo = getDbConnection();
    $stmt = $pdo->prepare("
        SELECT s.user_id FROM admin_sessions s
        JOIN admin_users u ON u.id = s.user_id
        WHERE s.token = ? AND s.expires_at > NOW()
    ");
    $stmt->execute([$token]);
    $row = $stmt->fetch();
    return $row ? (int)$row['user_id'] : null;
}
