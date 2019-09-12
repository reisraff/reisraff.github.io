<?php

// echo $_SERVER['REQUEST_URI'];

if (preg_match('/css/', $_SERVER['REQUEST_URI'])) {
    header('Content-Type: text/css');
    echo file_get_contents('.' . $_SERVER['REQUEST_URI']);
    return;
}

if (preg_match('/js/', $_SERVER['REQUEST_URI'])) {
    header('Content-Type: text/javascript');
    echo file_get_contents('.' . $_SERVER['REQUEST_URI']);
    return;
}

if (preg_match('/png/', $_SERVER['REQUEST_URI'])) {
    header('Content-Type: image/png');
    echo file_get_contents('.' . $_SERVER['REQUEST_URI']);
    return;
}

if (preg_match('/jpg/', $_SERVER['REQUEST_URI'])) {
    header('Content-Type: image/jpg');
    echo file_get_contents('.' . $_SERVER['REQUEST_URI']);
    return;
}

echo file_get_contents('./index.html');
