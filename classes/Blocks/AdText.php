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
		include Consts::get_path() . 'admin/templates/settings/adtext.php';
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
