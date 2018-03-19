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

		if ( ! function_exists( 'register_block_type' ) or is_admin() ) {
			return;
		}

		register_block_type(
      'gutenblocks/post',
      [ 'render_callback' => array( $this, 'render_block' ) ]
    );

	}

	public function render_block( $attributes ) {

		if( ! isset( $attributes['postID'] ) ) {
			return;
		}

		$id = $attributes['postID'];

		$post = get_post( $id );
		$link = get_permalink( $id );
		$excerpt = $post->post_excerpt; // bug: can't use get_the_excerpt as it causes an infinite loop if no excerpt is set

		$image = false;

		if( $attributes['showImage'] !== false ) {
			$image = wp_get_attachment_image_src( get_post_thumbnail_id( $id ), 'medium' );
			$image = $image[0];
		}

		$author = false;

		if( $attributes['showAuthor'] !== false ) {
			$author = get_the_author_meta( 'display_name', $post->author );
		}

		$category = false;

		if( $attributes['showCategory'] !== false ) {
			$categories = get_the_category( $id );

			if ( ! empty( $categories ) ) {
    		$category = $categories[0]->name;
			}
		}

		$output = "";
		ob_start();
		include Consts::get_path() . 'public/templates/post.php';
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
