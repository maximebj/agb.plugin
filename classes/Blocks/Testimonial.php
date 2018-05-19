<?php

namespace AdvancedGutenbergBlocks\Blocks;

use AdvancedGutenbergBlocks\Helpers\Consts;

class Testimonial {

  public function run( $instance ) {

		$args = array(
			'icon' => 'dashicons-format-status',
			'category' => 'marketing',
			'preview_image' => Consts::get_url() . 'admin/img/blocks/testimonial.jpg',
			'description' => __( "Display a customer testimonial. It's good for the thrust but don't lie to your visitors!", 'advanced-gutenberg-blocks' ),
		);

		$instance->register_block( 'advanced-gutenberg-blocks/testimonial', __( 'Testimonial', 'advanced-gutenberg-blocks' ), $args );
  }

}
