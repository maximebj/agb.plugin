import { debounce } from 'throttle-debounce'

import logo from './logo'

const { __ } = wp.i18n
const { Component } = wp.element
const { TextControl, Button } = wp.components
const { withDispatch } = wp.data
const { createBlock } = wp.blocks
const { Fragment } = wp.element

class SearchUnsplash extends Component {

	state = {
    results: false,
    search: '',
    page: 1,
    image: null,
    uploading: false,
    choosenPic: null,
    isRandom: false,
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

    fetch( `https://api.unsplash.com/search/photos/?client_id=${advancedGutenbergBlocksUnsplash.accessKey}&per_page=15&page=${this.state.page}&query=${search}` )
    .then( response => response.json() )
    .then( results => {

      if( results.total == 0 ) {
        results = __( 'No result', 'advanced-gutenberg-blocks' )
      }
      this.setState( {  
        results: results.results,
        isRandom: false  
      } )
    } )
  }

  getRandom = () => {
    fetch( `https://api.unsplash.com/photos/random/?client_id=${advancedGutenbergBlocksUnsplash.accessKey}&count=15&orientation=landscape&featured=true` )
    .then( response => response.json() )
    .then( results => {

      this.setState( {  
        results: results, 
        isRandom: true,
      } )
    } )
  }

  onChange = image => {
    this.setState( { 
      loading: true ,
      choosenPic: image,
    } )

    this.uploadPhoto(image).then( image => {

      const { choosenPic } = this.state
      var description = ''
      
      if ( choosenPic.description != null ) {
        description += choosenPic.description + ' '
      }
      description +=  __( 'by', 'advanced-gutenberg-blocks' ) + ' ' + choosenPic.user.name

      const block = createBlock( "core/image", {
        url: image.source_url,
        id: image.id,
        caption: description,
        alt: description,
        align: 'center',
      } )
      
      this.props.insertBlocksAfter( block )
      this.props.removeBlock( this.props.clientId )
    } )
  }

  uploadPhoto(image) {
    if (this.state.image) {
      return Promise.resolve(this.state.image);
    }
     
    return this.download( image.links.download_location, image.id, { type: "image/jpeg" } )
    .then( file => {
      return this.createMediaFromFile( file ).then( image => {
        this.setState( { image } )

        return image
      } )
    } )
  }

  createMediaFromFile = file => {
    const data = new window.FormData();
    data.append( "file", file, file.name || file.type.replace("/", ".") );
    return wp.apiRequest( {
      path: "/wp/v2/media",
      data,
      contentType: false,
      processData: false,
      method: "POST"
    } )
  }

  download = (url, name, options) =>
    window
      .fetch(`${url}?client_id=${advancedGutenbergBlocksUnsplash.accessKey}`)
      .then( response => response.json() )
      .then( ( { url } ) => {
        return new Promise(resolve => {
          const img = new window.Image()
          const c = document.createElement("canvas")
          const ctx = c.getContext("2d")
          img.onload = function() {
            const maxWidthHeight = 2000
            const ratio = this.naturalWidth / this.naturalHeight
            const width = ratio > 1 ? maxWidthHeight : maxWidthHeight * ratio
            const height = ratio < 1 ? maxWidthHeight : maxWidthHeight / ratio
            c.width = width
            c.height = height
            ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height)
            c.toBlob(resolve, "image/jpeg", 0.75)
          };
          img.crossOrigin = ""
          img.src = url
        });
      })
      .then( blob => new window.File( [blob], name + ".jpg", options ) )
 

  render() {

    const { results, loading, choosenPic, isRandom } = this.state

    if ( loading ) {
      return (
        <div className="AGB-block-search">
          <p className="AGB-block-search__logo">{logo}</p>
          <div 
            className="AGB-block-search__preview" 
            style={ { backgroundImage: 'url(" ' + choosenPic.urls.thumb + ' ")' } } 
          />
          <p>{ __( 'Uploading picture in media library, please wait…', 'advanced-gutenberg-blocks' ) }</p>
        </div>
      )
    }

    return (
      <div className="AGB-block-search">
        <p className="AGB-block-search__logo">{logo}</p>

        <div className="AGB-block-search__input">
          <TextControl
            type="search"
            placeholder={ __( "Search a picture", 'advanced-gutenberg-blocks' ) }
            onChange={ value => this.onSearch( value ) }
          />
          <span>
            { __( 'or', 'advanced-gutenberg-blocks' ) }
          </span>
          <Button
            isDefault
            onClick={ () => this.getRandom() }
          >
            { __('Random', 'advanced-gutenberg-blocks' ) }
          </Button>
        </div>
				

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
              { ! isRandom && (
              <p className="AGB-block-search__more">
                <a
                  href="#"
                  onClick={ () => this.nextPage() } 
                >
                  { __( 'More images', 'advanced-gutenberg-blocks' ) }
                </a>
              </p>
              ) }
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