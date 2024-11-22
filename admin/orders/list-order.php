<?php
require_once '../../config/database.php';
if (isset($_SESSION['id']) && $_SESSION['role'] ==0 ) {
    $template = new Template();
    $orderModel = new Order();
    $orders = $orderModel->getAllOrder();
    $data = [
        'title' => 'Danh sách hóa đơn',
        'slot' => $template->render('orders/list-order-form',['orders' => $orders])
    ];
    $template->view('layout-admin',$data);
   
}else{
    header('location: http://localhost/DoAnBe1/login.php');
}