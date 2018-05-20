<?php

namespace AdvancedGutenbergBlocks\WP;

defined('ABSPATH') or die('Cheatin&#8217; uh?');

use AdvancedGutenbergBlocks\Helpers\Consts;

/**
 * Settings page fields registration
 *
 * @author Maximebj
 * @version 1.0.0
 * @since 1.0.0
 */

class Settings {

	public $blocks;

	public function register_hooks( $blocks ) {

		$this->blocks = $blocks;

		add_action( 'admin_menu', array( $this, 'add_admin_menu' ) );
		add_action( 'admin_init', array( $this, 'register_settings' ) );

		// Toggle block status
    add_action( 'wp_ajax_toggle_block', array( $this, 'toggle_block' ) );
	}

	public function add_admin_menu() {
		global $submenu;

		add_submenu_page(
			Consts::PLUGIN_NAME,
			__( 'Installed Blocks' , 'advanced-gutenberg-blocks' ),
			__( 'Installed Blocks' , 'advanced-gutenberg-blocks' ),
			'edit_posts',
			Consts::PLUGIN_NAME . '-installed',
			array( $this, 'settings_page' )
		);

		// add_submenu_page(
		// 	Consts::PLUGIN_NAME,
		// 	__( 'Add Block' , 'advanced-gutenberg-blocks' ),
		// 	__( 'Add Block' , 'advanced-gutenberg-blocks' ),
		// 	'edit_posts',
		// 	Consts::PLUGIN_NAME.'-install',
		// 	array( $this, 'block_install' )
		// );

		// add_submenu_page(
		// 	Consts::PLUGIN_NAME,
		// 	__( 'Import/Export' , 'advanced-gutenberg-blocks' ),
		// 	__( 'Import/Export' , 'advanced-gutenberg-blocks' ),
		// 	'edit_posts',
		// 	Consts::PLUGIN_NAME.'-import',
		// 	array( $this, 'import_export' )
		// );

		add_submenu_page(
			Consts::PLUGIN_NAME,
			__( 'Demo' , 'advanced-gutenberg-blocks' ),
			__( 'Demo' , 'advanced-gutenberg-blocks' ),
			'edit_posts',
			Consts::PLUGIN_NAME . '-demo',
			array( $this, 'demo_page' )
		);

		// Remove default submenu
		unset( $submenu[Consts::PLUGIN_NAME][0] );
	}

	public function register_settings() {
		global $pagenow;

		if ( ! ($pagenow == "admin.php" and isset( $_GET['page'] ) and $_GET['page'] == Consts::PLUGIN_NAME . '-installed' )) {
			return;
		}

		$settings = $this->blocks->get_settings();

		// Register blocks settings
		foreach( $settings as $setting ) {
			register_setting( Consts::SETTINGS_GROUP, $setting['name'] );
		}
	}

	public function settings_page() {

		$native_blocks = $this->blocks->get_native_blocks();
		$registered_blocks = $this->blocks->get_registered_blocks();
		$disabled_blocks = $this->blocks->get_disabled_blocks();
		$categories = $this->blocks->get_categories();

    require_once Consts::get_path() . 'admin/templates/settings.php';
	}

	public function toggle_block() {

		$block_type = $_POST['block'];
		$command = $_POST['command'];

		$disabled_blocks = $this->blocks->get_disabled_blocks();

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

		$blocks->set_disabled_blocks( $disabled_blocks );

		die;
	}


	public function block_install() {
		echo '<h1>Blocks MarketPlace</h1> <p>Soon...</p>';
	}

	public function import_export() {
		echo '<h1>Import / Export Settings</h1> <p>Soon...</p';
	}

	public function demo_page() {
		require_once Consts::get_path() . 'admin/templates/demo.php';
	}


}
