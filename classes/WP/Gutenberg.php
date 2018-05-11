<?php

namespace AdvancedGutenbergBlocks\WP;

defined('ABSPATH') or die('Cheatin&#8217; uh?');

use AdvancedGutenbergBlocks\Helpers\Consts;
use AdvancedGutenbergBlocks\Services\Blocks;

/**
 * Gutenberg Editor enqueue styles, scripts
 *
 * @author Maximebj
 * @version 1.0.0
 * @since 1.0.0
 */

class Gutenberg {

	public function register_hooks() {
		add_action( 'enqueue_block_assets', array( $this, 'blocks_assets' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ) );
	}


	public function blocks_assets() {
		wp_enqueue_style(
			Consts::PLUGIN_NAME . '-style',
			Consts::get_url() . 'dist/blocks.style.build.css',
			[ 'wp-blocks', 'wp-edit-post' ]
		);
	}


	public function editor_assets() {

		// Custom blocks
		wp_enqueue_script(
			Consts::BLOCKS_SCRIPT,
			Consts::get_url() . 'dist/blocks.build.js',
			[ 'wp-blocks', 'wp-i18n', 'wp-element' ],
			'1.0'
		);

		// Get translations
		$locale  = gutenberg_get_jed_locale_data( 'advanced-gutenberg-blocks' );
		$content = 'wp.i18n.setLocaleData(' . json_encode( $locale ) . ', "advanced-gutenberg-blocks" );';
		wp_script_add_data( Consts::BLOCKS_SCRIPT, 'data', $content );


		// Set always after script_add_data or it won't show
		wp_localize_script(
			Consts::BLOCKS_SCRIPT,
			'advancedGutenbergBlocksGlobals',
			array(
				'ajaxurl' => admin_url('admin-ajax.php'),
				'pluginurl' => Consts::get_url(),
			)
		);

		// Blocks deactivator
		$blocks = new Blocks();

		wp_enqueue_script(
			Consts::PLUGIN_NAME . '-deactivator',
			Consts::get_url() . 'dist/deactivator.build.js',
			[ 'wp-blocks', 'wp-i18n', 'wp-element' ],
			'1.0',
			true
		);

		wp_localize_script(
      Consts::PLUGIN_NAME . '-deactivator',
      'advancedGutenbergBlocksDeactivated',
      $blocks->get_disabled_blocks_js()
    );

		// Special styles for the Editor

		wp_enqueue_style(
			'advanced-gutenberg-blocks-editor',
			Consts::get_url() . 'dist/blocks.editor.build.css',
			[ 'wp-edit-blocks' ]
		);
	}

}
