 
    <?php
        if(!empty($_SESSION['alert'])):
    ?>
    <div class="alert alert-success" role="alert">
        <?php echo $_SESSION['alert'] ?>
    </div> 
        <?php
        $_SESSION['alert'] = '';
            endif;
        ?>
 <div class="container">
    <div class="containe-title" style="display: flex; margin-bottom: 10px;">
        <h3>LIST OF PRODUCTS</h3>
        <a style="margin-left:68%;" href="products/create.php" class="btn btn-success">Add Product</a>
    </div>
    <table class="table">
        <thead >
            <tr  class="table-dark ">
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Image</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($products as $product ) : ?>
            <tr>          
                <td><?php echo $product['id']?></td>
                <td><?php echo $product['name']?></td>
                <td><?php echo $product['price']?> VND</td>
                <td><img src="../public/images/<?php echo $product['image'] ?>" alt="" width="100"></td>
                <td>
                    <a class="btn btn-warning" href="products/edit.php?id=<?php echo $product['id'] ?>">Edit</a>
                    <form action="products/destroy.php" method="post">
                        <input type="hidden" id="id" name="id" value="<?php echo $product['id'] ?>">
                        <button type="submit" class="btn btn-danger">Delete</button>
                    </form>
                    
                </td>
            </tr>
            <?php endforeach; ?>
            
        </tbody>
    </table>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <?php
            $pages = ceil($toTal/$perPage);
                for ($i=1; $i <= $pages; $i++) { 
                    ?>
                    <li class="page-item"><a class="page-link" href="index.php?page=<?php echo $i ?>"><?php echo $i ?></a></li>
                    <?php
                }
            ?>           
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
    </nav>
</div>   
<script>
    const alert = document.querySelector('.alert');
    if(alert){
        const alertTimeout = setTimeout(function(){
            alert.remove();
        }, 3000)
    }
</script>  

    


 


    