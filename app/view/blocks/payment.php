<div class="container firt-container">
   <h2>Đặt Hàng Thành Công</h2>
   <h5>Cảm ơn khách hàng đã giúp shop bên em có thêm tài chính</h5>
   <h5>Quý khách vui lòng chờ shop bên em xác nhận đơn hàng nhé</h5>
   <h5>Khi Shop bên em xác nhận thì tình yêu vui lòng kiểm tra email để kiểm tra thông tin đơn hàng nhé</h5>
   <p><strong>Thông tin đơn hàng: </strong></p>
    <?php
        foreach ($order as $value) {
            echo $value['code_bill']
             .','.$value['name']
             .','.$value['tel']
             .','.$value['email']
             .','.$value['address'];
             
        }
    ?>
    
</div>