<?php

namespace GutenbergBlocks\WP;

defined('ABSPATH') or die('Cheatin&#8217; uh?');

use GutenbergBlocks\Helpers\Consts;

use GutenbergBlocks\Services\Blocks;

/**
 * Settings page fields registration
 *
 * @author Maximebj
 * @version 1.0.0
 * @since 1.0.0
 */

class Settings {

	public function register_hooks() {
		add_action( 'admin_menu', array( $this, 'add_admin_menu' ) );
		add_action( 'admin_init', array( $this, 'register_settings' ) );

		// Toggle block status
    add_action( 'wp_ajax_toggle_block', array( $this, 'toggle_block' ) );
	}

	public function add_admin_menu() {

		add_menu_page(
			__( 'Gutenberg Blocks' , 'gutenblocks' ),
			__( 'Gutenberg Blocks' , 'gutenblocks' ),
			'edit_posts',
			Consts::PLUGIN_NAME,
			array( $this, 'settings_page' ),
			'dashicons-screenoptions',
			100
		);
	}

	public function settings_page(){
    require_once Consts::get_path() . 'admin/templates/settings.php';
	}

	public function register_settings() {
		register_setting( 'gutenberg-blocks-settings', 'gutenberg-blocks-disabled' );
	}

	public function toggle_block() {
		$block_type = $_POST['block'];
		$command = $_POST['command'];

		$blocks = new Blocks();
		$disabled_blocks = $blocks->get_disabled_blocks();

		// Add block name in disabled list
		if ( $command == "disable" ) {

			$disabled_blocks[] = $block_type;
			array_unique( $disabled_blocks );

		// Remove block from disabled list
		} else {
			$key = array_search( $block_type, $disabled_blocks );
			unset( $disabled_blocks[ $key ] );
		}

		$blocks->set_disabled_blocks($disabled_blocks);

		die;
	}


}
