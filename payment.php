<?php
require_once 'config/database.php';

$template = new Template();
$orderModel = new Order();
if (isset($_SESSION['idOrder'])) {
    $order = $orderModel->getOrderByID($_SESSION['idOrder']);
}
$data = [
    'title' => 'Thanh Toán',
    'slot'  => $template->render('payment',['order' => $order]) 
];
$template->view('layout', $data);