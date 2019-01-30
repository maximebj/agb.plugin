<?php

namespace AdvancedGutenbergBlocks\Blocks;

use AdvancedGutenbergBlocks\Helpers\Consts;
use AdvancedGutenbergBlocks\Services\Blocks;

class Plugin {

  public function run() {

		// Register hooks
		add_action( 'init', array( $this, 'register_render' ) );
    add_action( 'wp_ajax_search_plugins', array( $this, 'search_plugins' ) );
    add_action( 'wp_ajax_get_plugin', array( $this, 'get_plugin' ) );


		// Register Block in the plugin settings page
		$args = array(
			'icon' => 'dashicons-admin-plugins',
			'category' => 'apis',
			'preview_image' => Consts::get_url() . 'admin/img/blocks/plugin.jpg',
			'description' => __( 'Display a Plugin informations from the official WordPress repository.', 'advanced-gutenberg-blocks' ),
		);

		Blocks::register_block( 'advanced-gutenberg-blocks/plugin', __( 'WordPress Plugin Card', 'advanced-gutenberg-blocks' ), $args );
  }

	public function register_render() {

		if ( ! function_exists( 'register_block_type' ) or is_admin() ) {
			return;
		}

		register_block_type(
			'advanced-gutenberg-blocks/plugin',
			[ 'render_callback' => array( $this, 'render_block' ) ]
		);

	}

	public function render_block( $attributes ) {

		require_once( ABSPATH . "wp-admin" . '/includes/plugin-install.php' );

		if( ! isset( $attributes['slug'] ) ) {
			return;
		}

		$request = array(
      'slug' => $attributes['slug'],
			'fields' => $this->get_api_fields()
    );

		// Get datas from API
    $result = plugins_api('plugin_information', $request);

		// Prepare datas for template
		$plugin = $this->prepare_data( $result );

		// Start cached output
		$output = "";
		ob_start();

		// Get template
    include apply_filters( 'advanced_gutenberg_blocks_template', Consts::get_path() . 'public/templates/plugin.php', 'plugin' );

		// En cached output
		$output = ob_get_contents();
		ob_end_clean();

		return $output;

	}


	// Ajax: Search plugins for SearchPlugin component
  public function search_plugins() {

		require_once( ABSPATH . "wp-admin" . '/includes/plugin-install.php' );

    $request = array(
      'per_page' => 24,
      'search' => $_POST['search'],
      'fields' => $this->get_api_fields()
    );

    $results = plugins_api( 'query_plugins', $request );
		$data = array();
		$plugins = array();

    foreach( $results->plugins as $plugin ) {
			$plugins[] = $this->prepare_data( $plugin );
		}
		
		$data['info'] = $results->info;
		$data['plugins'] = $plugins;

    echo json_encode($data);

    die();
  }


	// Ajax: Get plugin data for Preview component
	public function get_plugin() {

		require_once( ABSPATH . "wp-admin" . '/includes/plugin-install.php' );

		$request = array(
      'slug' => $_POST['slug'],
			'fields' => $this->get_api_fields()
    );

		// Get datas from API
    $result = plugins_api( 'plugin_information', $request );

		// Prepare datas for template
		$plugin = $this->prepare_data( $result );

		echo json_encode( $plugin );

		die();
	}


	// Additional fields to get via plugins API
	private function get_api_fields() {
		return array(
			'short_description' => true,
			'active_installs' => true,
			'icons' => true,
			'sections' => false,
		);
	}


	// --- Datas relative methods

	private function prepare_data( $data ) {
		
		return array(
			'slug' => $data->slug,
			'name' => html_entity_decode( $data->name ),
			'description' => html_entity_decode( $data->short_description ),
			'icon' => $this->define_image( $data->icons ),
			'stars' => $this->set_stars( $data->rating ),
			'activeInstalls' => $this->format_installs( $data->active_installs ),
			'downloadLink' => "https://wordpress.org/plugins/" . $data->slug,
			'rating' => $data->rating,
			'numRatings' => $data->num_ratings,
			'author' => strip_tags( $data->author ),
			'homepage' => $data->homepage,
			'numRatings' => $data->num_ratings,
		);

	}


	private function define_image( $icons ) {

		if ( array_key_exists( '2x', $icons ) ) {
			return $icons['2x'];
		} else if( array_key_exists( '1x', $icons ) ) {
			return $icons['1x'];
		} else {
			return $icons['default'];
		}
	}


	private function format_installs( $installs ) {

		if ( $installs >= 1000000 ) {
			return __( '1+ Million', 'advanced-gutenberg-blocks' );
		}
		else if( $installs < 10 ) {
			return __( 'Less than 10', 'advanced-gutenberg-blocks' );
		}

		return $installs . '+';
	}


	private function set_stars( $rating ) {

		$rating = intval( $rating ) / 20;
    $floor = floor( $rating );

    $max = 5;
    $last = 0;

    $stars = '';

    for( $i=0; $i < $floor; $i++ ) {
      $stars.= $this->get_star_svg( 'filled' );
      $last++;
    }

    if( $floor != $rating ) {
      $stars.= $this->get_star_svg( 'half' );
      $last++;
    }

    for ( $i = $last; $i < $max; $i++ ) {
      $stars.= $this->get_star_svg( 'empty' );
    }

		return $stars;
	}


	private function get_star_svg( $type ) {

		if( $type == "filled" ) {

			return "
				<svg width='18px' height='18px'>
			 		<g fill='#F5BC41'>
			    	<polygon points='9 0 12 6 18 6.75 13.88 11.37 15 18 9 15 3 18 4.13 11.37 0 6.75 6 6'></polygon>
			  	</g>
				</svg>";

		} else if ( $type == "half" ) {

			return "
				<svg width='18px' height='18px'>
					<g fill='#F5BC41'>
						<path d='M9,0 L6,6 L0,6.75 L4.13,11.37 L3,18 L9,15 L15,18 L13.88,11.37 L18,6.75 L12,6 L9,0 Z M9,2.24 L11.34,6.93 L15.99,7.51 L12.81,11.07 L13.68,16.22 L9,13.88 L9,2.24 Z'></path>
					</g>
				</svg>
			";
		}

		return "
			<svg width='18px' height='18px'>
				<g fill='#F5BC41'>
					<path d='M9,0 L6,6 L0,6.75 L4.13,11.37 L3,18 L9,15 L15,18 L13.88,11.37 L18,6.75 L12,6 L9,0 Z M9,2.24 L11.34,6.93 L15.99,7.51 L12.81,11.07 L13.68,16.22 L9,13.88 L4.32,16.22 L5.19,11.07 L2.01,7.51 L6.66,6.93 L9,2.24 Z'></path>
				</g>
			</svg>
		";
	}

}
