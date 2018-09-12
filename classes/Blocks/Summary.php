<?php

namespace AdvancedGutenbergBlocks\Blocks;

use AdvancedGutenbergBlocks\Helpers\Consts;
use AdvancedGutenbergBlocks\Services\Blocks;

class Summary {

  public function run() {

    // Register Hooks
    add_action( 'wp_enqueue_scripts', array( $this, 'add_smooth_scrolling_script' ) );

		// Register Block in the plugin settings page
		$args = array(
			'icon' => 'dashicons-book-alt',
			'category' => 'common',
			'preview_image' => Consts::get_url() . 'admin/img/blocks/summary.jpg',
			'description' => __( 'Display an auto generated summary block', 'advanced-gutenberg-blocks' ),
      'options_callback' => array( $this, 'settings' ),
		);

		Blocks::register_block( 'advanced-gutenberg-blocks/summary', __( 'Table of contents', 'advanced-gutenberg-blocks' ), $args );

    // Register settings
		Blocks::register_setting( 'advanced-gutenberg-blocks-smooth-scrolling' );
  }

  public function settings() {

    $state = get_option( 'advanced-gutenberg-blocks-smooth-scrolling' ) ? 'checked' : '';

		echo '
			<div class="AGB-block__settings__option">

				<div class="AGB-block__settings__field">
					<input type="checkbox" name="advanced-gutenberg-blocks-smooth-scrolling" id="advanced-gutenberg-blocks-smooth-scrolling" '. $state . '>

          <label for="advanced-gutenberg-blocks-smooth-scrolling"> ' . __( 'Activate smooth scrolling', 'advanced-gutenberg-blocks' ) . '</label>
				</div>
			</div>
		';
	}

  public function add_smooth_scrolling_script() {

    if( get_option( 'advanced-gutenberg-blocks-smooth-scrolling') != '' ) {

      wp_add_inline_script( 'jquery-migrate', '
        (function($) {
          $(document).ready(function(){
            $("body").on("click", ".wp-block-advanced-gutenberg-blocks-summary__list a", function(e){
              e.preventDefault();
              var anchor = $(this).attr("href");
              $("html,body").animate({scrollTop: $(anchor).offset().top}, 300);
            });
          });
        })(jQuery);
      ');
    }
  }

}
