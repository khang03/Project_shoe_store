<?php
require_once '../../config/database.php';
require_once '../../PHPMailer/send-mail.php';

$orderModel = new Order(); 

$productModel = new Product();
$mail = new Mail();
if (isset($_SESSION['id']) && $_SESSION['role'] ==0 ) {
    // Đã nhấn nút xác nhận đơn hàng chưa
    if (isset($_POST['xacnhandonhang'])) {
        $id_order = $_POST['id_order'];
        $code_bill = $_POST['code_bill'];
        $order = $orderModel->getOrderByID($id_order);
        // Kiểm tra biến không đc rỗng
        if (!empty($id_order) && !empty($code_bill)) {
            $orderModel->updateStatusOrder($id_order);
            $orderDetail = $orderModel->getOrderDetailByIdOrder($id_order);
            $data ='';
            $total_amount = 0;
            $i =1;
            $arrImage =[];
            // Tải data
            foreach ($orderDetail as $value) {             
                   $data .='<p>'.$i.'.'.$productModel->getProductNameById($value['id_product']).', số lượng :'.$value['quantity'].', Giá:'.$value['price'].'.000đ</p>';
                   $total_amount += $value['price'] +$value['quantity'];
                   array_push($arrImage,$productModel->getImageProductById($value['id_product']));
                   $i++;
               }
               $noidung = '
               <div class="container" style="background: #f5f5f5;width: 30%;height: 600px;border: 1px grey solid; text-align: center;">
                   <h2>Thông tin đơn: #'.$code_bill.'</h2>
                       <div class="div2" style="text-align: left;">
                           '.$data.'           
                           <p><strong>Thành tiền: '.$total_amount.'.000đ</strong></p>
                       </div>      
               </div>';
               $mail->sendMail($order[0]['email'],$order[0]['name'],$noidung,$arrImage);
            
        }else{
            header('location: http://localhost/DoAnBe1/admin/orders/list-order.php');
        }
        
    }
}else{
    header('location: http://localhost/DoAnBe1/login.php');
}
