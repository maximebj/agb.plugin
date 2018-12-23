<?php

namespace AdvancedGutenbergBlocks\Blocks;

use AdvancedGutenbergBlocks\Helpers\Consts;
use AdvancedGutenbergBlocks\Services\Blocks;

class Code {

  public function run() {

		// Register Hooks
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ) );

		// Register Block in the plugin settings page
		$args = array(
			'icon' => 'dashicons-editor-code',
			'category' => 'specific',
			'preview_image' => Consts::get_url() . 'admin/img/blocks/code.jpg',
			'description' => __( "Syntax highlighting with custom themes for every languages.", 'advanced-gutenberg-blocks' ),
			'options_callback' => array( $this, 'settings' ),
		);

		Blocks::register_block( 'advanced-gutenberg-blocks/code', __( 'Code', 'advanced-gutenberg-blocks' ), $args );

		// Register settings
		Blocks::register_setting( 'advanced-gutenberg-blocks-code-theme' );
  }

	public function settings() {

		$selected_theme = $this->get_selected_theme();
		$select_html = '';

		foreach( $this->theme_list() as $theme ) {
			$value = $theme['value'];
			$label = $theme['label'];
			$selected = ($theme['value'] == $selected_theme) ? ' selected ' : '';
			$select_html .= "<option value='$value'$selected>$label</option>";
		}

		echo '		
			<div class="AGB-form__setting">
				<div class="AGB-form__label">
					<label for="advanced-gutenberg-blocks-bloc-theme"> ' . __( 'Theme', 'advanced-gutenberg-blocks' ) . '</label>
				</div>

				<div class="AGB-form__field">
					<select name="advanced-gutenberg-blocks-code-theme">
						' . $select_html . '
					</select>
				</div>
			</div>

			<p class="AGB-form__help">' . __( 'what does it look like? <a href="https://codemirror.net/demo/theme.html" target="_blank">Find it out here</a>. ' ) . '</p>
		';
	}

	public function editor_assets() {

		wp_localize_script(
			Consts::BLOCKS_SCRIPT,
			'advancedGutenbergBlocksCode',
			array(
				'themes' => $this->theme_list(),
				'selectedTheme' => $this->get_selected_theme(),
			)
		);

	}

	public function get_selected_theme() {
		$selected_theme = get_option( 'advanced-gutenberg-blocks-code-theme' );
		
		return ( $selected_theme == "" ) ? 'dracula' : $selected_theme;
	}

	public function theme_list() {

		return array(
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
	}
}
