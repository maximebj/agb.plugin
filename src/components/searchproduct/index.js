import {debounce} from 'throttle-debounce'

const { Component } = wp.element
const { __ } = wp.i18n

export default class SearchProduct extends Component {

  constructor( props ) {
    super( props )

    this.state = {
      results: false,
    }

    this.onSearch = this.onSearch.bind(this)
    this.performSearch = debounce(300, this.performSearch)
  }

  onSearch( event ) {
    this.performSearch( event.target.value )
  }

  performSearch( search ) {
    if( search.length < 3) {
      return
    }

    this.setState( { results: __( 'Loading...', 'advanced-gutenberg-blocks' ) } )

    const productsCollection = new wp.api.collections.Product()

    productsCollection.fetch({
      data: {
        per_page: 20,
        search: search,
      },
    } )
    .then( results => {

      if(results.length == 0 ) {
        results = __( 'No result', 'advanced-gutenberg-blocks' )
      }
      this.setState( { results: results } )
    } )
  }

	getProductID(id) {
		this.props.onChangeProduct(
			_.find( this.state.results, { id: id} )
		)
	}

  render() {
    return (
      <div>
        <input
          type="search"
          placeholder={ __('Type a product name', 'advanced-gutenberg-blocks' ) }
          className="blocks-text-control__input"
          onChange={ this.onSearch }
        />

        <div className="gutenblocks-panel-results">

          { !! this.state.results && Array.isArray(this.state.results) ?
            (
              <ul>
                { this.state.results.map( result => {
                  return (
                    <li
                      onClick={ () => this.getProductID(result.id) }
                    >
                      { result.title.rendered }
                    </li>
                  )
                } ) }
              </ul>
            ) : (
              <p>{this.state.results}</p>
            )
          }
        </div>
      </div>
    )
  }
}
