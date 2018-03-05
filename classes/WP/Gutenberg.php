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
			'gutenblocks-style-css',
			Consts::get_url() . 'dist/blocks.style.build.css',
			[ 'wp-blocks' ]
		);
	}


	public function editor_assets() {

		wp_enqueue_script(
			'gutenblocks-block',
			Consts::get_url() . '/dist/blocks.build.js',
			[ 'wp-blocks', 'wp-i18n', 'wp-element' ],
			'1.0',
			true
		);

		$blocks = new Blocks();

		wp_localize_script(
      'gutenblocks-block',
      'gutenblocksGlobals',
      array(
        'ajaxurl' => admin_url('admin-ajax.php'),
				'deactivatedBlocks' => $blocks->get_disabled_blocks_js(),
      )
    );

		wp_enqueue_style(
			'gutenblocks-block-editor',
			Consts::get_url() . 'dist/blocks.editor.build.css',
			[ 'wp-edit-blocks' ]
		);
	}

}
