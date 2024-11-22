<div class="container">
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-md-6">
                    <h3>Thêm Danh Mục</h3>
                </div>
                <div class="col-md-6">
                    <a href="../index.php" class="btn btn-primary float-end">Danh Sách Sản Phẩm</a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <form action="store.php" method="post" enctype="multipart/form-data">                
                    
                        <div class="form-group">
                            <strong>Name</strong>
                            <input type="text" class="form-control" name="categoryName" id="categoryName"  placeholder="Nhập Tên Danh Mục">
                        </div>
                        <div class="form-group">
                            <strong>Type</strong>
                            <input type="text" class="form-control" name="categoryType" id="categoryType"  placeholder="Nhập Tên Kiểu">
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
                            <button type="submit" class="btn btn-success">Lưu</button>
                        </div>                                                           
            </form>
        </div>
    </div>
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-md-6">
                    <h3>Danh Sách Danh Mục</h3>
                </div>                
            </div>
        </div>
        <div class="card-body">
        <table class="table">
            <thead >
                <tr  class="table ">
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Action</th>               
                </tr>
            </thead>
            <tbody>
            <?php foreach ($categories as $category ) : ?>
                <tr>          
                    <td><?php echo $category['id']?></td>
                    <td><?php echo $category['name']?></td>
                    <td><?php echo $category['type']?></td>
                    <td>
                        <a class="btn btn-warning" href="edit.php?id=<?php echo $category['id'] ?>">Edit</a>                
                    </td>
                </tr>
                <?php endforeach; ?>
                
            </tbody>
        </table>
                    
    
                        
                      

        </div>
    </div>
</div>