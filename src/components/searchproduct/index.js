import { debounce } from 'throttle-debounce'

const { __ } = wp.i18n
const { Component, Fragment } = wp.element
const { TextControl } = wp.components

export default class SearchProduct extends Component {

	state = {
		results: false,
	}

  onSearch = debounce( 300, search => {
    if( search.length < 3) {
      return
    }

    this.setState( { results: __( 'Loading…', 'advanced-gutenberg-blocks' ) } )

    let ck = advancedGutenbergBlocksGlobals.wooapikey
    let cs = advancedGutenbergBlocksGlobals.wooapisecret

    if ( location.protocol != 'https:' ) {

      let results = __( 'Sorry, HTTPS is required to search Woo Products', 'advanced-gutenberg-blocks' )
      this.setState( { results: results } )
    
    } else {
      fetch( `${this.props.restURL}/products?search=${search}&per_page=20&consumer_key=${ck}&consumer_secret=${cs}` )
      .then( response => response.json() )
      .then( results => {

				// The data structure differs from API v2 to API v3.
				if (this.props.restURL.indexOf('wp-json/wc/v2') !== -1) {
					// Using API v2.
					if(results.length === 0 ) {
						results = __( 'No result', 'advanced-gutenberg-blocks' )
					}
					this.setState( { results: results } )
				} else {
					// Using API v3.
					if(results.products.length === 0 ) {
						results = __( 'No result', 'advanced-gutenberg-blocks' )
					} else {
						// Build products object.
						var products = [];
						for (const key in results.products) {
							let product = results.products[key];

							// Support product variations.
							if (product.type.indexOf('variable') !== -1 && product['variations'] !== undefined && product.variations.length !== 0) {
								for (const variation_key in product.variations) {
									let variation_product = product.variations[variation_key];
									variation_product.title = product.title + ' (' + variation_product.sku + ')'; 
									variation_product.images = variation_product.image;
									// Unify with v2 structure title -> name;
									variation_product.name = variation_product.title;

									products.push(variation_product);
								}
							} else {
								// Unify with v2 structure title -> name;
								product.name = product.title;

								products.push(product);
							}
						}
					}
					this.setState( { results: products } )
				}
		  } )
    }

  } )

  render() {

		const { results } = this.state

    return (
      <Fragment>

				<TextControl
					type="search"
					placeholder={ __( "Type a product name", 'advanced-gutenberg-blocks' ) }
					onChange={ value => this.onSearch( value ) }
				/>

        <div className="AGB-panel-results">

          { !! results && Array.isArray( results ) ?
            (
              <ul>
                { results.map( product => {
                  return (
                    <li
                      key={product.id}
                      onClick={ () => this.props.onChange( product ) }
                    >
                      { !! product.images && product.images.length > 0 && (
                        <img src={ product.images[0].src } alt={ product.name } />
                      ) }
                      <span>{ product.name }</span>
                    </li>
                  )
                } ) }
              </ul>
            ) : (
              <p>{results}</p>
            )
          }
        </div>

      </Fragment>
    )
  }
}
