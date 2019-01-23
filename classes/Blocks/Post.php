<?php

namespace AdvancedGutenbergBlocks\Blocks;

use AdvancedGutenbergBlocks\Helpers\Consts;
use AdvancedGutenbergBlocks\Services\Blocks;

class Post {

  public function run() {

		// Register hooks
		add_action( 'init', array( $this, 'register_render' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ) );

		// Register Block in the plugin settings page
		$args = array(
			'icon' => 'dashicons-admin-post',
			'category' => 'common',
			'preview_image' => Consts::get_url() . 'admin/img/blocks/post.jpg',
			'description' => __( 'Display pretty posts link (from any post type).', 'advanced-gutenberg-blocks' ),
		);

		Blocks::register_block( 'advanced-gutenberg-blocks/post', __( 'Post', 'advanced-gutenberg-blocks' ), $args );
  }

	public function register_render() {

		if ( ! function_exists( 'register_block_type' ) or is_admin() ) {
			return;
		}

		register_block_type(
      'advanced-gutenberg-blocks/post',
      [ 'render_callback' => array( $this, 'render_block' ) ]
    );

	}

	public function render_block( $attributes ) {
		
		if( ! isset( $attributes['postID'] ) ) {
			return;
		}

		// Default values
		$postID = $attributes['postID'];
		$postType 		= array_key_exists( 'postType', $attributes ) 		? $attributes['postType'] 		: 'posts';
		$showImage 		= array_key_exists( 'showImage', $attributes ) 		? $attributes['showImage'] 		: true;
		$showAuthor 	= array_key_exists( 'showAuthor', $attributes ) 	? $attributes['showAuthor'] 	: true;
		$showCategory = array_key_exists( 'showCategory', $attributes ) ? $attributes['showCategory'] : true;

		// Start cached output
		$output = "";
		ob_start();

		if( $postType == "posts" ) {
			$args = array( 'p' => $postID );
		} 
		elseif( $postType == 'pages' ) {
			$args = array( 'page_id' => $postID );
		} 
		else {
			$args = array( 'post_type' => $postType, 'p' => $postID  );
		}
		
		$query = new \WP_Query( $args );

		if( $query->have_posts() ): while( $query->have_posts() ): $query->the_post();

			$image = false;
			$author = false;
			$category = false;

			if( $showImage !== false ) {
				$image = wp_get_attachment_image_src( get_post_thumbnail_id(), 'medium' );
				$image = $image[0];
			}

			if( $showAuthor !== false ) {
				$author = get_the_author_meta( 'display_name', $post->author );
			}

			if( $showCategory !== false ) {
				$categories = get_the_category();

				if ( ! empty( $categories ) ) {
	    		$category = $categories[0]->name;
				}
			}

			// Get template
      include apply_filters( 'advanced_gutenberg_blocks_template', Consts::get_path() . 'public/templates/post.php', 'post' );

			endwhile;
			wp_reset_postdata();
		endif;

		// End cached output
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
				'value' => $type->rest_base ? $type->rest_base  : $type->name,
			);
		}
		
		wp_localize_script(
			Consts::BLOCKS_SCRIPT,
			'advancedGutenbergBlocksPost',
			array(
				'types' => json_encode( $types ),
				'rest' => get_rest_url() . 'wp/v2',
			)
		);
	}
}
