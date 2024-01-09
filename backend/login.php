<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

require("./database/db_connection.php");
$classDatabase = new db_connection;
$conn = $classDatabase->connect();

$data = json_decode(file_get_contents('php://input'));
// echo ($_POSTemail']);

if ($data->email && $data->password) {

    $query = "SELECT password FROM users where email = :email";
    $stm = $conn->prepare($query);
    $stm->bindParam(':email', $data->email);
    $stm->execute();
    $userPassword = $stm->fetchColumn();
    $verify = password_verify($data->password, $userPassword);

    if ($verify) {

        $response = ['answer' => 1, 'message' => 'Credentials fit'];
    } else {

        $response = ['answer' => 0, 'message' => 'Credentials not fit'];
    }

    echo json_encode($response);

} else {

    return "Llene todos los campos ";

}

exit();
