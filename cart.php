<?php

use function PHPSTORM_META\type;

require_once 'config/database.php';
$tongtien =0;

if (isset($_SESSION['role']) && $_SESSION['role'] == 1 && isset($_SESSION['id'])) {
    
    unset($_SESSION['giohang']);    
    $cartModel = new Cart();
    $id_user =$_SESSION['id'];  
    
    //Thêm cart
    if (isset($_POST['addcart']) && ($_POST['addcart'])) {
        $imageSP = $_POST['hinh'];
        $nameSP = $_POST['tensp'];
        $priceSP = $_POST['gia'];
        $soLuong = $_POST['soluong'];
        $id_product = $_POST['id'];
        $total_amount = $soLuong * $priceSP;
        // Lấy danh sách giỏ hàng của user
        $carts = $cartModel->getCartsByIdUser($id_user); 
        //Update số lượng của giỏ hàng database
        $fg = 0; 
            foreach ($carts as $value) {
                if ($value['name_product'] == $nameSP && $value['id_user'] == $id_user) {
                    $slnew = $value['quantity'] + $soLuong;
                    $totalNew = $slnew * $value['price'];
                    $cartModel->updateCart($slnew,$totalNew,$id_user,$nameSP);
                    $fg = 1;              
                    break;
                }
            }          
            if ($fg == 0) {
                // Lưu sản phẩm vào giỏ
                 $addCart = $cartModel->storeCart($id_user,$id_product,$nameSP,$priceSP,$soLuong,$total_amount,$imageSP);               
            }
    }
    //Xóa 1 sản phẩm khi nhấn nút xóa
    if (isset($_POST['delete']) && ($_POST['delete'])) {
        $id_product = $_POST['id_product'];
        $cartModel->deleteCart($id_user,$id_product);
    }
    // Xóa nhiều sản phẩm khi nhấn nút Xóa Tất Cả
    if (isset($_POST['delete_all']) && ($_POST['delete_all'])) {       
        $cartModel->deleteAllCart($id_user);
    }
    $carts = $cartModel->getCartsByIdUser($id_user); 
    // Tổng tiền
    if (!empty($carts) && count($carts)> 0){
        for ($i = 0; $i < sizeof($carts); $i++) {              
            $tongtien +=$carts[$i]['total_amount'];
        }
    }
    
    
}else{

   // Nếu không có giỏ hàng tạo session giỏ hàng
    if (!isset($_SESSION['giohang'])) $_SESSION['giohang'] = [];
    //Xoá tất cả giỏ hàng
    if (isset($_GET['delcart']) && ($_GET['delcart'] == 1)) {
        if (isset($_SESSION['giohang'])){
            unset($_SESSION['giohang']);
        }       
    }
    //Xoá sản phẩm trong giỏ hàng
    if (isset($_GET['delid']) && ($_GET['delid'] >= 0)){
        array_splice($_SESSION['giohang'], $_GET['delid'],1);
    }
    $tongtien = 0;
    // Xử lí Thêm giỏ hàng
    if (isset($_POST['addcart']) && ($_POST['addcart'])) {
        $imageSP = $_POST['hinh'];
        $nameSP = $_POST['tensp'];
        $priceSP = $_POST['gia'];
        $soLuong = $_POST['soluong'];
        $id = $_POST['id'];
        $i=0;
        $fg = 0; 
            foreach ($_SESSION['giohang'] as $value) {
                if ($value[1] === $nameSP) {
                    $slnew = $value[3] + $soLuong;
                    $_SESSION['giohang'][$i][3] = $slnew;
                    $fg = 1;              
                    break;
                }
                $i++;
            }           
            if ($fg == 0) {
                $sp = [$imageSP, $nameSP, $priceSP, $soLuong,$id];
                $_SESSION['giohang'][] = $sp;               
            }            
    }
    // Tổng tiền
    if (isset($_SESSION['giohang']) && !empty($_SESSION['giohang'])){
        for ($i = 0; $i < sizeof($_SESSION['giohang']); $i++) {
            $tong = $_SESSION['giohang'][$i][2] * $_SESSION['giohang'][$i][3];   
            $tongtien +=$tong;
        }
    }
}
 

function showGioHang()
{
    global $tongtien;
    // print_r($_SESSION['giohang']);
    if (isset($_SESSION['giohang']) && (is_array($_SESSION['giohang']))) {
        $tong = 0;
        
        for ($i = 0; $i < sizeof($_SESSION['giohang']); $i++) {
            $tong = $_SESSION['giohang'][$i][2] * $_SESSION['giohang'][$i][3];
             
            $tongtien +=$tong;
            echo '<div class="row">
                    
            <div class="col-3">
            <img style="width: 100px;" src="public/images/'. $_SESSION['giohang'][$i][0] . '" alt="">
            </div>
            <div class="col-6">
            <h4>' . $_SESSION['giohang'][$i][1] . '</h4>
            
            <p class="text-secondary"> Giá:' . $_SESSION['giohang'][$i][2] . '.000đ </p>
            <span>Số Lượng:' . $_SESSION['giohang'][$i][3] . ' </span>
            </div>
            <div class="col-3">
                <h4 style="color: orange;">' . $tong. '.000đ</h4>
                <button class="whistlist bg-body"> Tym </button><br><br>
                <a class="btn btn-outline-danger" href="cart.php?delid='.$i.'">Delete</a>
            <br><br>
            </div>
            </div>
        
            <div style="border: 1px solid #333; width: 100%; height: 1px; margin-top:10px"></div>
            <br>';
        }
        
    }
    
}
function showGioHang2(){
    if (isset($_SESSION['role']) && $_SESSION['role'] == 1 && isset($_SESSION['id'])) {
        $tongtien = 0;
        $cartModel = new Cart();
        $id_user =$_SESSION['id'];
        $carts = $cartModel->getCartsByIdUser($id_user);  
        for ($i = 0; $i < sizeof($carts); $i++) {
            // $tong = $carts[$i][''] * $carts[$i][''];
             
            // $tongtien += $carts[$i]['total_amount'];
            echo '<div class="row">
                    
            <div class="col-3">
            <img style="width: 100px;" src="public/images/'. $carts[$i]['img'] . '" alt="">
            </div>
            <div class="col-6">
            <h4>' . $carts[$i]['name_product'] . '</h4>
            
            <p class="text-secondary"> Giá:' . $carts[$i]['price'] . '.000đ </p>
            <span>Số Lượng:' . $carts[$i]['quantity'] . ' </span>
            </div>
            <div class="col-3">
                <h4 style="color: orange;">' . $carts[$i]['total_amount']. '.000đ</h4>
                <button class="whistlist bg-body"> Tym </button><br><br>
                <form action="cart.php" method="post">
                    <input type="hidden" name="id_product" value="'.$carts[$i]['id_product'].'">
                    <input type="submit" class="btn btn-outline-danger" value="Delete" name="delete">
                </form>
        
            <br><br>
            </div>
            </div>
        
            <div style="border: 1px solid #333; width: 100%; height: 1px; margin-top:10px"></div>
            <br>';
        }
        
    }
}



$template = new Template();
$data = [
    'title' => 'Trang home',
    'slot'  => $template->render('cart-page',['tongtien' => $tongtien] ) 
];
$template->view('layout', $data);