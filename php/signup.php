<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST');  
include("functions.php");

if( isset($_POST['email']) && isset($_POST['username']) && isset($_POST['password'])){
	
$email = $_POST['email'];
$username = $_POST['username'];
$password = $_POST['password'];
echo signup($email,$username,$password);

}
?>