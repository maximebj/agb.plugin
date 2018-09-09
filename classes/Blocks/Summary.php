<?php

namespace AdvancedGutenbergBlocks\Blocks;

use AdvancedGutenbergBlocks\Helpers\Consts;
use AdvancedGutenbergBlocks\Services\Blocks;

class Summary {

  public function run() {

		// Register Block in the plugin settings page
		$args = array(
			'icon' => 'dashicons-book-alt',
			'category' => 'common',
			'preview_image' => Consts::get_url() . 'admin/img/blocks/summary.jpg',
			'description' => __( 'Display an auto generated summary block', 'advanced-gutenberg-blocks' ),
		);

		Blocks::register_block( 'advanced-gutenberg-blocks/summary', __( 'Summary', 'advanced-gutenberg-blocks' ), $args );
  }

}
