<?php

namespace AdvancedGutenbergBlocks\Blocks;

use AdvancedGutenbergBlocks\Helpers\Consts;
use AdvancedGutenbergBlocks\Services\Blocks;

class Code {

  public function run() {

		// Register Hooks
		add_action( 'init', array( $this, 'register_render' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'front_assets' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ) );

		// Register Block in the plugin settings page
		$args = array(
			'icon' => 'dashicons-editor-code',
			'category' => 'specific',
			'preview_image' => Consts::get_url() . 'admin/img/blocks/code.jpg',
			'description' => __( "Syntax highlighting with custom themes for every languages.", 'advanced-gutenberg-blocks' ),
			'options_callback' => array( $this, 'settings' ),
			'credits_callback' => array( $this, 'credits' ),
		);

		Blocks::register_block( 'advanced-gutenberg-blocks/code', __( 'Code', 'advanced-gutenberg-blocks' ), $args );

		// Register settings
		Blocks::register_setting( 'advanced-gutenberg-blocks-code-theme' );
  }

	public function settings() {

		$selected_theme = $this->get_selected_theme();
		$select_html = '';

		foreach( $this->get_theme_list() as $theme ) {
			$value = $theme['value'];
			$label = $theme['label'];
			$selected = ( $theme['value'] == $selected_theme ) ? ' selected ' : '';
			$select_html .= "<option value='$value'$selected>$label</option>";
		}

		include Consts::get_path() . 'admin/templates/settings/code.php';
	}

	public function credits() {
		echo '	
			<p>' . __('This block uses Code Mirror and React Code Mirror from Marijn Haverbeke and Jed Watson.', 'advanced-gutenberg-blocks' ) . '</p>
		';
	}

	public function editor_assets() {

		wp_localize_script(
			Consts::BLOCKS_SCRIPT,
			'advancedGutenbergBlocksCode',
			array(
				'themes' => $this->get_theme_list(),
				'selectedTheme' => $this->get_selected_theme(),
				'languages' => $this->get_language_list(),
			)
		);
	}

	public function front_assets() {
		if ( has_block('advanced-gutenberg-blocks/code') ) {
			
			wp_enqueue_style(
				Consts::PLUGIN_NAME . '-code-mirror',
				Consts::get_url() . 'vendor/codemirror/codemirror.css',
				array(),
				Consts::VERSION
			);

			// Enqueue Theme
			$theme = $this->get_selected_theme();
			
			wp_enqueue_style(
				Consts::PLUGIN_NAME . '-code-mirror-theme',
				Consts::get_url() . "vendor/codemirror/themes/$theme.css",
				[ Consts::PLUGIN_NAME . '-code-mirror' ],
				Consts::VERSION
			);

			wp_enqueue_script(
				Consts::PLUGIN_NAME . '-code-mirror',
				Consts::get_url() . 'vendor/codemirror/codemirror.js',
				[],
        Consts::VERSION
			);

			wp_enqueue_script(
				Consts::PLUGIN_NAME . '-code-mirror-matchbrackets',
				Consts::get_url() . 'vendor/codemirror/addons/edit/matchbrackets.js',
				[ Consts::PLUGIN_NAME . '-code-mirror' ],
        Consts::VERSION
			);

			
			// Define if addons are needed
			$content = get_post( $post_id );
			$regex = "#<!-- wp:advanced-gutenberg-blocks/code {([^\>]+?)?\"highlightStart\":\"(.*?)\"#";
			preg_match_all( $regex, $content->post_content, $matches );
			$highlights = $matches[2];
			
			if( ! empty( $highlights ) ) {

				wp_enqueue_script(
					Consts::PLUGIN_NAME . '-code-mirror-searchcursor',
					Consts::get_url() . 'vendor/codemirror/addons/search/searchcursor.js',
					[ Consts::PLUGIN_NAME . '-code-mirror' ],
					Consts::VERSION
				);

				wp_enqueue_script(
					Consts::PLUGIN_NAME . '-code-mirror-markselection',
					Consts::get_url() . 'vendor/codemirror/addons/selection/mark-selection.js',
					[ Consts::PLUGIN_NAME . '-code-mirror' ],
					Consts::VERSION
				);
			}

			// Enqueue languages

			// -- First: get content and fetch used languages
			
			$regex = "#<!-- wp:advanced-gutenberg-blocks/code {([^\>]+?)?\"language\":\"(.*?)\"#";
			preg_match_all( $regex, $content->post_content, $matches );
			$langs = $matches[2];

			// -- Second: convert languages to modes
			$languages = $this->get_language_list();
			$modes = array();
			
			foreach( $langs as $lang ) {
				$key = array_search( $lang, array_column( $languages, 'slug' ) );
				$modes[] = $languages[$key]['mode'];
			}

			$modes = array_unique( $modes );

			// -- Some languages needs some addons first

			if ( count ( array_intersect( ['rust'] , $modes) ) > 0 ) {			
				wp_enqueue_script(
					Consts::PLUGIN_NAME . '-code-mirror-simplemode',
					Consts::get_url() . 'vendor/codemirror/addons/mode/simple.js',
					[ Consts::PLUGIN_NAME . '-code-mirror' ],
					Consts::VERSION
				);
			} 

			// -- Then: load dependencies according to languages used
			foreach( $modes as $mode ) {
				wp_enqueue_script(
					Consts::PLUGIN_NAME . "-code-mirror-$mode ",
					Consts::get_url() . "vendor/codemirror/modes/$mode/$mode.js",
					[ Consts::PLUGIN_NAME . "-code-mirror" ],
					Consts::VERSION
				);
			}

			// -- Finally: load additionnal dependencies needed for some languages
			// ---- C-Like
			if ( count ( array_intersect( ['php'] , $modes) ) > 0 ) {			
				wp_enqueue_script(
					Consts::PLUGIN_NAME . '-code-mirror-clike',
					Consts::get_url() . 'vendor/codemirror/modes/clike/clike.js',
					[ Consts::PLUGIN_NAME . '-code-mirror' ],
					Consts::VERSION
				);
			}

			// ---- Front End mixed
			if ( count ( array_intersect( ['php', 'xml', 'twig', 'javascript', 'jsx'] , $modes) ) > 0 ) {
				wp_enqueue_script(
					Consts::PLUGIN_NAME . '-code-mirror-htmlmixed',
					Consts::get_url() . 'vendor/codemirror/modes/htmlmixed/htmlmixed.js',
					[ Consts::PLUGIN_NAME . '-code-mirror' ],
					Consts::VERSION
				);

				wp_enqueue_script(
					Consts::PLUGIN_NAME . '-code-mirror-xml',
					Consts::get_url() . 'vendor/codemirror/modes/xml/xml.js',
					[ Consts::PLUGIN_NAME . '-code-mirror' ],
					Consts::VERSION
				);

				wp_enqueue_script(
					Consts::PLUGIN_NAME . '-code-mirror-css',
					Consts::get_url() . 'vendor/codemirror/modes/css/css.js',
					[ Consts::PLUGIN_NAME . '-code-mirror' ],
					Consts::VERSION
				);

				wp_enqueue_script(
					Consts::PLUGIN_NAME . '-code-mirror-javascript',
					Consts::get_url() . 'vendor/codemirror/modes/javascript/javascript.js',
					[ Consts::PLUGIN_NAME . '-code-mirror' ],
					Consts::VERSION
				);
			}
		}
	}

	public function register_render() {

		if ( ! function_exists( 'register_block_type' ) or is_admin() ) {
			return;
		}

		register_block_type(
      'advanced-gutenberg-blocks/code',
      [ 'render_callback' => array( $this, 'render_block' ) ]
    );

	}

	public function render_block( $attributes ) {
		
		if( ! isset( $attributes['source'] ) ) {
			return;
		}
		
		// Default values
		$source = $attributes['source'];
		$file 		 = array_key_exists( 'file', $attributes )      ? $attributes['file'] 		 : '';
		$language  = array_key_exists( 'language', $attributes )  ? $attributes['language']  : 'xml';
		$startLine = array_key_exists( 'startLine', $attributes ) ? $attributes['startLine'] : 1;
		$showLines = array_key_exists( 'showLines', $attributes ) ? $attributes['showLines'] : true;
		$wrapLines = array_key_exists( 'wrapLines', $attributes ) ? $attributes['wrapLines'] : true;
		$alignment = array_key_exists( 'alignment', $attributes ) ? ' align' . $attributes['alignment'] : '';
		$highlightStart = array_key_exists( 'highlightStart', $attributes ) ? $attributes['highlightStart'] : '';
		$highlightEnd = array_key_exists( 'highlightEnd', $attributes ) ? $attributes['highlightEnd'] : '';

		// Random ID for this code to multiple instances of CodeMirror
		$rand = rand();

		// Get theme
		$theme = $this->get_selected_theme();

		// Get language Label and Mode
		$languages = $this->get_language_list();
		$key = array_search( $language, array_column( $languages, 'slug' ) );
		$lang_slug = $language;
		$lang_label = $languages[$key]['label'];
		$lang_mode = $languages[$key]['mode'];

		// Get Marked text
		$mark_text = '';
		if( $highlightStart != "" ) {
			$start = intval( $highlightStart ) - intval( $startLine ) ;

			if( $highlightEnd != "" ) {
				$end = intval( $highlightEnd ) - intval( $startLine ) + 1;
			} else {
				$end = $start + 1;
			}

			$mark_text = ".markText( {line: ".$start.", ch: 0}, {line: ".$end.", ch: 0}, {className: 'CodeMirror-styled-background'} );";
		}

		// Cached output
		$output = "";
		ob_start();

		// Get template
		include apply_filters( 'advanced_gutenberg_blocks_template', Consts::get_path() . 'public/templates/code.php', 'code' );

		$output = ob_get_contents();
		ob_end_clean();

		return $output;
	}

	public function get_selected_theme() {
		$selected_theme = get_option( 'advanced-gutenberg-blocks-code-theme' );
		
		return ( ! $selected_theme ) ? 'hopscotch' : $selected_theme;
	}

	public function get_language_list() {

		// Some languages uses the same mode in CodeMirror
		// Eg: PHP and Java uses C-Like mode
		// More: https://codemirror.net/mode/
		$languages = array(
			array( 'slug' => "html", 				'mode' => 'xml', 				'label' => 'HTML' ),
			array( 'slug' => "css", 				'mode' => 'css', 				'label' => 'CSS' ),
			array( 'slug' => "php", 				'mode' => 'php', 				'label' => 'PHP' ),
			array( 'slug' => "js", 					'mode' => 'javascript', 'label' => 'JS' ),
			array( 'slug' => "jsx", 				'mode' => 'jsx', 				'label' => 'JSX' ),
			array( 'slug' => "xml", 				'mode' => 'xml', 				'label' => 'XML' ),
			array( 'slug' => "sass", 	 			'mode' => 'sass', 			'label' => 'Sass' ),
			array( 'slug' => "stylus", 			'mode' => 'stylus', 		'label' => 'Stylus' ),
			array( 'slug' => "python", 			'mode' => 'python', 		'label' => 'Python' ),
			array( 'slug' => "go", 					'mode' => 'go', 				'label' => 'Go' ),
			array( 'slug' => "ruby", 				'mode' => 'ruby', 			'label' => 'Ruby' ),
			array( 'slug' => "java", 				'mode' => 'clike', 			'label' => 'Java' ),
			array( 'slug' => "c", 					'mode' => 'clike', 			'label' => 'C' ),
			array( 'slug' => "c++", 				'mode' => 'clike', 			'label' => 'C++' ),
			array( 'slug' => "c#", 					'mode' => 'clike', 			'label' => 'C#' ),
			array( 'slug' => "objective-c", 'mode' => 'clike', 			'label' => 'Objective C' ),
			array( 'slug' => "swift", 			'mode' => 'swift', 			'label' => 'Swift' ),
			array( 'slug' => "twig", 				'mode' => 'twig', 			'label' => 'Twig' ),
			array( 'slug' => "django", 			'mode' => 'django', 		'label' => 'Django' ),
			array( 'slug' => "shell", 			'mode' => 'shell', 		  'label' => 'Shell' ),
			array( 'slug' => "plain", 			'mode' => '', 		  		'label' => 'Plain Text' )
		);

		return apply_filters( 'advanced_gutenberg_blocks_code_languages', $languages );
	}

	public function get_theme_list() {

		$themes = array(
			array( 'value' => '3024-day' , 'label' => '3024 Day' ),
			array( 'value' => '3024-night' , 'label' => '3024 Night' ),
			array( 'value' => 'abcdef' , 'label' => 'ABCDEF' ),
			array( 'value' => 'ambiance' , 'label' => 'Ambiance' ),
			array( 'value' => 'ambiance-mobile' , 'label' => 'Ambiance-mobile' ),
			array( 'value' => 'base16-dark' , 'label' => 'Base16 Dark' ),
			array( 'value' => 'base16-light' , 'label' => 'Base16 Light' ),
			array( 'value' => 'bespin' , 'label' => 'Bespin' ),
			array( 'value' => 'blackboard' , 'label' => 'Blackboard' ),
			array( 'value' => 'cobalt' , 'label' => 'Cobalt' ),
			array( 'value' => 'colorforth' , 'label' => 'Colorforth' ),
			array( 'value' => 'darcula' , 'label' => 'Darcula' ),
			array( 'value' => 'dracula' , 'label' => 'Dracula' ),
			array( 'value' => 'duotone-dark' , 'label' => 'Duotone Dark' ),
			array( 'value' => 'duotone-light' , 'label' => 'Duotone Light' ),
			array( 'value' => 'eclipse' , 'label' => 'Eclipse' ),
			array( 'value' => 'elegant' , 'label' => 'Elegant' ),
			array( 'value' => 'erlang-dark' , 'label' => 'Erlang Dark' ),
			array( 'value' => 'gruvbox-dark' , 'label' => 'Gruvbox Dark' ),
			array( 'value' => 'hopscotch' , 'label' => 'Hopscotch' ),
			array( 'value' => 'icecoder' , 'label' => 'Icecoder' ),
			array( 'value' => 'idea' , 'label' => 'Idea' ),
			array( 'value' => 'isotope' , 'label' => 'Isotope' ),
			array( 'value' => 'lesser-dark' , 'label' => 'Lesser Dark' ),
			array( 'value' => 'liquibyte' , 'label' => 'Liquibyte' ),
			array( 'value' => 'lucario' , 'label' => 'Lucario' ),
			array( 'value' => 'material' , 'label' => 'Material' ),
			array( 'value' => 'mbo' , 'label' => 'MBO' ),
			array( 'value' => 'mdn-like' , 'label' => 'MDN like' ),
			array( 'value' => 'midnight' , 'label' => 'Midnight' ),
			array( 'value' => 'monokai' , 'label' => 'Monokai' ),
			array( 'value' => 'neat' , 'label' => 'Neat' ),
			array( 'value' => 'neo' , 'label' => 'Neo' ),
			array( 'value' => 'night' , 'label' => 'Night' ),
			array( 'value' => 'oceanic-next' , 'label' => 'Oceanic Next' ),
			array( 'value' => 'panda-syntax' , 'label' => 'Panda Syntax' ),
			array( 'value' => 'paraiso-dark' , 'label' => 'Paraiso Dark' ),
			array( 'value' => 'paraiso-light' , 'label' => 'Paraison Light' ),
			array( 'value' => 'pastel-on-dark' , 'label' => 'Pastel On Dark' ),
			array( 'value' => 'railscasts' , 'label' => 'Railscasts' ),
			array( 'value' => 'rubyblue' , 'label' => 'Rubyblue' ),
			array( 'value' => 'seti' , 'label' => 'Seti' ),
			array( 'value' => 'shadowfox' , 'label' => 'Shadowfox' ),
			array( 'value' => 'solarized' , 'label' => 'Solarized' ),
			array( 'value' => 'ssms' , 'label' => 'SSMS' ),
			array( 'value' => 'the-matrix' , 'label' => 'The Matrix' ),
			array( 'value' => 'tomorrow-night-bright' , 'label' => 'Tomorrow Night Bright' ),
			array( 'value' => 'tomorrow-night-eighties' , 'label' => 'Tomorrow Night Eighties' ),
			array( 'value' => 'ttcn' , 'label' => 'TTCN' ),
			array( 'value' => 'twilight' , 'label' => 'Twilight' ),
			array( 'value' => 'vibrant-ink' , 'label' => 'Vibrant Ink' ),
			array( 'value' => 'xq-dark' , 'label' => 'XQ Dark' ),
			array( 'value' => 'xq-light' , 'label' => 'XQ Light' ),
			array( 'value' => 'yeti' , 'label' => 'Yeti' ),
			array( 'value' => 'zenburn' , 'label' => 'Zenburn' ),
		);

		return apply_filters( 'advanced_gutenberg_blocks_code_themes', $themes );
	}
}
