<?php

namespace GutenbergBlocks\Blocks;

use GutenbergBlocks\Helpers\Consts;

class Product {

  public function run() {

		// Register Block in the Gutenblocks settings page
		$args = array(
			'icon' => 'dashicons-products',
			'category' => 'woo',
			'description' => __( 'Display WooCommerce Product in your post', 'gutenblocks' ),
			'available' => false,
		);

		gutenblocks_register_blocks( 'gutenblocks/products', __( 'Product', 'gutenblocks' ), $args );
  }

	public function settings() {

	}

}
