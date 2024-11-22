

<div class="container">
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-md-6">
                    <h3>Thêm Sản Phẩm</h3>
                </div>
                <div class="col-md-6">
                    <a href="index.php" class="btn btn-primary float-end">Danh Sách Sản Phẩm</a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <form action="store.php" method="post" enctype="multipart/form-data">                
                    
                        <div class="form-group">
                            <strong>Name</strong>
                            <input type="text" class="form-control" name="productName" id="productName"  placeholder="Nhập Tên Sản Phẩm">
                        </div>
                        <div class="form-group">
                            <strong>Price</strong>
                            <input type="text" class="form-control" name="productPrice" id="productPrice" placeholder="Nhập Giá Sản Phẩm">
                        </div>
                        <div class="form-group">
                            <strong>Description</strong>
                            <input type="text" class="form-control" name="productDes" id="productDes" placeholder="Nhập Mô Tả Sản Phẩm">
                        </div>
                        <div class="form-group">
                            <strong>Image</strong>
                            <input type="file" class="form-control" name="productImg" id="productImg" >
                        </div>
                        <?php foreach ($categories as $category ) :?>
                            <div class="form-check">                
                                    <input class="form-check-input" type="checkbox" value="<?php echo $category['id'] ?>" id="category_<?php echo $category['id'] ?>" name="categoriesId[]" require>
                                    <label class="form-check-label" for="category_<?php echo $category['id'] ?>"><?php echo $category['name'] ?></label>                               
                            </div>
                        <?php endforeach; ?>
                        <!-- Thông báo khi chưa nhập đủ dữ liệu -->
                        <p style="color: red;">
                            <?php
                            if (isset($_SESSION['err']) ) {
                                echo $_SESSION['err']. '?';
                                unset($_SESSION['err']);
                            }
                            ?>
                        </p>
                        
                        <div class="form-group">
                            <button type="submit" class="btn btn-success">Lưu</button>
                        </div>                                                           
            </form>
        </div>
    </div>
</div>