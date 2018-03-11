<?php

namespace GutenbergBlocks\Blocks;

use GutenbergBlocks\Helpers\Consts;

class Gmap {

  public function run() {

		// Register Block in the Gutenblocks settings page
		$args = array(
			'icon' => 'dashicons-location-alt',
			'category' => 'apis',
			//'preview_image' => Consts::get_url().'admin/img/blocks/map.jpg',
			'description' => __( "Insert a Google Map in your content, the easy way.", 'gutenblocks' ),
			'available' => false,
		);

		gutenblocks_register_blocks( 'gutenblocks/gmap', __( 'Google Map', 'gutenblocks' ), $args );
  }

	public function settings() {

	}

}
