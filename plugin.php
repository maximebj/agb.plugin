<?php

/**
 * Plugin Name: Advanced Gutenberg Blocks
 * Plugin URI: #
 * Description: Awesome customizable blocks for the new WordPress Editor
 * Author: maximebj
 * Author URI: https://dysign.fr
 * Version: 1.1.1
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * Text Domain: advanced-gutenberg-blocks
 * Domain Path: /languages/
 */

defined('ABSPATH') or die('Cheatin&#8217; uh?');

use GutenbergBlocks\Gutenblocks;
use GutenbergBlocks\WP\Activator;
use GutenbergBlocks\WP\Deactivator;

require plugin_dir_path( __FILE__ ) . 'classes/Gutenblocks.php';


// Languages
function gutenblocks_load_textdomain() {
  load_plugin_textdomain( 'advanced-gutenberg-blocks', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
}
add_action( 'plugins_loaded', 'gutenblocks_load_textdomain' );

// Hack to get JS strings translatable by wp.org
require plugin_dir_path( __FILE__ ) . 'js-strings.php';


// Activation / Deactivation
function gutenblocks_activate_plugin() {
	require_once plugin_dir_path(__FILE__).'classes/WP/Activator.php';
	Activator::activate();
}
register_activation_hook(__FILE__, 'gutenblocks_activate_plugin' );

function gutenblocks_deactivate_plugin() {
	require_once plugin_dir_path(__FILE__).'classes/WP/Deactivator.php';
	Deactivator::deactivate();
}
register_deactivation_hook(__FILE__, 'gutenblocks_deactivate_plugin' );



// List the registered blocks in WP Admin Gutenberg Blocks settings page
$gutenblocks_registered_blocks = array();

/**
 *  Register blocks
 *
 *  id: (String) block identifier (from JS. Eg: gutenblock/plugin)
 *  name: (String) Name of the block
 *  icon: (String) Dashicon class
 *  svg: (String) SVG image instead of Dashicon
 *  category: (String) [Common, API, Woo ... ] category to display block
 *  preview_image: (String) Image URL
 *	 options_callback: (Function) Callback method to display block settings
 *  available: (Boolean) Set to False to tease a not yet available block
 *
 */

function gutenblocks_register_blocks($id, $name, $args) {
	global $gutenblocks_registered_blocks;

	$defaults = array(
		'id' => $id,
		'name' => $name,
		'icon' => 'dashicons-slides',
		'svg' => false,
		'category' => 'common',
		'description' => false,
		'preview_image' => false,
		'options_callback' => false,
		'available' => true,
	);

	$args = wp_parse_args($args, $defaults);

	$gutenblocks_registered_blocks[] = $args;
}


// List the registered blocks in WP Admin Gutenberg Blocks settings page
$gutenblocks_registered_settings = array();

/**
 * Register a setting for the Gutenblocks settings page
 *
 * name: (String) Setting slug
 * load_on_editor: (Boolean) define if the option value will be sent to the admin editor
 */

function gutenblocks_register_setting( $setting, $load_on_editor = false ) {
	global $gutenblocks_registered_settings;

	$gutenblocks_registered_settings[] = array(
		'name' => $setting,
		'editor' => $load_on_editor,
	);

}

// Launch Plugin
// Plugin Core encapsulation
$gutenblocks = new Gutenblocks();
$gutenblocks->run();
