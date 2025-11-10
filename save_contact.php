<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$servername = 'localhost'; 
$username = 'root'; 
$password = ''; 
$database = 'contact_page';

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("❌ Connection failed: " . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $subject, $message);
    $stmt->execute();

    echo "✅ Database connected successfully";

    $stmt->close();
    $conn->close();

    $file = "contacts.xls";  
    $data = "Name: $name | Email: $email | Subject: $subject | Message: $message\n";

    file_put_contents($file, $data, FILE_APPEND | LOCK_EX);

    header("Location: ../HTML_PAGES/contact_us.html");
    exit();
}

?>
