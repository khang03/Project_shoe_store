<?php
require_once '../../config/database.php';
$categoriesId = [];
if (isset($_POST['categoriesId']) ) {
    $categoriesId = $_POST['categoriesId'];   
    
}
print_r($categoriesId);




if (!empty($_POST['productID']) && !empty($_POST['productName']) && !empty($_POST['productPrice']) && !empty($_POST['productDes']) && !empty($_POST['productImg'])) {
        $productModel = new Product();
        if($productModel->update($_POST['productID'],$_POST['productName'],$_POST['productPrice'],$_POST['productDes'],$_POST['productImg'],$categoriesId)) {           
            header('location: http://localhost/DoAnBe1/admin/index.php');
        }

    
}else
{
    echo "alert('Kiểm tra các giá trị chưa đúng')";
    
}