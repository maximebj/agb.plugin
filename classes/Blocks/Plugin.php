<?php

namespace GutenbergBlocks\Blocks;

use GutenbergBlocks\Helpers\Consts;

class Plugin {

  public function run() {

		// Ajax Search Plugin on wp.org
    add_action('wp_ajax_search_plugins', array( $this, 'search_plugins' ));


		// Register Block in the Gutenblocks settings page
		$args = array(
			'icon' => 'dashicons-admin-plugins',
			'category' => 'apis',
			'preview_image' => Consts::get_url().'admin/img/blocks/plugin.jpg',
			'description' => __( 'Display a Plugin informations from the official WordPress repository', 'advanced-gutenberg-blocks' ),
		);

		gutenblocks_register_blocks( 'gutenblocks/plugin', __( 'WordPress Plugin Card', 'advanced-gutenberg-blocks' ), $args );
  }

  public function search_plugins()
  {
    require_once( ABSPATH . "wp-admin" . '/includes/plugin-install.php' );

    $request = array(
      'action' => 'query_plugins',
      'per_page' => 24,
      'search' => $_POST['search'],
      'fields' => array(
        'short_description' => true,
        'active_installs' => true,
        'icons' => true,
        'sections' => false,
      )
    );

    $results = plugins_api('plugin_information', $request);

    foreach($results->plugins as &$plugin) {
      $plugin->name = html_entity_decode($plugin->name);
      $plugin->short_description = html_entity_decode($plugin->short_description);
    }

    echo json_encode($results);

    die();
  }

}
