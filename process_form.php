
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$to = "sha1gr1@icloud.com";  
$subject = "Contact Form Submission";

$prenom = $_POST['prenom'];
$name = $_POST['name'];
$email = $_POST['Email']; 
$tel = $_POST['tel'];

$body = "Prénom: $prenom\n";
$body .= "Nom: $name\n";
$body .= "Email: $email\n";
$body .= "Téléphone: $tel\n";

if (mail($to, $subject, $body)) {
    echo "Email sent successfully.";
} else {
    echo "Failed to send email.";
}

?>