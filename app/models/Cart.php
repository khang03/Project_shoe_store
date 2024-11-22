<?php
class Cart extends Database{
    // // Thêm hóa đơn
    // public function store($codebill,$total,$name,$tel,$email,$address,$id_user){
    //     $query ='INSERT INTO `orders`(`code_bill`, `total`, `name`, `tel`, `email`, `address`, `id_user`) VALUES (?,?,?,?,?,?,?)';
    //     $sql = parent::$connection->prepare($query);
    //     $sql->bind_param('sissssi',$codebill,$total,$name,$tel,$email,$address,$id_user);
    //     $sql->execute();
    //     return parent::$connection->insert_id;
    // }
    // // Thêm hóa đơn
    // public function storeOrderDetail($id_order,$id_product,$quantity,$price){
    //     $query ='INSERT INTO `order_detail`(`id_order`, `id_product`, `quantity`, `price`) VALUES (?,?,?,?)';
    //     $sql = parent::$connection->prepare($query);
    //     $sql->bind_param('iiii',$id_order,$id_product,$quantity,$price);
    //     $sql->execute();        
    // }
    // lấy danh sách giỏ hàng của người dùng để show ra
    public function getCartsByIdUser($idUser){
        $query ='SELECT * FROM `cart` WHERE `id_user` = ?';
        $sql = parent::$connection->prepare($query);
        $sql->bind_param('i',$idUser);
        return parent::select($sql);
    }
    // Thêm Sản Phẩm vào Cart
    public function storeCart($id_user, $id_product,$name_product, $price,$quantity,$total_amount,$img){
        $query ='INSERT INTO `cart`(`id_user`, `id_product`,`name_product`, `price`, `quantity`, `total_amount`, `img`) VALUES (?,?,?,?,?,?,?)';
        $sql = parent::$connection->prepare($query);
        $sql->bind_param('iisiiis',$id_user, $id_product,$name_product, $price,$quantity,$total_amount,$img);
        return $sql->execute();
    }
    
    //Update Số Lượng giỏ hàng
    public function updateCart($quantity,$total_amount,$id_user,$name_product){
        $query ='UPDATE `cart` SET `quantity`=?, `total_amount` =? WHERE `id_user`=? AND`name_product`=?';
        $sql = parent::$connection->prepare($query);
        $sql->bind_param('iiis',$quantity,$total_amount,$id_user,$name_product);
        return $sql->execute();
    }
    //Delete 1 sản phẩm từ Giỏ hàng của người dùng
    public function deleteCart($id_user,$id_product){
        $query ='DELETE FROM `cart` WHERE `id_user`=? AND `id_product`=?';
        $sql = parent::$connection->prepare($query);
        $sql->bind_param('ii',$id_user,$id_product);
        return $sql->execute();
    }
    //Xóa tất cả sản từ giỏ hàng của người dùng
    public function deleteAllCart($id_user){
        $query ='DELETE FROM `cart` WHERE `id_user`=?';
        $sql = parent::$connection->prepare($query);
        $sql->bind_param('i',$id_user);
        return $sql->execute();
    }

}