<?php

namespace GutenbergBlocks\Blocks;

use GutenbergBlocks\Helpers\Consts;

class Testimonial {

  public function run() {

		$args = array(
			'icon' => 'dashicons-format-status',
			'category' => 'marketing',
			'description' => __( "Display a customer testimonial. It's good for the thurst but don't lie to your visitors!", 'gutenblocks' ),
			'available' => false,
		);

		gutenblocks_register_blocks( 'gutenblocks/testimonial', __( 'Testimonial', 'gutenblocks' ), $args );
  }

}
