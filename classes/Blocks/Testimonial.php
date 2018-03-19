<?php

namespace GutenbergBlocks\Blocks;

use GutenbergBlocks\Helpers\Consts;

class Testimonial {

  public function run() {

		$args = array(
			'icon' => 'dashicons-format-status',
			'category' => 'marketing',
			'preview_image' => Consts::get_url() . 'admin/img/blocks/testimonial.jpg',
			'description' => __( "Display a customer testimonial. It's good for the thrust but don't lie to your visitors!", 'advanced-gutenberg-blocks' ),
		);

		gutenblocks_register_blocks( 'gutenblocks/testimonial', __( 'Testimonial', 'advanced-gutenberg-blocks' ), $args );
  }

}
