<?php

?>


<div class="container">
    <div class="row">
        <div class="col-12 text-center">
            <h2>
                Danh Mục Yêu Thích
            </h2>
            <br>
            
        </div>
    </div>
    <div class="row">
        <?php        
            foreach($products as $product):
        ?>
        <div class="col-12">
            <div style="width:100%; border: 1px solid #333; height:1px;" class="line"></div> <br> 
                <div class="row">
                    <!-- HÌnh -->
                    <div class="col-2">
                        <a href="product.php?id=<?php echo $product['id']?>"><img style="width: 200px;" src="public/images/<?php echo $product['image']  ?>" alt=""></a>
                    </div>
                    <!-- Thông tin -->
                    <div class="col-8">               
                        <a href="product.php?id=<?php echo $product['id']?>">               
                            <h4>
                            <?php echo $product['name']  ?>
                            </h4>
                        </a>
                        
                            <p>
                            <?php echo $product['price']  ?>.000đ
                            </p>
                    </div>
                    <!-- Xóa -->
                    <div class="col-2">
                        <a class="btn btn-outline-danger" href="wishlist.php?id=<?php echo $product['id'] ?>">Delete</a>
                    </div>
            </div><br>
        </div>
        <?php
            endforeach
        ?>
        <div style="width:100%; border: 1px solid #333; height:1px;" class="line"></div>

    </div> <br>


    
    <a href="wishlist.php?delcart=1"><button class="btn btn-outline-danger">Xoá Tất Cả Sản Phẩm</button></a>
</div>