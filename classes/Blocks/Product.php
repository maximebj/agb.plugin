<?php

namespace GutenbergBlocks\Blocks;

use GutenbergBlocks\Helpers\Consts;

class Product {

  public function run() {

		// Register hooks
		add_action( 'init', array( $this, 'register_render' ) );

		// Register Block in the Gutenblocks settings page
		$args = array(
			'icon' => 'dashicons-products',
			'category' => 'woo',
			'description' => __( 'Display WooCommerce Product in your post', 'gutenblocks' ),
			'available' => false,
		);

		gutenblocks_register_blocks( 'gutenblocks/products', __( 'Product', 'gutenblocks' ), $args );
  }

	public function register_render() {

		if ( class_exists( 'WooCommerce' ) ) {

			// PHP Rendering of the block
			register_block_type(
	      'gutenblocks/product',
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
		include Consts::get_path() . '/admin/templates/product.php';
		$output = ob_get_contents();
		ob_end_clean();

		return $output;
	}

}
