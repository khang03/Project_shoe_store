<?php
require_once 'config/database.php';

if (isset($_POST['submit'])) {
  if (isset($_POST['username']) && isset($_POST['password']) && !empty($_POST['username']) && !empty($_POST['password'])) {
    $userMoldel = new User();
    // Lấy 1 mảng user 
    $user = $userMoldel->getUser($_POST['username']);
    // Chỉ lấy mỗi passworđ
    // $passwordUser = $userMoldel->getPassword($_POST['username']);
   if ($user != -1 ) {
    if (password_verify($_POST['password'],$user[0]['password'])) {
      $_SESSION['role'] = $user[0]['role'];
      $_SESSION['id'] = $user[0]['id'];
      
    }
   }else{
    $_SESSION['role'] = $user;
   } 
     
    
   
    
    if ($_SESSION['role'] == 0) {
       header('location: http://localhost/DoAnBe1/admin/');
    }else if($_SESSION['role'] == 1){
       header('location: http://localhost/DoAnBe1/');
    }else{     
      $err_iss ='Username hoặc password không chính xác !';
    }
    
    
    
  }
  
}

?>

<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link rel="stylesheet" href="public/css/style_loginfom.css">
<!------ Include the above in your HEAD tag ---------->

<div class="wrapper fadeInDown">
  <div id="formContent">
    <a href="index.php" style="text-decoration: none;">Home Page</a>
    <!-- Tabs Titles -->
    <div class="fadeIn first">
      <h3>Sign In</h3>
    </div>
    <!-- Login Form -->
    <form action="<?php echo $_SERVER['PHP_SELF']?>" method="post">
      <input type="text" id="username" name="username" class="fadeIn second"  placeholder="login">
      <input type="password" id="password" name="password" class="fadeIn third" placeholder="password">
      <!-- Xuất Lỗi -->
      <p style="color: red;">
        <?php
         if (isset($err_iss) && !empty($err_iss)) {
           echo $err_iss;
         }
         ?>
      </p>
     
      <input type="submit" name="submit" class="fadeIn fourth" value="Log In">    
    </form>
    <span>Bạn chưa có tài khoản? <a href="register.php">Đăng ký</a></span> 
    

  </div>
</div>