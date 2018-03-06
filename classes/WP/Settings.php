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
		global $submenu;

		add_submenu_page(
			Consts::PLUGIN_NAME,
			__( 'Installed Blocks' , 'gutenblocks' ),
			__( 'Installed Blocks' , 'gutenblocks' ),
			'edit_posts',
			Consts::PLUGIN_NAME.'-installed',
			array( $this, 'settings_page' )
		);

		add_submenu_page(
			Consts::PLUGIN_NAME,
			__( 'Add Block' , 'gutenblocks' ),
			__( 'Add Block' , 'gutenblocks' ),
			'edit_posts',
			Consts::PLUGIN_NAME.'-install',
			array( $this, 'block_install' )
		);

		add_submenu_page(
			Consts::PLUGIN_NAME,
			__( 'Import/Export' , 'gutenblocks' ),
			__( 'Import/Export' , 'gutenblocks' ),
			'edit_posts',
			Consts::PLUGIN_NAME.'-import',
			array( $this, 'import_export' )
		);

		// Remove default submenu
		unset( $submenu[Consts::PLUGIN_NAME][0] );
	}



	public function settings_page(){

		$blocks = new Blocks();

		$native_blocks = $blocks->get_native_blocks();
		$disabled_blocks = $blocks->get_disabled_blocks();
		$registered_blocks = $blocks->get_registered_blocks();
		$categories = $blocks->get_categories();

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

			$keys = array_keys( $disabled_blocks, $block_type );

			foreach( $keys as $key ) {
				unset( $disabled_blocks[ $key ] );
			}

		}

		$blocks->set_disabled_blocks($disabled_blocks);

		die;
	}


	public function block_install() {
		echo '<h1>Blocks MarketPlace</h1> <p>Soon...</p>';
	}

	public function import_export() {
		echo '<h1>Import / Export Settings</h1> <p>Soon...</p';
	}


}
