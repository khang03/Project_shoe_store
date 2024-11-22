<?php

require "src/PHPMailer.php"; 
require 'src/Exception.php';
require "src/SMTP.php"; 

class Mail{
    public function sendMail($tenEmail,$tenNguoiNhan,$noidung,$arrImage){
        $mail = new PHPMailer\PHPMailer\PHPMailer(true);
        try {
            $mail->SMTPDebug = 0;  // 0,1,2: chế độ debugSSS
            $mail->isSMTP();  
            $mail->CharSet  = "utf-8";
            $mail->Host = 'smtp.gmail.com'; //địa chỉ server
            $mail->SMTPAuth = true; 
            //   $tennguoigui = 'Long'; //Nhập tên người gửi
            $mail->Username='tuanduy.0234@gmail.com';
            $mail->Password = 'yuoxsgevzshatpmd'; // mật khẩu ứng dụng
            $mail->SMTPSecure = 'tls';   
            $mail->Port = 587;
            
            $mail->setFrom('tuanduy.0234@gmail.com','SHOP'); 
            $mail->addAddress($tenEmail,$tenNguoiNhan); //mail người nhận
            //   $mail->addAddress('21211TT1626@mail.tdc.edu.vn'); //mail người nhận
            //   $mail->addAddress('tuanduy.0234@gmail.com','Tuấn2'); //mail người nhận  
            foreach ($arrImage as $value) {
                $mail->addAttachment('../../public/images/'.$value.'', 'new.jpg');
            }
                
                
            
            
            $mail->isHTML(true);  
            $mail->Subject = 'Đơn hàng đã được xác nhận';      
            $mail->Body = nl2br($noidung); //nội dung thư
            $mail->smtpConnect( array("tls" => array(
                "verify_peer" => false,
                "verify_peer_name" => false,
                "allow_self_signed" => true
            )));
            
            $mail->send();
            header('location: http://localhost/DoAnBe1/admin/orders/list-order.php');
        } catch (Exception $e) {
        echo 'Mail không gửi được. Lỗi: ', $mail->ErrorInfo;
        }
    
    }
}

