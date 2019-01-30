<?php

namespace AdvancedGutenbergBlocks\Blocks;

use AdvancedGutenbergBlocks\Helpers\Consts;
use AdvancedGutenbergBlocks\Services\Blocks;

class Summary {

  public function run() {

    // Register Hooks
    add_action( 'wp_footer', array( $this, 'add_scripts' ), 10000 );
    add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ) );

		// Register Block in the plugin settings page
		$args = array(
			'icon' => 'dashicons-book-alt',
			'category' => 'common',
			'preview_image' => Consts::get_url() . 'admin/img/blocks/summary.jpg',
			'description' => __( 'Display an auto generated summary block.', 'advanced-gutenberg-blocks' ),
      'options_callback' => array( $this, 'settings' ),
		);

		Blocks::register_block( 'advanced-gutenberg-blocks/summary', __( 'Table of contents', 'advanced-gutenberg-blocks' ), $args );

    // Register settings
    Blocks::register_setting( 'advanced-gutenberg-blocks-smooth-scrolling' );
    Blocks::register_setting( 'advanced-gutenberg-blocks-summary-title' );
    Blocks::register_setting( 'advanced-gutenberg-blocks-summary-folded' );
    Blocks::register_setting( 'advanced-gutenberg-blocks-summary-max-depth' );
  }


  public function settings() {
    $state = get_option( 'advanced-gutenberg-blocks-smooth-scrolling' ) ? 'checked' : '';
    $folded = get_option( 'advanced-gutenberg-blocks-summary-folded' ) ? 'checked' : '';
    $level = get_option( 'advanced-gutenberg-blocks-summary-max-depth' );

    include Consts::get_path() . 'admin/templates/settings/summary.php';
  }
  

  public function editor_assets() {
    $title = get_option( 'advanced-gutenberg-blocks-summary-title' );
    $folded = get_option( 'advanced-gutenberg-blocks-summary-folded' ) ? true : false;
    $level = get_option( 'advanced-gutenberg-blocks-summary-max-depth' );
    
    if( $title == "" ) {
      $title = __( "Table of contents", 'advanced-gutenberg-blocks' );
    }

    if( $level == "" ) {
      $level = 6;
    }
    
    wp_localize_script(
			Consts::BLOCKS_SCRIPT,
			'advancedGutenbergBlocksSummary',
			array(
        'title' =>  $title,
        'folded' => $folded,
        'level' => $level,
      )
		);
  }
  

  public function add_scripts() {

    if( ! has_block( 'advanced-gutenberg-blocks/summary' ) ) {
      return;
    }

    $output = ' 
      <script type="text/javascript"> 
        (function($) {
        $(document).ready(function(){
    ';

    // We don't use wp_add_inline_script because for some unknow reason it doesnt work when people deregister and register a newer version of jQuery

    // Add Smooth Scrolling
    if( get_option( 'advanced-gutenberg-blocks-smooth-scrolling') != '' ) {

      $output .= '
        $("body").on("click", ".wp-block-advanced-gutenberg-blocks-summary__list a", function(e){
          e.preventDefault();
          var anchor = $(this).attr("href");
          $("html,body").animate({scrollTop: $(anchor).offset().top}, 300);
        });
      ';
    }

    // Fold Arrow
    $output .= '
      $("body").on("click", ".wp-block-advanced-gutenberg-blocks-summary__fold", function(e){
        e.preventDefault();
        var parent = $(this).parents(".wp-block-advanced-gutenberg-blocks-summary").toggleClass("is-folded");
      });
    ';

    // Auto Fold option
    if( get_option( 'advanced-gutenberg-blocks-summary-folded') != '' ) {

      $output .= '
        $(".wp-block-advanced-gutenberg-blocks-summary").addClass("is-folded");  
      ';
    }

    $output .= '
          });
        })(jQuery);  
      </script>
    ';

    echo $output;
  }
}
