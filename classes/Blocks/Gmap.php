<?php

namespace GutenbergBlocks\Blocks;

use GutenbergBlocks\Helpers\Consts;
use GutenbergBlocks\Services\Blocks;

class Gmap {

  public function run() {

		// Register hooks
		add_action( 'init', array( $this, 'register_render' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ) );

		// Register Block in the Gutenblocks settings page
		$args = array(
			'icon' => 'dashicons-location-alt',
			'category' => 'apis',
			'preview_image' => Consts::get_url().'admin/img/blocks/gmap.jpg',
			'description' => __( "Insert a Google Map in your content, the easy way.", 'gutenblocks' ),
			'options_callback' => array( $this, 'settings' ),
		);

		gutenblocks_register_blocks( 'gutenblocks/gmap', __( 'Google Map', 'gutenblocks' ), $args );

		// Register settings
		gutenblocks_register_setting( 'gutenblocks-gmap-api-key' );
  }

	public function settings() {
		echo '
		<p class="gutenblocks-block__settings__description">' . __( 'The API key is mandatory, you can create one on the <a href="https://developers.google.com/maps/documentation/javascript/" target="_blank">Google Maps JS Api page</a>. ' ) . '</p>

		<div class="gutenblocks-block__settings__option">
			<div class="gutenblocks-block__settings__label">
				<label for="gutenblocks-gmap-api-key"> ' . __( 'Api Key', 'gutenblocks' ) . '</label>
			</div>

			<div class="gutenblocks-block__settings__field">
				<input type="text" name="gutenblocks-gmap-api-key" placeholder="' . __( 'Insert your Google Maps API Key here', 'gutenblocks' ) . '" value="' . get_option( 'gutenblocks-gmap-api-key' ) . '">
			</div>
		</div>
		';
	}

	public function register_render() {

		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}

		register_block_type(
      'gutenblocks/gmap',
      [ 'render_callback' => array( $this, 'render_block' ) ]
    );
	}

	public function render_block( $attributes ) {

		switch ($attributes['style']) {
			case 'silver':
				$style = "[
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
				]";
				break;
			case 'retro':
				$style = "[
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
				]";
				break;
			case 'night':
				$style = "[
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
				]";
				break;
			case 'dark':
				$style = "[
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
				]";
				break;
			case 'aubergine':
				$style = "[
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
				]";
				break;
			default:
				$style = '"default"';
		}

		$api_key = get_option( 'gutenblocks-gmap-api-key' );

		$rand = rand();

		$output = "";
		ob_start();
		include Consts::get_path() . 'public/templates/gmap.php';
		$output = ob_get_contents();
		ob_end_clean();

		return $output;
	}

	public function editor_assets() {
		$api_key = get_option( 'gutenblocks-gmap-api-key' );

		if ( $api_key == "" ) {

			// Block will display a notice than the API key is not yet set
			wp_localize_script(
				Consts::BLOCKS_SCRIPT,
				'gutenblocksGmap',
				array(
					'error' => 'noApiKey',
				)
			);
			return;
		}

		// Load Gmap
		wp_enqueue_script(
			Consts::BLOCKS_SCRIPT . '-gmap',
			'https://maps.googleapis.com/maps/api/js?key=' . $api_key,
			[ Consts::BLOCKS_SCRIPT ],
			true
		);

	}
}
