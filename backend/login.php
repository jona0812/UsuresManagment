<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

require("./database/db_connection.php");
$classDatabase = new db_connection;
$conn = $classDatabase->connect();

// Si es POST entra al login y si no es POST entra a logout

$data = json_decode(file_get_contents('php://input'));

if ($data->email && $data->password) {

    $query = "SELECT id,password FROM users where email = :email";
    $stm = $conn->prepare($query);
    $stm->bindParam(':email', $data->email);
    $stm->execute();
    // $userPassword = $stm->fetchColumn();
    $userPassword = $stm->fetch(PDO::FETCH_ASSOC);

    // Iniciar session
    $verify = password_verify($data->password, $userPassword['password']);

    if ($verify) {

        $_SESSION["jm"] = $userPassword['id'];

        $response = ['answer' => 1, 'message' => 'Credentials match'];
    } else {

        $response = ['answer' => 0, 'message' => 'Credentials not match'];
    }

    echo json_encode($response);
} else {

    return "Llene todos los campos ";
}
