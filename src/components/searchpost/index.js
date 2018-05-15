import { debounce } from 'throttle-debounce'

const { Component, Fragment } = wp.element
const { __ } = wp.i18n

const {
	SelectControl,
	TextControl,
} = wp.components

export default class SearchPost extends Component {

  state = {
    results: false,
    types: [ { label: 'Post', value: 'Post' } ],
    currentType: 'Posts',
  }

  onSearch = debounce( 300, search => {

		if( search.length < 3) {
      return
    }

    this.setState( { results: __( 'Loading...', 'advanced-gutenberg-blocks' ) } )

    const collection = new wp.api.collections[this.state.currentType]()

    collection.fetch({
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

	onChangePostType = value => {
    this.setState( { currentType: value.toLowerCase() } )
  }

  render() {
    return (
      <Fragment>

				<TextControl
					type="search"
					placeholder={ __( "Type a post title", 'advanced-gutenberg-blocks' ) }
					onChange={ value => this.onSearch( value ) }
				/>

        <div className="AGB-panel-results">

          { !! this.state.results && Array.isArray(this.state.results) ?
            (
              <ul>
                { this.state.results.map( result => {
                  return (
                    <li onClick={ () => this.props.onChange( result.id ) }>
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

				<SelectControl
					onChange={ this.onChangePostType }
					label={ __( 'In post type', 'advanced-gutenberg-blocks' ) }
					options={ JSON.parse( advancedGutenbergBlocksPost.types ) }
					value={ this.state.currentType }
				/>

			</Fragment>
    )
  }
}
