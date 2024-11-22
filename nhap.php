<?php
require_once 'config/database.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- <link rel="profile" href="https://gmpg.org/xfn/11">
    <link rel="icon" href="/wp-content/themes/ananas/fe-assets/images/favicon.ico"> -->
    

</head>
<body>
    <?php
    $arrr = ['123','ưê'];
    foreach ($arrr as  $value) {
        echo $value;
    }
    ?>
</body>
</html>