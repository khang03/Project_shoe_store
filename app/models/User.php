<?php
class User extends Database{
    // Lấy tất cả danh sách user
    public function getUser($username){
        
        $sql = parent::$connection->prepare('SELECT * FROM `users` WHERE `username` =?');
        $sql->bind_param('s',$username);
        if (count(parent::select($sql))>0) {
            return parent::select($sql);
        }else return -1;
        
   
    }
    public function Register($name,$email,$username,$pass){
        $sql = parent::$connection->prepare('INSERT INTO `users`(`name`, `email`, `username`, `password`) VALUES (?,?,?,?)');
        $sql->bind_param('ssss',$name,$email,$username,$pass);
        return $sql->execute();
    }
    
    
    
}