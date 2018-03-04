<?php

namespace GutenbergBlocks\Blocks;

use GutenbergBlocks\Helpers\Consts;

class Notice {

  public function run() {
    $this->register_hooks();
  }

  public function register_hooks() {

		// Register block in settings
		add_filter('gutenberg-blocks/register-block', array( $this, 'register_block' ));

  }

	public function register_block($blocks) {
		$blocks[] = array(
			'name' => __( 'Notice', 'gutenblocks' ),
			'icon' => 'dashicons-warning',
			'category' => 'others',
			'preview_image' => Consts::get_url().'admin/img/blocks/notice.jpg',
			'options_callback' => array( $this, 'settings' )
		);

		return $blocks;
	}

	public function settings() {
		echo '<input type="text" value="je suis une option" />';
	}


}
