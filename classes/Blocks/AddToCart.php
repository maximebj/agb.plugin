<?php

namespace GutenbergBlocks\Blocks;

use GutenbergBlocks\Helpers\Consts;

class AddToCart {

  public function run() {

		// Register Block in the Gutenblocks settings page
		$args = array(
			'icon' => 'dashicons-cart',
			'category' => 'woo',
			'description' => __( 'An add to cart button to quickly purchase a WooCommerce product', 'gutenblocks' ),
		);

		gutenblocks_register_blocks( 'gutenblocks/addtocart', __( 'Add to cart button', 'gutenblocks' ), $args );
  }

	public function settings() {
		echo '<input type="text" value="je suis une option" />';
	}

}
