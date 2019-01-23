<?php

namespace AdvancedGutenbergBlocks\Blocks;

use AdvancedGutenbergBlocks\Helpers\Consts;
use AdvancedGutenbergBlocks\Services\Blocks;

class ClickToTweet {

  public function run() {

		// Register Hooks
    add_action( 'init', array( $this, 'register_render' ) );

		// Register Block in the plugin settings page
		$args = array(
			'icon' => 'dashicons-twitter',
			'category' => 'marketing',
			'preview_image' => Consts::get_url().'admin/img/blocks/clicktotweet.jpg',
			'description' => __( "Allow your visitors to easily share your most inspirationals sentences in a click.", 'advanced-gutenberg-blocks' ),
			'options_callback' => array( $this, 'settings' ),
			'require' => __('This block needs your Twitter username'),
		);

		Blocks::register_block( 'advanced-gutenberg-blocks/clicktotweet', __( 'Click To Tweet', 'advanced-gutenberg-blocks' ), $args );

		// Register settings
		Blocks::register_setting( 'advanced-gutenberg-blocks-twitter-username' );
  }


  public function register_render() {

		if ( ! function_exists( 'register_block_type' ) or is_admin() ) {
			return;
		}

		register_block_type(
			'advanced-gutenberg-blocks/clicktotweet',
			[ 'render_callback' => array( $this, 'render_block' ) ]
		);

	}

	public function render_block( $attributes ) {

		// Default values
		$content = array_key_exists( 'content', $attributes ) ? $attributes['content'] : '';
		$hashtags =  array_key_exists( 'hashtags', $attributes ) ? $attributes['hashtags'] : '';

    $url  = ( isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http" ) . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $url = urlencode( $url );

    $user = $this->get_agb_or_yoast_twitter_user();

    $content = str_replace( '<br/>', ' ', $content );
    $content = urlencode( strip_tags( $content ) );

    $hashtags = urlencode( $hashtags );

    $intent_URL = "https://twitter.com/intent/tweet?url=$url&via=$user&text=$content&hashtags=$hashtags";

		// Start cached output
		$output = "";
		ob_start();

		// Get template
    include apply_filters( 'advanced_gutenberg_blocks_template', Consts::get_path() . 'public/templates/clicktotweet.php', 'clicktotweet' );

		// En cached output
		$output = ob_get_contents();
		ob_end_clean();

		return $output;

	}


	public function settings() {

		$twitter_username = $this->get_agb_or_yoast_twitter_user();
			
		include Consts::get_path() . 'admin/templates/settings/clicktotweet.php';
	}


  // Define option between Yoast or current option
  public function get_agb_or_yoast_twitter_user() {

    $agb_option = get_option( 'advanced-gutenberg-blocks-twitter-username' );

    // check if Yoast SEO has twitter field
    if( ! $agb_option ) {
      $yoast_options = get_option( 'wpseo_social' );

      if( is_array( $yoast_options) and $yoast_options['twitter_site'] != '') {
        return $yoast_options['twitter_site'];
      }
    }

    return $agb_option;
  }
}
