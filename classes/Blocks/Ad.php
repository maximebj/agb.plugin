<?php

namespace GutenbergBlocks\Blocks;

use GutenbergBlocks\Helpers\Consts;

class Ad {

  public function run() {

		// Register hooks
    add_action( 'admin_init', array( $this, 'register_settings' ) );


		// Register Block in the Gutenblocks settings page
		$args = array(
			'icon' => 'dashicons-megaphone',
			'category' => 'common',
			'options_callback' => array( $this, 'settings' ),
			'description' => __( 'Monetize your website by inserting Ads in your content. All you need is to grab a script from Google Adsense or other and paste it below.', 'gutenblocks' ),
		);

		gutenblocks_register_blocks( 'gutenblocks/ad', __( 'Advertisement', 'gutenblocks' ), $args );

		// PHP Rendering of the block
		register_block_type(
      'gutenblocks/ad',
      [ 'render_callback' => array( $this, render_block ) ]
    );
  }

	public function register_settings() {
		gutenblocks_register_setting( 'gutenblocks-ad-script' );
	}

	public function settings() {
		echo '
		<div class="gutenblocks-block__settings__option">
			<div class="gutenblocks-block__settings__label">
				<label for="gutenblocks-ad-script"> ' . __( 'Js script', 'gutenblocks' ) . '</label>
			</div>

			<div class="gutenblocks-block__settings__field">
				<textarea name="gutenblocks-ad-script" rows="4">' . get_option('gutenblocks-ad-script') . '</textarea>
			</div>
		</div>
		';
	}

	public function render_block() {

		return '<div class="wp-block-gutenblocks-ad">' . get_option('gutenblocks-ad-script') . '</div>';
	}

}
