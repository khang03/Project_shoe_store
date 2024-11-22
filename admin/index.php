<?php
require_once '../config/database.php';

if(isset($_SESSION['id']) && $_SESSION['role'] ==0 ){

    $page = 1;
    $perPage = 4;

    if(isset($_GET['page'])) {
        $page = $_GET['page'];
    }
    $template = new Template();
    $productModel = new Product();
    $products = $productModel -> getProductsByPage($page,$perPage);
    $toTal = $productModel -> getToTal();

    $data = [
        'title' => 'Trang home admin',
        'slot'  => $template->render('products/index', ['products' => $products,
                                                        'perPage' =>  $perPage,
                                                        'toTal' =>  $toTal,
        ]  ) 

    ];
    $template->view('layout-admin', $data);
}else{
    header('location: http://localhost/DoAnBe1/login.php');
}
    