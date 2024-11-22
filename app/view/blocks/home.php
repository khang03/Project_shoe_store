<?php

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .img {
            position: relative;
        }

        .img-content {
            position: absolute;
            top: 20%;


        }

        .link {
            font-size: 26px;
            font-weight: bold;
            color: white;
        }

        .link1 {
            font-weight: bold;
            color: white;
        }

        .link,
        .link1:hover {
            color: #ff5f17;
        }

        .banner-child:hover{
            z-index: 2;
            box-shadow: 5px 5px #333;
        }
    </style>
</head>

<body>
    
    <div class="container-fluid firt-container">
        <h3 class="text-dark text-center">Welcome to Ananas</h3>
    </div>
    <a href="category.php?id=9"><img style="width:100%;" src="public/images/banner/banner1.jpeg" alt=""></a>
    <br> <br>
    <div class="container">
        <div class="container">
            <div class="row">
                <div class="col-6 banner-child">
                    <a href=""><img src="public/images/content_home/style_black.jpg" alt=""></a>
                    <br> <br>
                    <h2>ALL BLACK IN BLACK</h2>
                    <p>Mặc dù được ứng dụng rất nhiều, nhưng sắc đen lúc nào cũng toát <br> lên một vẻ huyền bí không nhàm chán</p>
                </div>
                <div class="col-6 banner-child">
                    <a href="category.php?id=12"><img style="width:94%;" src="public/images/content_home/sale_off.jpg" alt=""></a>
                    <br> <br>
                    <h2>OUTLET SALE</h2>
                    <p>Danh mục những sản phẩm bán tại "giá tốt hơn" chỉ được bán kênh online - Online Only,
                        chúng đã từng làm mưa làm gió một thời gian và hiện đang rơi vào tình trạng bể size, bể số.</p>
                </div>
            </div>
        </div> <br> <br> <br>
        <div class="row">
            <div class="col-12 text-center">
                <h2>DANH MỤC MUA HÀNG</h2>
            </div>
            <br> <br> <br>
            <div class="container-fluid">
                <div class="row">

                    <div class="col-4 dm banner-child">
                        <div class="img container">
                            <img src="public/images/content_home/danhmuc-nam.jpg" alt="">
                            <div class="container img-content">
                                <div class="text-center">
                                    <a class="link" href="">GIÀY NAM</a><br><br>
                                    <a class="link1" href="">New Arrivals</a><br><br>
                                    <a class="link1" href="">Best Seller</a><br><br>
                                    <a href="" class="link1">Sale off</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 dm banner-child">
                        <div class="img container">
                            <img src="public/images/content_home/danhmuc-nam.jpg" alt="">
                            <div class="container img-content">
                                <div class="text-center">
                                    <a class="link" href="">GIÀY NAM</a><br><br>
                                    <a class="link1" href="">New Arrivals</a><br><br>
                                    <a class="link1" href="">Best Seller</a><br><br>
                                    <a href="" class="link1">Sale off</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 dm banner-child">
                        <div class="img container">
                            <img src="public/images/content_home/danhmuc-nam.jpg" alt="">
                            <div class="container img-content">
                                <div class="text-center">
                                    <a class="link" href="">GIÀY NAM</a><br><br>
                                    <a class="link1" href="">New Arrivals</a><br><br>
                                    <a class="link1" href="">Best Seller</a><br><br>
                                    <a href="" class="link1">Sale off</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    </div>

        <br><br><br>
    <img style="width:100%;" src="public/images/banner/Banner_Clothing" alt="">

</body>

</html>