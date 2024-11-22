<?php

require_once 'config/database.php';
$wishlistModel = new Wishlist();

//Kiểm tra người dùng đã đăng nhập hay chưa , nếu đăng nhập thì lấy session id để đăng xuất và đăng nhập
if(isset($_SESSION['id']) && $_SESSION['role'] ==1 ){
    $id_user = $_SESSION['id'];
    //$_SESSION['id'] là id của user 

    $ProductModel = new Product();
    if (isset($_POST['id'])) {
        $id_product = $_POST['id'];
        
         $wishlist = $wishlistModel->addProductWishlist($id_user,$id_product);
         
    }else{

    }
     $products = $ProductModel->getProductWishlistByIdUser($id_user);
    
    
}else{
    $products = [];
    header('location: http://localhost:/DoAnBe1/login.php');
}

//kiểm tra xem id của sản phẩm đã tồn tại chưa và sau đó thực hiện xoá sản phẩm trong danh mục yêu thích
if(isset($_GET['id'])){
    $id = $_GET['id'];
    
    $delWish = $wishlistModel -> deleteProductWishlist($id);
    
}

$template = new Template();
$data = [
    'title' => 'Trang home',
    'slot'  => $template->render('wish-sub',['products' => $products] ) 
];
$template->view('layout', $data);