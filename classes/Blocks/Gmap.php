<?php

namespace AdvancedGutenbergBlocks\Blocks;

use AdvancedGutenbergBlocks\Helpers\Consts;
use AdvancedGutenbergBlocks\Services\Blocks;

class Gmap {

  public function run() {

		// Register hooks
		add_action( 'init', array( $this, 'register_render' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ) );

		// Register Block in the plugin settings page
		$args = array(
			'icon' => 'dashicons-location-alt',
			'category' => 'apis',
			'preview_image' => Consts::get_url().'admin/img/blocks/gmap.jpg',
			'description' => __( "Insert a Google Map in your content, the easy way.", 'advanced-gutenberg-blocks' ),
			'options_callback' => array( $this, 'settings' ),
			'require' => __('This block requires an API key'),
		);

		Blocks::register_block( 'advanced-gutenberg-blocks/gmap', __( 'Google Map', 'advanced-gutenberg-blocks' ), $args );

		// Register settings
		Blocks::register_setting( 'advanced-gutenberg-blocks-gmap-api-key' );
  }

	public function settings() {
		include Consts::get_path() . 'admin/templates/settings/gmap.php';
	}

	public function register_render() {

		if ( ! function_exists( 'register_block_type' ) or is_admin() ) {
			return;
		}

		register_block_type(
      'advanced-gutenberg-blocks/gmap',
      [ 'render_callback' => array( $this, 'render_block' ) ]
    );
	}

	public function render_block( $attributes ) {	 

		// Default values
		$address   = array_key_exists( 'address', $attributes )   ? $attributes['address']	 : 'Paris';
		$name   	 = array_key_exists( 'name', $attributes )      ? $attributes['name'] 		 : '';
		$latitude  = array_key_exists( 'latitude', $attributes )  ? $attributes['latitude']  : 48.8566;
		$longitude = array_key_exists( 'longitude', $attributes ) ? $attributes['longitude'] : 2.3522;
		$zoom  		 = array_key_exists( 'zoom', $attributes )  		? $attributes['zoom']  		 : 15;
		$height    = array_key_exists( 'height', $attributes )  	? $attributes['height']  	 : 400;
		$style  	 = array_key_exists( 'style', $attributes )  		? $attributes['style']   	 : '';
		$alignment = array_key_exists( 'alignment', $attributes ) ? ' align' . $attributes['alignment']  : '';
		

		// Get Google Map JSON styles
		$available_styles = $this->get_styles();
		$styles = isset( $available_styles[ $style ] ) ? $available_styles[ $style ] : '"default"';

		// Get API Key
		$api_key = get_option( 'advanced-gutenberg-blocks-gmap-api-key' );

		// Rand number to allow multiple maps instances
		$rand = rand();


		// Cached output
		$output = "";
		ob_start();

		// Template
    include apply_filters( 'advanced_gutenberg_blocks_template', Consts::get_path() . 'public/templates/gmap.php', 'gmap' );
		
		$output = ob_get_contents();
		ob_end_clean();

		return $output;
	}

	public function editor_assets() {
		$api_key = get_option( 'advanced-gutenberg-blocks-gmap-api-key' );

		$data = array();

		if ( $api_key == "" ) {
			$data['error'] = 'noApiKey';
		}

		wp_localize_script(
			Consts::BLOCKS_SCRIPT,
			'advancedGutenbergBlocksGmap',
			$data
		);

		// Load Gmap API if key is provided
		if( $api_key != "" ) {
			wp_enqueue_script(
				Consts::PLUGIN_NAME . '-gmap',
				'https://maps.googleapis.com/maps/api/js?key=' . $api_key,
				[ Consts::BLOCKS_SCRIPT ],
        Consts::VERSION
			);
		}
	}

	public function get_styles() {

		return array(
			'silver' => "[
				{
					elementType: 'geometry',
					stylers: [{color: '#f5f5f5'}]
				},
				{
					elementType: 'labels.icon',
					stylers: [{visibility: 'off'}]
				},
				{
					elementType: 'labels.text.fill',
					stylers: [{color: '#616161'}]
				},
				{
					elementType: 'labels.text.stroke',
					stylers: [{color: '#f5f5f5'}]
				},
				{
					featureType: 'administrative.land_parcel',
					elementType: 'labels.text.fill',
					stylers: [{color: '#bdbdbd'}]
				},
				{
					featureType: 'poi',
					elementType: 'geometry',
					stylers: [{color: '#eeeeee'}]
				},
				{
					featureType: 'poi',
					elementType: 'labels.text.fill',
					stylers: [{color: '#757575'}]
				},
				{
					featureType: 'poi.park',
					elementType: 'geometry',
					stylers: [{color: '#e5e5e5'}]
				},
				{
					featureType: 'poi.park',
					elementType: 'labels.text.fill',
					stylers: [{color: '#9e9e9e'}]
				},
				{
					featureType: 'road',
					elementType: 'geometry',
					stylers: [{color: '#ffffff'}]
				},
				{
					featureType: 'road.arterial',
					elementType: 'labels.text.fill',
					stylers: [{color: '#757575'}]
				},
				{
					featureType: 'road.highway',
					elementType: 'geometry',
					stylers: [{color: '#dadada'}]
				},
				{
					featureType: 'road.highway',
					elementType: 'labels.text.fill',
					stylers: [{color: '#616161'}]
				},
				{
					featureType: 'road.local',
					elementType: 'labels.text.fill',
					stylers: [{color: '#9e9e9e'}]
				},
				{
					featureType: 'transit.line',
					elementType: 'geometry',
					stylers: [{color: '#e5e5e5'}]
				},
				{
					featureType: 'transit.station',
					elementType: 'geometry',
					stylers: [{color: '#eeeeee'}]
				},
				{
					featureType: 'water',
					elementType: 'geometry',
					stylers: [{color: '#c9c9c9'}]
				},
				{
					featureType: 'water',
					elementType: 'labels.text.fill',
					stylers: [{color: '#9e9e9e'}]
				}
			]",
			'retro' => "[
				{elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
				{elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
				{elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
				{
					featureType: 'administrative',
					elementType: 'geometry.stroke',
					stylers: [{color: '#c9b2a6'}]
				},
				{
					featureType: 'administrative.land_parcel',
					elementType: 'geometry.stroke',
					stylers: [{color: '#dcd2be'}]
				},
				{
					featureType: 'administrative.land_parcel',
					elementType: 'labels.text.fill',
					stylers: [{color: '#ae9e90'}]
				},
				{
					featureType: 'landscape.natural',
					elementType: 'geometry',
					stylers: [{color: '#dfd2ae'}]
				},
				{
					featureType: 'poi',
					elementType: 'geometry',
					stylers: [{color: '#dfd2ae'}]
				},
				{
					featureType: 'poi',
					elementType: 'labels.text.fill',
					stylers: [{color: '#93817c'}]
				},
				{
					featureType: 'poi.park',
					elementType: 'geometry.fill',
					stylers: [{color: '#a5b076'}]
				},
				{
					featureType: 'poi.park',
					elementType: 'labels.text.fill',
					stylers: [{color: '#447530'}]
				},
				{
					featureType: 'road',
					elementType: 'geometry',
					stylers: [{color: '#f5f1e6'}]
				},
				{
					featureType: 'road.arterial',
					elementType: 'geometry',
					stylers: [{color: '#fdfcf8'}]
				},
				{
					featureType: 'road.highway',
					elementType: 'geometry',
					stylers: [{color: '#f8c967'}]
				},
				{
					featureType: 'road.highway',
					elementType: 'geometry.stroke',
					stylers: [{color: '#e9bc62'}]
				},
				{
					featureType: 'road.highway.controlled_access',
					elementType: 'geometry',
					stylers: [{color: '#e98d58'}]
				},
				{
					featureType: 'road.highway.controlled_access',
					elementType: 'geometry.stroke',
					stylers: [{color: '#db8555'}]
				},
				{
					featureType: 'road.local',
					elementType: 'labels.text.fill',
					stylers: [{color: '#806b63'}]
				},
				{
					featureType: 'transit.line',
					elementType: 'geometry',
					stylers: [{color: '#dfd2ae'}]
				},
				{
					featureType: 'transit.line',
					elementType: 'labels.text.fill',
					stylers: [{color: '#8f7d77'}]
				},
				{
					featureType: 'transit.line',
					elementType: 'labels.text.stroke',
					stylers: [{color: '#ebe3cd'}]
				},
				{
					featureType: 'transit.station',
					elementType: 'geometry',
					stylers: [{color: '#dfd2ae'}]
				},
				{
					featureType: 'water',
					elementType: 'geometry.fill',
					stylers: [{color: '#b9d3c2'}]
				},
				{
					featureType: 'water',
					elementType: 'labels.text.fill',
					stylers: [{color: '#92998d'}]
				}
			]",
			"night" => "[
				{elementType: 'geometry', stylers: [{color: '#242f3e'}]},
				{elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
				{elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
				{
					featureType: 'administrative.locality',
					elementType: 'labels.text.fill',
					stylers: [{color: '#d59563'}]
				},
				{
					featureType: 'poi',
					elementType: 'labels.text.fill',
					stylers: [{color: '#d59563'}]
				},
				{
					featureType: 'poi.park',
					elementType: 'geometry',
					stylers: [{color: '#263c3f'}]
				},
				{
					featureType: 'poi.park',
					elementType: 'labels.text.fill',
					stylers: [{color: '#6b9a76'}]
				},
				{
					featureType: 'road',
					elementType: 'geometry',
					stylers: [{color: '#38414e'}]
				},
				{
					featureType: 'road',
					elementType: 'geometry.stroke',
					stylers: [{color: '#212a37'}]
				},
				{
					featureType: 'road',
					elementType: 'labels.text.fill',
					stylers: [{color: '#9ca5b3'}]
				},
				{
					featureType: 'road.highway',
					elementType: 'geometry',
					stylers: [{color: '#746855'}]
				},
				{
					featureType: 'road.highway',
					elementType: 'geometry.stroke',
					stylers: [{color: '#1f2835'}]
				},
				{
					featureType: 'road.highway',
					elementType: 'labels.text.fill',
					stylers: [{color: '#f3d19c'}]
				},
				{
					featureType: 'transit',
					elementType: 'geometry',
					stylers: [{color: '#2f3948'}]
				},
				{
					featureType: 'transit.station',
					elementType: 'labels.text.fill',
					stylers: [{color: '#d59563'}]
				},
				{
					featureType: 'water',
					elementType: 'geometry',
					stylers: [{color: '#17263c'}]
				},
				{
					featureType: 'water',
					elementType: 'labels.text.fill',
					stylers: [{color: '#515c6d'}]
				},
				{
					featureType: 'water',
					elementType: 'labels.text.stroke',
					stylers: [{color: '#17263c'}]
				}
			]",
			"dark" => "[
				{
					'elementType': 'geometry',
					'stylers': [
						{
							'color': '#212121'
						}
					]
				},
				{
					'elementType': 'labels.icon',
					'stylers': [
						{
							'visibility': 'off'
						}
					]
				},
				{
					'elementType': 'labels.text.fill',
					'stylers': [
						{
							'color': '#757575'
						}
					]
				},
				{
					'elementType': 'labels.text.stroke',
					'stylers': [
						{
							'color': '#212121'
						}
					]
				},
				{
					'featureType': 'administrative',
					'elementType': 'geometry',
					'stylers': [
						{
							'color': '#757575'
						}
					]
				},
				{
					'featureType': 'administrative.country',
					'elementType': 'labels.text.fill',
					'stylers': [
						{
							'color': '#9e9e9e'
						}
					]
				},
				{
					'featureType': 'administrative.land_parcel',
					'stylers': [
						{
							'visibility': 'off'
						}
					]
				},
				{
					'featureType': 'administrative.locality',
					'elementType': 'labels.text.fill',
					'stylers': [
						{
							'color': '#bdbdbd'
						}
					]
				},
				{
					'featureType': 'poi',
					'elementType': 'labels.text.fill',
					'stylers': [
						{
							'color': '#757575'
						}
					]
				},
				{
					'featureType': 'poi.park',
					'elementType': 'geometry',
					'stylers': [
						{
							'color': '#181818'
						}
					]
				},
				{
					'featureType': 'poi.park',
					'elementType': 'labels.text.fill',
					'stylers': [
						{
							'color': '#616161'
						}
					]
				},
				{
					'featureType': 'poi.park',
					'elementType': 'labels.text.stroke',
					'stylers': [
						{
							'color': '#1b1b1b'
						}
					]
				},
				{
					'featureType': 'road',
					'elementType': 'geometry.fill',
					'stylers': [
						{
							'color': '#2c2c2c'
						}
					]
				},
				{
					'featureType': 'road',
					'elementType': 'labels.text.fill',
					'stylers': [
						{
							'color': '#8a8a8a'
						}
					]
				},
				{
					'featureType': 'road.arterial',
					'elementType': 'geometry',
					'stylers': [
						{
							'color': '#373737'
						}
					]
				},
				{
					'featureType': 'road.highway',
					'elementType': 'geometry',
					'stylers': [
						{
							'color': '#3c3c3c'
						}
					]
				},
				{
					'featureType': 'road.highway.controlled_access',
					'elementType': 'geometry',
					'stylers': [
						{
							'color': '#4e4e4e'
						}
					]
				},
				{
					'featureType': 'road.local',
					'elementType': 'labels.text.fill',
					'stylers': [
						{
							'color': '#616161'
						}
					]
				},
				{
					'featureType': 'transit',
					'elementType': 'labels.text.fill',
					'stylers': [
						{
							'color': '#757575'
						}
					]
				},
				{
					'featureType': 'water',
					'elementType': 'geometry',
					'stylers': [
						{
							'color': '#000000'
						}
					]
				},
				{
					'featureType': 'water',
					'elementType': 'labels.text.fill',
					'stylers': [
						{
							'color': '#3d3d3d'
						}
					]
				}
			]",
			"aubergine" => "[
				{
					'elementType': 'geometry',
					'stylers': [
						{
							'color': '#1d2c4d'
						}
					]
				},
				{
					'elementType': 'labels.text.fill',
					'stylers': [
						{
							'color': '#8ec3b9'
						}
					]
				},
				{
					'elementType': 'labels.text.stroke',
					'stylers': [
						{
							'color': '#1a3646'
						}
					]
				},
				{
					'featureType': 'administrative.country',
					'elementType': 'geometry.stroke',
					'stylers': [
						{
							'color': '#4b6878'
						}
					]
				},
				{
					'featureType': 'administrative.land_parcel',
					'elementType': 'labels.text.fill',
					'stylers': [
						{
							'color': '#64779e'
						}
					]
				},
				{
					'featureType': 'administrative.province',
					'elementType': 'geometry.stroke',
					'stylers': [
						{
							'color': '#4b6878'
						}
					]
				},
				{
					'featureType': 'landscape.man_made',
					'elementType': 'geometry.stroke',
					'stylers': [
						{
							'color': '#334e87'
						}
					]
				},
				{
					'featureType': 'landscape.natural',
					'elementType': 'geometry',
					'stylers': [
						{
							'color': '#023e58'
						}
					]
				},
				{
					'featureType': 'poi',
					'elementType': 'geometry',
					'stylers': [
						{
							'color': '#283d6a'
						}
					]
				},
				{
					'featureType': 'poi',
					'elementType': 'labels.text.fill',
					'stylers': [
						{
							'color': '#6f9ba5'
						}
					]
				},
				{
					'featureType': 'poi',
					'elementType': 'labels.text.stroke',
					'stylers': [
						{
							'color': '#1d2c4d'
						}
					]
				},
				{
					'featureType': 'poi.park',
					'elementType': 'geometry.fill',
					'stylers': [
						{
							'color': '#023e58'
						}
					]
				},
				{
					'featureType': 'poi.park',
					'elementType': 'labels.text.fill',
					'stylers': [
						{
							'color': '#3C7680'
						}
					]
				},
				{
					'featureType': 'road',
					'elementType': 'geometry',
					'stylers': [
						{
							'color': '#304a7d'
						}
					]
				},
				{
					'featureType': 'road',
					'elementType': 'labels.text.fill',
					'stylers': [
						{
							'color': '#98a5be'
						}
					]
				},
				{
					'featureType': 'road',
					'elementType': 'labels.text.stroke',
					'stylers': [
						{
							'color': '#1d2c4d'
						}
					]
				},
				{
					'featureType': 'road.highway',
					'elementType': 'geometry',
					'stylers': [
						{
							'color': '#2c6675'
						}
					]
				},
				{
					'featureType': 'road.highway',
					'elementType': 'geometry.stroke',
					'stylers': [
						{
							'color': '#255763'
						}
					]
				},
				{
					'featureType': 'road.highway',
					'elementType': 'labels.text.fill',
					'stylers': [
						{
							'color': '#b0d5ce'
						}
					]
				},
				{
					'featureType': 'road.highway',
					'elementType': 'labels.text.stroke',
					'stylers': [
						{
							'color': '#023e58'
						}
					]
				},
				{
					'featureType': 'transit',
					'elementType': 'labels.text.fill',
					'stylers': [
						{
							'color': '#98a5be'
						}
					]
				},
				{
					'featureType': 'transit',
					'elementType': 'labels.text.stroke',
					'stylers': [
						{
							'color': '#1d2c4d'
						}
					]
				},
				{
					'featureType': 'transit.line',
					'elementType': 'geometry.fill',
					'stylers': [
						{
							'color': '#283d6a'
						}
					]
				},
				{
					'featureType': 'transit.station',
					'elementType': 'geometry',
					'stylers': [
						{
							'color': '#3a4762'
						}
					]
				},
				{
					'featureType': 'water',
					'elementType': 'geometry',
					'stylers': [
						{
							'color': '#0e1626'
						}
					]
				},
				{
					'featureType': 'water',
					'elementType': 'labels.text.fill',
					'stylers': [
						{
							'color': '#4e6d70'
						}
					]
				}
			]"
		);
	}
}
