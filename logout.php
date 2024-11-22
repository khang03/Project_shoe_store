<?php
require_once 'config/database.php';
unset($_SESSION['role']);
unset($_SESSION['id']);
header('location: http://localhost/DoAnBe1/');

// header('location: http://localhost:82/DoAnBe1');
