<?php
require 'config/database.php';
$orderModel = new Order();
$cartModel = new Cart();
// Thanh toán đã đăng nhập
if (isset($_SESSION['id']) && $_SESSION['role'] == 1) {
    $id_user = $_SESSION['id'];
    // Lấy danh sách giỏ hàng của user
    $carts = $cartModel->getCartsByIdUser($id_user);
    
    // Xử lí thanh toán
    if (isset($_POST['thanhtoan'])) {
        $name = $_POST['name'];
        $tel = $_POST['tel'];
        $email = $_POST['email'];
        $address = $_POST['address'];
        $total = $_POST['total'];
        $codebill = 'TKSHOES'.rand(0,99999);
        if (!empty($name)&&!empty($tel)&&!empty($email)&&!empty($address)&&!empty($total)) {
            $idOrder = $orderModel->store($codebill,$total,$name,$tel,$email,$address,$id_user);

            foreach ($carts as $item) {
                $orderModel->storeOrderDetail($idOrder,$item['id_product'],$item['quantity'],$item['price']);               
            }
            $cartModel->deleteAllCart($id_user);
            $_SESSION['idOrder'] =$idOrder;
            
            header('location: http://localhost/DoAnBe1/payment.php');
        }else
        {
            $_SESSION['err'] = 'Vui lòng nhập thông tin ';
            header('location: http://localhost/DoAnBe1/cart.php');
        }                        
    }
    
}
else  // Thanh toán không đăng nhập
{
    if (isset($_POST['thanhtoan'])) {
        $name = $_POST['name'];
        $tel = $_POST['tel'];
        $email = $_POST['email'];
        $address = $_POST['address'];
        $total = $_POST['total'];
        $codebill = 'TKSHOES'.rand(0,99999);
        if (!empty($name)&&!empty($tel)&&!empty($email)&&!empty($address)&&!empty($total)) {
            $idOrder = $orderModel->store($codebill,$total,$name,$tel,$email,$address,'0');
            foreach ($_SESSION['giohang'] as $item) {
                $orderModel->storeOrderDetail($idOrder,$item[4],$item[3],$item[2]);
            }
            $_SESSION['idOrder'] =$idOrder;
            unset($_SESSION['giohang']);
            header('location: http://localhost/DoAnBe1/payment.php');
        }else
        {
            $_SESSION['err'] = 'Vui lòng nhập thông tin ';
            header('location: http://localhost/DoAnBe1/cart.php');
        }                        
    }
    
}