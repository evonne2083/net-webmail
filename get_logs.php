<?php
$adminPassword = 'admin123';

header('Content-Type: application/json');

$provided = trim($_REQUEST['password'] ?? '');
if ($provided !== $adminPassword) {
    http_response_code(403);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

$logFile = __DIR__ . '/logs.json';
if (!file_exists($logFile)) {
    echo json_encode([]);
    exit;
}
$content = file_get_contents($logFile);
$logs = json_decode($content, true);
if (!is_array($logs)) $logs = [];
echo json_encode($logs);
?>