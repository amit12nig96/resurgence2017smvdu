<?php
$hostname = "localhost";
$username = "resurgence";
$pass = "123resurgence";
$database = "resurgence";
$connect = mysqli_connect($hostname, $username, $pass, $database, "3306");
if (!$connect) {
    die("Connection failed: " . mysqli_connect_error());
}
?> 