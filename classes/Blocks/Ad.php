<?php

namespace AdvancedGutenbergBlocks\Blocks;

use AdvancedGutenbergBlocks\Helpers\Consts;
use AdvancedGutenbergBlocks\Services\Blocks;

class Ad {

  public function run() {

		// Register hooks
		add_action( 'init', array( $this, 'register_render' ) );

		// Register Block in the plugin settings page
		$args = array(
			'icon' => 'dashicons-megaphone',
			'category' => 'marketing',
			'preview_image' => Consts::get_url() . 'admin/img/blocks/banner.jpg',
			'description' => __( 'Monetize your website by inserting Ads in your content. Best use for banner ads.', 'advanced-gutenberg-blocks' ),
			'options_callback' => array( $this, 'settings' ),
			'require' => __('This block requires a Google ads unit code'),
		);

		Blocks::register_block( 'advanced-gutenberg-blocks/ad', __( 'Banner Ad', 'advanced-gutenberg-blocks' ), $args );

		// Register settings
		Blocks::register_setting( 'advanced-gutenberg-blocks-ad-script' );

  }

	public function settings() {
		include Consts::get_path() . 'admin/templates/settings/ad.php';
	}

	public function register_render() {

		if ( ! function_exists( 'register_block_type' ) or is_admin() ) {
			return;
		}

		register_block_type(
      'advanced-gutenberg-blocks/ad',
      [ 'render_callback' => array( $this, 'render_block' ) ]
    );
	}

	public function render_block() {

		return '<div class="wp-block-advanced-gutenberg-blocks-ad">' . get_option('advanced-gutenberg-blocks-ad-script') . '</div>';
	}

}
