<?php
/**
 * Edge Steel KSA — Contact Form API
 */
declare(strict_types=1);

// 1. Load PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require __DIR__ . '/phpmailer/src/Exception.php';
require __DIR__ . '/phpmailer/src/PHPMailer.php';
require __DIR__ . '/phpmailer/src/SMTP.php';

// 2. Security & CORS Headers
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *"); 
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// 3. Parse Input
$data = $_POST;
$name    = trim($data['name']    ?? '');
$email   = trim($data['email']   ?? '');
$company = trim($data['company'] ?? '');
$phone   = trim($data['phone']   ?? '');
$service = trim($data['service'] ?? '');
$message = trim($data['message'] ?? '');

$mail = new PHPMailer(true);

try {
    // 4. ENABLE DEBUGGING HERE
    $mail->SMTPDebug = 2; 
    $mail->Debugoutput = function($str, $level) {
        error_log("SMTP DEBUG: $str"); // Also saves to cPanel error_log
        echo "$str\n";                // Sends to browser Network tab
    };

    // 5. SMTP Settings
    $mail->isSMTP();
    $mail->Host       = 'mail.edgesteelksa.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@edgesteelksa.com';
    $mail->Password   = 'wSq@7qnYs7VAmmvS'; 
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    // 6. Recipients
    $mail->setFrom('info@edgesteelksa.com', 'Edge Steel Website');
    $mail->addAddress('info@edgesteelksa.com');
    $mail->addReplyTo($email, $name);

    // 7. Content
    $mail->isHTML(true);
    $mail->Subject = "New Quote Request from " . htmlspecialchars($name);
    $mail->Body    = "<h3>Contact Details</h3>
                      <p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>
                      <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
                      <p><strong>Company:</strong> " . htmlspecialchars($company) . "</p>
                      <p><strong>Phone:</strong> " . htmlspecialchars($phone) . "</p>
                      <p><strong>Service Required:</strong> " . htmlspecialchars($service) . "</p>
                      <p><strong>Message:</strong><br>" . nl2br(htmlspecialchars($message)) . "</p>";

    // 8. Attachment
    if (isset($_FILES['attachment']) && $_FILES['attachment']['error'] === UPLOAD_ERR_OK) {
        $mail->addAttachment($_FILES['attachment']['tmp_name'], $_FILES['attachment']['name']);
    }

    $mail->send();

    echo json_encode(['success' => true, 'message' => 'Sent successfully']);

} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => $mail->ErrorInfo]);
}