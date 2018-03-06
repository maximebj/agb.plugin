<?php

namespace GutenbergBlocks\Blocks;

class Products {

  public function run() {
    $this->register_hooks();

		$args = array(
			'icon' => 'dashicons-products',
			'category' => 'woo',
			'options_callback' => array( $this, 'settings' )
		);

		gutenberg_blocks_register_blocks( 'gutenblock/products', __( 'Woo Products', 'gutenblocks' ), $args );
  }

  public function register_hooks() {

  }


	public function settings() {
		echo '<input type="text" value="je suis une option" />';
	}

}
