<?php
require_once 'config/database.php';
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    if (!empty($name)&&!empty($email)&&!empty($username)&&!empty($password)) {
        $password_hashed = password_hash($password,PASSWORD_DEFAULT);
        $userModel = new User();
        $userModel->Register($name,$email,$username,$password_hashed);       
        $err_iss = '<p style="color: green;">Đăng kí thành công <a href="login.php">Login Page</a></p>';
    }else
    {
        $err_iss = '<p style="color: red;">Đăng kí thất bại</p>';
    }    
}

?>

<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link rel="stylesheet" href="public/css/style_loginfom.css">
<!------ Include the above in your HEAD tag ---------->
<a href=""></a>
<div class="wrapper fadeInDown">
  <div id="formContent">
    <a href="index.php" style="text-decoration: none;">Home Page</a>
    <!-- Tabs Titles -->
    <div class="fadeIn first">
      <h3>REGISTER</h3>
    </div>
    <!-- Login Form -->
    <form action="<?php echo $_SERVER['PHP_SELF']?>" method="post">

      <input type="text" id="name" name="name" class="fadeIn "  placeholder="Name">
      <input type="text" id="email" name="email" class="fadeIn " placeholder="Email">
      <input type="text" id="username" name="username" class="fadeIn " placeholder="UserName">
      <input type="password" id="password" name="password" class="fadeIn " placeholder="Password">

      <!-- Xuất Lỗi -->   
      
        <?php
         if (isset($err_iss) && !empty($err_iss)) {
           echo $err_iss;
         }
         ?>
      
      <input type="submit" name="submit" class="fadeIn fourth" value="Register">     
    </form>
    

  </div>
</div>