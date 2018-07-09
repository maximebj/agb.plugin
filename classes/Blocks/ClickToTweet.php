<?php

namespace AdvancedGutenbergBlocks\Blocks;

use AdvancedGutenbergBlocks\Helpers\Consts;
use AdvancedGutenbergBlocks\Services\Blocks;

class ClickToTweet {

  public function run() {

		// Register Hooks
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ) );

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

	public function editor_assets() {

    $twitter_username = $this->get_agb_or_yoast_twitter_user();

		$data = array();

		if ( $twitter_username == "" ) {
			$data['error'] = 'noTwitterUsername';
		} else {
			$data['username'] = $twitter_username;
		}

		wp_localize_script(
			Consts::BLOCKS_SCRIPT,
			'advancedGutenbergBlocksClickToTweet',
			$data
		);
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
