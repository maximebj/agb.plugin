/**
 * BLOCK: Advertisement
 *
 * Display an ad
 */

import './style.scss';
import './editor.scss';

import classnames from 'classnames'

import Inspector from './inspect';

const { __ } = wp.i18n;

const {
  registerBlockType,
  RichText,
} = wp.blocks;

const {
	withAPIData,
} = wp.components


export default registerBlockType(
  'gutenblocks/addtocart',
  {
		title: __( 'Add to cart button' ),
    description: __( 'This button allow a customer to quickly add a product to cart' ),
    category: 'common',
    icon: 'cart',
    keywords: [
      __( 'purchase' ),
    ],
    attributes: {
			productID: {
        type: 'string',
      },
			hasIcon: {
        type: 'boolean',
        default: true,
      },
      icon: {
        type: 'string',
        default: 'cart',
      },
      backgroundColor: {
				type: 'string',
        default: '#9B6794',
      },
      label: {
        type: 'string',
				default: __( 'Add to cart' ),
      },
    },
		edit: withAPIData( ( { attributes } ) => {

				return ( attributes.productID ) ? {
					product: '/wc/v2/products/' + attributes.productID
				} : false

      } ) ( ( { product, focus, attributes, setAttributes } ) => {

				const onChangeProduct = product => {
	        setAttributes( {
						productID: product.id,
						label: __( 'Add' ) + ' ' + product.title.rendered + ' ' + __( 'to cart' )
					} )
	      }

				const onChangeLabel = value => {
	        setAttributes( { label: value } )
	      }

	      const onChangeURL = value => {
	        setAttributes( { url: value } )
	      }

				const onChangeBackgroundColor = value => {
	        setAttributes( { backgroundColor: value } )
	      }

	      const onChangeIcon = value => {
	        setAttributes( { icon: value } )
	      };

	      const toggleHasIcon = () => {
	        setAttributes( { hasIcon: ! attributes.hasIcon } )
	      }

	      return [
	        !! focus && (
	          <Inspector { ...{ onChangeIcon, onChangeURL, toggleHasIcon, onChangeProduct, onChangeBackgroundColor , attributes } } />
	        )
					,
	        <p className="wp-block-gutenblocks-addtocart">
	          <a
							style={ {
		            backgroundColor: attributes.backgroundColor
		          } }
							className="wp-block-gutenblocks-addtocart__button"
						>
	            { !! attributes.hasIcon && (
	              <span className={ classnames('dashicons', `dashicons-${attributes.icon}`) }></span>
	              )
	            }
	            <RichText
	              tagName="span"
								className="wp-block-gutenblocks-addtocart__label"
	              value={ attributes.label }
	              onChange={ onChangeLabel }
	            />
							<span>&nbsp; • &nbsp;</span>

							{ !! product && typeof product.data !== "undefined" ? (
								<div className="wp-block-gutenblocks-addtocart__price">

									{ !! product.data.sale_price != "" ? (
										<span>
											<span>{ product.data.sale_price } € </span>
											<del className="wp-block-gutenblocks-addtocart__sale">{ product.data.price }€</del>
										</span>
										) : (
											<span>{ product.data.price } €</span>
										)
									}
								</div>
							) : (
								<span>0€</span>
							) }
						</a>
					</p>
	      ]
			} )
  	,
		save: () => {
      return null
    },
  },
);
