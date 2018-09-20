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
			'description' => __( "Do you like how Facebook, Twitter or Slack display a sweet preview to a website in a card? Don't be jealous, we've made the same for you in WordPress!", 'advanced-gutenberg-blocks' ),
			'options_callback' => array( $this, 'settings' ),
		);

		Blocks::register_block( 'advanced-gutenberg-blocks/giphy', __( 'Giphy', 'advanced-gutenberg-blocks' ), $args );

		// Register settings
		Blocks::register_setting( 'advanced-gutenberg-blocks-giphy-api-key' );
  }

	public function settings() {
		echo '
			<p class="AGB-block__settings__description">' . __( 'The API key is mandatory, you can create one on the <a href="https://www.opengraph.io/" target="_blank">OpenGraph.io API service</a>. ' ) . '</p>

			<div class="AGB-block__settings__option">
				<div class="AGB-block__settings__label">
					<label for="advanced-gutenberg-blocks-giphy-api-key"> ' . __( 'Api Key', 'advanced-gutenberg-blocks' ) . '</label>
				</div>

				<div class="AGB-block__settings__field">
					<input type="text" name="advanced-gutenberg-blocks-giphy-api-key" placeholder="' . __( 'Insert your Giphy API Key here', 'advanced-gutenberg-blocks' ) . '" value="' . get_option( 'advanced-gutenberg-blocks-giphy-api-key' ) . '">
				</div>
			</div>
		';
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
