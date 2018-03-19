import {debounce} from 'throttle-debounce'

const { Component } = wp.element
const { __ } = wp.i18n

const {
	SelectControl,
	BaseControl,
} = wp.components

export default class SearchPost extends Component {

  constructor( props ) {
    super( props )

    this.state = {
      results: false,
			types: [{ label: 'Post', value: 'Post' }],
			currentType: 'Posts',
    }

    this.onSearch = this.onSearch.bind(this)
    this.onChangePostType = this.onChangePostType.bind(this)
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
  }

	onChangePostType( value ) {
    this.setState( { currentType: value.toLowerCase() } )
  }

	getPostID(id) {
		this.props.onChangePost(
			_.find( this.state.results, { id: id} )
		)
	}

  render() {
    return (
      <div>
				<BaseControl
					label={ __( 'Search a post', 'advanced-gutenberg-blocks' ) }
				>
	        <input
	          type="search"
	          placeholder={ __('Type a post title', 'advanced-gutenberg-blocks' ) }
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
	                      onClick={ () => this.getPostID(result.id) }
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
				</BaseControl>

				<SelectControl
					onChange={ this.onChangePostType }
					label={ __( 'In post type', 'advanced-gutenberg-blocks' ) }
					options={ JSON.parse( gutenblocksPost.types ) }
					value={ this.state.currentType }
				/>
      </div>
    )
  }
}
