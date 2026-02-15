<?php
/**
 * One-time setup: creates tables and admin user (admin@gmail.com / admin123)
 * Run this once after deploying the API, then delete or protect this file
 */
require_once __DIR__ . '/config.php';

header('Content-Type: application/json');

try {
    $pdo = getDbConnection();

    $pdo->exec("
        CREATE TABLE IF NOT EXISTS admin_users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(255) NOT NULL UNIQUE,
            password_hash VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ");

    $pdo->exec("
        CREATE TABLE IF NOT EXISTS admin_sessions (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            token VARCHAR(255) NOT NULL UNIQUE,
            expires_at DATETIME NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES admin_users(id) ON DELETE CASCADE
        )
    ");

    $pdo->exec("
        CREATE TABLE IF NOT EXISTS galleries (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            location VARCHAR(255) DEFAULT NULL,
            category VARCHAR(100) DEFAULT 'all',
            image_url VARCHAR(500) NOT NULL,
            sort_order INT DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
    ");

    $pdo->exec("CREATE INDEX IF NOT EXISTS idx_galleries_category ON galleries(category)");

    $passwordHash = password_hash('admin123', PASSWORD_BCRYPT);
    $stmt = $pdo->prepare("INSERT IGNORE INTO admin_users (email, password_hash) VALUES (?, ?)");
    $stmt->execute(['admin@gmail.com', $passwordHash]);

    if ($stmt->rowCount() > 0) {
        echo json_encode(['success' => true, 'message' => 'Setup complete. Admin created: admin@gmail.com / admin123']);
    } else {
        echo json_encode(['success' => true, 'message' => 'Setup complete. Admin already exists.']);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Setup failed: ' . $e->getMessage()]);
}
