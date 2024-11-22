<?php
require_once '../../config/database.php';
if(isset($_SESSION['id']) && $_SESSION['role'] ==0 ){
    $template = new Template();

    $category = new Category();
    $categories  = $category ->getAllCategories(); 
    $data = [
        'title' => 'Trang Chỉnh sửa sản phẩM',
        'slot'  => $template->render('products/create-product', ['categories' => $categories] )
    ];
    $template->view('layout-admin', $data);
}else
{
    header('location: http://localhost/DoAnBe1/login.php');
}