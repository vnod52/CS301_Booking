
<?php

require_once('PHPMailer/PHPMailerAutoload.php');
$mail = new PHPMailer();
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'ssl';
$mail->Host = 'smtp.gmail.com';
$mail->Port = '465';
$mail->isHTML();
$mail->Username = 'vnod52@gmail.com';
$mail->Password = 'Skyline@2018';
$mail->SetFrom('no-reply@campbell.co.nz');
$mail->Subject = 'Hello World';
$mail->Body = 'Test email body';
$mail->AddAddress('vnod52@gmail.com');

$mail->Send();
?>
