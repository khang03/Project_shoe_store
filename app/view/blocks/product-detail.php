<?php
require_once 'config/database.php';


if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $Products = new Product();
    $item = $Products->getProductById($id);
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
    <style>
        .price {
            color: orange;
        }
    </style>
    <style>
        .desc {
            text-decoration: none;
            color: #333;
        }



        h1 a {
            text-decoration: none;
        }
    </style>
</head>

<body>
    <div style="width:100%; border:1px solid #333;" class="line"></div>
    <div class="container firt-container">

        <div class="row ">
            <div class="col-md-4">
                <img src="public/images/<?php echo $item['image'] ?>" alt="" class="img-fluid">
                <div class="container">
                    <div class="row mt-2">
                        <?php
                        foreach ($item as $value) :
                        ?>
                            <div class="col-md-4 g-3 wrap-image"><img class="img-children" src="public/images/<?php echo $item['image'] ?>" alt=""></div>

                        <?php
                        endforeach
                        ?>

                    </div>
                </div>

            </div>
            <div class="col-md-8">
                <h1 class="product-name"><?php echo $item['name'] ?></h1> <br>

                <h3 class="price"><?php echo $item['price'] ?>.000đ</h3><br><br>
                <!-- Form thêm vào giỏ hàng -->
                <form action="cart.php" method="post">
                    <span>Số Lượng: </span>


                    <input type="number" name="soluong" min="1" max="10" value="1"> <br><br>


                    <input type="hidden" name="tensp" value="<?php echo $item['name'] ?>">
                    <input type="hidden" name="gia" value="<?php echo $item['price'] ?>">

                    <input type="hidden" name="hinh" value="<?php echo $item['image'] ?>">
                    <input type="hidden" name="id" value="<?php echo $item['id'] ?>">
                    <div class="wrap">

                        <div class="btn-click"> <input type="submit" class="btn-text" name="addcart" value="Thêm vào giỏ hàng">
                        </div>
                        <br>
                        <div style="top: 0; left:180px;" class="btn-click">
                            <input type="submit" class="btn-text " name="addcart" value="Mua ngay">

                        </div>
                    </div>
                </form>

                <!-- form yêu thích -->
                <form action="wishlist.php" method="post">
                    <input type="hidden" name="id" value="<?php echo $item['id'] ?>">
                    <input type="hidden" name="tensp" value="<?php echo $item['name'] ?>">
                    <input type="hidden" name="gia" value="<?php echo $item['price'] ?>">

                    <input type="hidden" name="hinh" value="./public/images/<?php echo $item['image'] ?>">
                    <div class="wrap">
                        <div class="btn-click">
                            <input type="submit" class="btn-text " name="addWishlist" value="Yêu Thích">

                        </div>
                    </div>
                </form>
                <br> <br>
                <div class="desc">

                    Mô tả: <p style="margin :0;"><?php echo $item['description']; ?> </p>
                </div>


            </div>
        </div>


    </div>
    <br>

</body>

</html>