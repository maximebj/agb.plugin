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
		echo '
			<div class="AGB-form__setting">
				<div class="AGB-form__label is-required">
					<label for="advanced-gutenberg-blocks-unsplash-access-key"> ' . __( 'API Access Key', 'advanced-gutenberg-blocks' ) . '</label>
				</div>

				<div class="AGB-form__field">
					<input type="text" name="advanced-gutenberg-blocks-unsplash-access-key" placeholder="' . __( 'Insert your Access Key here', 'advanced-gutenberg-blocks' ) . '" value="' . get_option( 'advanced-gutenberg-blocks-unsplash-access-key' ) . '">
				</div>
			</div>

			<p class="AGB-form__help">' . __( 'The API Access Key is mandatory, you can create an App on the <a href="https://unsplash.com/oauth/applications" target="_blank">Unsplash Developers service</a>. ' ) . '</p>
		';
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
