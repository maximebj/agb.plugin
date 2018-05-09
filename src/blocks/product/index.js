import './style.scss'
import './editor.scss'

import Inspector from './inspect'
import Preview from './preview'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const {	withAPIData } = wp.components

export default registerBlockType(
  'gutenblocks/product',
  {
    title: __( 'Product', 'advanced-gutenberg-blocks' ),
    description: __( 'Display WooCommerce Product in your post', 'advanced-gutenberg-blocks' ),
    category: 'common',
    icon: 'products',
    keywords: [
      __( 'woocommerce', 'advanced-gutenberg-blocks' ),
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
	          <p class="gutenblocks-block-message">{ __( 'Search for a product in the inspector', 'advanced-gutenberg-blocks' ) }</p>
	        )
	      ]
    	} )
		,
    save: props => {
      return null
    },
  },
)
