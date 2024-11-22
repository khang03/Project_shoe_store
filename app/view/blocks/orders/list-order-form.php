<div class="container">
    <div class="containe-title" style="display: flex; margin-bottom: 10px;">
        <h3>LIST OF ORDER</h3>
        
    </div>
    <table class="table">
        <thead >
            <tr   class="table-dark ">
                <th scope="col">ID</th>
                <th scope="col">Code Bill</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>

            </tr>
        </thead>
        <tbody>
            <?php foreach ($orders as $order ) : ?>
            <tr>          
                <td><?php echo $order['id']?></td>
                <td><?php echo $order['code_bill']?></td>
                <td><?php echo $order['name']?></td>
                <td><?php echo $order['tel']?></td>
                <td><?php echo $order['email']?></td>
                <td><?php echo $order['address']?></td>
                <td>
                    
                    <form action="detail-order.php" method="post">
                        <input type="hidden" id="id_order" name="id_order" value="<?php echo $order['id'] ?>">
                        <input type="hidden" id="code_bill" name="code_bill" value="<?php echo $order['code_bill'] ?>">
                        <button type="submit" name="xemdonhang" class="btn btn-danger">Xem đơn hàng</button>
                        
                    </form>
                     
                    <?php if (isset($order['status']) && $order['status'] == 0) :?>
                        <form action="confirm-order.php" method="post">
                            
                            <input type="hidden" id="id_order" name="id_order" value="<?php echo $order['id'] ?>">
                            <input type="hidden" id="code_bill" name="code_bill" value="<?php echo $order['code_bill'] ?>">
                            <button type="submit" name="xacnhandonhang"  class="btn btn-danger">Xác nhận đơn hàng</button>
                        </form>
                    <?php else : ?>
                        <a href="" class="btn btn-success">Đã xác nhận</a>
                    <?php endif; ?>
                </td>
            </tr>
            <?php endforeach; ?>
            
        </tbody>
    </table>
</div>   