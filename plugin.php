<?php

/**
 * Plugin Name: Advanced Gutenberg Blocks
 * Plugin URI: https://advanced-gutenberg-blocks.com
 * Description: Awesome customizable blocks for the new WordPress Editor
 * Author: maximebj
 * Author URI: https://advanced-gutenberg-blocks.com/
 * Version: 1.8.5
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * Text Domain: advanced-gutenberg-blocks
 */

defined('ABSPATH') or die('Cheatin&#8217; uh?');

use AdvancedGutenbergBlocks\AdvancedGutenbergBlocks;

require plugin_dir_path( __FILE__ ) . 'classes/AdvancedGutenbergBlocks.php';

$AdvancedGutenbergBlocks = new AdvancedGutenbergBlocks();
$AdvancedGutenbergBlocks->run();