<?php

namespace GutenbergBlocks\Blocks;

use GutenbergBlocks\Helpers\Consts;

class Posts {

  public function run() {

		$args = array(
			'icon' => 'dashicons-exerpt-view',
			'category' => 'common',
			'description' => __( 'Display pretty posts links (from any post type)', 'gutenblocks' ),
			'available' => false,
		);

		gutenblocks_register_blocks( 'gutenblocks/posts', __( 'Posts', 'gutenblocks' ), $args );
  }

}
