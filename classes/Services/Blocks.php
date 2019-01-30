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

		if ( ! is_array( $disabled_blocks ) ) {
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
			'common'    => __( 'Common', 'advanced-gutenberg-blocks' ),
			'apis' 	    => __( 'External content', 'advanced-gutenberg-blocks' ),
			'marketing' => __( 'Marketing', 'advanced-gutenberg-blocks' ),
			'woo' 	    => __( 'WooCommerce', 'advanced-gutenberg-blocks' ),
			'specific'	=> __( 'Specific', 'advanced-gutenberg-blocks' ),
		);

		$categories = apply_filters( 'gutenberg-blocks/register-block', $categories );

		return $categories;
	}


	public static function get_native_blocks_categories() {
		return array(
			'common' => __( 'Common' ),
			'formatting' 	 => __( 'Formatting' ),
			'layout' 	 => __( 'Layout' ),
			'widgets' 	 => __( 'Widgets' ),
			'embed' 	 => __( 'Embed' ),
		);
	}

	
	public static function get_native_blocks() {
		return array(
			__( 'Common' ) => array(
				'paragraph' => array(
					'id' => 'core/paragraph',
					'name' => __( 'Paragraph'  ),
					'svg' => Dashicons::PARAGRAPH,
					'can_disable' => false,
					'description' => __( 'Start with the building block of all narrative.' ),
				),
				'heading' => array(
					'id' => 'core/heading',
					'name' => __( 'Heading'  ),
					'svg' => Dashicons::HEADING,
					'can_disable' => true,
					'description' => __( 'Introduce new sections and organize content to help visitors (and search engines) understand the structure of your content.' ),
				),
				'list' => array(
					'id' => 'core/list',
					'name' => __( 'List'  ),
					'svg' => Dashicons::LISTE,
					'can_disable' => true,
					'description' => __( 'Create a bulleted or numbered list.' ),
				),
				'gallery' => array(
					'id' => 'core/gallery',
					'name' => __( 'Gallery'  ),
					'svg' => Dashicons::GALLERY,
					'can_disable' => true,
					'description' => __( 'Display multiple images in a rich gallery.' ),
				),
				'image' => array(
					'id' => 'core/image',
					'name' => __( 'Image'  ),
					'svg' => Dashicons::IMAGE,
					'can_disable' => true,
					'description' => __( 'Insert an image to make a visual statement.' ),
				),
				'cover' => array(
					'id' => 'core/cover',
					'name' => __( 'Cover' ),
					'svg' => Dashicons::COVER,
					'can_disable' => true,
					'description' => __( 'Add an image or video with a text overlay — great for headers.' ),
				),
				'quote' => array(
					'id' => 'core/quote',
					'name' => __( 'Quote'  ),
					'svg' => Dashicons::QUOTE,
					'can_disable' => true,
					'description' => __( 'Give quoted text visual emphasis. "In quoting others, we cite ourselves." — Julio Cortázar' ),
				),		
				'file' => array(
					'id' => 'core/file',
					'name' => __( 'File'  ),
					'svg' => Dashicons::FILE,
					'can_disable' => true,
					'description' => __( 'Add a link to a downloadable file.' ),
				),
				'audio' => array(
					'id' => 'core/audio',
					'name' => __( 'Audio' ),
					'svg' => Dashicons::AUDIO,
					'can_disable' => true,
					'description' => __( 'Embed a simple audio player.' ),
				),
				'video' => array(
					'id' => 'core/video',
					'name' => __( 'Video'  ),
					'svg' => Dashicons::VIDEO,
					'can_disable' => true,
					'description' => __( 'Embed a video from your media library or upload a new one.' ),
				),
			),
			
			__( 'Formatting' ) => array(

				'code' => array(
					'id' => 'core/code',
					'name' => __( 'Code' ),
					'svg' => Dashicons::CODE,
					'can_disable' => true,
					'description' => __( 'Display code snippets that respect your spacing and tabs.' ),
				),
				'html' => array(
					'id' => 'core/html',
					'name' => __( 'Custom HTML'  ),
					'svg' => Dashicons::HTML,
					'can_disable' => true,
					'description' => __( 'Add custom HTML code and preview it as you edit.' ),
				),
				'preformatted' => array(
					'id' => 'core/preformatted',
					'name' => __( 'Preformatted'  ),
					'svg' => Dashicons::PREFORMATTED,
					'can_disable' => true,
					'description' => __( 'Add text that respects your spacing and tabs, and also allows styling.' ),
				),
				'pullquote' => array(
					'id' => 'core/pullquote',
					'name' => __( 'Pullquote'  ),
					'svg' => Dashicons::PULLQUOTE,
					'can_disable' => true,
					'description' => __( 'Give special visual emphasis to a quote from your text.' ),
				),
				'table' => array(
					'id' => 'core/table',
					'name' => __( 'Table'  ),
					'svg' => Dashicons::TABLE,
					'can_disable' => true,
					'description' => __( 'Insert a table — perfect for sharing charts and data.' ),
				),
				'verse' => array(
					'id' => 'core/verse',
					'name' => __( 'Verse'  ),
					'svg' => Dashicons::VERSE,
					'can_disable' => true,
					'description' => __( 'Insert poetry. Use special spacing formats. Or quote song lyrics.' ),
				),
			),

			__( 'Layout' ) => array(

				'media-text' => array(
					'id' => 'core/media-text',
					'name' => __( 'Media and text' ),
					'svg' => Dashicons::MEDIA_TEXT,
					'can_disable' => true,
					'description' => __( 'Set media and words side-by-side for a richer layout.' ),
				),
				'button' => array(
					'id' => 'core/button',
					'name' => __( 'Button' ),
					'svg' => Dashicons::BUTTON,
					'can_disable' => true,
					'description' => __( 'Prompt visitors to take action with a custom button.' ),
				),
				'columns' => array(
					'id' => 'core/columns',
					'name' => __( 'Columns' ),
					'svg' => Dashicons::COLUMNS,
					'can_disable' => true,
					'description' => __( 'Add a block that displays content in multiple columns, then add whatever content blocks you’d like.' ),
				),
				'more' => array(
					'id' => 'core/more',
					'name' => __( 'More'  ),
					'svg' => Dashicons::MORE,
					'can_disable' => false,
					'description' => __( 'Mark the excerpt of this content. Content before this block will be shown in the excerpt on your archives page.' ),
				),
				'nextpage' => array(
					'id' => 'core/nextpage',
					'name' => __( 'Page break' ),
					'svg' => Dashicons::NEXTPAGE,
					'can_disable' => true,
					'description' => __( 'Separate your content into a multi-page experience.' ),
				),
				'separator' => array(
					'id' => 'core/separator',
					'name' => __( 'Separator'  ),
					'svg' => Dashicons::SEPARATOR,
					'can_disable' => true,
					'description' => __( 'Create a break between ideas or sections with a horizontal separator.' ),
				),
				'spacer' => array(
					'id' => 'core/spacer',
					'name' => __( 'Spacer'  ),
					'svg' => Dashicons::SPACER,
					'can_disable' => true,
					'description' => __( 'Add white space between blocks and customize its height.' ),
				),
			),

			__( 'Widgets' ) => array(

				'shortcode' => array(
					'id' => 'core/shortcode',
					'name' => __( 'Shortcode' ),
					'svg' => Dashicons::SHORTCODE,
					'can_disable' => true,
					'description' => __( 'Insert additional custom elements with a WordPress shortcode.' ),
				),
				'categories' => array(
					'id' => 'core/categories',
					'name' => __( 'Categories' ),
					'svg' => Dashicons::CATEGORIES,
					'can_disable' => true,
					'description' => __( 'Display a list of all categories.' ),
				),
				'latest-posts' => array(
					'id' => 'core/latest-posts',
					'name' => __( 'Latest posts'  ),
					'svg' => Dashicons::LATEST_POSTS,
					'can_disable' => true,
					'description' => __( 'Display a list of your most recent posts.' ),
				),
				'latest-comments' => array(
					'id' => 'core/latest-comments',
					'name' => __( 'Latest comments'  ),
					'svg' => Dashicons::LATEST_COMMENTS,
					'can_disable' => true,
					'description' => __( 'Display a list of your most recent comments.' ),
				),
				'archives' => array(
					'id' => 'core/archives',
					'name' => __( 'Archives'  ),
					'svg' => Dashicons::ARCHIVES,
					'can_disable' => true,
					'description' => __( 'Display a monthly archive of your posts.' ),
				),
			),

			__( 'Embed' ) => array(
				'embed' => array(
					'id' => 'core/embed',
					'name' => 'Embed',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed videos, images, tweets, audio, and other content from external sources.' ),
				),
				'twitter' => array(
					'id' => 'core-embed/twitter',
					'name' => 'Twitter',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed a tweet.' ),
				),
				'youtube' => array(
					'id' => 'core-embed/youtube',
					'name' => 'Youtube',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed a YouTube video.' ),
				),
				'facebook' => array(
					'id' => 'core-embed/facebook',
					'name' => 'Facebook',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed a Facebook post.' ),
				),
				'instagram' => array(
					'id' => 'core-embed/instagram',
					'name' => 'Instagram',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed an Instagram post.' ),
				),
				'wordpress' => array(
					'id' => 'core-embed/wordpress',
					'name' => 'WordPress',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed a WordPress post.' ),
				),
				'soundcloud' => array(
					'id' => 'core-embed/soundcloud',
					'name' => 'SoundCloud',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed SoundCloud content.' ),
				),
				'spotify' => array(
					'id' => 'core-embed/spotify',
					'name' => 'Spotify',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed Spotify content.' ),
				),
				'flickr' => array(
					'id' => 'core-embed/flickr',
					'name' => 'Flickr',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed Flickr content.' ),
				),
				'vimeo' => array(
					'id' => 'core-embed/vimeo',
					'name' => 'Vimeo',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed a Vimeo video.' ),
				),
				'animoto' => array(
					'id' => 'core-embed/animoto',
					'name' => 'Animoto',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed an Animoto video.' ),
				),
				'cloudup' => array(
					'id' => 'core-embed/cloudup',
					'name' => 'Cloudup',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed Cloudup content.' ),
				),
				'collegehumor' => array(
					'id' => 'core-embed/collegehumor',
					'name' => 'CollegeHumor',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed CollegeHumor content.' ),
				),
				'dailymotion' => array(
					'id' => 'core-embed/dailymotion',
					'name' => 'Dailymotion',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed a Dailymotion video.' ),
				),
				'funnyordie' => array(
					'id' => 'core-embed/funnyordie',
					'name' => 'Funny or Die',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed Funny or Die content.' ),
				),
				'hulu' => array(
					'id' => 'core-embed/hulu',
					'name' => 'Hulu',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed Hulu content.' ),
				),
				'imgur' => array(
					'id' => 'core-embed/imgur',
					'name' => 'Imgur',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed Imgur content.' ),
				),
				'issuu' => array(
					'id' => 'core-embed/issuu',
					'name' => 'Issuu',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed Issuu content.' ),
				),
				'kickstarter' => array(
					'id' => 'core-embed/kickstarter',
					'name' => 'Kickstarter',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed Kickstarter content.' ),
				),
				'meetup-com' => array(
					'id' => 'core-embed/meetup-com',
					'name' => 'Meetup.com',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed Meetup.com content.' ),
				),
				'mixcloud' => array(
					'id' => 'core-embed/mixcloud',
					'name' => 'Mixcloud',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed Mixcloud content.' ),
				),
				'photobucket' => array(
					'id' => 'core-embed/photobucket',
					'name' => 'Photobucket',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed a Photobucket image.' ),
				),
				'polldaddy' => array(
					'id' => 'core-embed/polldaddy',
					'name' => 'Polldaddy',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed Polldaddy content.' ),
				),
				'reddit' => array(
					'id' => 'core-embed/reddit',
					'name' => 'Reddit',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed a Reddit thread.' ),
				),
				'reverbnation' => array(
					'id' => 'core-embed/reverbnation',
					'name' => 'ReverbNation',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed ReverbNation content.' ),
				),
				'screencast' => array(
					'id' => 'core-embed/screencast',
					'name' => 'Screencast',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed Screencast content.' ),
				),
				'scribd' => array(
					'id' => 'core-embed/scribd',
					'name' => 'Scribd',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed Scribd content.' ),
				),
				'slideshare' => array(
					'id' => 'core-embed/slideshare',
					'name' => 'Slideshare',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed Slideshare content.' ),
				),
				'smugMug' => array(
					'id' => 'core-embed/smugMug',
					'name' => 'SmugMug',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed SmugMug content.' ),
				),
				'speaker' => array(
					'id' => 'core-embed/speaker',
					'name' => 'Speaker Deck',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed Speaker Deck content.' ),
				),
				'ted' => array(
					'id' => 'core-embed/ted',
					'name' => 'TED',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed a TED video.' ),
				),
				'tumblr' => array(
					'id' => 'core-embed/tumblr',
					'name' => 'Tumblr',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed a Tumblr post.' ),
				),
				'videopress' => array(
					'id' => 'core-embed/videopress',
					'name' => 'VideoPress',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed a VideoPress video.' ),
				),
				'wordpress-tv' => array(
					'id' => 'core-embed/wordpress-tv',
					'name' => 'WordPress.tv',
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
					'description' => __( 'Embed a WordPress.tv video.' ),
				),
			),
		);
	}
}
