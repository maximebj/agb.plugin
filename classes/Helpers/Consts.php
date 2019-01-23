<?php

namespace AdvancedGutenbergBlocks\Helpers;

defined('ABSPATH') or die('Cheatin&#8217; uh?');

/**
 * Constants, Strings, values shared by the plugin
 *
 * @author Maximebj
 * @version 1.0.0
 * @since 1.0.0
 */

abstract class Consts {

	const PLUGIN_NAME = 'advanced-gutenberg-blocks';
	const VERSION = '1.8.5';
	const BLOCKS_SCRIPT = 'advanced-gutenberg-blocks-editor';

	// Plugin Path for includes
	public static function get_path() {
		return WP_PLUGIN_DIR . '/' . Consts::PLUGIN_NAME . '/';
	}

	// Plugin URL for assets enqueing
  public static function get_url() {
    return plugin_dir_url( dirname( dirname( __FILE__ ) ) );
  }

}
