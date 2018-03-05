<?php

namespace GutenbergBlocks\Blocks;

class Ad {

  public function run() {
    $this->register_hooks();
  }

  public function register_hooks() {

		// Register block in settings
		add_filter('gutenberg-blocks/register-block', array( $this, 'register_block' ));

  }

	public function register_block($blocks) {
		$blocks[] = array(
			'id' => 'gutenblock/ad',
			'name' => __('Advertisement', 'gutenblocks') ,
			'icon' => 'dashicons-megaphone',
			'category' => 'others',
			'options_callback' => array( $this, 'settings' )
		);

		return $blocks;
	}

	public function settings() {
		echo '<input type="text" value="je suis une option" />';
	}

}
