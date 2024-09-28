<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $prenom = $_POST['prenom'];
    $nom = $_POST['name'];
    $tel = $_POST['tel'];
    $email = $_POST['Email'];
    $date = $_POST['date'];
    $cartDetails = $_POST['cartDetails'];  // The cart items

    // Email settings
    $to = "temenirnomando44@icloud.com";  // Replace with your email
    $subject = "Nouvelle commande de " . $prenom . " " . $nom;
    $headers = "From: " . $email . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Build the message
    $message = "
    <html>
    <body>
        <h1>Nouvelle commande de " . $prenom . " " . $nom . "</h1>
        <p><strong>Prénom:</strong> " . $prenom . "</p>
        <p><strong>Nom:</strong> " . $nom . "</p>
        <p><strong>Téléphone:</strong> " . $tel . "</p>
        <p><strong>Email:</strong> " . $email . "</p>
        <p><strong>Date de commande:</strong> " . $date . "</p>
        <h2>Détails du panier:</h2>
        " . $cartDetails . "
    </body>
    </html>
    ";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Email envoyé avec succès.";
    } else {
        echo "L'envoi de l'email a échoué.";
    }
}
?>
