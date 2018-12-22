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
  }

	public function settings() {

		$select = '<option value="atom-one-dark">Atom One Dark</option>';
		// get_option( 'advanced-gutenberg-blocks-giphy-api-key' )

		echo '		
			<div class="AGB-form__setting">
				<div class="AGB-form__label">
					<label for="advanced-gutenberg-blocks-bloc-theme"> ' . __( 'Theme', 'advanced-gutenberg-blocks' ) . '</label>
				</div>

				<div class="AGB-form__field">
					<select name="advanced-gutenberg-blocks-giphy-api-key">
						' . $select . '
					</select>
				</div>
			</div>
		';
	}

	public function editor_assets() {
		$theme = get_option( 'advanced-gutenberg-blocks-code-theme' );

		$data = array();

		if ( $theme == "" ) {
			$data['theme'] = 'atom-one-dark';
		} else {
			$data['theme'] = $theme;
		}

		wp_localize_script(
			Consts::BLOCKS_SCRIPT,
			'advancedGutenbergBlocksCode',
			$data
		);

	}
}
