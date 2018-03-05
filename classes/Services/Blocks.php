<?php

namespace GutenbergBlocks\Services;

defined('ABSPATH') or die('Cheatin&#8217; uh?');

/**
 * Handle blocks registration
 *
 * @author Maximebj
 * @version 1.0.0
 * @since 1.0.0
 */

class Blocks {

	protected $registered_blocks;

	public function __construct() {
		$this->register_blocks();
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
		$blocks = array();

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
		return implode( ', ', $blocks );
	}

	public function set_disabled_blocks($blocks) {
		update_option('gutenberg-blocks-disabled', $blocks);
	}

	public function get_native_blocks() {
		return array(
			'subhead' => array(
				'id' => 'core/subhead',
				'name' => __( 'Subhead' , 'gutenblocks' ),
				'icon' => 'dashicons-text',
				'can_disable' => true,
			),
			'audio' => array(
				'id' => 'core/audio',
				'name' => __( 'Audio' , 'gutenblocks'),
				'icon' => 'dashicons-format-audio',
				'can_disable' => true,
			),
			'code' => array(
				'id' => 'core/code',
				'name' => __( 'Code' , 'gutenblocks'),
				'icon' => 'dashicons-editor-code',
				'can_disable' => true,
			),
			'shortcode' => array(
				'id' => 'core/shortcode',
				'name' => __( 'Shortcode' , 'gutenblocks'),
				'icon' => 'dashicons-editor-code', // dashicons-shortcode
				'can_disable' => true,
			),
		);
	}


}
