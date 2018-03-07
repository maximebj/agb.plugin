<?php

namespace GutenbergBlocks\Services;

use GutenbergBlocks\Helpers\Dashicons;

defined('ABSPATH') or die('Cheatin&#8217; uh?');

/**
 * Handle blocks registration
 *
 * @author Maximebj
 * @version 1.0.0
 * @since 1.0.0
 */

class Blocks {

	// Blocks that need to be in the settings page
	protected $registered_blocks;

	// Blocks are ranked in categories
	protected $categories;

	public function __construct() {
		$this->set_categories();
		$this->register_blocks();
	}

	public function set_categories() {
		$categories = array(
			'common'    => __( 'Common', 'gutenblobks' ),
			'woo' 	    => __( 'WooCommerce', 'gutenblobks' ),
			'marketing' => __( 'Marketing', 'gutenblobks' ),
			'apis' 	    => __( 'External content', 'gutenblobks' ),
		);

		$categories = apply_filters( 'gutenberg-blocks/register-block', $categories );

		$this->categories = $categories;
	}


	public function get_categories() {
		return $this->categories;
	}

	/**
	* Register blocks
	*
	*  id: (String) block identifier (from JS. Eg: gutenblock/plugin)
	*  name: (String) Name of the block
  *  icon: (String) Dashicon class
	*  preview_image: (String) Image URL
	*  category: (String) [api, ... ] category to display block
	*	 options_callback: (Function) Callback method to display block settings
	*
	*/
	public function register_blocks() {
		global $gutenblocks_registered_blocks;

		$blocks = $gutenblocks_registered_blocks;

		$blocks = apply_filters( 'gutenberg-blocks/register-block', $blocks );

		$this->registered_blocks = $blocks;
	}

	public function get_registered_blocks() {
		return $this->registered_blocks;
	}

	public function get_disabled_blocks() {
		$blocks = get_option('gutenberg-blocks-disabled');

		if ( $blocks == "" ) {
			return array();
		}

		return $blocks;
	}

	public function get_disabled_blocks_js() {

		$blocks = $this->get_disabled_blocks();

		return json_encode($blocks);

	}

	public function set_disabled_blocks($blocks) {
		update_option('gutenberg-blocks-disabled', $blocks);
	}

	public function get_native_blocks_categories() {
		return array(
			'common' => __( 'Common', 'gutenblobks' ),
			'formatting' 	 => __( 'Formatting', 'gutenblobks' ),
			'layout' 	 => __( 'Layout', 'gutenblobks' ),
			'widgets' 	 => __( 'Widgets', 'gutenblobks' ),
			'embed' 	 => __( 'Embed', 'gutenblobks' ),
		);
	}

	public function get_native_blocks() {
		return array(
			__( 'Common', 'gutenblobks' ) => array(
				'audio' => array(
					'id' => 'core/audio',
					'name' => __( 'Audio' , 'gutenblocks'),
					'icon' => 'dashicons-format-audio',
					'can_disable' => true,
				),
				'cover-image' => array(
					'id' => 'core/cover-image',
					'name' => __( 'Cover Image' , 'gutenblocks'),
					'icon' => 'dashicons-format-image',
					'can_disable' => true,
				),
				'gallery' => array(
					'id' => 'core/gallery',
					'name' => __( 'Gallery' , 'gutenblocks' ),
					'icon' => 'dashicons-format-gallery',
					'can_disable' => true,
				),
				'heading' => array(
					'id' => 'core/heading',
					'name' => __( 'Heading' , 'gutenblocks' ),
					'svg' => Dashicons::HEADING,
					'can_disable' => true,
				),
				'image' => array(
					'id' => 'core/image',
					'name' => __( 'Image' , 'gutenblocks' ),
					'icon' => 'dashicons-format-image',
					'can_disable' => true,
				),
				'list' => array(
					'id' => 'core/list',
					'name' => __( 'List' , 'gutenblocks' ),
					'icon' => 'dashicons-editor-ul',
					'can_disable' => true,
				),
				'paragraph' => array(
					'id' => 'core/paragraph',
					'name' => __( 'Paragraph' , 'gutenblocks' ),
					'icon' => 'dashicons-editor-paragraph',
					'can_disable' => false,
				),
				'quote' => array(
					'id' => 'core/quote',
					'name' => __( 'Quote' , 'gutenblocks' ),
					'icon' => 'dashicons-format-quote',
					'can_disable' => true,
				),
				'subhead' => array(
					'id' => 'core/subhead',
					'name' => __( 'Subhead' , 'gutenblocks' ),
					'icon' => 'dashicons-text',
					'can_disable' => true,
				),
				'video' => array(
					'id' => 'core/video',
					'name' => __( 'Video' , 'gutenblocks' ),
					'icon' => 'dashicons-format-video',
					'can_disable' => true,
				),
			),

			__( 'Formatting', 'gutenblobks' ) => array(
				'code' => array(
					'id' => 'core/code',
					'name' => __( 'Code' , 'gutenblocks'),
					'icon' => 'dashicons-editor-code',
					'can_disable' => true,
				),
				'freeform' => array(
					'id' => 'core/freeform',
					'name' => __( 'Classic' , 'gutenblocks' ),
					'icon' => 'dashicons-editor-kitchensink',
					'can_disable' => true,
				),
				'html' => array(
					'id' => 'core/html',
					'name' => __( 'Custom HTML' , 'gutenblocks' ),
					'svg' => Dashicons::HTML,
					'can_disable' => true,
				),
				'preformatted' => array(
					'id' => 'core/preformatted',
					'name' => __( 'Preformatted' , 'gutenblocks' ),
					'icon' => 'dashicons-text',
					'can_disable' => true,
				),
				'pullquote' => array(
					'id' => 'core/pullquote',
					'name' => __( 'Pullquote' , 'gutenblocks' ),
					'icon' => 'dashicons-format-quote',
					'can_disable' => true,
				),
				'table' => array(
					'id' => 'core/table',
					'name' => __( 'Table' , 'gutenblocks' ),
					'icon' => 'dashicons-editor-table',
					'can_disable' => true,
				),
				'verse' => array(
					'id' => 'core/verse',
					'name' => __( 'Verse' , 'gutenblocks' ),
					'icon' => 'dashicons-edit',
					'can_disable' => true,
				),
			),

			__( 'Layout', 'gutenblobks' ) => array(
				'button' => array(
					'id' => 'core/button',
					'name' => __( 'Button' , 'gutenblocks'),
					'svg' => Dashicons::BUTTON,
					'can_disable' => true,
				),
				'columns' => array(
					'id' => 'core/columns',
					'name' => __( 'Columns' , 'gutenblocks'),
					'svg' => Dashicons::COLUMNS,
					'can_disable' => true,
				),
				'more' => array(
					'id' => 'core/more',
					'name' => __( 'More' , 'gutenblocks' ),
					'icon' => 'dashicons-editor-insertmore',
					'can_disable' => false,
				),
				'separator' => array(
					'id' => 'core/separator',
					'name' => __( 'Separator' , 'gutenblocks' ),
					'svg' => Dashicons::SEPARATOR,
					'can_disable' => true,
				),
				'text-columns' => array(
					'id' => 'core/text-columns',
					'name' => __( 'Text Columns' , 'gutenblocks' ),
					'svg' => Dashicons::COLUMNS,
					'can_disable' => true,
				),
			),

			__( 'Widgets', 'gutenblobks' ) => array(
				'shortcode' => array(
					'id' => 'core/shortcode',
					'name' => __( 'Shortcode' , 'gutenblocks'),
					'svg' => Dashicons::SHORTCODE,
					'can_disable' => true,
				),
				'categories' => array(
					'id' => 'core/categories',
					'name' => __( 'Categories' , 'gutenblocks'),
					'icon' => 'dashicons-list-view',
					'can_disable' => true,
				),
				'latest-posts' => array(
					'id' => 'core/latest-posts',
					'name' => __( 'Latest posts' , 'gutenblocks' ),
					'icon' => 'dashicons-list-view',
					'can_disable' => true,
				),
			),

			__( 'Embed', 'gutenblobks' ) => array(
				'embed' => array(
					'id' => 'core/embed',
					'name' => __( 'Embed' , 'gutenblocks'),
					'svg' => Dashicons::EMBED_GENERIC,
					'can_disable' => true,
				),
				'twitter' => array(
					'id' => 'core-embed/twitter',
					'name' => __( 'Twitter' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_POST,
					'can_disable' => true,
				),
				'youtube' => array(
					'id' => 'core-embed/youtube',
					'name' => __( 'Youtube' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_VIDEO,
					'can_disable' => true,
				),
				'facebook' => array(
					'id' => 'core-embed/facebook',
					'name' => __( 'Facebook' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_POST,
					'can_disable' => true,
				),
				'instagram' => array(
					'id' => 'core-embed/instagram',
					'name' => __( 'Instagram' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_PHOTO,
					'can_disable' => true,
				),
				'wordpress' => array(
					'id' => 'core-embed/wordpress',
					'name' => __( 'WordPress' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_POST,
					'can_disable' => true,
				),
				'soundcloud' => array(
					'id' => 'core-embed/soundcloud',
					'name' => __( 'SoundCloud' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_AUDIO,
					'can_disable' => true,
				),
				'spotify' => array(
					'id' => 'core-embed/spotify',
					'name' => __( 'Spotify' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_AUDIO,
					'can_disable' => true,
				),
				'flickr' => array(
					'id' => 'core-embed/flickr',
					'name' => __( 'Flickr' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_PHOTO,
					'can_disable' => true,
				),
				'vimeo' => array(
					'id' => 'core-embed/vimeo',
					'name' => __( 'Vimeo' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_VIDEO,
					'can_disable' => true,
				),
				'animoto' => array(
					'id' => 'core-embed/animoto',
					'name' => __( 'Animoto' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_VIDEO,
					'can_disable' => true,
				),
				'cloudup' => array(
					'id' => 'core-embed/cloudup',
					'name' => __( 'Cloudup' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_POST,
					'can_disable' => true,
				),
				'collegehumor' => array(
					'id' => 'core-embed/collegehumor',
					'name' => __( 'CollegeHumor' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_VIDEO,
					'can_disable' => true,
				),
				'dailymotion' => array(
					'id' => 'core-embed/dailymotion',
					'name' => __( 'Dailymotion' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_VIDEO,
					'can_disable' => true,
				),
				'funnyordie' => array(
					'id' => 'core-embed/funnyordie',
					'name' => __( 'Funny or Die' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_VIDEO,
					'can_disable' => true,
				),
				'hulu' => array(
					'id' => 'core-embed/hulu',
					'name' => __( 'Hulu' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_VIDEO,
					'can_disable' => true,
				),
				'imgur' => array(
					'id' => 'core-embed/imgur',
					'name' => __( 'Imgur' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_PHOTO,
					'can_disable' => true,
				),
				'issuu' => array(
					'id' => 'core-embed/issuu',
					'name' => __( 'Issuu' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_POST,
					'can_disable' => true,
				),
				'kickstarter' => array(
					'id' => 'core-embed/kickstarter',
					'name' => __( 'Kickstarter' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_POST,
					'can_disable' => true,
				),
				'meetup-com' => array(
					'id' => 'core-embed/meetup-com',
					'name' => __( 'Meetup.com' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_POST,
					'can_disable' => true,
				),
				'mixcloud' => array(
					'id' => 'core-embed/mixcloud',
					'name' => __( 'Mixcloud' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_AUDIO,
					'can_disable' => true,
				),
				'photobucket' => array(
					'id' => 'core-embed/photobucket',
					'name' => __( 'Photobucket' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_PHOTO,
					'can_disable' => true,
				),
				'polldaddy' => array(
					'id' => 'core-embed/polldaddy',
					'name' => __( 'Polldaddy' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_POST,
					'can_disable' => true,
				),
				'reddit' => array(
					'id' => 'core-embed/reddit',
					'name' => __( 'Reddit' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_POST,
					'can_disable' => true,
				),
				'reverbnation' => array(
					'id' => 'core-embed/reverbnation',
					'name' => __( 'ReverbNation' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_AUDIO,
					'can_disable' => true,
				),
				'screencast' => array(
					'id' => 'core-embed/screencast',
					'name' => __( 'Screencast' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_VIDEO,
					'can_disable' => true,
				),
				'scribd' => array(
					'id' => 'core-embed/scribd',
					'name' => __( 'Scribd' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_POST,
					'can_disable' => true,
				),
				'slideshare' => array(
					'id' => 'core-embed/slideshare',
					'name' => __( 'Slideshare' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_POST,
					'can_disable' => true,
				),
				'smugMug' => array(
					'id' => 'core-embed/smugMug',
					'name' => __( 'SmugMug' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_PHOTO,
					'can_disable' => true,
				),
				'speaker' => array(
					'id' => 'core-embed/speaker',
					'name' => __( 'Speaker' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_AUDIO,
					'can_disable' => true,
				),
				'ted' => array(
					'id' => 'core-embed/ted',
					'name' => __( 'TED' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_VIDEO,
					'can_disable' => true,
				),
				'tumblr' => array(
					'id' => 'core-embed/tumblr',
					'name' => __( 'Tumblr' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_POST,
					'can_disable' => true,
				),
				'videopress' => array(
					'id' => 'core-embed/videopress',
					'name' => __( 'VideoPress' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_VIDEO,
					'can_disable' => true,
				),
				'wordpress-tv' => array(
					'id' => 'core-embed/wordpress-tv',
					'name' => __( 'WordPress.tv' , 'gutenblocks' ),
					'svg' => Dashicons::EMBED_VIDEO,
					'can_disable' => true,
				),
			),
		);
	}


}
