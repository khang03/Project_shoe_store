<?php
require_once '../../config/database.php';

if(isset($_SESSION['id']) && $_SESSION['role'] ==0 ){
    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        $productModel = new Product();
        $product = $productModel->getProductAndCategoriesID($id);
        $categoryModel = new Category();
        $cagories = $categoryModel->getAllCategories();
    }
    $tempale = new Template();
    
    
    $data = [
        'title' => 'Thêm Sản Phẩm',
        'slot' => $tempale->render('products/edit-product',['categories' => $cagories, 
                                                            'product' => $product])
    ];
    $tempale->view('layout-admin',$data);
}else
{
    header('location: http://localhost/DoAnBe1/login.php');
}