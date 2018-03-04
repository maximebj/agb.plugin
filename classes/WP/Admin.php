<?php

namespace GutenbergBlocks\WP;

defined('ABSPATH') or die('Cheatin&#8217; uh?');

use GutenbergBlocks\Helpers\Consts;

/**
 * Admin enqueue styles, scripts and menu declaration
 *
 * @author Maximebj
 * @version 1.0.0
 * @since 1.0.0
 */

class Admin {

	public function register_hooks() {
		add_action('admin_enqueue_scripts', array($this, 'enqueue_assets'));
		add_action('admin_menu', array( $this, 'add_admin_menu'));
	}

	public function enqueue_assets($hook) {


	}

	public function add_admin_menu() {

		add_menu_page(
			__( 'Gutenberg Blocks' , 'gutenblocks'),
			__( 'Gutenberg Blocks' , 'gutenblocks'),
			'edit_posts',
			Consts::PLUGIN_NAME,
			null,
			'dashicons-screenoptions',
			100
		);
	}

}
