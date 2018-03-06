<?php

namespace GutenbergBlocks\Blocks;

class Posts {

  public function run() {
    $this->register_hooks();

		$args = array(
			'icon' => 'dashicons-exerpt-view',
			'category' => 'common',
			//'options_callback' => array( $this, 'settings' ),
			'description' => __( 'Display pretty posts links (from any post type)', 'gutenblocks' ),
			'available' => false,
		);

		gutenberg_blocks_register_blocks( 'gutenblock/posts', __( 'Posts', 'gutenblocks' ), $args );
  }

  public function register_hooks() {

  }


	public function settings() {

	}

}
