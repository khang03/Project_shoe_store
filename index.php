<?php

require_once 'config/database.php';

$template = new Template();
$data = [
    'title' => 'Trang home',
    'slot'  => $template->render('home') 
];
$template->view('layout', $data);