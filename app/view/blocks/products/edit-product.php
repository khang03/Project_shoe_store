<div class="container">
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-md-6">
                    <h3>Sửa Sản Phẩm</h3>
                </div>
                <div class="col-md-6">
                    <a href="../index.php" class="btn btn-primary float-end">Danh Sách Sản Phẩm</a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <form action="update.php" method="post" enctype="multipart/form-data">                
                            <input type="hidden" class="form-control" name="productID" id="productID"  value="<?php echo $product['id']?>">
                        <div class="form-group">
                            <strong>Name</strong>
                            <input type="text" class="form-control" name="productName" id="productName"  value="<?php echo $product['name']?>">
                        </div>
                        <div class="form-group">
                            <strong>Price</strong>
                            <input type="text" class="form-control" name="productPrice" id="productPrice" value="<?php echo $product['price']?>">
                        </div>
                        <div class="form-group">
                            <strong>Description</strong>
                            <textarea class="form-control" id="productDes" name="productDes"><?php echo $product['description'] ?></textarea>
                        </div>
                        <div class="form-group">
                            <strong>Image</strong>
                            <input type="text" class="form-control" name="productImg" id="productImg" value="<?php echo $product['image']?>">
                        </div>
                        <?php
                            $category_id = explode(',',$product['categories_id']);
                        ?>
                        <?php foreach ($categories as $category ) :?>
                            <div class="form-check">                
                                    <input class="form-check-input" type="checkbox" value="<?php echo $category['id'] ?>" id="category_<?php echo $category['id'] ?>" name="categoriesId[]" <?php echo in_array($category['id'],$category_id)? 'checked' : '' ?>>
                                    <label class="form-check-label" for="category_<?php echo $category['id'] ?>"><?php echo $category['name'] ?></label>                               
                            </div>
                        <?php endforeach; ?>


                        <div class="form-group">
                            <button type="submit" class="btn btn-success">Lưu</button>
                        </div>                                                           
            </form>
        </div>
    </div>
</div>