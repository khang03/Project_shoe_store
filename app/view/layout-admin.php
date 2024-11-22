<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <title>
    <?php 
      if (!empty($title)) {
        echo $title;
      }
    ?>
  </title>
  <style>
    h1{
      text-align: center;
    }
    .tt{
      background-color: darkcyan;
      border-radius: 10px;
    }
    
  </style>
</head>
<body>
  <!-- NAV -->
  <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="http://localhost/DoAnBe1/admin/index.php">DANH SÁCH SẢN PHẨM</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="http://localhost/DoAnBe1/admin/categories/create.php">THÊM MỚI DANH MỤC</a>
        </li> 
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="http://localhost/DoAnBe1/admin/orders/list-order.php">DANH SÁCH HÓA ĐƠN</a>
        </li>      
      </ul>

      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button  class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <?php if (isset($_SESSION['role']) && $_SESSION['role'] == 0) :?>
                    <a href="http://localhost/DoAnBe1/logout.php" class="btn btn-warning">Đăng Xuất</a>
                <?php else : ?>
                    <a href="http://localhost/DoAnBe1/login.php" class="btn btn-warning">Đăng Nhập</a>
                <?php endif ?>  
    </div>
  </div>
</nav>
  <!-- Header -->
  <head>
      <div style="height: 50px; padding-top: 5px;" class="container-fluid tt">
          <h2 class="text-center">ADMIN - QUẢN LÍ SẢN PHẨM</h2>
      </div> <br>
  </head>
  <!-- Main -->
  <?php
    if (!empty($slot)) {
      echo $slot;
    }
  ?>
  <!-- Footer -->
  <footer>

  </footer>
</body>
</html>
