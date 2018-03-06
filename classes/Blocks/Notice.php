<?php

namespace GutenbergBlocks\Blocks;

use GutenbergBlocks\Helpers\Consts;

class Notice {

  public function run() {
    $this->register_hooks();

		$args = array(
			'icon' => 'dashicons-warning',
			'category' => 'common',
			'preview_image' => Consts::get_url().'admin/img/blocks/notice.jpg',
			'description' => __( 'Display a sweet Info/Advice/Warning/Avoid/ notice', 'gutenblocks' ),
		);

		gutenberg_blocks_register_blocks( 'gutenblock/notice', __( 'Notice', 'gutenblocks' ), $args );
  }

  public function register_hooks() {
  }


	public function settings() {
		echo '<input type="text" value="je suis une option" />';
	}


}
