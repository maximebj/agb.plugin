<?php

namespace GutenbergBlocks\WP;

defined('ABSPATH') or die('Cheatin&#8217; uh?');

use GutenbergBlocks\Helpers\Consts;

/**
 * Settings page fields registration
 *
 * @author Maximebj
 * @version 1.0.0
 * @since 1.0.0
 */

class Settings {

	public function register_hooks() {
		add_action('admin_menu', array($this, 'add_admin_menu'));
		add_action('admin_init', array($this, 'register_settings'));
	}

	public function add_admin_menu() {

		add_menu_page(
			__( 'Gutenberg Blocks' , 'gutenblocks'),
			__( 'Gutenberg Blocks' , 'gutenblocks'),
			'edit_posts',
			Consts::PLUGIN_NAME,
			array($this, 'settings_page'),
			'dashicons-screenoptions',
			100
		);
	}

	public function settings_page(){
    require_once Consts::get_path().'admin/templates/settings.php';
	}

	public function register_settings() {
		register_setting('gutenberg-blocks-settings', 'gutenberg-native-blocks-disabled');
	}


}
