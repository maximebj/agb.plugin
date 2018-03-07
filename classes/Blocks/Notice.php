<?php

namespace GutenbergBlocks\Blocks;

use GutenbergBlocks\Helpers\Consts;

class Notice {

  public function run() {

		// Register Block in the Gutenblocks settings page
		$args = array(
			'icon' => 'dashicons-warning',
			'category' => 'common',
			'preview_image' => Consts::get_url().'admin/img/blocks/notice.jpg',
			'description' => __( 'Display a sweet Info/Advice/Warning/Avoid/ notice', 'gutenblocks' ),
		);

		gutenblocks_register_blocks( 'gutenblocks/notice', __( 'Notice', 'gutenblocks' ), $args );
  }

	public function settings() {
		echo '<input type="text" value="je suis une option" />';
	}


}
