<?php

namespace GutenbergBlocks\Blocks;

use GutenbergBlocks\Helpers\Consts;

class AddToCart {

  public function run() {

		// Register hooks
		add_action( 'init', array( $this, 'register_render' ) );

		// Register Block in the Gutenblocks settings page
		$args = array(
			'icon' => 'dashicons-cart',
			'category' => 'woo',
			'description' => __( 'An add to cart button to quickly purchase a WooCommerce product', 'gutenblocks' ),
		);

		gutenblocks_register_blocks( 'gutenblocks/addtocart', __( 'Add to cart button', 'gutenblocks' ), $args );
  }

	public function register_render() {

		// PHP Rendering of the block
		register_block_type(
      'gutenblocks/addtocart',
      [ 'render_callback' => array( $this, render_block ) ]
    );
	}

	public function render_block() {

		ob_start();
		include Consts::get_path() . '/admin/templates/addtocart.php';
		$output = ob_get_contents();
		ob_end_clean();

		return $output;
	}

}
