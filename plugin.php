<?php

/**
 * Plugin Name: Gutenberg Blocks
 * Plugin URI: #
 * Description: Awesome customizable blocks for the new WordPress Editor
 * Author: maximebj
 * Author URI: https://dysign.fr
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

defined('ABSPATH') or die('Cheatin&#8217; uh?');

use GutenbergBlocks\Gutenblocks;

require plugin_dir_path( __FILE__ ) . 'classes/Gutenblocks.php';

// Languages
load_plugin_textdomain( 'gutenblocks', false, basename( __DIR__ ) . '/languages' );


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
