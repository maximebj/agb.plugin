import './style.scss'
import './editor.scss'

import Inspector from './inspect'
import Preview from './preview'

import { __ } from '@wordpress/i18n'
const { registerBlockType } = wp.blocks
const { Fragment } = wp.element


export default registerBlockType(
  'advanced-gutenberg-blocks/addtocart',
  {
		title: __( 'Add to cart button', 'advanced-gutenberg-blocks' ),
    description: __( 'This button allow a customer to quickly add a product to cart', 'advanced-gutenberg-blocks' ),
    category: 'agb',
    icon: { background: '#2F313A', foreground: '#DEBB8F', src: 'cart' },
    keywords: [
      __( 'purchase', 'advanced-gutenberg-blocks' ),
    ],
    attributes: {
			productID: {
        type: 'integer',
      },
			hasIcon: {
        type: 'boolean',
				default: true,
      },
      icon: {
        type: 'string',
      },
      backgroundColor: {
				type: 'string',
      },
      label: {
        type: 'string',
				default: __( 'Add to cart', 'advanced-gutenberg-blocks' ),
      },
    },
    edit: props => {

				const { attributes, setAttributes } = props
				const { icon, backgroundColor } = attributes

				// Set default values (keep here to save them in html
				! icon && setAttributes( { icon: 'cart' } )
				! backgroundColor && setAttributes( { backgroundColor: '#9B6794' } )

	      return (
	        <Fragment>
	          <Inspector { ...{ attributes, setAttributes } } />
            <Preview { ...{ attributes, setAttributes } } />
					</Fragment>
	      )
			},
		save: () => {
      return null
    },
  },
);
