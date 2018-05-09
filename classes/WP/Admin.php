<?php

namespace AdvancedGutenbergBlocks\WP;

defined('ABSPATH') or die('Cheatin&#8217; uh?');

use AdvancedGutenbergBlocks\Helpers\Consts;

/**
 * Admin enqueue styles, scripts and menu declaration
 *
 * @author Maximebj
 * @version 1.0.0
 * @since 1.0.0
 */

class Admin {

	public function register_hooks() {
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_assets' ) );
		add_action( 'admin_menu', array( $this, 'add_admin_menu' ) );
	}

	public function enqueue_assets($hook) {

		if( strpos( $hook, Consts::PLUGIN_NAME ) === false ) {
			return;
		}

		wp_enqueue_style(
			Consts::PLUGIN_NAME,
			Consts::get_url().'admin/css/gutenblocks-admin.css',
			array(),
			Consts::VERSION,
			'all'
		);

		wp_enqueue_script(
			Consts::PLUGIN_NAME.'-settings',
			Consts::get_url().'admin/js/gutenblocks-settings.js',
			array('jquery'),
			Consts::VERSION,
			false
		);
	}

	public function add_admin_menu() {

		add_menu_page(
			__( 'Blocks' , 'advanced-gutenberg-blocks' ),
			__( 'Blocks' , 'advanced-gutenberg-blocks' ),
			'edit_posts',
			Consts::PLUGIN_NAME,
			null,
			'dashicons-screenoptions',
			65
		);

	}

}
