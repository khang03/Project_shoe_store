<?php 
class Wishlist extends Database{
    public function addProductWishlist($id_user,$id_product){
        $sql = parent::$connection->prepare('DELETE FROM `wishlist` WHERE `user_id` = ? AND `product_id` = ?');
        $sql->bind_param('ii',$id_user,$id_product);
        $sql->execute();

        $sql = parent::$connection->prepare('INSERT INTO `wishlist`(`user_id`, `product_id`) VALUES (?,?)');
        $sql->bind_param('ii',$id_user,$id_product);
        return $sql->execute();
        
    }
    public function deleteProductWishlist($id_product){
        $sql = parent::$connection->prepare('DELETE FROM `wishlist` WHERE `product_id`= ?');
        $sql->bind_param('i',$id_product);
        return $sql->execute(); 
    }
   
}