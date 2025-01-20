<?php


function c_init() {
    add_post_type_support('page', 'excerpt');
    add_filter( 'use_block_editor_for_post', '__return_false' );
}
add_action( 'init', 'c_init' );