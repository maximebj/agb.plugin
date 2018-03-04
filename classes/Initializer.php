<?php

namespace GutenbergBlocks;

defined('ABSPATH') or die('Cheatin&#8217; uh?');

use GutenbergBlocks\Helpers\Consts;

use GutenbergBlocks\WP\Admin;
use GutenbergBlocks\WP\Front;
use GutenbergBlocks\WP\Gutenberg;
use GutenbergBlocks\WP\Settings;

/**
 * Initialize all the needed plugin classes
 *
 * @author Maximebj
 * @version 1.0.0
 * @since 1.0.0
 */

class Initializer {

	public function run() {

		$path = plugin_dir_path(dirname(__FILE__));

		// Load Classes
		require_once $path.'classes/Helpers/Consts.php';

		require_once $path.'classes/WP/Admin.php';
		require_once $path.'classes/WP/Front.php';
		require_once $path.'classes/WP/Gutenberg.php';
		require_once $path.'classes/WP/Settings.php';

		// Init Classes and Hooks
		$class_admin = new Admin();
    $class_admin->register_hooks();

		$class_public = new Front();
    $class_public->register_hooks();

		$class_gutenberg = new Gutenberg();
		$class_gutenberg->register_hooks();

		$class_settings = new Settings();
		$class_settings->register_hooks();

	}

	public function get_plugin_name() {
		return Consts::PLUGIN_NAME;
	}

	public function get_version() {
		return Consts::VERSION;
	}

}
