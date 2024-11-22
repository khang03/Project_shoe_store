<?php
require_once '../../config/database.php';

if(isset($_POST['id'])){
    $id = $_POST['id'];
    $productModel = new Product();
    if($productModel -> destroy($id)){
        $_SESSION['alert'] = 'Deleted Successfully';

    }else {
        $_SESSION['alert'] = 'Deleted failed!!!';
    }
    header('location: http://localhost/DoAnBe1/admin/index.php');
}