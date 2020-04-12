<?php

namespace AdvancedGutenbergBlocks\WP;

defined( 'ABSPATH' ) || exit;

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

		add_action( 'init', array( $this, 'set_textdomain' ) );
		add_action( 'init', array( $this, 'blocks_assets' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'additionnal_assets' ) );
		add_action( 'after_setup_theme', array( $this, 'editor_tweaks' ) );
		add_filter( 'block_categories', array( $this, 'add_block_category' ) );
	}


	public function set_textdomain() {
		load_plugin_textdomain( 'advanced-gutenberg-blocks', false, Consts::get_path() . 'languages' );
	}


	public function blocks_assets() {

		// Blocks Styles (Front + Editor)
		wp_register_style(
			Consts::PLUGIN_NAME . '-style',
			Consts::get_url() . 'dist/blocks.style.build.css',
			is_admin() ? array( 'wp-editor' ) : null,
			Consts::VERSION
		);

		// Blocks scripts (Editor)
		wp_register_script(
			Consts::PLUGIN_NAME . '-editor',
			Consts::get_url() . 'dist/blocks.build.js',
			array( 'wp-editor', 'wp-blocks', 'wp-i18n', 'wp-element' ),
			Consts::VERSION
		);

		// Special styles (Editor)
		wp_register_style(
			Consts::PLUGIN_NAME . '-editor-styles',
			Consts::get_url() . 'dist/blocks.editor.build.css',
			array( 'wp-edit-blocks' ),
			Consts::VERSION
		);

		// Register block to load assets
		register_block_type(
			'agb/blocks', array(
				'style'         => Consts::PLUGIN_NAME . '-style',
				'editor_script' => Consts::PLUGIN_NAME . '-editor',
				'editor_style'  => Consts::PLUGIN_NAME . '-editor-styles',
			)
		);

		// Set translations
		wp_set_script_translations( Consts::PLUGIN_NAME . '-editor', 'advanced-gutenberg-blocks', Consts::get_path() . 'languages' );
		
		// Set always after script_add_data or it won't show
		wp_localize_script(
			Consts::PLUGIN_NAME . '-editor',
			'advancedGutenbergBlocksGlobals',
			array(
				'ajaxurl' => admin_url( 'admin-ajax.php' ),
				'adminurl' => admin_url(),
				'pluginurl' => Consts::get_url(),
        'wooapikey' => get_option( 'AGB_woo_ck' ),
        'wooapisecret' => get_option( 'AGB_woo_cs' )
			)
		);
	}
		

	public function additionnal_assets() {

		// Deactivator 
		wp_enqueue_script(
			Consts::PLUGIN_NAME . '-deactivator',
			Consts::get_url() . 'dist/deactivator.build.js',
			array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' ),
			Consts::VERSION
		);

		wp_localize_script(
			Consts::PLUGIN_NAME . '-deactivator',
			'advancedGutenbergBlocksDeactivated',
			Blocks::get_disabled_blocks( 'json' )
		);

		// Toolbar Formats Script
		wp_enqueue_script(
			Consts::PLUGIN_NAME . '-formats',
			Consts::get_url() . 'dist/formats.build.js',
			array( 'wp-rich-text' ),
			Consts::VERSION
		);

		wp_localize_script(
			Consts::PLUGIN_NAME . '-formats',
			'advancedGutenbergBlocksFormats',
			array(
				'buttons' => get_option( 'advanced-gutenberg-blocks_richtext_buttons' ),
			)
		);


		// Get translations
		wp_set_script_translations( Consts::PLUGIN_NAME . '-formats', 'advanced-gutenberg-blocks', Consts::get_path() . 'languages' );


		// Editor width styles
		if( get_option( 'advanced-gutenberg-blocks_editor_width' ) or get_option( 'advanced-gutenberg-blocks_editor_wide_width' ) ) {
			$css = "";

			if( $w = get_option( 'advanced-gutenberg-blocks_editor_width' ) ) {
				$css .= '
					.wp-block {
						width: ' . $w . 'px !important;
						max-width: ' . $w . 'px !important;
					}	
				';
			}

			if( $ww = get_option( 'advanced-gutenberg-blocks_editor_wide_width' ) ) {
				$css .= '
					.wp-block[data-align="wide"] {
						width: ' . $ww . 'px !important;
						max-width: ' . $ww . 'px !important;
					}
					.wp-block[data-align="full"] {
						max-width: none !important;
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
