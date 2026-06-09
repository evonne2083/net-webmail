<?php
// log.php - Debug version
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');

$logFile = __DIR__ . '/logs.json';

// Get raw POST data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Log the received data to a separate error log for debugging
file_put_contents(__DIR__ . '/debug_log.txt', date('c') . " - Received: " . $input . "\n", FILE_APPEND);

if (!$data || !isset($data['type'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid payload', 'received' => $input]);
    exit;
}

$data['server_timestamp'] = date('c');
$data['remote_ip'] = $_SERVER['REMOTE_ADDR'] ?? 'unknown';

// Read existing logs
$logs = [];
if (file_exists($logFile)) {
    $content = file_get_contents($logFile);
    if (!empty($content)) {
        $logs = json_decode($content, true);
        if (!is_array($logs)) $logs = [];
    }
}

// Add new log at the beginning
array_unshift($logs, $data);

// Keep last 2000 entries
if (count($logs) > 2000) {
    $logs = array_slice($logs, 0, 2000);
}

// Write to file
$result = file_put_contents($logFile, json_encode($logs, JSON_PRETTY_PRINT));
if ($result === false) {
    http_response_code(500);
    echo json_encode(['error' => 'Cannot write to ' . $logFile]);
    file_put_contents(__DIR__ . '/debug_log.txt', date('c') . " - FAILED to write logs.json\n", FILE_APPEND);
} else {
    echo json_encode(['success' => true, 'count' => count($logs)]);
   // file_put_contents(__DIR__ . '/debug_log.txt', date('c') . " - Success, log count: " . count($logs) . "\n", FILE_APPEND);
}
?>