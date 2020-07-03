<?php

namespace AdvancedGutenbergBlocks\Blocks;

defined( 'ABSPATH' ) || exit;

use AdvancedGutenbergBlocks\Helpers\Consts;
use AdvancedGutenbergBlocks\Services\Blocks;

class Card {

  public function run() {

		// Register Hooks
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ) );
		add_action( 'wp_ajax_agb_fetch_card', array( $this, 'fetch_card' ) );

		// Register Block in the plugin settings page
		$args = array(
			'icon' => 'dashicons-admin-links',
			'category' => 'apis',
			'preview_image' => Consts::get_url().'admin/img/blocks/card.jpg',
			'description' => __( "Do you like how Facebook, Twitter or Slack display a sweet preview to a website in a card? Don't be jealous, we've made the same for you in WordPress!", 'advanced-gutenberg-blocks' ),
		);

		Blocks::register_block( 'advanced-gutenberg-blocks/card', __( 'Website card preview', 'advanced-gutenberg-blocks' ), $args );
  }

	public function editor_assets() {
		$api_key = get_option( 'advanced-gutenberg-blocks-opengraph-api-key' );

		$data = array(
			'ajax_url' => admin_url( 'admin-ajax.php' ),
			'nonce' => wp_create_nonce( 'agb_card' ),
		);

		if ( $api_key == "" ) {
			$data['error'] = 'noApiKey';
		} else {
			$data['apiKey'] = $api_key;
		}

		wp_localize_script(
			Consts::PLUGIN_NAME . '-editor',
			'advancedGutenbergBlocksOpenGraph',
			$data
		);

	}

	public function fetch_card() {
		check_ajax_referer( 'agb_card' );

		$url = $_GET['url'];

		$embed = \Embed\Embed::create( $url );

		wp_send_json_success( array(
			'title' => $embed->title,
			'description' => $embed->description,
			'url' => $embed->url,
			'type' => $embed->type,
			'image' => $embed->image,
			'imageWidth' => $embed->imageWidth,
			'imageHeight' => $embed->imageHeight,
			'authorName' => $embed->authorName,
			'providerName' => $embed->providerName,
			'providerIcons' => $embed->providerIcons,
		) );
	}
}
