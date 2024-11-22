<?php

class Product extends Database{
    //Lấy tất cả sản phẩm
    public function getAllProducts(){
        $sql = parent::$connection->prepare('SELECT * FROM `products` ORDER BY `id` DESC ' );
        return parent::select($sql);
    }   

    public function getProductById($id){
        $sql = parent::$connection->prepare('SELECT * FROM `products` WHERE `id`=?');
        $sql->bind_param('i', $id);
        return parent::select($sql)[0];
    }

    // Lấy các sản phẩm theo id mảng
    public function getProductsByIds($arryIds)
    {
        $chamhoi = str_repeat('?,', count($arryIds) -1 ) . '?';
        $type = str_repeat('i', count($arryIds));
        // 2. Tạo câu SQL
        $sql = parent::$connection->prepare("SELECT * FROM `products` WHERE `id` IN ( $chamhoi )");
        $sql->bind_param($type, ...$arryIds);
        return parent::select($sql);
    }

    //Hiển thị số sản phẩm phân trang
    public function getProductsByPage($page,$perPage){
        $start = ($page - 1) * $perPage;
        $sql = parent::$connection->prepare('SELECT * FROM `products` ORDER BY `id` DESC LIMIT ?, ?');
        $sql->bind_param('ii', $start, $perPage);
        return parent::select($sql);
    }  
    
    //Lấy tổng các sản phẩm
    public function getToTal(){
         // 2. Tạo câu SQL
         $sql = parent::$connection->prepare('SELECT COUNT(*) AS total FROM `products`');
         return parent::select($sql)[0]['total'];
    }
    //lấy những sản phẩm theo danh mục
    // Lấy 1 sản phẩm theo category id
    public function getProductsByCategory($id)
    {
        // 2. Tạo câu SQL
        $sql = parent::$connection->prepare('SELECT *
                                            FROM products
                                            INNER JOIN category_product
                                            ON products.id = category_product.product_id
                                            WHERE category_product.category_id = ?');
        $sql->bind_param('i', $id);
        return parent::select($sql);
    }

    //
    

    //Tìm kiếm theo tên của sản phẩm
    public function search($keyword,$page,$perPage)
    {
        // 2. Tạo câu SQL
        $keyword = "%{$keyword}%";
        $sql = parent::$connection->prepare('SELECT * FROM `products` WHERE `name` LIKE ? LIMIT ?,?');
        $sql->bind_param('sii', $keyword,$page,$perPage);
        return parent::select($sql);
    }

    public function getToTalBySearch($keyword){
        // 2. Tạo câu SQL
        $sql = parent::$connection->prepare('SELECT COUNT(*) AS total FROM `products` where `name` like ?');
        $sql -> bind_param('s', $keyword);
        return parent::select($sql)[0]['total'];
   }
    // Store a product
    public function store($productName, $productPrice, $productDescription, $productImage, $categoriesId)
    {
        // 2. Tạo câu SQL
        $sql = parent::$connection->prepare('INSERT INTO `products`(`name`, `price`, `description`, `image`) VALUES (?, ?, ?, ?)');
        $sql->bind_param('siss', $productName, $productPrice, $productDescription, $productImage);
        $sql->execute();

        // Thêm vào category_product
        $insertedProduct = parent::$connection->insert_id;
        
        // Cách 1
        // foreach ($categoriesId as $categoryId) {            
        //     $sql = parent::$connection->prepare('INSERT INTO `category_product`(`category_id`, `product_id`) VALUES (?, ?)');
        //     $sql->bind_param('ii', $categoryId , $insertedProduct);
        //     $sql->execute();
        // }
        // return true;

        // Cách 2
        $chamHoi = '';
        $type = '';
        $insertedCategories = [];
        foreach ($categoriesId as $categoryId) {
            $chamHoi .= '(?, ?),';
            $type .= 'ii';
            array_push($insertedCategories, $categoryId, $insertedProduct);
        }
        $chamHoi = substr($chamHoi, 0, -1);

        $sql = parent::$connection->prepare('INSERT INTO `category_product`(`category_id`, `product_id`) VALUES ' . $chamHoi);
        $sql->bind_param($type, ...$insertedCategories);
        return $sql->execute();
    }

    public function destroy($productId){
        // Xoa product
        $sql = parent::$connection->prepare('DELETE FROM `products` WHERE `id`=?');
        $sql->bind_param('i', $productId);
        $sql->execute();

        // Xoa category_product
        $sql = parent::$connection->prepare('DELETE FROM `category_product` WHERE `product_id`=?');
        $sql->bind_param('i', $productId);
        return $sql->execute();
    }
    //update
    public function update($productID,$productName,$productPrice,$productDes,$productImg,$categoriesID){
        $sql = parent::$connection->prepare('UPDATE `products` SET `name`=?,`price`=?,`description`=?,`image`=? WHERE `id` = ?');
        $sql->bind_param('sissi',$productName,$productPrice,$productDes,$productImg,$productID);
        $sql->execute();
        
         // Xóa danh mục cũ
         $sql = parent::$connection->prepare('DELETE FROM `category_product` WHERE `product_id`=?');
         $sql->bind_param('i', $productID);
         $sql->execute();
 
         // Thêm danh mục mới
         $chamHoi = '';
         $type = '';
         $insertedCategories = [];
         foreach ($categoriesID as $categoryId) {
             $chamHoi .= '(?, ?),';
             $type .= 'ii';
             array_push($insertedCategories, $categoryId, $productID);
         }
         $chamHoi = substr($chamHoi, 0, -1);
 
         $sql = parent::$connection->prepare('INSERT INTO `category_product`(`category_id`, `product_id`) VALUES ' . $chamHoi);
         $sql->bind_param($type, ...$insertedCategories);
         return $sql->execute();
    }
    //
    public function getProductWishlistByIdUser($id_user){
        // Xoa product
        $sql = parent::$connection->prepare('SELECT * FROM `products` 
                                            INNER JOIN `wishlist` ON `products`.`id` = `wishlist`.`product_id` 
                                            WHERE `wishlist`.`user_id` = ?;');
        $sql->bind_param('i', $id_user);
        return parent::select($sql);
    }
    //Get 1 product and category_id
    public function getProductAndCategoriesID($id){
        $sql = parent::$connection->prepare('SELECT `products`.*,GROUP_CONCAT(`category_product`.`category_id`) AS categories_id
                                            FROM `products`
                                            INNER JOIN `category_product` ON `products`.`id` =`category_product`.`product_id`
                                            WHERE `products`.`id` = ?');
        $sql->bind_param('i',$id);
        return parent::select($sql)[0];
  
    }
    //Lấy tên san pham bang id
    public function getProductNameById($id){
        $sql = parent::$connection->prepare('SELECT `name` FROM `products` WHERE `id` =?');
        $sql->bind_param('i',$id);
        return parent::select($sql)[0]['name'];
    }
    //Lấy tên ảnh bằng id
    public function getImageProductById($id){
        $sql = parent::$connection->prepare('SELECT `image` FROM `products` WHERE `id` =?');
        $sql->bind_param('i',$id);
        return parent::select($sql)[0]['image'];
    }  

}