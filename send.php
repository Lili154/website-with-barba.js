<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST["message"]));

    $mail = new PHPMailer();

    try {
        $mail->isSMTP();
        $mail->Host = 'sandbox.smtp.mailtrap.io';
        $mail->SMTPAuth = true;
        $mail->Username = '6acefede39bd62';
        $mail->Password = '0895f8b5d934ec';
        $mail->Port = 2525;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;




        $mail->setFrom($email, $name);
        $mail->addAddress('petrosyanlilit895@gmail.com');
        $mail->Subject = "New message from Nobi Hotel website";
        $mail->Body    = "Name: $name\nEmail: $email\n\nMessage:\n$message";

        $mail->send();
        header("Location: contacts.html?success=1");
    } catch (Exception $e) {
        header("Location: contacts.html?error=mail_failed");
    }
    exit;
} else {
    header("Location: contacts.html?error=invalid_request");
    exit;
}
