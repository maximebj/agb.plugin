import { debounce } from 'throttle-debounce'

const { __ } = wp.i18n
const { Component, Fragment } = wp.element
const { SelectControl, TextControl } = wp.components

export default class SearchPost extends Component {

  state = {
    results: false,
    currentType: 'posts',
  }

  onSearch = debounce( 300, search => {

		if( search.length < 3 ) {
      return
    }

    this.setState( { results: __( 'Loading…', 'advanced-gutenberg-blocks' ) } )

    fetch( `/wp-json/wp/v2/${this.state.currentType}/?search=${encodeURI( search )}&per_page=20` )
    .then( response => response.json() )
    .then( results => {

      if(results.length == 0 ) {
        results = __( 'No result', 'advanced-gutenberg-blocks' )
      }

			this.setState( {  results: results  } )
		} )
  } )

  render() {

		const { results, currentType } = this.state

    return (
      <Fragment>

        <SelectControl
					label={ __( 'Post type', 'advanced-gutenberg-blocks' ) }
					options={ JSON.parse( advancedGutenbergBlocksPost.types ) }
					onChange={ value => this.setState( { currentType: value } ) }
				/>

				<TextControl
					type="search"
					placeholder={ __( "Type a post title", 'advanced-gutenberg-blocks' ) }
					onChange={ value => this.onSearch( value ) }
				/>

        <div className="AGB-panel-results">

          { !! results && Array.isArray(results) ?
            (
              <ul>
                { results.map( post => {
                  return (
                    <li
                      key={post.id}
                      onClick={ () => this.props.onChange( { id: post.id, type: currentType } ) }
                    >
                      <span>{ post.title.rendered }</span>
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
