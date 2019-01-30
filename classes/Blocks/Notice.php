<?php

namespace AdvancedGutenbergBlocks\Blocks;

use AdvancedGutenbergBlocks\Helpers\Consts;
use AdvancedGutenbergBlocks\Services\Blocks;

class Notice {

  public function run() {

		// Register Block in the plugin settings page
		$args = array(
			'icon' => 'dashicons-warning',
			'category' => 'common',
			'preview_image' => Consts::get_url().'admin/img/blocks/notice.jpg',
			'description' => __( 'Display a sweet Info/Advice/Warning/Avoid/ notice.', 'advanced-gutenberg-blocks' ),
		);

		Blocks::register_block( 'advanced-gutenberg-blocks/notice', __( 'Notice', 'advanced-gutenberg-blocks' ), $args );
  }


}
