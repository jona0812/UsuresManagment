<?php

session_start();

if (isset($_SESSION['idUsuario'])) {
    
    var_dump(($_SESSION['idUsuario']));

}