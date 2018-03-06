<?php

namespace GutenbergBlocks\Blocks;

class Testimonial {

  public function run() {
    $this->register_hooks();

		$args = array(
			'icon' => 'dashicons-format-status',
			'category' => 'common',
			//'options_callback' => array( $this, 'settings' ),
			'description' => __( "Display a customer testimonial. It's good for the thurst but don't lie to your visitors!", 'gutenblocks' ),
			'available' => false,
		);

		gutenberg_blocks_register_blocks( 'gutenblock/testimonial', __( 'Testimonial', 'gutenblocks' ), $args );
  }

  public function register_hooks() {

  }


	public function settings() {

	}

}
