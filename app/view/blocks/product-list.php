<?php





?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>


    </style>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container firt-container ">
        <div class="row row-cols-1 row-cols-md-4 g-4 ">
            <?php
            foreach ($products as $product) :
            ?>
                <div class="col col-card ">
                    <div class="card-wrap">
                        <div class="card">

                            <img src="public/images/<?php echo $product['image'] ?> " class="card-img-top" alt="">
                        </div>
                        <div class="card-body">
                            <a href="product.php?id=<?php echo $product['id'] ?>">
                                <p class="card-title fw-bold"><?php echo $product['name'] ?></p>
                            </a>

                            <span class="price"><?php echo $product['price'] ?>.000 đ</span>
                            <?php
                            $description = trim(strip_tags($product['description']));
                            if (strlen($description) >= 100) {
                                $description = mb_substr($description, 0, mb_strpos($description, ' ', 100));
                            }
                            ?>
                            <p class="desc"><?php echo $description ?>...</p>
                        </div>
                    </div>
                </div>
            <?php
            endforeach
            ?>

        </div>
        <nav aria-label="Page navigation example ">
            <ul class="pagination mt-2">
                <?php

                ?>
                <li class="page-item <?php echo ($currentPage == 1) ? 'disabled' : ''; ?> "><a class="page-link" href="product-all.php?page=<?php echo $currentPage - 1?> ">Previous</a></li>
                <?php

                for ($i = 1; $i <= $pages; $i++) {
                ?>
                    <li class="page-item <?php echo ($i == $currentPage) ? 'active' : ''; ?>"><a class="page-link" href="product-all.php?page=<?php echo $i ?>"><?php echo $i ?></a></li>

                <?php
                }
                ?>
                <li class="page-item <?php echo ($currentPage == $pages) ? 'disabled' : ''; ?>"><a class="page-link" href="product-all.php?page=<?php echo $currentPage + 1 ?>">Next</a></li>
            </ul>
        </nav>
    </div>

</body>

</html>