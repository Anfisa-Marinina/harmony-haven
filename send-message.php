<?php‍
if ($_SERVER["REQUEST_METHOD"] == "POST") {‍
    $name = htmlspecialchars($_POST["name"]);‍
    $email = htmlspecialchars($_POST["email"]);‍
    $message = htmlspecialchars($_POST["message"]);‍
‍
    // Tutaj można dodać dodatkowe działania, np. wysyłkę e-maila.‍
    echo "Thank you for your message, $name! We will contact you soon.";‍
} else {‍
    echo "I encountered an error while submitting the form.";‍
}‍
?>