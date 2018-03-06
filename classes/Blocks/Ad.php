<?php

namespace GutenbergBlocks\Blocks;

class Ad {

  public function run() {
    $this->register_hooks();

		$args = array(
			'icon' => 'dashicons-megaphone',
			'category' => 'common',
			'options_callback' => array( $this, 'settings' ),
			'description' => __( 'Monetize your website by inserting Ads in your content', 'gutenblocks' ),
		);

		gutenberg_blocks_register_blocks( 'gutenblock/ad', __( 'Advertisement', 'gutenblocks' ), $args );
  }

  public function register_hooks() {
  }

	public function settings() {
		echo '<input type="text" value="je suis une option" />';
	}

}
