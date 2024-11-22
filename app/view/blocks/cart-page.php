
<div class="container firt-container">
    <div class="row">
        <!--  -->
        <div class="col-7">
            <div class="row">
                <div class=" col-md-12 fs-3 text title-1 bg-secondary-subtle bg-gradient mb-3">
                    GIỎ HÀNG
                </div>
  
                <?php
                    if (isset($_SESSION['role']) && $_SESSION['role'] == 1 && isset($_SESSION['id'])) {
                        showGioHang2();
                    }else{
                        showGioHang();
                    }
                ?>

            </div>
        </div>
        <!--  -->
        <div class="col-5  bg-body">       
            <div class="card-body">
                <form action="store-payment.php" method="post" enctype="multipart/form-data">                                       
                            <div class="form-group">
                                <strong>Name</strong>
                                <input type="text" class="form-control" name="name" id="name"  placeholder="Nhập Tên ">
                            </div>
                            <div class="form-group">
                                <strong>Phone</strong>
                                <input type="text" class="form-control" name="tel" id="tel"  placeholder="Nhập Số Điện Thoại ">
                            </div>
                            <div class="form-group">
                                <strong>Email</strong>
                                <input type="text" class="form-control" name="email" id="email"  placeholder="Nhập Email ">
                            </div>
                            <div class="form-group">
                                <strong>Address</strong>
                                <input type="text" class="form-control" name="address" id="address"  placeholder="Địa chỉ">
                            </div>
                            <div class="form-group">
                                <span>
                                    Tổng đơn hàng: <?php if (isset($tongtien)) echo $tongtien ?>.000đ                                                                                                                                                     
                                </span>                               
                                <input  type="hidden" class="form-control" name="total" id="total" value="<?php echo $tongtien ?>" >
                            </div>

                                <?php
                                    if (isset($_SESSION['err']) ) {
                                    echo $_SESSION['err']. '?';
                                    unset($_SESSION['err']);
                                }
                                ?>

                            <div class="form-group">                               
                                <input class="btn btn-danger" type="submit" class="form-control" name="thanhtoan" value="Thanh Toán"  >
                            </div>
                                                      
                </form>
            </div>               
        </div>
    </div>
    <?php
        if (isset($_SESSION['role']) && $_SESSION['role'] == 1 && isset($_SESSION['id'])) {
            echo '<form action="cart.php" method="post">
                    <input class="btn btn-outline-danger" type="submit" name="delete_all" value="Xóa Tất Cả Sản Phẩm">
                  </form>';
        }else{
            echo '<a href="cart.php?delcart=1"><button class="btn btn-outline-danger">Xoá Tất Cả Sản Phẩm</button></a>';
        }
    ?>
    
</div>