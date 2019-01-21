<?php

namespace AdvancedGutenbergBlocks\Blocks;

use AdvancedGutenbergBlocks\Helpers\Consts;
use AdvancedGutenbergBlocks\Services\Blocks;

class Card {

  public function run() {

		// Register Hooks
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ) );

		// Register Block in the plugin settings page
		$args = array(
			'icon' => 'dashicons-admin-links',
			'category' => 'apis',
			'preview_image' => Consts::get_url().'admin/img/blocks/card.jpg',
			'description' => __( "Do you like how Facebook, Twitter or Slack display a sweet preview to a website in a card? Don't be jealous, we've made the same for you in WordPress!", 'advanced-gutenberg-blocks' ),
			'options_callback' => array( $this, 'settings' ),
			'require' => __('This block requires an API key'),
		);

		Blocks::register_block( 'advanced-gutenberg-blocks/card', __( 'Website card preview', 'advanced-gutenberg-blocks' ), $args );

		// Register settings
		Blocks::register_setting( 'advanced-gutenberg-blocks-opengraph-api-key' );
  }

	public function settings() {
		include Consts::get_path() . 'admin/templates/settings/card.php';
	}

	public function editor_assets() {
		$api_key = get_option( 'advanced-gutenberg-blocks-opengraph-api-key' );

		$data = array();

		if ( $api_key == "" ) {
			$data['error'] = 'noApiKey';
		} else {
			$data['apiKey'] = $api_key;
		}

		wp_localize_script(
			Consts::BLOCKS_SCRIPT,
			'advancedGutenbergBlocksOpenGraph',
			$data
		);

	}
}
