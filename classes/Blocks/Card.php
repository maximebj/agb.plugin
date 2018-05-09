<?php

namespace AdvancedGutenbergBlocks\Blocks;

use AdvancedGutenbergBlocks\Helpers\Consts;
use AdvancedGutenbergBlocks\Helpers\Extend;


class Card {

  public function run() {

		// Ajax Search Plugin on wp.org
    add_action('wp_ajax_fetch_site', array( $this, 'fetch_site' ));

		// Register Block in the Gutenblocks settings page
		$args = array(
			'icon' => 'dashicons-admin-links',
			'category' => 'apis',
			'preview_image' => Consts::get_url().'admin/img/blocks/card.jpg',
			'description' => __( "Do you like how Facebook, Twitter or Slack display a sweet preview to a website in a card? Don't be jealous, we've made the same for you in WordPress!", 'advanced-gutenberg-blocks' ),
		);

		Extend::register_block( 'gutenblocks/card', __( 'Website card preview', 'advanced-gutenberg-blocks' ), $args );
  }


	public function fetch_site()
  {
		$url = $_POST['url'];

		$tags = get_meta_tags($url);

		// Site not reached
		if ( ! $tags ) {
			echo json_encode(
				array(
					'error' => 'sitenotfound',
				)
			);

			die();
		}

		// URL
		$parts = parse_url( $url );
		$site_url = $parts['scheme'].'://'.$parts['host'];

		// Title
		$title = '';

		if( isset( $tags['title'] ) ) {
			$title = $tags['title'];
		}
		elseif( isset( $tags['twitter:title'] ) ) {
			$title = $tags['twitter:title'];
		}

		// Image
		$image = '';

		if( isset( $tags['twitter:image'] ) ) {
			$image = $tags['twitter:image'];
		}
		elseif( isset( $tags['twitter:image:src'] ) ) {
			$image = $tags['twitter:image:src'];
		}

		// Description
		$description = '';

		if( isset( $tags['description'] ) ) {
			$description = $tags['description'];
		}
		elseif ( isset( $tags['twitter:description'] ) ) {
			$description = $tags['twitter:description'];
		}

    echo json_encode(
			array(
				'title' => htmlspecialchars_decode( $title ),
				'image' => $image,
				'description' => htmlspecialchars_decode( $description, ENT_QUOTES ),
				'url' => $url,
				'mainURL' => $site_url,
			)
		);

    die();
  }

}
