<?php

namespace AdvancedGutenbergBlocks;

defined('ABSPATH') or die('Cheatin&#8217; uh?');

/**
 * Extensibility methods for developers
 *
 * @author Maximebj
 * @version 1.0.0
 * @since 1.0.0
 */

class Extend {

	// List the registered blocks in WP Admin Gutenberg Blocks settings page
	private $registered_blocks = array();

	// List the registered blocks in WP Admin Gutenberg Blocks settings page
	private $registered_settings = array();

	/**
	 * Register blocks and settings (use Extend class to do this)
	 */

	public function set_block( $args ) {
		$this->$registered_blocks[] = $args;
	}

	public function set_setting( $args ) {
		$this->$registered_settings[] = $args;
	}

	public function get_blocks() {
		return $this->$registered_blocks;
	}

	public function get_settings() {
		return $this->$registered_settings;
	}

	/**
	 *  Register blocks
	 *
	 *  id: (String) block identifier (from JS. Eg: gutenblock/plugin)
	 *  name: (String) Name of the block
	 *  icon: (String) Dashicon class
	 *  svg: (String) SVG image instead of Dashicon
	 *  category: (String) [Common, API, Woo ... ] category to display block
	 *  preview_image: (String) Image URL
	 *	options_callback: (Function) Callback method to display block settings
	 *  available: (Boolean) Set to False to tease a not yet available block
	 */

	public function register_block($id, $name, $args) {
		global $AdvancedGutenbergBlocks;

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

		$this->set_block($args);
	}

	/**
	 * Register a setting for the Gutenblocks settings page
	 *
	 * name: (String) Setting slug
	 * load_on_editor: (Boolean) define if the option value will be sent to the admin editor
	 */

	public function register_setting( $setting, $load_on_editor = false ) {
		global $AdvancedGutenbergBlocks;

		$args = array(
			'name' => $setting,
			'editor' => $load_on_editor,
		);

		$this->set_setting($args);

	}
}
