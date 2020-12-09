<?php

// Plugin Name: React Plugin

defined('ABSPATH') || die();


// Registers a shortcode that simply displays a placeholder for our React App.

function example_react_app()
{
    $category_id = get_queried_object_id();
    $site_name = get_bloginfo();
    $site_slug = strtolower($site_name);
    // dump(get_queried_object());
    wp_enqueue_script('react-app', plugins_url('build/index.js', __FILE__), array('wp-element'), time(), true);
    return '<div id="app" class="bg-white py-48px px-24px position-relative d-md-flex px-xl-48px mx-xl-n30px justify-content-md-center flex-column" data-main-category-id=' . $category_id . ' data-site-slug=' . $site_slug . '>';
}

add_shortcode('example_react_app', 'example_react_app');

remove_filter('the_excerpt', 'wpautop');
