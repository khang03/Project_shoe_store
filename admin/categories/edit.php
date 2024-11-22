<?php
require_once '../../config/database.php';

if(isset($_SESSION['id']) && $_SESSION['role'] ==0 ){
    if (isset($_GET['id'])) {
        $id = $_GET['id'];       
        $categoryModel = new Category();
        $category = $categoryModel->getCategory($id);
    }
    $tempale = new Template();       
    $data = [
        'title' => 'Thêm Sản Phẩm',
        'slot' => $tempale->render('categories/edit-category',['category' => $category])
    ];
    $tempale->view('layout-admin',$data);
}else
{
    header('location: http://localhost/DoAnBe1/login.php');
}