<?php

namespace GutenbergBlocks\Blocks;

use GutenbergBlocks\Helpers\Consts;

class Products {

  public function run() {

		// Register Block in the Gutenblocks settings page
		$args = array(
			'icon' => 'dashicons-products',
			'category' => 'woo',
			'description' => __( 'Display WooCommerce Product(s) in your post', 'gutenblocks' ),
			'available' => false,
		);

		gutenblocks_register_blocks( 'gutenblocks/products', __( 'Woo Products', 'gutenblocks' ), $args );
  }

	public function settings() {

	}

}
