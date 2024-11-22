<?php
require_once 'config/database.php';
$categoryModel = new Category();
$categories = $categoryModel->getAllCategoriesMain();
$cateSub = $categoryModel->getAllCategoriesSub();
$recentProducts;
$productModel = new Product();
if (isset($_COOKIE['recentView'])) {

    $recentProducts = $productModel->getProductsByIds(json_decode($_COOKIE["recentView"]));
}
$values = 5;
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?php
        if (!empty($title)) {
            echo $title;
        }

        if (isset($_SESSION['id']) && !empty($_SESSION['id'])) {
            $_SESSION['id'];
        }
        ?>
    </title>


    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <style>
        /*  */

        .header {
            z-index: 5;
            top: 0;
            width: 100%;
            position: fixed;


        }

        .header .menu {
            text-align: right;
            height: 30px;
            width: 100%;
            margin: 0px;
        }

        .header .menu li {
            list-style: none;
            position: relative;
            display: inline-block;
            margin-left: 18px;
            margin-right: 18px;
            /* text-shadow: 0 1px 2px rgba(255,255,255,0.3);  */
        }

        .header .menu a {
            color: #fff;
            /* font-family: NunitoSanRegular; */
            font-size: 15px;
            text-decoration: none;
            display: inline-block;
        }

        .header .menu a .img-icon-left {
            margin-right: 10px;
            vertical-align: middle;
        }

        /*  */
        .navbar {
            top: 30px;

            background-color: #fff;
            transition: filter 0.3s ease;
            box-shadow: 0 0 5px;

            width: 100%;
            position: relative;



        }

        a {
            text-decoration: none;
        }

        .tittle-footer {
            margin-bottom: 40px;
        }


        .dropdown:hover .dropdown-menu {
            display: block;
        }

        .dropdown-item:hover {
            cursor: pointer;
        }

        .cart {
            position: relative;

        }

        .col-card:hover {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            /* Tạo hiệu ứng box-shadow khi hover */
            cursor: pointer;
            border-radius: 5px;

        }

        .card-body {
            border-radius: 5px;

        }

        .price {
            color: orangered;
            font-weight: bold;
            font-size: 22px;

        }

        .card-title:hover {
            color: orangered;
        }

        .dropdown-item:hover {
            background-color: #333;
            color: #fff;
        }

        .firt-container {
            margin-top: 200px;
        }

        .logo {
            filter: brightness(150%);
        }

        .logo:hover {
            filter: brightness(100%);
        }

        .wrap {
            position: relative;
            height: 70px;
        }

        .wr_img {
            width: 100%;
            height: 300px;
            overflow: hidden;
        }

        .btn-click {
            width: fit-content;
            height: 50px;
            background-color: 0;
            border-radius: 50px;
            position: absolute;
            text-align: center;
            line-height: 50px;
            border: 1px solid orangered;
            box-shadow: 4px 4px orangered;

        }

        .btn-click:hover {
            box-shadow: 0px 0px;
            margin-top: 4px;
            margin-left: 4px;
        }

        .btn-click::before,
        .btn-click::after {
            content: '';
            width: 100%;
            height: 50px;
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 50px;
            z-index: -1;
        }

        .btn-click:hover:after {
            animation: glow 3s infinite linear 1.5s;


        }

        .btn-click:hover::before {
            animation: glow 3s infinite linear;
        }

        @keyframes glow {
            0% {
                transform: scale(1);
                opacity: 1;
                border: 1px solid orangered;
            }

            100% {
                transform: scale(2);
                opacity: 0;
                border: 5px solid orangered;
            }
        }

        .btn-text {
            background: 0;
            border: 0;
            color: orangered;
            width: 100%;
            height: 100%;
            z-index: 3;
            font-weight: 700;
            border-radius: 50px;
        }


        .img-fluid {
            border-radius: 10px;
            box-shadow: 2px 2px 2px grey;

        }

        .img-children {
            width: 80%;
            border-radius: 10px;
            box-shadow: 2px 2px 2px grey;
            top: 0;

        }

        .wr_list {
            padding: 20px 0;
            overflow-x: auto;
            /* Kích hoạt thanh cuộn ngang */
            white-space: nowrap;
            display: flex;
        }

        .wr_list::-webkit-scrollbar {
            display: none;
        }


        .img-children:hover {
            transform: translateY(5px);
            cursor: pointer;
        }

        .wrap-image {
            position: relative;
        }

        .card {
            overflow: hidden;
            position: relative;
            height: 300px;

        }

        .hiden {
            overflow: hidden;
            width: 100%;
        }

        .product {
            height: fit-content;
            display: inline-block;
            margin: 0 10px;
            border-bottom: 0;



        }

        .product:hover {
            box-shadow: 0px 0px 4px 1px;
            cursor: pointer;
        }



        .card-img-top {
            width: 100%;
            height: 100%;
        }

        .card-img-top:hover {
            animation: zoom 1s;
            animation-fill-mode: both;
        }

        @keyframes zoom {
            0% {
                transform: scale(1);
            }

            100% {
                transform: scale(1.5);
            }
        }
    </style>

</head>

<body>
    <!-- HEADER -->
    <div class="header  bg-dark ">

        <ul class="menu">

            <li><a href="http://localhost/DoAnBe1/wishlist.php"><img class="img-icon-left" src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_heart_header.svg"> Yêu thích</a></li>
            <li><a href="http://localhost/DoAnBe1/cart.php"><img class="img-icon-left" src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_gio_hang.svg"> Giỏ hàng</a></li>


            <?php if (isset($_SESSION['role']) && $_SESSION['role'] == 1) : ?>
                <li><a href="logout.php"><img class="img-icon-left" src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images//svg/icon_dang_nhap.svg">Đăng Xuất</a></li>
            <?php else : ?>
                <li><a href="login.php"><img class="img-icon-left" src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images//svg/icon_dang_nhap.svg">Đăng nhập</a></li>
            <?php endif ?>
        </ul>

        <nav class="navbar  navbar-expand-lg  navbar-dark container-fluid   position-sticky z-1 ">
            <div class="container-fluid">
                <a class="navbar-brand " href="index.php"><img class="logo" style="width:100px;" src="public/images/logo/Logo_Ananas.png" alt=""></a>
                <div class="text-center collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class=" navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link fs-5 fw-semibold text active text-dark " aria-current="page" href="index.php">ANANAS</a>
                        </li>
                        <li class=" nav-item">
                            <a class="nav-link fs-5 fw-semibold text active text-dark " aria-current="page" href="product-all.php">SẢN PHẨM</a>
                        </li>
                        <li class=" nav-item">
                            <a class="nav-link fs-5 fw-semibold text active text-dark " aria-current="page" href="category.php?id=1">NAM</a>
                        </li>
                        <li class=" nav-item">
                            <a class="nav-link fs-5 fw-semibold text active text-dark " aria-current="page" href="category.php?id=2">NỮ</a>
                        </li>
                        <?php
                        foreach ($categories as $category) :
                        ?>
                            <li class="nav-item dropdown ">
                                <a class="nav-link fw-semibold fs-5 text text-dark dropdown-toggle" href="category.php?id=<?php echo $category['id'] ?>"><?php echo $category['name'] ?>
                                </a>
                                <ul class="dropdown-menu">
                                    <?php
                                    foreach ($cateSub as $catesub):
                                    ?>
                                        <a class="text-danger-emphasis link-li" href="category.php?id=<?php echo $catesub['id'] ?>">
                                            <li class="dropdown-item"><?php echo $catesub['name'] ?></li>
                                        </a>

                                    <?php
                                    endforeach
                                    ?>
                                </ul>
                            </li>
                        <?php
                        endforeach
                        ?>
                    </ul>
                    <form class="d-flex" role="search" action="search.php" method="get">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="q">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>

                </div>
            </div>

        </nav>
    </div>
    <!-- END HEADER -->

    <?php
    if (!empty($slot)) {
        echo $slot;
    }
    ?>
    <div class="container ">
        <hr>
        <h3 class="text-center">Sản Phẩm Đã Xem</h3>
        <div class=" shadow-lg wr_list" style="height: fit-content;">
            <?php


            if (isset($_COOKIE['recentView'])) :
                foreach ($recentProducts as $reProduct):
            ?>

                    <div class="row wr_product">
                        <div class="col hiden">
                            <div class="card product ">
                                <div class="wr_img">

                                    <img src="public/images/<?php echo $reProduct['image'] ?>" class="card-img-top" alt="...">
                                </div>
                                <div class="card-body">
                                    <?php
                                    $name = trim(strip_tags($reProduct['name']));
                                    if (strlen($name) >= 33) {
                                        $name = mb_substr($name, 0, mb_strpos($name, ' ', 20));
                                    }
                                    ?>
                                    <a href="product.php?id=<?php echo $reProduct['id'] ?>">
                                        <p class="card-title fw-bold    "><?php echo $name ?>...</p>
                                    </a>

                                    <span class="price"><?php echo $reProduct['price'] ?>.000đ</span>
                                    <?php
                                    $description = trim(strip_tags($reProduct['description']));
                                    if (strlen($description) >= 100) {
                                        $description = mb_substr($description, 0, mb_strpos($description, ' ', 40));
                                    }
                                    ?>
                                    <p class="card-text"><?php echo $description ?>...</p>
                                </div>
                            </div>
                        </div>
                    </div>


            <?php
                endforeach;
            endif;



            ?>
        </div>
    </div>
    <!--  -->
    <footer class="bg-dark  text-white text-center py-3 mt-2">
        <div class="row">
            <div class="col-3">

                <h3 class="tittle-footer">SẢN PHẨM</h3>
                <a href="">
                    <p class="info text-white-50">giày nam</p>
                </a>
                <a href="">
                    <p class="info text-white-50">giày nữ</p>
                </a>
                <a href="">
                    <p class="info text-white-50">thời trang & phụ kiện</p>
                </a>
                <a href="">
                    <p class="info text-white-50">sale off</p>
                </a>

            </div>

            <div class="col-3">

                <h3 class="tittle-footer">VỀ CÔNG TY</h3>
                <a href="">
                    <p class="info text-white-50">Dứa tuyển dụng</p>
                </a>
                <a href="">
                    <p class="info text-white-50">Liên hệ nhượng quyền</p>
                </a>
                <a href="">
                    <p class="info text-white-50">Về Ananas</p>
                </a>


            </div>
            <div class="col-3">
                <h3 class="tittle-footer">Hổ TRỢ</h3>
                <a href="">
                    <p class="info text-white-50">Bảo mật thông tin</p>
                </a>
                <a href="">
                    <p class="info text-white-50">Chính sách chung</p>
                </a>
            </div>
            <div class="col-3">

                <h3 class="tittle-footer">LIÊN HỆ </h3>
                <a href="">
                    <p class="info text-white-50">Email góp ý</p>
                </a>
                <a href="">
                    <p class="info text-white-50">Hotline</p>
                </a>
                <a href="">
                    <p class="info text-white-50">0963 429 749</p>
                </a>
            </div>
        </div>
    </footer>
</body>

</html>