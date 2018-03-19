<?php

namespace GutenbergBlocks\WP;

defined('ABSPATH') or die('Cheatin&#8217; uh?');

use GutenbergBlocks\Helpers\Consts;

use GutenbergBlocks\Services\Blocks;

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
			'gutenblocks-style',
			Consts::get_url() . 'dist/blocks.style.build.css',
			[ 'wp-blocks', 'wp-edit-post' ]
		);
	}


	public function editor_assets() {

		// Custom blocks
		wp_enqueue_script(
			Consts::BLOCKS_SCRIPT,
			Consts::get_url() . '/dist/blocks.build.js',
			[ 'wp-blocks', 'wp-i18n', 'wp-element' ]
		);

		wp_localize_script(
      Consts::BLOCKS_SCRIPT,
      'gutenblocksGlobals',
      array(
        'ajaxurl' => admin_url('admin-ajax.php'),
				'pluginurl' => Consts::get_url(),
      )
    );

		// Blocks deactivator
		$blocks = new Blocks();

		wp_enqueue_script(
			'gutenblocks-block-deactivator',
			Consts::get_url() . '/dist/deactivator.build.js',
			[ 'wp-blocks', 'wp-i18n', 'wp-element' ],
			'1.0',
			true
		);

		wp_localize_script(
      'gutenblocks-block-deactivator',
      'gutenblocksDeactivated',
      $blocks->get_disabled_blocks_js()
    );

		// Special styles for the Editor

		wp_enqueue_style(
			'gutenblocks-block-editor',
			Consts::get_url() . 'dist/blocks.editor.build.css',
			[ 'wp-edit-blocks' ]
		);
	}

}
