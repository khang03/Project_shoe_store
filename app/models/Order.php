<?php
class Order extends Database{
    // Thêm hóa đơn
    public function store($codebill,$total,$name,$tel,$email,$address,$id_user){
        $query ='INSERT INTO `orders`(`code_bill`, `total`, `name`, `tel`, `email`, `address`, `id_user`) VALUES (?,?,?,?,?,?,?)';
        $sql = parent::$connection->prepare($query);
        $sql->bind_param('sissssi',$codebill,$total,$name,$tel,$email,$address,$id_user);
        $sql->execute();
        return parent::$connection->insert_id;
    }
    // Thêm hóa đơn chi tiết
    public function storeOrderDetail($id_order,$id_product,$quantity,$price){
        $query ='INSERT INTO `order_detail`(`id_order`, `id_product`, `quantity`, `price`) VALUES (?,?,?,?)';
        $sql = parent::$connection->prepare($query);
        $sql->bind_param('iiii',$id_order,$id_product,$quantity,$price);
        $sql->execute();        
    }
    //Lấy chi tiết hóa đơn bằng id_order
    public function getOrderDetailByIdOrder($id_order){
        $query ='SELECT * FROM `order_detail` WHERE `id_order`=?';
        $sql = parent::$connection->prepare($query);
        $sql->bind_param('i',$id_order);
        return parent::select($sql);        
    }
    // Lấy hóa đơn bằng id
    public function getOrderByID($idOrder){
        $query ='SELECT * FROM `orders` WHERE `id` = ?';
        $sql = parent::$connection->prepare($query);
        $sql->bind_param('i',$idOrder);
        return parent::select($sql);
    }
    //Lấy tất cả hóa đơn
    public function getAllOrder(){
        $query ='SELECT * FROM `orders` ';
        $sql = parent::$connection->prepare($query);
        return parent::select($sql);
    }
    //Thay đổi status
    public function updateStatusOrder($id){
        $query ='UPDATE `orders` SET `status`=1 WHERE `id` = ?';
        $sql = parent::$connection->prepare($query);
        $sql->bind_param('i',$id);
        return $sql->execute();
    }

}