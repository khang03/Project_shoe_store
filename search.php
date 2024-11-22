<?php
require_once 'config/database.php';
$template = new Template();

$page = 1;
$perPage = 4;

if(isset($_GET['page'])) {
    $page = $_GET['page'];
}
if(isset($_GET['q'])){
    $keyword = $_GET['q'];
    $productModel = new Product();
    $products = $productModel -> search($keyword,$page,$perPage);
    $total = $productModel -> getToTalBySearch($keyword);
    
}



$data = [
    'title' => $keyword,
    'slot'  => $template->render('product-list', ['products' => $products,
                                                    'pages' => $pages,
                                                    'perPage' => $perPage,
                                                    'total' => $total,] )
];
$template->view('layout', $data);