import classnames from 'classnames'

const { __ } = wp.i18n
const { RichText } = wp.editor
const { Component } = wp.element

export default class Preview extends Component {

	state = {
		product: false,
	}

	getProduct = () => {

		const { productID } = this.props.attributes

    let ck = advancedGutenbergBlocksGlobals.wooapikey
    let cs = advancedGutenbergBlocksGlobals.wooapisecret

    fetch( `/wp-json/wc/v2/products/${productID}?consumer_key=${ck}&consumer_secret=${cs}` )
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

    const { attributes, setAttributes } = this.props
		const { hasIcon, icon, backgroundColor, label } = attributes
		const { product } = this.state

    // Get currency from PHP
    const currency = advancedGutenbergBlocksAddtocart.currency

    // Currency before / after
    const cb = ( currency == "$" ) ? currency : ''
    const ca = ( currency != "$" ) ? currency : ''

    return (
      <p className="wp-block-advanced-gutenberg-blocks-addtocart">
        <a
          style={ {
            backgroundColor: backgroundColor
          } }
          className="wp-block-advanced-gutenberg-blocks-addtocart__button"
        >
          { hasIcon && (
            <span className={ classnames('dashicons', `dashicons-${icon}`) }></span>
            )
          }
          <RichText
            tagName="span"
            className="wp-block-advanced-gutenberg-blocks-addtocart__label"
            value={ label }
            onChange={ label => setAttributes( { label } ) }
          />
          <span class="wp-block-advanced-gutenberg-blocks-addtocart__separator"> • </span>

          { !! product && typeof product !== "undefined" ? (
            <div className="wp-block-advanced-gutenberg-blocks-addtocart__price">

              { !! product.sale_price != "" ? (
                <span>
                  <span>{ cb }{ product.sale_price }{ ca }</span>
                  <del className="wp-block-advanced-gutenberg-blocks-addtocart__sale">{ cb }{ product.regular_price }{ ca }</del>
                </span>
                ) : (
                  <span>{ cb }{ product.price }{ ca }</span>
                )
              }
            </div>
          ) : (
            <span>{ cb }0{ ca }</span>
          ) }
        </a>
      </p>
    )
  }
}
