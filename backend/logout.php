<?php
session_start();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");


$_SESSION['mor']=1234;

print_r($_SESSION['mor']);

if (isset($_GET['logout'])) {


    // session_destroy();

    return true;
}