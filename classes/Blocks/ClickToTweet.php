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
			'description' => __( "Allow your visitors to easily share your most inspirationals sentences in a click", 'advanced-gutenberg-blocks' ),
			'options_callback' => array( $this, 'settings' ),
		);

		Blocks::register_block( 'advanced-gutenberg-blocks/card', __( 'Click To Tweet', 'advanced-gutenberg-blocks' ), $args );

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

    $url  = ( isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http" ) . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $url = urlencode( $url );

    $user = $this->get_agb_or_yoast_twitter_user();

    $content = str_replace( '<br/>', ' ', $attributes['content'] );
    $content = urlencode( strip_tags( $content ) );

    $hashtags = urlencode( $attributes['hashtags'] );

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

		echo '
			<p class="AGB-block__settings__description">' . __( 'Provide your twitter website username (without @).' ) . '</p>

			<div class="AGB-block__settings__option">
				<div class="AGB-block__settings__label">
					<label for="advanced-gutenberg-blocks-twitter-username"> ' . __( 'Twitter username', 'advanced-gutenberg-blocks' ) . '</label>
				</div>

				<div class="AGB-block__settings__field">
					<input type="text" name="advanced-gutenberg-blocks-twitter-username" placeholder="AdvancedBlocks" value="' . $twitter_username . '">
				</div>
			</div>
		';
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
