/**
 * BLOCK: Gmap
 *
 * Display a Google map
 */

import './style.scss'
import './editor.scss'

import Inspector from './inspect'
import Gmap from './gmap'

const {
  registerBlockType,
} = wp.blocks


const { __ } = wp.i18n

export default registerBlockType(
  'gutenblocks/gmap',
  {
    title: __( 'Google Map' ),
    description: __( 'Display a customizable Google map' ),
    category: 'common',
    icon: 'location-alt',
    keywords: [
      __( 'map' ),
    ],
    attributes: {
      latitude: {
        type: 'string',
      },
			longitude: {
        type: 'string',
      },
			zoom: {
        type: 'integer',
      },
			height: {
				type: 'integer'
			},
    },
    edit: props => {

			// Default values
			! props.attributes.zoom && props.setAttributes( { zoom: 8 } )
			! props.attributes.height && props.setAttributes( { height: 400 } )

			const onChangeCoordinates = value => {
        props.setAttributes( { latitude: value.latitude } )
        props.setAttributes( { longitude: value.longitude } )
      }

			const onChangeZoom = value => {
        props.setAttributes( { zoom: value } )
      }

			const onChangeHeight = value => {
        props.setAttributes( { height: value } )
      }

      return [
        !! props.focus && (
          <Inspector { ...{ onChangeCoordinates, onChangeZoom, onChangeHeight, ...props } } />
        )
				,
        !! props.attributes.lattitude ? (
					<Gmap { ...{ lattitude, longitude } } />
        ) : (
          <p class="gutenblocks-block-message">{ __( 'Type your address on the inspector' ) }</p>
        )
      ]
  	},
    save: props => {
      return null
    },
  },
)
