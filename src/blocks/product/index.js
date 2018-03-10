/**
 * BLOCK: Product
 *
 * Display WooCommerce Product(s) in your post
 */

import './style.scss'
import './editor.scss'

import Inspector from './inspect'
import Preview from './preview'

const {
  registerBlockType,
} = wp.blocks

const {
	withAPIData,
} = wp.components

const { __ } = wp.i18n;

export default registerBlockType(
  'gutenblocks/product',
  {
    title: __( 'Woo Product' ),
    description: __( 'Display WooCommerce Product(s) in your post' ),
    category: 'common',
    icon: 'products',
    keywords: [
      'woo',
    ],
    attributes: {
      productID: {
        type: 'string',
				default: false,
      },
    },
    edit: withAPIData( ( { attributes } ) => {

				return ( attributes.productID ) ? {
					product: '/wc/v2/products/' + attributes.productID
				} : false

      } ) ( ( { product, focus, attributes, setAttributes } ) => {

				if(product && product.data) {
					console.log(product.data)
				}

				const onChangeProduct = product => {
	        setAttributes( { productID: product.id } )
	      }

	      return [
	        !! focus && (
	          <Inspector onChangeProduct={ onChangeProduct } />
	        )
					,
	        !! attributes.productID ? (
						<Preview product={ product } />
	        ) : (
	          <p class="gutenblocks-block-message">{ __( 'Search for a product in the inspector' ) }</p>
	        )
	      ]
    	} )
		,
    save: props => {
      return null
    },
  },
);
