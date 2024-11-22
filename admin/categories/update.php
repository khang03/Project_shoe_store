<?php
require_once '../../config/database.php';

$categoryModel = new Category();

if (isset($_POST['luu'])) {
    echo $categoryName = $_POST['categoryName'];
    echo $categoryType = $_POST['categoryType'];
    echo $idCate = $_POST['idCate'];
        
    

    if (!empty($_POST['categoryName']) && !empty($_POST['categoryType']) && !empty($idCate)){
        $categoryModel->update($categoryName,$categoryType,$idCate); 
        header('location: http://localhost/DoAnBe1/admin/categories/create.php');
    }
    
}




