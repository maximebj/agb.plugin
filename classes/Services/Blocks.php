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
	*  name: (String) Name of the block
  *  icon: (String) Dashicon class
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

	public function get_native_blocks() {
		return array(
			'subhead' => array(
				'name' => __( 'Subhead' , 'gutenblocks'),
				'icon' => 'dashicons-text',
				'id' => 'core/subhead',
			),
			'audio' => array(
				'name' => __( 'Audio' , 'gutenblocks'),
				'icon' => 'dashicons-format-audio',
				'id' => 'core/audio',
			),
			'code' => array(
				'name' => __( 'Code' , 'gutenblocks'),
				'icon' => 'dashicons-editor-code',
				'id' => 'core/code',
			),
		);
	}

	public function get_disabled_native_blocks() {
		return get_option('gutenberg-native-blocks-disabled', array());
	}


}
