<?php

namespace AdvancedGutenbergBlocks\Blocks;

use AdvancedGutenbergBlocks\Helpers\Consts;
use AdvancedGutenbergBlocks\Helpers\Extend;

class Ad {

  public function run() {

		// Register hooks
		add_action( 'init', array( $this, 'register_render' ) );

		// Register Block in the plugin settings page
		$args = array(
			'icon' => 'dashicons-megaphone',
			'category' => 'marketing',
			'preview_image' => Consts::get_url() . 'admin/img/blocks/banner.jpg',
			'description' => __( 'Monetize your website by inserting Ads in your content. All you need is to grab a script from Google Adsense or other and paste it below. Best use for banner ads.', 'advanced-gutenberg-blocks' ),
			'options_callback' => array( $this, 'settings' ),
		);

		Extend::register_block( 'advanced-gutenberg-blocks/ad', __( 'Banner Ad', 'advanced-gutenberg-blocks' ), $args );

		// Register settings
		Extend::register_setting( 'advanced-gutenberg-blocks-ad-script' );

  }

	public function settings() {
		echo '
		<div class="advanced-gutenberg-blocks-block__settings__option">
			<div class="advanced-gutenberg-blocks-block__settings__label">
				<label for="advanced-gutenberg-blocks-ad-script"> ' . __( 'Js script', 'advanced-gutenberg-blocks' ) . '</label>
			</div>

			<div class="advanced-gutenberg-blocks-block__settings__field">
				<textarea name="advanced-gutenberg-blocks-ad-script" rows="4">' . get_option('advanced-gutenberg-blocks-ad-script') . '</textarea>
			</div>
		</div>
		';
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
