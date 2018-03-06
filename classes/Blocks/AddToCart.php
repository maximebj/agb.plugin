<?php

namespace GutenbergBlocks\Blocks;

class AddToCart {

  public function run() {
    $this->register_hooks();

		$args = array(
			'icon' => 'dashicons-cart',
			'category' => 'woo',
			'description' => __( 'An add to cart button to quickly purchase a WooCommerce product', 'gutenblocks' ),
		);

		gutenberg_blocks_register_blocks( 'gutenblock/addtocart', __( 'Add to cart button', 'gutenblocks' ), $args );
  }

  public function register_hooks() {

  }


	public function settings() {
		echo '<input type="text" value="je suis une option" />';
	}

}
