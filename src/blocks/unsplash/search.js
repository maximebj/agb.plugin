import { debounce } from 'throttle-debounce'

import logo from './logo'

const { __ } = wp.i18n
const { Component } = wp.element
const { TextControl } = wp.components
const { withDispatch } = wp.data
const { createBlock } = wp.blocks
const { Fragment } = wp.element

class SearchUnsplash extends Component {

	state = {
    results: false,
    search: '',
    page: 1,
	}

  onSearch = debounce( 300, search => {

    if( search.length < 3 ) {
      return
    }
    
    this.setState( { page: 1 } )
    this.performSearch( search )
  } )

  nextPage = () => {
    this.setState( { page: ++this.state.page } )
    this.performSearch( this.state.search )

    document.getElementById(`block-${this.props.clientId}`).scrollIntoView()
  }

  performSearch = search => {
    this.setState( { 
      results: __( 'Fetching…', 'advanced-gutenberg-blocks' ),
      search: search,
    } )

    fetch( `https://api.unsplash.com/search/photos/?client_id=${advancedGutenbergBlocksUnsplash.accessKey}&per_page=15&page=${this.state.page}&query=${encodeURI( search )}` )
    .then( response => response.json() )
    .then( results => {

      if( results.total == 0 ) {
        results = __( 'No result', 'advanced-gutenberg-blocks' )
      }

			this.setState( {  results: results.results  } )
		} )
  }

  onChange = image => {
    
    const block = createBlock( "core/image", {
      url: image.urls.regular,
      caption: image.description || '',
      alt: image.description || '',
      align: 'center',
    } );
    
    this.props.insertBlocksAfter( block )
    this.props.removeBlock( this.props.clientId )
  }


  render() {

    const { results } = this.state

    return (
      <div className="AGB-block-search">
        <p className="AGB-block-search__logo">{logo}</p>

				<TextControl
          type="search"
          className="AGB-block-search__input"
					placeholder={ __( "Search a GIF", 'advanced-gutenberg-blocks' ) }
					onChange={ value => this.onSearch( value ) }
				/>

        { results && Array.isArray( results ) ?
          (
            <Fragment>
              <ul className="AGB-block-search__results">
                { results.map( image => {

                  return (
                    <li
                      key={image.id}  
                      onClick={ () => this.onChange( image ) }
                    >
                      <img 
                        src={ image.urls.thumb } 
                        alt={ image.description || '' } 
                      />
                    </li>
                  )
                } ) }
              </ul>
              <p className="AGB-block-search__more">
                <a
                  href="#"
                  onClick={ () => this.nextPage() } 
                >
                  { __( 'More images', 'advanced-gutenberg-blocks' ) }
                </a>
              </p>
            </Fragment>
          ) : (
            <p>{ results }</p>
          )
        }
      </div>
    )
  }
}


export default withDispatch( dispatch => ({
  removeBlock: dispatch("core/editor").removeBlock,
})
)(SearchUnsplash);