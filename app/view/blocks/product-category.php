

<div class="container firt-container list-product">
    <div class="row row-cols-1 row-cols-md-4 g-4">
        <?php
        foreach ($products as $product) :
        ?>
            <div class="col">
                <div class="card-wrap">
                    <div class="card">

                        <img src="public/images/<?php echo $product['image'] ?> " class="card-img-top" alt="">
                    </div>
                    <div class="card-body">
                        <a href="product.php?id=<?php echo $product['id'] ?>">
                            <p class="card-tittle fw-bold"><?php echo $product['name'] ?></p>
                        </a>

                        <span><?php echo $product['price'] ?>.000 đ</span>
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
</div>