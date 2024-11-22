<?php

require_once 'config/database.php';

$page = 1;
$perPage = 4;
$currentPage = 1;


$template = new Template();
$productModel = new Product();
$total = $productModel->getToTal();

$pages = ceil($total / $perPage);
$products = $productModel->getProductsByPage($page, $perPage);
    

if (isset($_GET['page'])) {
    $page = $_GET['page'];
    $currentPage = isset($_GET['page']) ? (int)$_GET['page'] : 1;
    $products = $productModel->getProductsByPage($page, $perPage);


    if ($currentPage < 1) {
        $currentPage = $page + 1;
    } else if ($currentPage > $pages) {
        $currentPage = $pages - 1;
    }
}
// if(isset($_COOKIE['recentView'])){

//     $recentProducts = $productModel -> getProductsByIds(json_decode($_COOKIE["recentView"]));   
// }

$data = [
    'title' => 'Tất cả sản phẩm',
    'slot'  => $template->render('product-list', [
        'products' => $products,
        'perPage' =>  $perPage,
        'total' =>  $total,
        'currentPage' => $currentPage,
        'pages' => $pages
    ])
    // $template->render('product-recentView', ['recentProducts' => $recentProducts] )
];
$template->view('layout', $data);
