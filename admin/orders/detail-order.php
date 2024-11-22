<?php
require_once '../../config/database.php';
if (isset($_SESSION['id']) && $_SESSION['role'] ==0) {
    $template = new Template();
    $orderModel = new Order();
    $orders = $orderModel->getAllOrder();

    if (isset($_POST['xemdonhang'])) {
        $id_order = $_POST['id_order'];

        $code_bill =$_POST['code_bill'];
        if (!empty($id_order) && !empty($code_bill)) {
            $orders = $orderModel->getOrderDetailByIdOrder($id_order);
            $data = [
                'title' => 'Chi tiết hóa đơn',
                'slot' => $template->render('orders/detail-order-form',['code_bill' =>$code_bill,'orders' =>$orders])
            ];
            $template->view('layout-admin',$data);
        }
        
    }else{
        header('location: http://localhost/DoAnBe1/admin/orders/list-order.php');
    }
    
}else{
    header('location: http://localhost/DoAnBe1/login.php');
}
