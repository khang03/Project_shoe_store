<?php

class Category extends Database{
    public function getCategory($id){
        $sql = parent::$connection->prepare('SELECT * FROM `categories` where `id` = ?');
        $sql->bind_param('i', $id);
        return parent::select($sql)[0];
    }
    //Lấy tất cả danh mục sản phẩm
    public function getAllCategories(){
        $sql = parent::$connection->prepare('SELECT * FROM `categories`     ');
        return parent::select($sql);
    }
    //LấY tất cả danh mục sản phẩm chính()
    public function getAllCategoriesMain(){
        $sql = parent::$connection->prepare('SELECT * FROM `categories` where `type` = 1');
        return parent::select($sql);
    }

    //Lấy tất cả danh mục sản phẩm con
    public function getAllCategoriesSub(){
        $sql = parent::$connection->prepare('SELECT * FROM `categories` where `type` = 2');
        return parent::select($sql);
    }
     // Lấy tất cả danh mục của 1 sản phẩm
     public function getCategoriesByProduct($id)
     {
         // 2. Tạo câu SQL
         $sql = parent::$connection->prepare('SELECT *
                                             FROM `categories`
                                             INNER JOIN category_product
                                             ON category_product.category_id = categories.id
                                             WHERE category_product.product_id = ?');
         $sql->bind_param('i', $id);
         return parent::select($sql);
     }
     //store()
     public function store($name,$type)
     {
        $sql = parent::$connection->prepare('INSERT INTO `categories`( `name`, `type`) VALUES (?,?)');
        $sql->bind_param('si', $name,$type);
        return $sql->execute();
     }
    //  update category
    public function update($name,$type,$id)
     {
        $sql = parent::$connection->prepare('UPDATE `categories` SET `name`=? ,`type`=? WHERE `id` = ?');
        $sql->bind_param('sii', $name,$type,$id);
        return $sql->execute();
     }
}