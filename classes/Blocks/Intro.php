<?php

namespace AdvancedGutenbergBlocks\Blocks;

use AdvancedGutenbergBlocks\Helpers\Consts;
use AdvancedGutenbergBlocks\Services\Blocks;

class Intro {

  public function run() {

		// Register Block in the plugin settings page
		$args = array(
			'icon' => 'dashicons-editor-textcolor',
			'category' => 'common',
			'preview_image' => Consts::get_url().'admin/img/blocks/intro.jpg',
			'description' => __( 'Display a nice introduction text at the beginning of your post.', 'advanced-gutenberg-blocks' ),
		);

		Blocks::register_block( 'advanced-gutenberg-blocks/intro', __( 'Intro', 'advanced-gutenberg-blocks' ), $args );
  }


}
