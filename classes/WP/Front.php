<?php

namespace AdvancedGutenbergBlocks\WP;

defined('ABSPATH') or die('Cheatin&#8217; uh?');

use AdvancedGutenbergBlocks\Helpers\Consts;

/**
 * Styles and script enqueued on public website
 *
 * @author Maximebj
 * @version 1.0.0
 * @since 1.0.0
 */

class Front {

	public function register_hooks() {
		add_action('wp_enqueue_scripts', array($this, 'enqueue_assets'));
	}

	public function enqueue_assets() {

		// Required for som blocks like buttons
		// TODO : improve by checking if the block is in the content
		wp_enqueue_style( 'dashicons' );
	}

}
