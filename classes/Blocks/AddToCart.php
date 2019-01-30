<?php

namespace AdvancedGutenbergBlocks\Blocks;

use AdvancedGutenbergBlocks\Helpers\Consts;
use AdvancedGutenbergBlocks\Services\Blocks;

class AddToCart {

  public function run() {

		// Register hooks
		add_action( 'init', array( $this, 'register_render' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'front_assets' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ) );

		// Register Block in the plugin settings page
		$args = array(
			'icon' => 'dashicons-cart',
			'category' => 'woo',
			'preview_image' => Consts::get_url() . 'admin/img/blocks/addtocart.jpg',
			'description' => __( 'An add to cart button to quickly purchase a WooCommerce product.', 'advanced-gutenberg-blocks' ),
		);

		Blocks::register_block( 'advanced-gutenberg-blocks/addtocart', __( 'Add to cart button', 'advanced-gutenberg-blocks' ), $args );
  }

	public function register_render() {

		if ( ! class_exists( 'WooCommerce' ) or ! function_exists( 'register_block_type' ) or is_admin() ) {
			return;
		}

		// PHP Rendering of the block
		register_block_type(
      'advanced-gutenberg-blocks/addtocart',
      [ 'render_callback' => array( $this, 'render_block' ) ]
    );

	}

	public function front_assets() {
		if ( has_block( 'advanced-gutenberg-blocks/addtocart' ) ) {
			wp_enqueue_style( 'dashicons' );
		}
	}

	public function render_block( $attributes ) {

		if( !isset( $attributes['productID'] ) ) {
			return;
		}

		$product = wc_get_product( $attributes['productID'] );

		$add_to_cart_url = get_site_url() . '?add-to-cart=' . $attributes['productID'];

		$currency = get_woocommerce_currency_symbol();
		$cb = ( $currency == "$" ) ? $currency : '';
		$ca = ( $currency != "$" ) ? $currency : '';

		ob_start();
    include apply_filters( 'advanced_gutenberg_blocks_template', Consts::get_path() . 'public/templates/addtocart.php', 'addtocart' );
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
			'advancedGutenbergBlocksAddtocart',
			array(
				'currency' => get_woocommerce_currency_symbol(),
				'rest' => get_rest_url() . 'wc/v2'
			)
		);
	}

}
