<?php
require_once '../../config/database.php';
if(isset($_SESSION['id']) && $_SESSION['role'] ==0 ){
    $template = new Template();
    $categoryModel = new Category();
    $categories = $categoryModel->getAllCategories();

    $data = [
        'title' => 'Tạo Danh Mục',
        'slot' => $template->render('categories/create-category',['categories'=>$categories])
    ];
    $template->view('layout-admin',$data);
}else{
    header('location: http://localhost/DoAnBe1/login.php');
}