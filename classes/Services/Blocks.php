<?php

namespace AdvancedGutenbergBlocks\Services;

use AdvancedGutenbergBlocks\Helpers\Dashicons;

defined('ABSPATH') or die('Cheatin&#8217; uh?');

/**
 * Handle blocks registration
 *
 * @author Maximebj
 * @version 1.0.0
 * @since 1.0.0
 */

abstract class Blocks {

	// BLOCKS

	/**
	 *  Register blocks
	 *
	 *  id: (String) block identifier (from JS. Eg: gutenblock/plugin)
	 *  name: (String) Name of the block
	 *  icon: (String) Dashicon class
	 *  svg: (String) SVG image instead of Dashicon
	 *  category: (String) [Common, API, Woo ... ] category to display block
	 *  preview_image: (String) Image URL
	 *	options_callback: (Function) Callback method to display block settings
	 *  available: (Boolean) Set to False to tease a not yet available block
	 */

	public static function register_block( $id, $name, $args ) {

		$defaults = array(
			'id' => $id,
			'name' => $name,
			'icon' => 'dashicons-slides',
			'svg' => false,
			'category' => 'common',
			'description' => false,
			'preview_image' => false,
			'options_callback' => false,
			'available' => true,
		);

		$args = wp_parse_args( $args, $defaults );

		global $AdvancedGutenbergBlocks;
		$AdvancedGutenbergBlocks->registered_blocks[] = $args;
	}

	public static function get_registered_blocks() {
		global $AdvancedGutenbergBlocks;
		return $AdvancedGutenbergBlocks->registered_blocks;
	}

	public static function get_disabled_blocks( $json = false ) {
		$disabled_blocks = get_option('advanced-gutenberg-blocks-disabled');

		if ( $disabled_blocks == "" or ! $disabled_blocks ) {
			$disabled_blocks = array();
		}

    // Disable WooCommerce blocks if Woo is not active
    if ( ! class_exists( 'WooCommerce' ) ) {
      foreach( Blocks::get_registered_blocks() as $block ) {

				if( $block['category'] == "woo" ) {
					$disabled_blocks[] = $block['id'];
				}
      }
    }

		if ( $json ) {
			return json_encode( $disabled_blocks );
		}

		return $disabled_blocks;
	}

	public static function set_disabled_blocks($blocks) {
		update_option('advanced-gutenberg-blocks-disabled', $blocks);
	}


	// SETTINGS

	/**
	 * Register a setting for the plugin settings page
	 *
	 * name: (String) Setting slug
	 * load_on_editor: (Boolean) define if the option value will be sent to the admin editor
	 */

	public static function register_setting( $setting, $load_on_editor = false ) {

		$args = array(
			'name' => $setting,
			'editor' => $load_on_editor,
		);

		global $AdvancedGutenbergBlocks;
		$AdvancedGutenbergBlocks->registered_settings[] = $args;
	}


	public static function get_settings() {
		global $AdvancedGutenbergBlocks;
		return $AdvancedGutenbergBlocks->registered_settings;
	}


	// CATEGORIES

	public static function get_categories() {
		$categories = array(
			'common'    => __( 'Common', 'gutenblobks' ),
			'woo' 	    => __( 'WooCommerce', 'gutenblobks' ),
			'marketing' => __( 'Marketing', 'gutenblobks' ),
			'apis' 	    => __( 'External content', 'gutenblobks' ),
		);

		$categories = apply_filters( 'gutenberg-blocks/register-block', $categories );

		return $categories;
	}


	public static function get_native_blocks_categories() {
		return array(
			'common' => __( 'Common', 'gutenblobks' ),
			'formatting' 	 => __( 'Formatting', 'gutenblobks' ),
			'layout' 	 => __( 'Layout', 'gutenblobks' ),
			'widgets' 	 => __( 'Widgets', 'gutenblobks' ),
			'embed' 	 => __( 'Embed', 'gutenblobks' ),
		);
	}

	
	public static function get_native_blocks() {
		return array(
			__( 'Common', 'gutenblobks' ) => array(
				'paragraph' => array(
					'id' => 'core/paragraph',
					'name' => __( 'Paragraph' , 'advanced-gutenberg-blocks' ),
					'svg' => Dashicons::PARAGRAPH,
					'can_disable' => false,
				),
				'heading' => array(
					'id' => 'core/heading',
					'name' => __( 'Heading' , 'advanced-gutenberg-blocks' ),
					'svg' => Dashicons::HEADING,
					'can_disable' => true,
				),
				'list' => array(
					'id' => 'core/list',
					'name' => __( 'List' , 'advanced-gutenberg-blocks' ),
					'svg' => Dashicons::LIST,
					'can_disable' => true,
				),
				'gallery' => array(
					'id' => 'core/gallery',
					'name' => __( 'Gallery' , 'advanced-gutenberg-blocks' ),
					'svg' => Dashicons::GALLERY,
					'can_disable' => true,
				),
				'image' => array(
					'id' => 'core/image',
					'name' => __( 'Image' , 'advanced-gutenberg-blocks' ),
					'svg' => Dashicons::IMAGE,
					'can_disable' => true,
				),
				'cover' => array(
					'id' => 'core/cover',
					'name' => __( 'Cover' , 'advanced-gutenberg-blocks'),
					'svg' => Dashicons::COVER,
					'can_disable' => true,
				),
				'quote' => array(
					'id' => 'core/quote',
					'name' => __( 'Quote' , 'advanced-gutenberg-blocks' ),
					'svg' => Dashicons::QUOTE,
					'can_disable' => true,
				),		
				'file' => array(
					'id' => 'core/file',
					'name' => __( 'File' , 'advanced-gutenberg-blocks' ),
					'svg' => Dashicons::FILE,
					'can_disable' => true,
				),
				'audio' => array(
					'id' => 'core/audio',
					'name' => __( 'Audio' , 'advanced-gutenberg-blocks'),
					'svg' => Dashicons::AUDIO,
					'can_disable' => true,
				),
				'video' => array(
					'id' => 'core/video',
					'name' => __( 'Video' , 'advanced-gutenberg-blocks' ),
					'svg' => Dashicons::VIDEO,
					'can_disable' => true,
				),
			),

			__( 'Formatting', 'gutenblobks' ) => array(
				'code' => array(
					'id' => 'core/code',
					'name' => __( 'Code' , 'advanced-gutenberg-blocks'),
					'svg' => Dashicons::CODE,
					'can_disable' => true,
				),
				'html' => array(
					'id' => 'core/html',
					'name' => __( 'Custom HTML' , 'advanced-gutenberg-blocks' ),
					'svg' => Dashicons::HTML,
					'can_disable' => true,
				),
				'preformatted' => array(
					'id' => 'core/preformatted',
					'name' => __( 'Preformatted' , 'advanced-gutenberg-blocks' ),
					'svg' => Dashicons::PREFORMATTED,
					'can_disable' => true,
				),
				'pullquote' => array(
					'id' => 'core/pullquote',
					'name' => __( 'Pullquote' , 'advanced-gutenberg-blocks' ),
					'svg' => Dashicons::PULLQUOTE,
					'can_disable' => true,
				),
				'table' => array(
					'id' => 'core/table',
					'name' => __( 'Table' , 'advanced-gutenberg-blocks' ),
					'svg' => Dashicons::TABLE,
					'can_disable' => true,
				),
				'verse' => array(
					'id' => 'core/verse',
					'name' => __( 'Verse' , 'advanced-gutenberg-blocks' ),
					'svg' => Dashicons::VERSE,
					'can_disable' => true,
				),
			),

			__( 'Layout', 'gutenblobks' ) => array(
				'media-text' => array(
					'id' => 'core/media-text',
					'name' => __( 'Media and text' , 'advanced-gutenberg-blocks'),
					'svg' => Dashicons::MEDIA_TEXT,
					'can_disable' => true,
				),
				'button' => array(
					'id' => 'core/button',
					'name' => __( 'Button' , 'advanced-gutenberg-blocks'),
					'svg' => Dashicons::BUTTON,
					'can_disable' => true,
				),
				'columns' => array(
					'id' => 'core/columns',
					'name' => __( 'Columns' , 'advanced-gutenberg-blocks'),
					'svg' => Dashicons::COLUMNS,
					'can_disable' => true,
				),
				'more' => array(
					'id' => 'core/more',
					'name' => __( 'More' , 'advanced-gutenberg-blocks' ),
					'svg' => Dashicons::MORE,
					'can_disable' => false,
				),
				'nextpage' => array(
					'id' => 'core/nextpage',
					'name' => __( 'Page break' , 'advanced-gutenberg-blocks'),
					'svg' => Dashicons::NEXTPAGE,
					'can_disable' => true,
				),
				'separator' => array(
					'id' => 'core/separator',
					'name' => __( 'Separator' , 'advanced-gutenberg-blocks' ),
					'svg' => Dashicons::SEPARATOR,
					'can_disable' => true,
				),
				'spacer' => array(
					'id' => 'core/spacer',
					'name' => __( 'Spacer' , 'advanced-gutenberg-blocks' ),
					'svg' => Dashicons::SPACER,
					'can_disable' => true,
				),
			),

			__( 'Widgets', 'gutenblobks' ) => array(
				'shortcode' => array(
					'id' => 'core/shortcode',
					'name' => __( 'Shortcode' , 'advanced-gutenberg-blocks'),
					'svg' => Dashicons::SHORTCODE,
					'can_disable' => true,
				),
				'categories' => array(
					'id' => 'core/categories',
					'name' => __( 'Categories' , 'advanced-gutenberg-blocks'),
					'svg' => Dashicons::CATEGORIES,
					'can_disable' => true,
				),
				'latest-posts' => array(
					'id' => 'core/latest-posts',
					'name' => __( 'Latest posts' , 'advanced-gutenberg-blocks' ),
					'svg' => Dashicons::LATEST_POSTS,
					'can_disable' => true,
				),
				'latest-comments' => array(
					'id' => 'core/latest-comments',
					'name' => __( 'Latest comments' , 'advanced-gutenberg-blocks' ),
					'svg' => Dashicons::LATEST_COMMENTS,
					'can_disable' => true,
				),
				'archives' => array(
					'id' => 'core/archives',
					'name' => __( 'Archives' , 'advanced-gutenberg-blocks' ),
					'svg' => Dashicons::ARCHIVES,
					'can_disable' => true,
				),
			),

			__( 'Embed', 'gutenblobks' ) => array(
			  'embed' => array(
			    'id' => 'core/embed',
			    'name' => 'Embed',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'twitter' => array(
			    'id' => 'core-embed/twitter',
			    'name' => 'Twitter',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'youtube' => array(
			    'id' => 'core-embed/youtube',
			    'name' => 'Youtube',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'facebook' => array(
			    'id' => 'core-embed/facebook',
			    'name' => 'Facebook',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'instagram' => array(
			    'id' => 'core-embed/instagram',
			    'name' => 'Instagram',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'wordpress' => array(
			    'id' => 'core-embed/wordpress',
			    'name' => 'WordPress',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'soundcloud' => array(
			    'id' => 'core-embed/soundcloud',
			    'name' => 'SoundCloud',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'spotify' => array(
			    'id' => 'core-embed/spotify',
			    'name' => 'Spotify',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'flickr' => array(
			    'id' => 'core-embed/flickr',
			    'name' => 'Flickr',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'vimeo' => array(
			    'id' => 'core-embed/vimeo',
			    'name' => 'Vimeo',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'animoto' => array(
			    'id' => 'core-embed/animoto',
			    'name' => 'Animoto',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'cloudup' => array(
			    'id' => 'core-embed/cloudup',
			    'name' => 'Cloudup',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'collegehumor' => array(
			    'id' => 'core-embed/collegehumor',
			    'name' => 'CollegeHumor',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'dailymotion' => array(
			    'id' => 'core-embed/dailymotion',
			    'name' => 'Dailymotion',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'funnyordie' => array(
			    'id' => 'core-embed/funnyordie',
			    'name' => 'Funny or Die',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'hulu' => array(
			    'id' => 'core-embed/hulu',
			    'name' => 'Hulu',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'imgur' => array(
			    'id' => 'core-embed/imgur',
			    'name' => 'Imgur',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'issuu' => array(
			    'id' => 'core-embed/issuu',
			    'name' => 'Issuu',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'kickstarter' => array(
			    'id' => 'core-embed/kickstarter',
			    'name' => 'Kickstarter',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'meetup-com' => array(
			    'id' => 'core-embed/meetup-com',
			    'name' => 'Meetup.com',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'mixcloud' => array(
			    'id' => 'core-embed/mixcloud',
			    'name' => 'Mixcloud',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'photobucket' => array(
			    'id' => 'core-embed/photobucket',
			    'name' => 'Photobucket',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'polldaddy' => array(
			    'id' => 'core-embed/polldaddy',
			    'name' => 'Polldaddy',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'reddit' => array(
			    'id' => 'core-embed/reddit',
			    'name' => 'Reddit',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'reverbnation' => array(
			    'id' => 'core-embed/reverbnation',
			    'name' => 'ReverbNation',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'screencast' => array(
			    'id' => 'core-embed/screencast',
			    'name' => 'Screencast',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'scribd' => array(
			    'id' => 'core-embed/scribd',
			    'name' => 'Scribd',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'slideshare' => array(
			    'id' => 'core-embed/slideshare',
			    'name' => 'Slideshare',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'smugMug' => array(
			    'id' => 'core-embed/smugMug',
			    'name' => 'SmugMug',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'speaker' => array(
			    'id' => 'core-embed/speaker',
			    'name' => 'Speaker',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'ted' => array(
			    'id' => 'core-embed/ted',
			    'name' => 'TED',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'tumblr' => array(
			    'id' => 'core-embed/tumblr',
			    'name' => 'Tumblr',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'videopress' => array(
			    'id' => 'core-embed/videopress',
			    'name' => 'VideoPress',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			  'wordpress-tv' => array(
			    'id' => 'core-embed/wordpress-tv',
			    'name' => 'WordPress.tv',
			    'svg' => Dashicons::EMBED_GENERIC,
			    'can_disable' => true,
			  ),
			),
		);
	}
}
