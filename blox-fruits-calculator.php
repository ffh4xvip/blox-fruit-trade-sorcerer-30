<?php
/**
 * Plugin Name: Blox Fruits Calculator
 * Description: A calculator for Blox Fruits trades
 * Version: 1.0.0
 * Author: Lovable
 */

// Prevent direct access to this file
if (!defined('ABSPATH')) {
    exit;
}

// Add menu item to WordPress admin
function blox_fruits_calculator_menu() {
    add_menu_page(
        'Blox Fruits Calculator',
        'Blox Calculator',
        'manage_options',
        'blox-fruits-calculator',
        'blox_fruits_calculator_page',
        'dashicons-calculator'
    );
}
add_action('admin_menu', 'blox_fruits_calculator_menu');

// Register shortcode to display calculator
function blox_fruits_calculator_shortcode() {
    return '<div id="blox-fruits-calculator-root"></div>';
}
add_shortcode('blox_fruits_calculator', 'blox_fruits_calculator_shortcode');

// Enqueue necessary scripts and styles
function blox_fruits_calculator_scripts() {
    // Only enqueue on pages where the shortcode is used
    global $post;
    if (is_a($post, 'WP_Post') && has_shortcode($post->post_content, 'blox_fruits_calculator')) {
        wp_enqueue_script(
            'blox-fruits-calculator',
            plugin_dir_url(__FILE__) . 'dist/assets/index.js',
            array(),
            '1.0.0',
            true
        );
        wp_enqueue_style(
            'blox-fruits-calculator',
            plugin_dir_url(__FILE__) . 'dist/assets/index.css',
            array(),
            '1.0.0'
        );
    }
}
add_action('wp_enqueue_scripts', 'blox_fruits_calculator_scripts');

// Admin page content
function blox_fruits_calculator_page() {
    ?>
    <div class="wrap">
        <h1>Blox Fruits Calculator</h1>
        <p>Use this shortcode to display the calculator on any page or post:</p>
        <code>[blox_fruits_calculator]</code>
    </div>
    <?php
}

// Copy fruits directory on plugin activation
function blox_fruits_calculator_activate() {
    // Create fruits directory in uploads
    $upload_dir = wp_upload_dir();
    $fruits_dir = $upload_dir['basedir'] . '/fruits';
    if (!file_exists($fruits_dir)) {
        mkdir($fruits_dir, 0755, true);
    }
    
    // Copy fruits from plugin directory to uploads
    $plugin_fruits_dir = plugin_dir_path(__FILE__) . 'public/fruits/';
    if (is_dir($plugin_fruits_dir)) {
        foreach (scandir($plugin_fruits_dir) as $file) {
            if ($file != '.' && $file != '..') {
                copy($plugin_fruits_dir . $file, $fruits_dir . '/' . $file);
            }
        }
    }
}
register_activation_hook(__FILE__, 'blox_fruits_calculator_activate');
?>