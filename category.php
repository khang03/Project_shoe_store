<?php
require_once 'config/database.php';
$productModel = new Product();


    
    
if(isset($_GET['id'])){
    $id = $_GET['id'];

    $ProductModel = new Product();
    $products = $ProductModel->getProductsByCategory($id);
}


$template = new Template();
$data = [
    'title' => 'Trang danh mục',
    'slot'  => $template->render('product-category', ['products' => $products,
                                                    
    ] )
];
$template->view('layout', $data);