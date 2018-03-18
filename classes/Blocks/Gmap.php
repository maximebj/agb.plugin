<?php

namespace GutenbergBlocks\Blocks;

use GutenbergBlocks\Helpers\Consts;

class Gmap {

  public function run() {

		// Register hooks
		add_action( 'init', array( $this, 'register_render' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ) );

		// Register Block in the Gutenblocks settings page
		$args = array(
			'icon' => 'dashicons-location-alt',
			'category' => 'apis',
			'preview_image' => Consts::get_url().'admin/img/blocks/gmap.jpg',
			'description' => __( "Insert a Google Map in your content, the easy way.", 'gutenblocks' ),
			'options_callback' => array( $this, 'settings' ),
		);

		gutenblocks_register_blocks( 'gutenblocks/gmap', __( 'Google Map', 'gutenblocks' ), $args );

		// Register settings
		gutenblocks_register_setting( 'gutenblocks-gmap-api-key' );
  }

	public function settings() {
		echo '
		<p class="gutenblocks-block__settings__description">' . __( 'The API key is mandatory, you can create one on the <a href="https://developers.google.com/maps/documentation/javascript/" target="_blank">Google Maps JS Api page</a>. ' ) . '</p>

		<div class="gutenblocks-block__settings__option">
			<div class="gutenblocks-block__settings__label">
				<label for="gutenblocks-gmap-api-key"> ' . __( 'Api Key', 'gutenblocks' ) . '</label>
			</div>

			<div class="gutenblocks-block__settings__field">
				<input type="text" name="gutenblocks-gmap-api-key" placeholder="' . __( 'Insert your Google Maps API Key here', 'gutenblocks' ) . '" value="' . get_option( 'gutenblocks-gmap-api-key' ) . '">
			</div>
		</div>
		';
	}

	public function register_render() {

		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}

		register_block_type(
      'gutenblocks/post',
      [ 'render_callback' => array( $this, 'render_block' ) ]
    );
	}

	public function render_block( $attributes ) {

		if( ! isset( $attributes['address'] ) ) {
			return;
		}

		$output = "";
		ob_start();
		include Consts::get_path() . '/admin/templates/post.php';
		$output = ob_get_contents();
		ob_end_clean();

		return $output;
	}

	public function editor_assets() {
		$api_key = get_option( 'gutenblocks-gmap-api-key' );

		if ( $api_key == "" ) {

			// Block will display a notice than the API key is not yet set
			wp_localize_script(
				Consts::BLOCKS_SCRIPT,
				'gutenblocksGmap',
				array(
					'error' => 'noApiKey',
				)
			);
			return;
		}

		// Load Gmap
		wp_enqueue_script(
			Consts::BLOCKS_SCRIPT . '-gmap',
			'https://maps.googleapis.com/maps/api/js?key=' . $api_key,
			[ Consts::BLOCKS_SCRIPT ],
			true
		);

	}

}
