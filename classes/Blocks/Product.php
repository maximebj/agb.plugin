<?php

namespace AdvancedGutenbergBlocks\Blocks;

use AdvancedGutenbergBlocks\Helpers\Consts;
use AdvancedGutenbergBlocks\Services\Blocks;

class Product {

  public function run() {

		// Register hooks
		add_action( 'init', array( $this, 'register_render' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ) );

		// Register Block in the plugin settings page
		$args = array(
			'icon' => 'dashicons-products',
			'category' => 'woo',
			'preview_image' => Consts::get_url() . 'admin/img/blocks/product.jpg',
			'description' => __( 'Display WooCommerce Product in your post.', 'advanced-gutenberg-blocks' ),
		);

		Blocks::register_block( 'advanced-gutenberg-blocks/product', __( 'Product', 'advanced-gutenberg-blocks' ), $args );
  }

	public function register_render() {

		if ( ! class_exists( 'WooCommerce' ) or ! function_exists( 'register_block_type' ) or is_admin() ) {
			return;
		}

		register_block_type(
      'advanced-gutenberg-blocks/product',
      [ 'render_callback' => array( $this, 'render_block' ) ]
    );

	}

	public function render_block( $attributes ) {

		if( ! isset( $attributes['productID'] ) ) {
			return;
		}

		$product = wc_get_product( $attributes['productID'] );

		$description = $product->get_short_description();

		if( $description == "" ) {
			$description = $product->get_description();
		}

		$url = get_permalink( $attributes['productID'] );
		$add_to_cart_url = get_site_url() . '?add-to-cart=' . $attributes['productID'];

		$currency = get_woocommerce_currency_symbol();
		$cb = ( $currency == "$" ) ? $currency : '';
		$ca = ( $currency != "$" ) ? $currency : '';

		ob_start();
    include apply_filters( 'advanced_gutenberg_blocks_template', Consts::get_path() . 'public/templates/product.php', 'product' );
		$output = ob_get_contents();
		ob_end_clean();

		return $output;
	}

	public function editor_assets() {

		if ( ! class_exists( 'WooCommerce' ) ) {
			return;
		}

		// This block needs the currency symbol
		wp_localize_script(
			Consts::BLOCKS_SCRIPT,
			'advancedGutenbergBlocksProduct',
			array(
				'currency' => get_woocommerce_currency_symbol(),
				'rest' => get_rest_url() . 'wc/v2'
			)
		);
	}

}
