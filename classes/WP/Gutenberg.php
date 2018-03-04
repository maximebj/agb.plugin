<?php

namespace GutenbergBlocks\WP;

defined('ABSPATH') or die('Cheatin&#8217; uh?');

use GutenbergBlocks\Helpers\Consts;

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
			'gutenberg_blocks-cgb-style-css',
			Consts::get_url() . 'dist/blocks.style.build.css',
			array( 'wp-blocks' )
		);
	}


	public function editor_assets() {

		wp_enqueue_script(
			'gutenberg_blocks-cgb-block-js',
			Consts::get_url() . '/dist/blocks.build.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element' )
		);


		wp_enqueue_style(
			'gutenberg_blocks-cgb-block-editor-css',
			Consts::get_url() . 'dist/blocks.editor.build.css',
			array( 'wp-edit-blocks' )
		);
	}

}
