<?php

// Plugin Name: React Plugin

defined('ABSPATH') || die();


// Registers a shortcode that simply displays a placeholder for our React App.

function example_react_app()
{
    $category_id = get_queried_object_id();
    $current_blog_id = get_current_blog_id();
    $site_url = get_blog_details($current_blog_id)->path;
    wp_enqueue_script('react-app', plugins_url('build/index.js', __FILE__), array('wp-element'), time(), true);
    return '<div id="app" class="bg-white py-48px px-24px position-relative d-md-flex px-xl-48px mx-xl-n30px justify-content-md-center flex-column" data-main-category-id=' . $category_id . ' data-site-url=' . $site_url . '>';
}

add_shortcode('example_react_app', 'example_react_app');

remove_filter('the_excerpt', 'wpautop');
