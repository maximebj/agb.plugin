import { debounce } from 'throttle-debounce'

const { Component, Fragment } = wp.element
const { TextControl } = wp.components
const { __ } = wp.i18n

export default class SearchProduct extends Component {

	state = {
		results: false,
	}

  onSearch = debounce( 300, search => {
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
  } )

	onChangeValue = id => {
		this.props.onChange ( _.find( this.state.results, { id: id} ) )
	}

  render() {
    return (
      <Fragment>

				<TextControl
					type="search"
					placeholder={ __( "Type a product name", 'advanced-gutenberg-blocks' ) }
					onChange={ value => this.onSearch( value ) }
				/>

        <div className="AGB-panel-results">

          { !! this.state.results && Array.isArray( this.state.results ) ?
            (
              <ul>
                { this.state.results.map( result => {
                  return (
                    <li
                      onClick={ () => this.onChangeValue( result.id ) }
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

      </Fragment>
    )
  }
}
