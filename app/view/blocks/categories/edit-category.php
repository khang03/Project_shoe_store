<div class="container">
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-md-6">
                    <h3>Sửa Danh Mục</h3>
                </div>
                <div class="col-md-6">
                    <a href="../index.php" class="btn btn-primary float-end">Danh Sách Sản Phẩm</a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <form action="update.php" method="post" enctype="multipart/form-data">                
                            <input type="hidden" id="idCate" name="idCate" value="<?php echo $_GET['id'] ?>">
                        <div class="form-group">
                            <strong>Name</strong>
                            <input type="text" class="form-control" name="categoryName" id="categoryName"  placeholder="Nhập Tên Danh Mục" value="<?php echo $category['name']?>">
                        </div>
                        <div class="form-group">
                            <strong>Type</strong>
                            <input type="text" class="form-control" name="categoryType" id="categoryType"  placeholder="Nhập Tên Kiểu" value="<?php echo $category['type']?>">
                        </div>

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
                            <button type="submit" class="btn btn-success" name="luu">Lưu</button>
                        </div>                                                           
            </form>
        </div>
    </div>