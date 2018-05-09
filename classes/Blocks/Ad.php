<?php

namespace AdvancedGutenbergBlocks\Blocks;

use AdvancedGutenbergBlocks\Helpers\Consts;
use AdvancedGutenbergBlocks\Helpers\Extend;

class Ad {

  public function run() {

		// Register hooks
		add_action( 'init', array( $this, 'register_render' ) );

		// Register Block in the Gutenblocks settings page
		$args = array(
			'icon' => 'dashicons-megaphone',
			'category' => 'marketing',
			'preview_image' => Consts::get_url() . 'admin/img/blocks/banner.jpg',
			'description' => __( 'Monetize your website by inserting Ads in your content. All you need is to grab a script from Google Adsense or other and paste it below. Best use for banner ads.', 'advanced-gutenberg-blocks' ),
			'options_callback' => array( $this, 'settings' ),
		);

		Extend::register_block( 'gutenblocks/ad', __( 'Banner Ad', 'advanced-gutenberg-blocks' ), $args );

		// Register settings
		Extend::register_setting( 'gutenblocks-ad-script' );

  }

	public function settings() {
		echo '
		<div class="gutenblocks-block__settings__option">
			<div class="gutenblocks-block__settings__label">
				<label for="gutenblocks-ad-script"> ' . __( 'Js script', 'advanced-gutenberg-blocks' ) . '</label>
			</div>

			<div class="gutenblocks-block__settings__field">
				<textarea name="gutenblocks-ad-script" rows="4">' . get_option('gutenblocks-ad-script') . '</textarea>
			</div>
		</div>
		';
	}

	public function register_render() {

		if ( ! function_exists( 'register_block_type' ) or is_admin() ) {
			return;
		}

		register_block_type(
      'gutenblocks/ad',
      [ 'render_callback' => array( $this, 'render_block' ) ]
    );
	}

	public function render_block() {

		return '<div class="wp-block-gutenblocks-ad">' . get_option('gutenblocks-ad-script') . '</div>';
	}

}
