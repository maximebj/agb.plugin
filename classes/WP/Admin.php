<?php

namespace AdvancedGutenbergBlocks\WP;

defined('ABSPATH') or die('Cheatin&#8217; uh?');

use AdvancedGutenbergBlocks\Helpers\Consts;

/**
 * Admin enqueue styles, scripts and menu declaration
 *
 * @author Maximebj
 * @version 1.0.0
 * @since 1.0.0
 */

class Admin {

	public function register_hooks() {
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_assets' ) );
		add_action( 'admin_menu', array( $this, 'add_admin_menu' ) );
    add_action( 'admin_init', array( $this, 'woocommerce_add_keys') );
	}

	public function enqueue_assets( $hook ) {

		// All AGB admin pages
		if( strpos( $hook, Consts::PLUGIN_NAME ) !== false ) { 
			wp_enqueue_style(
				Consts::PLUGIN_NAME,
				Consts::get_url() . 'admin/css/advanced-gutenberg-blocks-admin.css',
				array(),
				Consts::VERSION,
				'all'
			);
		}

		// Block management page
		if( 
			$hook == 'blocks_page_advanced-gutenberg-blocks-manager' or
			$hook == 'blocks_page_advanced-gutenberg-blocks-disable'
		) {

			wp_enqueue_script(
				'Listjs',
				Consts::get_url() . 'admin/js/list.min.js',
				array('jquery'),
				Consts::VERSION,
				false
			);

			wp_enqueue_script(
				Consts::PLUGIN_NAME.'-management',
				Consts::get_url() . 'admin/js/advanced-gutenberg-blocks-management.js',
				array('jquery', 'Listjs'),
				Consts::VERSION,
				false
			);
		}
 
		if( $hook == 'blocks_page_advanced-gutenberg-blocks-settings' ) {
			
			wp_enqueue_style( 'wp-color-picker' );

			wp_enqueue_script(
				Consts::PLUGIN_NAME.'-settings',
				Consts::get_url() . 'admin/js/advanced-gutenberg-blocks-settings.js',
				array('jquery', 'wp-color-picker'),
				Consts::VERSION,
				false
			);
		}

	}

	public function add_admin_menu() {

		add_menu_page(
			'Blocks',
			'Blocks', // Don't translate or css/js will break
			'edit_posts',
			Consts::PLUGIN_NAME,
			null,
			'dashicons-screenoptions',
			65
		);

	}

  public function woocommerce_add_keys() {
    global $wpdb;

    // WooCommerce is activated ?
    if ( class_exists( 'WooCommerce' ) ) {

      // Is the
      $results = $wpdb->get_results( "SELECT key_id FROM {$wpdb->prefix}woocommerce_api_keys WHERE description = 'Advanced Gutenberg Blocks'", OBJECT );

      if( count( $results ) == 0 ) {

        $consumer_key    = 'ck_' . wc_rand_hash();
				$consumer_secret = 'cs_' . wc_rand_hash();

        $data = array(
          'user_id'         => 1,
          'description'     => "Advanced Gutenberg Blocks",
          'permissions'     => 'read',
          'consumer_key'    => wc_api_hash( $consumer_key ),
          'consumer_secret' => $consumer_secret,
          'truncated_key'   => substr( $consumer_secret, -7 ),
        );

        $wpdb->insert(
    			$wpdb->prefix . 'woocommerce_api_keys',
          $data,
    			array(
    				'%d',
            '%s',
    				'%s',
    				'%s',
    				'%s',
    				'%s',
    			)
        );

        update_option( 'AGB_woo_ck', $consumer_key );
        update_option( 'AGB_woo_cs', $consumer_secret );
      }
    }
  }

}
