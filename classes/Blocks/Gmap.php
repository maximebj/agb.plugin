<?php

namespace GutenbergBlocks\Blocks;

use GutenbergBlocks\Helpers\Consts;

class Gmap {

  public function run() {

		// Register hooks
		add_action( 'init', array( $this, 'register_render' ) );

		// Register Block in the Gutenblocks settings page
		$args = array(
			'icon' => 'dashicons-location-alt',
			'category' => 'apis',
			'preview_image' => Consts::get_url().'admin/img/blocks/map.jpg',
			'description' => __( "Insert a Google Map in your content, the easy way.", 'gutenblocks' ),
			'options_callback' => array( $this, 'settings' ),
		);

		gutenblocks_register_blocks( 'gutenblocks/gmap', __( 'Google Map', 'gutenblocks' ), $args );

		// Register settings
		gutenblocks_register_setting( 'gutenblocks-gmap-api-key' );
  }

	public function settings() {
		echo '
		<div class="gutenblocks-block__settings__option">
			<div class="gutenblocks-block__settings__label">
				<label for="gutenblocks-gmap-api-key"> ' . __( 'Api Key', 'gutenblocks' ) . '</label>
			</div>

			<div class="gutenblocks-block__settings__field">
				<input type="text" name="gutenblocks-gmap-api-key" placeholder="' . __( 'Insert your Google Maps API Key here', 'gutenblocks' ) . '" value="' . get_option('gutenblocks-gmap-api-key') . '">
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

}
