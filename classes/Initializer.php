<?php

namespace GutenbergBlocks;

defined('ABSPATH') or die('Cheatin&#8217; uh?');

use GutenbergBlocks\Helpers\Consts;
use GutenbergBlocks\Helpers\Dashicons;

use GutenbergBlocks\WP\Admin;
use GutenbergBlocks\WP\Front;
use GutenbergBlocks\WP\Gutenberg;
use GutenbergBlocks\WP\Settings;

use GutenbergBlocks\Services\Blocks;

use GutenbergBlocks\Blocks\Notice;
use GutenbergBlocks\Blocks\Plugin;
use GutenbergBlocks\Blocks\Ad;
use GutenbergBlocks\Blocks\AdText;
use GutenbergBlocks\Blocks\Products;
use GutenbergBlocks\Blocks\Card;
use GutenbergBlocks\Blocks\AddToCart;
use GutenbergBlocks\Blocks\Posts;
use GutenbergBlocks\Blocks\Testimonial;


/**
 * Initialize all the needed plugin classes
 *
 * @author Maximebj
 * @version 1.0.0
 * @since 1.0.0
 */

class Initializer {

	public function run() {

		$path = plugin_dir_path( dirname( __FILE__ ) );

		// Load Classes
		require_once $path.'classes/Helpers/Consts.php';
		require_once $path.'classes/Helpers/Dashicons.php';

		require_once $path.'classes/WP/Admin.php';
		require_once $path.'classes/WP/Front.php';
		require_once $path.'classes/WP/Gutenberg.php';
		require_once $path.'classes/WP/Settings.php';

		require_once $path.'classes/Services/Blocks.php';

		require_once $path.'classes/Blocks/Notice.php';
		require_once $path.'classes/Blocks/Plugin.php';
		require_once $path.'classes/Blocks/Ad.php';
		require_once $path.'classes/Blocks/AdText.php';
		require_once $path.'classes/Blocks/Products.php';
		require_once $path.'classes/Blocks/Card.php';
		require_once $path.'classes/Blocks/AddToCart.php';
		require_once $path.'classes/Blocks/Posts.php';
		require_once $path.'classes/Blocks/Testimonial.php';


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

		$class_blocks_products = new Products();
		$class_blocks_products->run();

		$class_blocks_card = new Card();
		$class_blocks_card->run();

		$class_blocks_addtocart = new AddToCart();
		$class_blocks_addtocart->run();

		$class_blocks_posts = new Posts();
		$class_blocks_posts->run();

		$class_blocks_testimonial = new Testimonial();
		$class_blocks_testimonial->run();

	}

	public function get_plugin_name() {
		return Consts::PLUGIN_NAME;
	}

	public function get_version() {
		return Consts::VERSION;
	}

}
