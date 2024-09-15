<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $prenom = htmlspecialchars($_POST['prenom']);
    $nom = htmlspecialchars($_POST['name']);
    $telephone = htmlspecialchars($_POST['tel']);
    $email = htmlspecialchars($_POST['Email']);
    $date = htmlspecialchars($_POST['date']);
    $cartDetails = htmlspecialchars($_POST['cartDetails']); // Get the cart details

    // Email subject and body
    $subject = "New Form Submission with Cart Details";
    $body = "
        Prénom: $prenom<br>
        Nom: $nom<br>
        Téléphone: $telephone<br>
        E-mail: $email<br>
        Date: $date<br>
        <br>
        Détails du panier:<br>
        $cartDetails
    ";

    // Recipient email address (your email)
    $to = "sha1gr1@icloud.com"; // Change to your email address

    // Headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n"; // Allow HTML content

    // Send email and check for success
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message sending failed!";
        error_log("Email failed to send. Check your mail server configuration.");
    }
}
?>
