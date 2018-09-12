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
                { results.map( result => {
                  return (
                    <li
                      key={result.id}
                      onClick={ () => this.onChangeValue( result.id ) }
                    >
                      { result.title.rendered }
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
