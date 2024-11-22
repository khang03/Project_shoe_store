<?php
require_once '../../config/database.php';
$productName = '';
$productPrice = '';
$productDes = '';
$productImg = '';

$categoriesId = [];

if (isset($_POST['productName'])) {
    $productName = $_POST['productName'];
}
if (isset($_POST['productPrice'])) {
    $productPrice = $_POST['productPrice'];
}
if (isset($_POST['productDes'])) {
    $productDes = $_POST['productDes'];
}
if (isset($_FILES['productImg'])) {
    $productImg = $_FILES['productImg']['name'];
}

if (isset($_POST['categoriesId'])) {
    $categoriesId = $_POST['categoriesId'];
}



if(!empty($productName) && !empty($productPrice) && !empty($productDes) && !empty($productImg) && !empty($categoriesId)) {
    $productModel = new Product();
    // Xử lí tên hình ảnh thành thời gian 
    $targetName = time() . '.' . pathinfo($_FILES['productImg']['name'], PATHINFO_EXTENSION);
    // Nơi lưu hình ảnh
    $target = '../../public/images/' . $targetName;

    if (is_uploaded_file($_FILES['productImg']['tmp_name']) && move_uploaded_file($_FILES['productImg']['tmp_name'], $target)) {
        if($productModel->store($_POST['productName'], $_POST['productPrice'], $_POST['productDes'], $targetName, $categoriesId)) {           
            header('location: http://localhost/DoAnBe1/admin/index.php');
        }
    }
}else{
    $_SESSION['err'] = 'vui lòng nhập đủ thông tin';
    header('location: http://localhost/DoAnBe1/admin/products/create.php');
}