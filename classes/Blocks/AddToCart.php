<?php

namespace GutenbergBlocks\Blocks;

class AddToCart {

  public function run() {
    $this->register_hooks();

		$args = array(
			'icon' => 'dashicons-cart',
			'category' => 'woo',
			'options_callback' => array( $this, 'settings' )
		);

		gutenberg_blocks_register_blocks( 'gutenblock/addtocart', __( 'Add to cart button', 'gutenblocks' ), $args );
  }

  public function register_hooks() {

  }


	public function settings() {
		echo '<input type="text" value="je suis une option" />';
	}

}
