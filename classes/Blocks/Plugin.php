<?php

namespace GutenbergBlocks\Blocks;

class Plugin {

  public function run() {
    $this->register_hooks();

		$args = array(
			'icon' => 'dashicons-admin-plugins',
			'category' => 'apis',
			//'options_callback' => array( $this, 'settings' ),
			'description' => __( 'Display a Plugin informations from the official WordPress repository', 'gutenblocks' ),
		);

		gutenberg_blocks_register_blocks( 'gutenblock/plugin', __( 'Plugin WordPress', 'gutenblocks' ), $args );
  }

  public function register_hooks() {

    // Ajax Search Plugin on wp.org
    add_action('wp_ajax_search_plugins', array( $this, 'search_plugins' ));
  }


	public function settings() {

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
