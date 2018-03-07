<?php

namespace GutenbergBlocks\Blocks;

use GutenbergBlocks\Helpers\Consts;

class Link {

  public function run() {

		// Register Block in the Gutenblocks settings page
		$args = array(
			'icon' => 'dashicons-admin-links',
			'category' => 'apis',
			'description' => __( 'Do you like how Facebook, Twitter or Slack display link preview? We have the same for you!', 'gutenblocks' ),
		);

		gutenblocks_register_blocks( 'gutenblocks/link', __( 'Link with Preview', 'gutenblocks' ), $args );
  }

	public function settings() {
		echo '<input type="text" value="je suis une option" />';
	}

}
