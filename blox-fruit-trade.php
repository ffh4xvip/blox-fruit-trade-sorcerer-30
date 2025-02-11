<?php
/*
Plugin Name: Blox Fruit Trade Calculator
Description: A calculator for Blox Fruits trading
Version: 1.0
Author: Your Name
*/

// Prevent direct access to this file
if (!defined('ABSPATH')) {
    exit;
}

// Add menu item
function blox_fruit_trade_menu() {
    add_menu_page(
        'Blox Fruit Trade Calculator',
        'Blox Calculator',
        'manage_options',
        'blox-fruit-trade',
        'blox_fruit_trade_page',
        'dashicons-calculator'
    );
}
add_action('admin_menu', 'blox_fruit_trade_menu');

// Create the plugin page
function blox_fruit_trade_page() {
    ?>
    <div class="wrap">
        <h1>Blox Fruit Trade Calculator</h1>
        <div id="root"></div>
    </div>
    <?php
}

// Register shortcode
function blox_fruit_trade_shortcode() {
    // Buffer the output
    ob_start();
    ?>
    <div id="root"></div>
    <?php
    // Enqueue necessary scripts and styles
    wp_enqueue_script(
        'blox-fruit-trade-js',
        plugins_url('assets/index.js', __FILE__),
        array(),
        '1.0.0',
        true
    );
    wp_enqueue_style(
        'blox-fruit-trade-css',
        plugins_url('assets/index.css', __FILE__),
        array(),
        '1.0.0'
    );
    
    return ob_get_clean();
}
add_shortcode('blox_calculator', 'blox_fruit_trade_shortcode');

// Enqueue scripts and styles for admin page
function blox_fruit_trade_scripts($hook) {
    // Only load on plugin page or when shortcode is used
    if ($hook === 'toplevel_page_blox-fruit-trade' || has_shortcode(get_post_field('post_content'), 'blox_calculator')) {
        wp_enqueue_script(
            'blox-fruit-trade-js',
            plugins_url('assets/index.js', __FILE__),
            array(),
            '1.0.0',
            true
        );
        wp_enqueue_style(
            'blox-fruit-trade-css',
            plugins_url('assets/index.css', __FILE__),
            array(),
            '1.0.0'
        );
    }
}
add_action('admin_enqueue_scripts', 'blox_fruit_trade_scripts');
add_action('wp_enqueue_scripts', 'blox_fruit_trade_scripts');