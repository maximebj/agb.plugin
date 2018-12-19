<?php

namespace AdvancedGutenbergBlocks\WP;

defined('ABSPATH') or die('Cheatin&#8217; uh?');

use AdvancedGutenbergBlocks\Helpers\Consts;
use AdvancedGutenbergBlocks\Services\Blocks;

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
			__( 'Manage Blocks' , 'advanced-gutenberg-blocks' ),
			__( 'Manage Blocks' , 'advanced-gutenberg-blocks' ),
			apply_filters( 'AGB-manage-blocks-capabilities', 'edit_posts' ),
			Consts::PLUGIN_NAME . '-manager',
			array( $this, 'blocks_management_page' )
		);

		add_submenu_page(
			Consts::PLUGIN_NAME,
			__( 'Disable WP Blocks' , 'advanced-gutenberg-blocks' ),
			__( 'Disable WP Blocks' , 'advanced-gutenberg-blocks' ),
			apply_filters( 'AGB-disable-blocks-capabilities', 'manage_options' ),
			Consts::PLUGIN_NAME . '-disable',
			array( $this, 'disable_blocks_page' )
		);

		add_submenu_page(
			Consts::PLUGIN_NAME,
			__( 'Tweak Editor' , 'advanced-gutenberg-blocks' ),
			__( 'Tweak Editor' , 'advanced-gutenberg-blocks' ),
			apply_filters( 'AGB-editor-settings-capabilities', 'manage_options' ),
			Consts::PLUGIN_NAME.'-settings',
			array( $this, 'editor_settings_page' )
		);

		// Remove default submenu
		unset( $submenu[Consts::PLUGIN_NAME][0] );
	}

	// Register Settings in WordPress
	public function register_settings() {
		global $pagenow;

		$settings = Blocks::get_settings();

		// Register blocks settings
		foreach( $settings as $setting ) {
			register_setting( 'advanced-gutenberg-blocks-settings', $setting['name'] );
		}

		// Editor Settings
		register_setting( 'advanced-gutenberg-blocks-editor-settings', 'advanced-gutenberg-blocks_editor_width' );
		register_setting( 'advanced-gutenberg-blocks-editor-settings', 'advanced-gutenberg-blocks_editor_wide_width' );
		register_setting( 'advanced-gutenberg-blocks-editor-settings', 'advanced-gutenberg-blocks_editor_colors' );
		register_setting( 'advanced-gutenberg-blocks-editor-settings', 'advanced-gutenberg-blocks_editor_custom_color' );
		register_setting( 'advanced-gutenberg-blocks-editor-settings', 'advanced-gutenberg-blocks_editor_font_sizes' );
		register_setting( 'advanced-gutenberg-blocks-editor-settings', 'advanced-gutenberg-blocks_editor_custom_font_size' );
		register_setting( 'advanced-gutenberg-blocks-editor-settings', 'advanced-gutenberg-blocks_editor_default_styles' );
		register_setting( 'advanced-gutenberg-blocks-editor-settings', 'advanced-gutenberg-blocks_editor_responsive_embeds' );
		register_setting( 'advanced-gutenberg-blocks-editor-settings', 'advanced-gutenberg-blocks_editor_wide_blocks' );

	}


	// Ajax function to disable and enable blocks from the settings page
	public function toggle_block() {

		$block_type = $_POST['block'];
		$command = $_POST['command'];

		$disabled_blocks = Blocks::get_disabled_blocks();

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

		Blocks::set_disabled_blocks( $disabled_blocks );

		die;
	}


	public function blocks_management_page() {

		$native_blocks = Blocks::get_native_blocks(); // To remove
		$registered_blocks = Blocks::get_registered_blocks();
		$disabled_blocks = Blocks::get_disabled_blocks();
		$categories = Blocks::get_categories();

    require_once Consts::get_path() . 'admin/templates/blocks_management.php';
	}

	public function disable_blocks_page() {

		$native_blocks = Blocks::get_native_blocks();
		$disabled_blocks = Blocks::get_disabled_blocks();

		require_once Consts::get_path() . 'admin/templates/disable_blocks.php';
	}

	public function editor_settings_page() {
    require_once Consts::get_path() . 'admin/templates/editor_settings.php';
	}

}
