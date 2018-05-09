<?php

namespace AdvancedGutenbergBlocks\Helpers;

defined('ABSPATH') or die('Cheatin&#8217; uh?');

/**
 * Extensibility API
 *
 * @author Maximebj
 * @version 1.0.0
 * @since 1.2.0
 */

abstract class Extend {

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

	static function register_block($id, $name, $args) {
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

		$AdvancedGutenbergBlocks->set_block( $args );
	}

	/**
	 * Register a setting for the plugin settings page
	 *
	 * name: (String) Setting slug
	 * load_on_editor: (Boolean) define if the option value will be sent to the admin editor
	 */

	static function register_setting( $setting, $load_on_editor = false ) {
		global $AdvancedGutenbergBlocks;

		$args = array(
			'name' => $setting,
			'editor' => $load_on_editor,
		);

		$AdvancedGutenbergBlocks->set_setting( $args );

	}

}
