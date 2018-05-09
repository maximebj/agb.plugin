<?php

namespace AdvancedGutenbergBlocks;

defined('ABSPATH') or die('Cheatin&#8217; uh?');

use AdvancedGutenbergBlocks\Helpers\Consts;
use AdvancedGutenbergBlocks\Helpers\Dashicons;

use AdvancedGutenbergBlocks\WP\Installer;
use AdvancedGutenbergBlocks\WP\Admin;
use AdvancedGutenbergBlocks\WP\Front;
use AdvancedGutenbergBlocks\WP\Gutenberg;
use AdvancedGutenbergBlocks\WP\Settings;

use AdvancedGutenbergBlocks\Services\Blocks;

use AdvancedGutenbergBlocks\Blocks\Notice;
use AdvancedGutenbergBlocks\Blocks\Plugin;
use AdvancedGutenbergBlocks\Blocks\Ad;
use AdvancedGutenbergBlocks\Blocks\AdText;
use AdvancedGutenbergBlocks\Blocks\Product;
use AdvancedGutenbergBlocks\Blocks\Card;
use AdvancedGutenbergBlocks\Blocks\AddToCart;
use AdvancedGutenbergBlocks\Blocks\Post;
use AdvancedGutenbergBlocks\Blocks\Testimonial;
use AdvancedGutenbergBlocks\Blocks\Gmap;


/**
 * Initialize all the needed plugin classes
 *
 * @author Maximebj
 * @version 1.0.0
 * @since 1.0.0
 */

class AdvancedGutenbergBlocks {

	public function __construct() {

		// Check compatibility (WP 5.1 or gutenberg plugin is activated)
		add_action( 'admin_init', array( $this, 'check_compatibility' ), 1 );

		// Load text domain
		add_action( 'plugins_loaded', array( $this, 'load_textdomain' ) );

		// Plugin path
		$path = plugin_dir_path( __DIR__ );

		// Load Classes
		require_once $path . 'classes/Helpers/Consts.php';
		require_once $path . 'classes/Helpers/Dashicons.php';

		require_once $path . 'classes/WP/Installer.php';
		require_once $path . 'classes/WP/Admin.php';
		require_once $path . 'classes/WP/Front.php';
		require_once $path . 'classes/WP/Gutenberg.php';
		require_once $path . 'classes/WP/Settings.php';

		require_once $path . 'classes/Services/Blocks.php';

		require_once $path . 'classes/Blocks/Notice.php';
		require_once $path . 'classes/Blocks/Plugin.php';
		require_once $path . 'classes/Blocks/Ad.php';
		require_once $path . 'classes/Blocks/AdText.php';
		require_once $path . 'classes/Blocks/Product.php';
		require_once $path . 'classes/Blocks/Card.php';
		require_once $path . 'classes/Blocks/AddToCart.php';
		require_once $path . 'classes/Blocks/Post.php';
		require_once $path . 'classes/Blocks/Testimonial.php';
		require_once $path . 'classes/Blocks/Gmap.php';

		// Hack to get JS strings translatable by wp.org
		require $path . 'js-strings.php';

		// Activation / Deactivation hooks
		register_activation_hook( $path . 'plugin.php' , Installer::activate() );
		register_deactivation_hook( $path . 'plugin.php' , Installer::deactivate() );
		register_uninstall_hook( $path . 'plugin.php' , Installer::uninstall() );


		// Init Classes and Hooks
		$class_admin = new Admin();
    $class_admin->register_hooks();

		$class_public = new Front();
    $class_public->register_hooks();

		$class_gutenberg = new Gutenberg();
		$class_gutenberg->register_hooks();

		$class_settings = new Settings();
		$class_settings->register_hooks();


		// Blocks
		$class_blocks_plugin = new Plugin();
		$class_blocks_plugin->run();

		$class_blocks_notice = new Notice();
		$class_blocks_notice->run();

		$class_blocks_ad = new Ad();
		$class_blocks_ad->run();

		$class_blocks_adtext = new AdText();
		$class_blocks_adtext->run();

		$class_blocks_product = new Product();
		$class_blocks_product->run();

		$class_blocks_card = new Card();
		$class_blocks_card->run();

		$class_blocks_addtocart = new AddToCart();
		$class_blocks_addtocart->run();

		$class_blocks_post = new Post();
		$class_blocks_post->run();

		$class_blocks_testimonial = new Testimonial();
		$class_blocks_testimonial->run();

		$class_blocks_gmap = new Gmap();
		$class_blocks_gmap->run();

	}

	public function get_plugin_name() {
		return Consts::PLUGIN_NAME;
	}

	public function get_version() {
		return Consts::VERSION;
	}


	/**
	 * AGB needs WP 5.0+ or Gutenberg Plugin to work
	 */

	public function check_compatibility() {
		global $wp_version;

		if ( ! version_compare( $wp_version, '5.1', '>=' ) and ! is_plugin_active( 'gutenberg/gutenberg.php' ) ) {

			deactivate_plugins( '/advanced-gutenberg-blocks/plugin.php' );
			add_action( 'admin_notices', array( $this , 'compatibility_notice') );
		}
	}

	public function compatibility_notice() {
		?>
		<div class="error notice is-dismissible">
			<p><?php _e( 'Advanced Gutenberg Blocks requires WordPress 5.0 or Gutenberg plugin to be activated', 'advanced-gutenberg-blocks' ); ?></p>
		</div>
		<?php
	}


	/**
	 * Load text domain
	 */

	public function load_textdomain() {
	  load_plugin_textdomain( 'advanced-gutenberg-blocks', false, plugin_dir_path( __DIR__ ) . '/languages' );
	}
}
