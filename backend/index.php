<?php session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
include './database/db_connection.php';

$class = new db_connection;
$conn = $class->connect();

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $sql = " SELECT * FROM users";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        if (isset($path[4]) && is_numeric($path[4])) {

            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[4]);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
            // working line
            echo json_encode($users);
        } else {

            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            // isset($_SESSION['idUsuario']) ? print_r($_SESSION['idUsuario']): print_r('no existe');
            // echo $_SESSION['idUsuario'];
            echo json_encode($users);
        }
        break;
    case 'POST':
        $user = json_decode(file_get_contents('php://input'));
        var_dump($user, "vardump");
        $sql = "INSERT INTO users (id, name, email,password, mobile, create_at) VALUES (null, :name, :email,:password, :mobile, :create_at)";
        $stmt = $conn->prepare($sql);
        $created_at = date('Y-m-d');
        $stmt->bindParam(':name', $user->name);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':mobile', $user->mobile);
        $stmt->bindParam(':password', password_hash($user->password, PASSWORD_DEFAULT));
        // $stmt->bindParam(':password', $user->password);
        $stmt->bindParam(':create_at', $created_at);

        if ($stmt->execute()) {

            $response = ['status' => 1, 'message' => 'Record created successfully'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record'];
        }

        break;

    case 'PUT':

        $user = json_decode(file_get_contents('php://input'));

        if ($user->password != '' && $user->repeat_password != '') {

            $sql = "UPDATE users SET  name =:name, email =:email,password =:password, mobile =:mobile, update_at=:update_at  WHERE id =:id";
            $stmt = $conn->prepare($sql);

            $update_at = date('Y-m-d');
            $stmt->bindParam(':id', $user->id);
            $stmt->bindParam(':name', $user->name);
            $stmt->bindParam(':email', $user->email);
            $stmt->bindParam(':password', password_hash($user->password, PASSWORD_DEFAULT));
            $stmt->bindParam(':mobile', $user->mobile);
            $stmt->bindParam(':update_at', $update_at);

            if ($stmt->execute()) {

                $response = ['status' => 1, 'message' => 'Record updated successfully'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record'];
            }
        } else {

            $sql = "UPDATE users SET  name =:name, email =:email, mobile =:mobile, update_at=:update_at  WHERE id =:id";
            $stmt = $conn->prepare($sql);

            $update_at = date('Y-m-d');
            $stmt->bindParam(':id', $user->id);
            $stmt->bindParam(':name', $user->name);
            $stmt->bindParam(':email', $user->email);
            $stmt->bindParam(':mobile', $user->mobile);
            $stmt->bindParam(':update_at', $update_at);

            if ($stmt->execute()) {

                $response = ['status' => 1, 'message' => 'Record updated successfully'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record'];
            }
        }
        echo json_encode($response);

        break;

    case 'DELETE':

        $getArrayURL = explode("/", $_SERVER['REQUEST_URI']);
        $getId = $getArrayURL[4];
        $sql = "DELETE FROM users WHERE id=:id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $getId);

        if ($stmt->execute()) {

            $response = ['status' => 1, 'message' => 'Record deleted successfully'];
        } else {

            $response = ['status' => 0, 'message' => 'Failed to delete record'];
        }

        echo json_encode($response);

        break;
}
