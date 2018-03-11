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
			'preview_image' => Consts::get_url() . 'admin/img/blocks/addtocart.jpg',
			'description' => __( 'An add to cart button to quickly purchase a WooCommerce product', 'gutenblocks' ),
		);

		gutenblocks_register_blocks( 'gutenblocks/addtocart', __( 'Add to cart button', 'gutenblocks' ), $args );
  }

	public function register_render() {
		if ( class_exists( 'WooCommerce' ) ) {

			// PHP Rendering of the block
			register_block_type(
	      'gutenblocks/addtocart',
	      [ 'render_callback' => array( $this, render_block ) ]
	    );
		}
	}

	public function render_block( $attributes ) {

		if( !isset( $attribute['productID'] ) ) {
			return;
		}

		$product = wc_get_product($attributes['productID']);

		$url = get_site_url() . '?add-to-cart=' . $attributes['productID'];

		$currency = get_woocommerce_currency_symbol();
		$cb = ( $currency == "$" ) ? $currency : '';
		$ca = ( $currency != "$" ) ? $currency : '';

		ob_start();
		include Consts::get_path() . '/admin/templates/addtocart.php';
		$output = ob_get_contents();
		ob_end_clean();

		return $output;
	}

}
