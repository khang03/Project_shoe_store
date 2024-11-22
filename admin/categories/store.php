<?php
require_once '../../config/database.php';
$productName = '';
$categoriesId = [];

if (isset($_POST['categoryName'])) {
    $categoryName = $_POST['categoryName'];
}
if (isset($_POST['categoryType'])) {
    $categoryType = $_POST['categoryType'];
}

if (isset($_POST['categoriesId'])) {
    $categoriesId = $_POST['categoriesId'];
}



if(!empty($categoryName) && !empty($categoryType)) {
    $categoriesModel = new Category();
    $category = $categoriesModel->store($categoryName,$categoryType);
    header('location: http://localhost/DoAnBe1/admin/categories/create.php');
}else{
    $_SESSION['err'] = 'vui lòng nhập đủ thông tin';
    header('location: http://localhost/DoAnBe1/admin/categories/create.php');
}