<?php

namespace GutenbergBlocks\Blocks;

class Link {

  public function run() {
    $this->register_hooks();

		$args = array(
			'icon' => 'dashicons-admin-links',
			'category' => 'apis',
			'options_callback' => array( $this, 'settings' )
		);

		gutenberg_blocks_register_blocks( 'gutenblock/link', __( 'Link with Preview', 'gutenblocks' ), $args );
  }

  public function register_hooks() {

  }


	public function settings() {
		echo '<input type="text" value="je suis une option" />';
	}

}
