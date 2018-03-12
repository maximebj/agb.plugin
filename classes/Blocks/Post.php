<?php

namespace GutenbergBlocks\Blocks;

use GutenbergBlocks\Helpers\Consts;

class Post {

  public function run() {

		// Register hooks
		add_action( 'init', array( $this, 'register_render' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ) );

		// Register Block in the Gutenblocks settings page
		$args = array(
			'icon' => 'dashicons-admin-post',
			'category' => 'common',
			'preview_image' => Consts::get_url() . 'admin/img/blocks/post.jpg',
			'description' => __( 'Display pretty posts link (from any post type)', 'gutenblocks' ),
		);

		gutenblocks_register_blocks( 'gutenblocks/post', __( 'Post', 'gutenblocks' ), $args );
  }

	public function register_render() {

		// PHP Rendering of the block
		register_block_type(
      'gutenblocks/post',
      [ 'render_callback' => array( $this, render_block ) ]
    );

	}

	public function render_block( $attributes ) {

		if( ! isset( $attributes['postID'] ) ) {
			return;
		}

		$post = get_post( $attributes['postID'] );

		ob_start();
		include Consts::get_path() . '/admin/templates/post.php';
		$output = ob_get_contents();
		ob_end_clean();

		return $output;
	}

	public function editor_assets() {
		$types_raw = get_post_types( array( 'public' => true ), 'objects' );
		$types = array();

		foreach( $types_raw as $type ) {

			// Avoid WooCommerce Products CPT
			if( $type->name == "product") {
				continue;
			}

			$types[] = array(
				'label' => $type->label,
				'value' => ucfirst( ( $type->rest_base ) ? $type->rest_base  : $type->name ),
			);
		}

		wp_localize_script(
			Consts::BLOCKS_SCRIPT,
			'gutenblocksPost',
			array(
				'types' => json_encode( $types ),
			)
		);
	}

}
