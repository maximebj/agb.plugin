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
		add_action( 'after_setup_theme', array( $this, 'editor_tweaks' ) );
		add_filter( 'block_categories', array( $this, 'add_block_category' ) );
	}


	public function blocks_assets() {
		wp_enqueue_style(
			Consts::PLUGIN_NAME . '-style',
			Consts::get_url() . 'dist/blocks.style.build.css',
			[ 'wp-editor' ],
			Consts::VERSION
		);
	}


	public function editor_assets() {

		// Custom blocks
		wp_enqueue_script(
			Consts::BLOCKS_SCRIPT,
			Consts::get_url() . 'dist/blocks.build.js',
			[ 'wp-editor', 'wp-blocks', 'wp-i18n', 'wp-element' ],
			Consts::VERSION
		);

		// Get translations
		// Introduced in WP 5.0
		if ( function_exists( 'wp_set_script_translations' ) ) {
			wp_set_script_translations( Consts::BLOCKS_SCRIPT, 'advanced-gutenberg-blocks' );
		}
		
		// Set always after script_add_data or it won't show
		wp_localize_script(
			Consts::BLOCKS_SCRIPT,
			'advancedGutenbergBlocksGlobals',
			array(
				'ajaxurl' => admin_url( 'admin-ajax.php' ),
				'adminurl' => admin_url(),
				'pluginurl' => Consts::get_url(),
        'wooapikey' => get_option( 'AGB_woo_ck' ),
        'wooapisecret' => get_option( 'AGB_woo_cs' )
			)
		);

		// Blocks deactivator
		wp_enqueue_script(
			Consts::PLUGIN_NAME . '-deactivator',
			Consts::get_url() . 'dist/deactivator.build.js',
			[ 'wp-edit-post' ]
		);

		wp_localize_script(
			Consts::PLUGIN_NAME . '-deactivator',
			'advancedGutenbergBlocksDeactivated',
			Blocks::get_disabled_blocks( 'json' )
		);

		// Special styles for the Editor
		wp_enqueue_style(
			'advanced-gutenberg-blocks-editor',
			Consts::get_url() . 'dist/blocks.editor.build.css',
			[ 'wp-edit-blocks' ],
			Consts::VERSION
		);

		// Editor styles
		if( get_option( 'advanced-gutenberg-blocks_editor_width' ) or get_option( 'advanced-gutenberg-blocks_editor_wide_width' ) ) {
			$css = "";

			if( $w = get_option( 'advanced-gutenberg-blocks_editor_width' ) ) {
				$css .= '
					.wp-block {
						max-width: ' . $w . 'px;
					}	
				';
			}

			if( $ww = get_option( 'advanced-gutenberg-blocks_editor_wide_width' ) ) {
				$css .= '
					.wp-block[data-align="wide"] {
						max-width: ' . $ww . 'px;
					}
					.wp-block[data-align="full"] {
						max-width: none;
					}
				';
			}
			
			wp_add_inline_style( 'wp-edit-blocks', $css ); 
		}

	}

	public function editor_tweaks() {

		// Disable Custom color button in palettes 
		if( get_option( 'advanced-gutenberg-blocks_editor_custom_color' ) ) {
			add_theme_support( 'disable-custom-colors' );
		}

		// Disable Custom font size selector in paragraph blocks
		if( get_option( 'advanced-gutenberg-blocks_editor_custom_font_size' ) ) {
			add_theme_support( 'disable-custom-font-sizes' );
		}

		// Add Editor default styles
		if( get_option( 'advanced-gutenberg-blocks_editor_default_styles' ) ) {
			add_theme_support( 'wp-block-styles' );
		}

		// Add Responsive Embeds
		if( get_option( 'advanced-gutenberg-blocks_editor_responsive_embeds' ) ) {
			add_theme_support( 'responsive-embeds' );
		}

		// Activate Wide Blocks
		if( get_option( 'advanced-gutenberg-blocks_editor_wide_blocks' ) ) {
			add_theme_support( 'align-wide' );
		}

		// Custom colors in Palette
		if( $colors_raw = get_option( 'advanced-gutenberg-blocks_editor_colors' ) ) {

			$colors = array();

			foreach( $colors_raw['hexa'] as $key => $color ) {
				$colors[] = array( 
					'name' => $colors_raw['name'][$key],
					'slug' => sanitize_title( $colors_raw['name'][$key] ),
					'color' => $color 
				);
			}

			add_theme_support( 'editor-color-palette', $colors);	
		}

		// Custom font sizes 
		if( $sizes_raw = get_option( 'advanced-gutenberg-blocks_editor_font_sizes' ) ) {

			$sizes = array();

			foreach( $sizes_raw['px'] as $key => $size ) {
				$sizes[] = array( 
					'name' => $sizes_raw['name'][$key],
					'shortname' => '',
					'slug' => sanitize_title( $sizes_raw['name'][$key] ),
					'size' => intval( $size ) 
				);
			}

			add_theme_support( 'editor-font-sizes', $sizes);	
		}
 
	}

	public function add_block_category( $categories ) {
		$categories[] = array(
			'slug' => 'agb',
			'title' => __( 'Advanced Gutenberg Blocks', 'advanced-gutenberg-blocks' ),
		);
		
		return $categories;
	}
}
