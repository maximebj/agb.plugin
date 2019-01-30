import classnames from 'classnames'

const { __ } = wp.i18n
const { Component } = wp.element

export default class Preview extends Component {

  state = {
		product: false,
	}

	getProduct = () => {

		const { productID } = this.props.attributes

    let ck = advancedGutenbergBlocksGlobals.wooapikey
    let cs = advancedGutenbergBlocksGlobals.wooapisecret

    fetch( `${advancedGutenbergBlocksProduct.rest}/products/${productID}?consumer_key=${ck}&consumer_secret=${cs}` )
    .then( response => response.json() )
    .then( product => {
			this.setState( { product: product } )
		} )
	}

	componentWillMount() {
    this.getProduct()
  }

	componentDidUpdate(lastProps, lastStates) {

		if( lastProps.attributes.productID != this.props.attributes.productID ) {
			this.getProduct()
		}
	}

  render() {

		const { attributes: { priceColor, buttonBackgroundColor } } = this.props
		const { product } = this.state

		const getDescription = () => {
			const description = ( product.short_description !='' ) ? product.short_description : product.description
  		return {__html: description }
		}

		const currency = advancedGutenbergBlocksProduct.currency

		// Currency before / after
		const cb = ( currency == "$" ) ? currency : ''
		const ca = ( currency != "$" ) ? currency : ''

    return (
			!! product ? (
				<div className="wp-block-advanced-gutenberg-blocks-product">
					{ !! product.images && (
						<a href={ product.permalink } className="wp-block-advanced-gutenberg-blocks-product__image">
							<img src={ product.images[0].src } alt={ product.images[0].alt } />
						</a>
					) }
					<div className="wp-block-advanced-gutenberg-blocks-product__content">
						<p className="wp-block-advanced-gutenberg-blocks-product__title">
							<a href={ product.permalink }>{ product.name }</a>
						</p>
						<p
							className="wp-block-advanced-gutenberg-blocks-product__price"
							style={ {
								color: priceColor
							} }
						>
							{ !! product.sale_price != "" ? (
								<span>
									<span>{ cb }{ product.sale_price }{ ca }</span>
									<del className="wp-block-advanced-gutenberg-blocks-product__sale">{ cb }{ product.regular_price }{ ca }</del>
								</span>
								) : (
									<span>{ cb }{ product.price }{ ca }</span>
								)
							}
						</p>
						<div
							className="wp-block-advanced-gutenberg-blocks-product__description"
							dangerouslySetInnerHTML={ getDescription() }>
						</div>
						<p class="wp-block-advanced-gutenberg-blocks-product__actions">
							<a
								className="wp-block-advanced-gutenberg-blocks-product__button"
								href={ '/?add-to-cart=' + product.id }
								style={ {
									backgroundColor: buttonBackgroundColor
								} }
							>
								<span className="dashicons dashicons-cart"></span>
								{ __( 'Add to cart', 'advanced-gutenberg-blocks' ) }
							</a>
						</p>
					</div>
				</div>
			) : (
				<p class="AGB-block-message">{ __( 'Loading product…', 'advanced-gutenberg-blocks' ) }</p>
			)
    )
  }
}
