<style>
    .container{
        margin-top: 100px;
        text-align: center;
    }
</style>
<div class="container">
    <h2>Chi tiết đơn hàng</h2>   
    <p>Đơn hàng : <?php echo $code_bill ?></p>
    
    <table class="table">
            <thead >
                <tr  class="">
                    <th scope="col">ID</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Giá</th>               
                    <th scope="col">Thành tiền</th>               
                </tr>
            </thead>
            <tbody>
                <?php 
                    $tong =0; 
                    $productModel = new Product();
                    
                ?>
                <?php foreach ($orders as $value) : ?>
                <tr>          
                    <td><?php echo $value['id']?></td>
                    <td><?php echo $nameproduct = $productModel->getProductNameById($value['id_product'])?></td>
                    <td><?php echo $value['quantity']?></td>
                    <td><?php echo $value['price']?></td>
                    <td><?php echo $thanhtien = $value['quantity'] * $value['price']?></td>
                    <?php $tong +=$thanhtien ?>
                </tr>
                <?php endforeach ?>
                
                
            </tbody>
            <tbody>
            
                <tr>          
                    <td><strong>Tổng tiền</strong></td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td><?php echo $tong ?></td>
                    
                </tr>
                
                
            </tbody>
    </table>
</div>