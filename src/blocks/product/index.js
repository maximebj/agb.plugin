/**
 * BLOCK: Product
 *
 * Display WooCommerce Product in your post
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
    title: __( 'Product' ),
    description: __( 'Display WooCommerce Product in your post' ),
    category: 'common',
    icon: 'products',
    keywords: [
      __( 'woocommerce' ),
    ],
    attributes: {
      productID: {
        type: 'string',
				default: false,
      },
			priceColor: {
        type: 'string',
      },
			buttonBackgroundColor: {
        type: 'string',
      },
    },
    edit: withAPIData( ( { attributes } ) => {

				return ( attributes.productID ) ? {
					product: '/wc/v2/products/' + attributes.productID
				} : false

      } ) ( ( { product, focus, attributes, setAttributes } ) => {

				// Default values
				! attributes.priceColor && setAttributes( { priceColor: '#dd1e35' } )
				! attributes.buttonBackgroundColor && setAttributes( { buttonBackgroundColor: '#444' } )

				const onChangeProduct = product => {
	        setAttributes( { productID: product.id } )
	      }

				const onChangePriceColor = value => {
	        setAttributes( { priceColor: value } )
	      }

				const onChangeButtonBackgroundColor = value => {
	        setAttributes( { buttonBackgroundColor: value } )
	      }

	      return [
	        !! focus && (
	          <Inspector { ...{ onChangeProduct, onChangePriceColor, onChangeButtonBackgroundColor, attributes } } />
	        )
					,
	        !! attributes.productID ? (
						<Preview { ...{ product, attributes } } />
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
