<?php

function enqueue_masonry_script() {
    wp_enqueue_script('jquery-masonry');
}
add_action('wp_enqueue_scripts', 'enqueue_masonry_script');

?>