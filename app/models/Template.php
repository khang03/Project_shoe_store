<?php
class Template
{
    public function view($view, $data = []) {
        extract($data);
        include BASE_PATH . 'app/view/' . $view . '.php';
    }

    public function render($view, $data = []) {
        ob_start();

        extract($data);
        include BASE_PATH . 'app/view/blocks/' . $view . '.php';

        return ob_get_clean();
    }
}
