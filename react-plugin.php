<?php

// Plugin Name: React Plugin

defined('ABSPATH') || die();


// Registers a shortcode that simply displays a placeholder for our React App.

function example_react_app()
{
    $sub_category_id = get_queried_object_id();
    $sub_category_name = get_queried_object()->name;
    $sub_site_name = get_bloginfo();
    $sub_site_slug = strtolower($sub_site_name);
    // dump(get_queried_object());
    wp_enqueue_script('react-app', plugins_url('build/index.js', __FILE__), array('wp-element'), time(), true);
    return '<div id="app" class="bg-white py-48px px-24px position-relative d-md-flex px-xl-48px mx-xl-n30px justify-content-md-center flex-column" data-sub-category-id=' . $sub_category_id . ' data-sub-category-name=' . $sub_category_name . ' data-sub-site-name=' . $sub_site_name . ' data-sub-site-slug=' . $sub_site_slug . '>';
}

add_shortcode('example_react_app', 'example_react_app');

remove_filter('the_excerpt', 'wpautop');
