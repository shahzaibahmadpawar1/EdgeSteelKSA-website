<?php
/**
 * Edge Steel KSA — Contact Form API
 * Place this file at: /public/api/contact.php
 * Or serve via a separate PHP server and proxy with Next.js rewrites.
 *
 * Accepts: POST application/json
 * Returns: application/json { success: bool, message: string }
 */

declare(strict_types=1);

// ── Security headers ──────────────────────────────────────────────────────────
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');

// ── CORS (tighten origin in production) ───────────────────────────────────────
$allowedOrigin = getenv('ALLOWED_ORIGIN') ?: 'https://edgesteelksa.com';
header("Access-Control-Allow-Origin: {$allowedOrigin}");
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// ── Parse JSON body ───────────────────────────────────────────────────────────
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

if (json_last_error() !== JSON_ERROR_NONE || !is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON body']);
    exit;
}

// ── Input validation ──────────────────────────────────────────────────────────
$errors = [];

$name    = trim($data['name']    ?? '');
$company = trim($data['company'] ?? '');
$email   = trim($data['email']   ?? '');
$phone   = trim($data['phone']   ?? '');
$service = trim($data['service'] ?? '');
$message = trim($data['message'] ?? '');

if (strlen($name) < 2) {
    $errors[] = 'Name is required (min 2 characters).';
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'A valid email address is required.';
}

if (strlen($message) < 10) {
    $errors[] = 'Message must be at least 10 characters.';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => implode(' ', $errors)]);
    exit;
}

// ── Sanitise for email output (prevent header injection) ─────────────────────
$safeName    = htmlspecialchars($name,    ENT_QUOTES, 'UTF-8');
$safeCompany = htmlspecialchars($company, ENT_QUOTES, 'UTF-8');
$safeEmail   = htmlspecialchars($email,   ENT_QUOTES, 'UTF-8');
$safePhone   = htmlspecialchars($phone,   ENT_QUOTES, 'UTF-8');
$safeService = htmlspecialchars($service, ENT_QUOTES, 'UTF-8');
$safeMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// ── Build email ───────────────────────────────────────────────────────────────
$toEmail   = getenv('CONTACT_EMAIL') ?: 'info@edgesteelksa.com';
$fromEmail = 'noreply@edgesteelksa.com';

$subject = "New Quote Request from {$safeName}";

$body = <<<EOT
New contact form submission — Edge Steel KSA
=============================================

Name:     {$safeName}
Company:  {$safeCompany}
Email:    {$safeEmail}
Phone:    {$safePhone}
Service:  {$safeService}

Message:
{$safeMessage}

---
Submitted: {$_SERVER['REQUEST_TIME']}
EOT;

// RFC 2822 compliant headers — newlines stripped to prevent injection
$headers  = "From: Edge Steel KSA Website <{$fromEmail}>\r\n";
$headers .= "Reply-To: {$safeEmail}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: EdgeSteelKSA-PHP\r\n";

// ── Send ──────────────────────────────────────────────────────────────────────
$sent = mail($toEmail, $subject, $body, $headers);

if ($sent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => "Thank you, {$safeName}. We've received your request and will respond within 24 hours.",
    ]);
} else {
    // Log the failure server-side (never expose internal details to client)
    error_log("Edge Steel KSA: mail() failed for submission from {$safeEmail}");
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send your request. Please email us directly at info@edgesteelksa.com.',
    ]);
}
