<?php 

$name = $_POST['name'];
$url = $_POST['url'];
$email = $_POST['email'];
$text = $_POST['text'];


require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'vito.scalepta@gmail.com';                 // Наш логин
$mail->Password = 'ydyhzecogafrnpjk';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->SetFrom('vito.scalepta@gmail.ru', 'Gorm');   // От кого письмо 
$mail->addAddress('ildarastana@mail.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Name: ' . $name . ' <br>
	Email: ' . $email . ' <br>
	Website: ' . $url . '<br>
	Messages: ' . $text . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>