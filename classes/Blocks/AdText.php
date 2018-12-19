<?php

namespace AdvancedGutenbergBlocks\Blocks;

use AdvancedGutenbergBlocks\Helpers\Consts;
use AdvancedGutenbergBlocks\Services\Blocks;

class AdText {

  public function run() {

		// Register hooks
		add_action( 'enqueue_block_editor_assets', array( $this, 'arguments_for_js' ) );

		// Register Block in the plugin settings page
		$args = array(
			'icon' => 'dashicons-align-right',
			'category' => 'marketing',
			'preview_image' => Consts::get_url() . 'admin/img/blocks/ad.jpg',
			'description' => __( 'Monetize your website by inserting Ads in your content. This blocks allows you to write a text on the left and display ad on the right.', 'advanced-gutenberg-blocks' ),
			'options_callback' => array( $this, 'settings' ),
			'require' => __('This block requires a Google ads unit code'),
		);

		Blocks::register_block( 'advanced-gutenberg-blocks/adtext', __( 'Text + Rectangle Ad', 'advanced-gutenberg-blocks' ), $args );

		// Register settings
		Blocks::register_setting( 'advanced-gutenberg-blocks-adtext-script' );
  }

	public function settings() {
		echo '
			<div class="AGB-form__setting">
				<div class="AGB-form__label is-required">
					<label for="advanced-gutenberg-blocks-adtext-script"> ' . __( 'JS unit code', 'advanced-gutenberg-blocks' ) . '</label>
				</div>

				<div class="AGB-form__field">
					<textarea name="advanced-gutenberg-blocks-adtext-script" rows="4">' . get_option('advanced-gutenberg-blocks-adtext-script') . '</textarea>
				</div>
			</div>

			<p class="AGB-form__help">' . __( 'Grab this code from your Adsense account.', 'advanced-gutenberg-blocks' ) . ' </p>
		';
	}

	public function arguments_for_js() {
		wp_localize_script(
      Consts::BLOCKS_SCRIPT,
      'advancedGutenbergBlocksAdTextSettings',
      array(
        'script' => get_option('advanced-gutenberg-blocks-adtext-script'),
      )
    );
	}
}
