<?php

namespace AdvancedGutenbergBlocks\Blocks;

use AdvancedGutenbergBlocks\Helpers\Consts;
use AdvancedGutenbergBlocks\Services\Blocks;

class Giphy {

  public function run() {

		// Register Hooks
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ) );

		// Register Block in the plugin settings page
		$args = array(
			'icon' => 'dashicons-images-alt2',
			'category' => 'apis',
			'preview_image' => Consts::get_url() . 'admin/img/blocks/giphy.jpg',
			'description' => __( "Search and insert a GIF from Giphy.", 'advanced-gutenberg-blocks' ),
			'options_callback' => array( $this, 'settings' ),
			'require' => __('This block requires an API key'),
		);

		Blocks::register_block( 'advanced-gutenberg-blocks/giphy', __( 'Giphy', 'advanced-gutenberg-blocks' ), $args );

		// Register settings
		Blocks::register_setting( 'advanced-gutenberg-blocks-giphy-api-key' );
  }

	public function settings() {
		include Consts::get_path() . 'admin/templates/settings/giphy.php';
	}

	public function editor_assets() {
		$api_key = get_option( 'advanced-gutenberg-blocks-giphy-api-key' );

		$data = array();

		if ( $api_key == "" ) {
			$data['error'] = 'noApiKey';
		} else {
			$data['apiKey'] = $api_key;
		}

		wp_localize_script(
			Consts::BLOCKS_SCRIPT,
			'advancedGutenbergBlocksGiphy',
			$data
		);

	}
}
