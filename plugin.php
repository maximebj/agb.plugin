<?php

defined('ABSPATH') or die('Cheatin&#8217; uh?');

use GutenbergBlocks\Initializer;
use GutenbergBlocks\WP\Activator;
use GutenbergBlocks\WP\Deactivator;

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

if (!defined('WPINC')) {
 	die;
}

function activate_gutenberg_blocks() {
 	require_once plugin_dir_path(__FILE__).'classes/WP/Activator.php';
 	Activator::activate();
}

 function deactivate_gutenberg_blocks() {
 	require_once plugin_dir_path(__FILE__).'classes/WP/Deactivator.php';
 	Deactivator::deactivate();
}

register_activation_hook(__FILE__, 'activate_gutenberg_blocks' );
register_deactivation_hook(__FILE__, 'deactivate_gutenberg_blocks' );

load_plugin_textdomain('gutenblocks', false, basename(__DIR__).'/languages');

require plugin_dir_path(__FILE__).'classes/Initializer.php';
$gutenblocks = new Initializer();
$gutenblocks->run();
