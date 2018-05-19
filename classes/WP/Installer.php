<?php

namespace AdvancedGutenbergBlocks\WP;

use AdvancedGutenbergBlocks\Helpers\Consts;

defined('ABSPATH') or die('Cheatin&#8217; uh?');

class Installer {

	public function register_hooks() {
		register_activation_hook( Consts::get_path() . 'plugin.php' , array( $this, 'activate' ) );
		register_deactivation_hook( Consts::get_path() . 'plugin.php' , array( $this, 'deactivate' ) );
		register_uninstall_hook( Consts::get_path() . 'plugin.php' , array( $this, 'uninstall' ) );
	}

	public function activate() {
	}

	public function deactivate() {
	}

	public function uninstall() {
	}

}
