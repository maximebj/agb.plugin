<?php

namespace GutenbergBlocks\Blocks;

class Link {

  public function run() {
    $this->register_hooks();

		$args = array(
			'icon' => 'dashicons-admin-links',
			'category' => 'apis',
			'description' => __( 'Do you like how Facebook, Twitter or Slack display link preview? We have the same for you!', 'gutenblocks' ),
		);

		gutenberg_blocks_register_blocks( 'gutenblock/link', __( 'Link with Preview', 'gutenblocks' ), $args );
  }

  public function register_hooks() {

  }


	public function settings() {
		echo '<input type="text" value="je suis une option" />';
	}

}
