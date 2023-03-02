<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "modal";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {

    die("Sorry we failed to connect: " . mysql_connect_error());
} else {
    echo "( Connection was successful )";

}
if (isset($_POST['contact'])) {
    $first_name = mysqli_real_escape_string($conn, $_POST['first_name']);
    $last_name = mysqli_real_escape_string($conn, $_POST['last_name']);
    $phone = mysqli_real_escape_string($conn, $_POST['phone']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $appointment_day = mysqli_real_escape_string($conn, $_POST['appointment_day']);
    $appointment_time = mysqli_real_escape_string($conn, $_POST['appointment_time']);
    $issue = mysqli_real_escape_string($conn, $_POST['issue']);

    $query = $conn->query("INSERT INTO `modal_data`(`first_name`, `last_name`, `phone`, `email`, `appointment_day`, `appointment_time`, `issue`) VALUES ('$first_name','$last_name','$phone','$email','$appointment_day','$appointment_time','$issue')");


    if ($query) {
        header('Location: index.html');
    }
}


?>