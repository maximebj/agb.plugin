import { debounce } from 'throttle-debounce'

import logo from './logo'

const { __ } = wp.i18n
const { Component } = wp.element
const { TextControl } = wp.components
const { withDispatch } = wp.data
const { createBlock } = wp.blocks

class SearchGiphy extends Component {

	state = {
		results: false,
	}

  onSearch = debounce( 300, search => {

    if( search.length < 3) {
      return
    }

    const key = advancedGutenbergBlocksGiphy.apiKey

    this.setState( { results: __( 'Fetching...', 'advanced-gutenberg-blocks' ) } )

    fetch( `http://api.giphy.com/v1/gifs/search?q=${encodeURI( search )}&api_key=${key}&limit=15` )
    .then( response => response.json() )
    .then( results => {

      if( results.pagination.count == 0 ) {
        results = __( 'No result', 'advanced-gutenberg-blocks' )
      }

			this.setState( {  results: results.data  } )
		} )
  } )

  onChange = gif => {
    
    const block = createBlock( "core/image", {
      url: gif.images.original.url,
      caption: gif.title,
      alt: gif.title,
      align: 'center',
    } );
    
    this.props.insertBlocksAfter( block )
    this.props.removeBlock( this.props.clientId )
  }

  render() {

    const { results } = this.state

    return (
      <div className="AGB-block-search is-dark">
        <p className="AGB-block-search__logo">{logo}</p>

				<TextControl
          type="search"
          className="AGB-block-search__input"
					placeholder={ __( "Search a GIF", 'advanced-gutenberg-blocks' ) }
					onChange={ value => this.onSearch( value ) }
				/>

        { results && Array.isArray(results) ?
          (
            <ul className="AGB-block-search__results">
              { results.map( gif => {

                return (
                  <li
                    key={gif.id}  
                    onClick={ () => this.onChange( gif ) }
                  >
                    <img 
                      src={ gif.images.downsized.url } 
                      width={ gif.images.downsized.width + 'px' } 
                      height={ gif.images.downsized.height + 'px' } 
                      alt={ gif.title } 
                    />
                  </li>
                )
              } ) }
            </ul>
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
)(SearchGiphy);