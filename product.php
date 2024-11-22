<?php

require_once 'config/database.php';

$template = new Template();

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $productModel = new Product();
    $product = $productModel->getProductById($id);

    //Tạo mảng recentView
    $recentView = [];

    if(isset($_COOKIE['recentView'])){
        $recentView = json_decode($_COOKIE['recentView']);

        //kiểm tra id đã có trong mảng chưa
        if(!in_array($id, $recentView)){
            if(count($recentView) >= 4){
                array_shift($recentView);
            }
            array_push($recentView,$id);
        }
    }else{
        array_push($recentView, $id);
    }


    
    
    setcookie('recentView' , json_encode($recentView), time() + 3600 * 24);

    

}



$data = [
    'title' => $product['name'],
    'slot'  => $template->render('product-detail',['product' => $product] ) 
];
$template->view('layout', $data);