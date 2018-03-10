<?php

namespace GutenbergBlocks\Blocks;

use GutenbergBlocks\Helpers\Consts;

class Card {

  public function run() {

		// Register Block in the Gutenblocks settings page
		$args = array(
			'icon' => 'dashicons-admin-links',
			'category' => 'apis',
			'preview_image' => Consts::get_url().'admin/img/blocks/card.jpg',
			'description' => __( "Do you like how Facebook, Twitter or Slack display a sweet preview to a website in a card? Don't be jealous, we've made the same for you in WordPress!", 'gutenblocks' ),
		);

		gutenblocks_register_blocks( 'gutenblocks/card', __( 'Website card preview', 'gutenblocks' ), $args );
  }

	public function settings() {

	}

}
