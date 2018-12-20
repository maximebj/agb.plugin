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
      fetch( `/wp-json/wc/v2/products?search=${search}&per_page=20&consumer_key=${ck}&consumer_secret=${cs}` )
      .then( response => response.json() )
      .then( results => {

        if(results.length == 0 ) {
          results = __( 'No result', 'advanced-gutenberg-blocks' )
        }
        this.setState( { results: results } )

		  } )
    }

  } )

	onChangeValue = id => {
		this.props.onChange ( _.find( this.state.results, { id: id} ) )
	}

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
                      onClick={ () => this.onChangeValue( product.id ) }
                    >
                      { product.images.length > 0 && (
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
