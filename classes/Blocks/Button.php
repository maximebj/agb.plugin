<?php

namespace AdvancedGutenbergBlocks\Blocks;

use AdvancedGutenbergBlocks\Helpers\Consts;
use AdvancedGutenbergBlocks\Services\Blocks;

class Button {

  public function run() {

		// Register Block in the plugin settings page
		$args = array(
			'icon' => 'dashicons-carrot',
			'category' => 'common',
			'preview_image' => Consts::get_url().'admin/img/blocks/intro.jpg',
			'description' => __( 'A new kind of button with more styles and options than the default one.', 'advanced-gutenberg-blocks' ),
		);

		Blocks::register_block( 'advanced-gutenberg-blocks/button', __( 'Button', 'advanced-gutenberg-blocks' ), $args );
  }


}
