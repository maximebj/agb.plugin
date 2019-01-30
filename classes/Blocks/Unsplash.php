<?php

namespace AdvancedGutenbergBlocks\Blocks;

use AdvancedGutenbergBlocks\Helpers\Consts;
use AdvancedGutenbergBlocks\Services\Blocks;

class Unsplash {

  public function run() {

		// Register Hooks
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ) );

		// Register Block in the plugin settings page
		$args = array(
			'icon' => 'dashicons-camera',
			'category' => 'apis',
			'preview_image' => Consts::get_url() . 'admin/img/blocks/unsplash.jpg',
			'description' => __( "Find beautiful pictures from the best free photos stock.", 'advanced-gutenberg-blocks' ),
			'options_callback' => array( $this, 'settings' ),
			'require' => __('This block requires an API key'),
		);

		Blocks::register_block( 'advanced-gutenberg-blocks/unsplash', __( 'Unsplash', 'advanced-gutenberg-blocks' ), $args );

		// Register settings
		Blocks::register_setting( 'advanced-gutenberg-blocks-unsplash-access-key' );
		Blocks::register_setting( 'advanced-gutenberg-blocks-unsplash-secret-key' );
  }

	public function settings() {
		include Consts::get_path() . 'admin/templates/settings/unsplash.php';
	}

	public function editor_assets() {
		$access_key = get_option( 'advanced-gutenberg-blocks-unsplash-access-key' );
		$secret_key = get_option( 'advanced-gutenberg-blocks-unsplash-secret-key' );

		$data = array();

		if ( $access_key == "") {
			$data['error'] = 'noApiKey';
		} else {
			$data['accessKey'] = $access_key;
		}

		wp_localize_script(
			Consts::BLOCKS_SCRIPT,
			'advancedGutenbergBlocksUnsplash',
			$data
		);

	}
}
