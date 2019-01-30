import { debounce } from 'throttle-debounce'

const { __ } = wp.i18n
const { Component, Fragment } = wp.element
const { TextControl } = wp.components

export default class SearchPlugin extends Component {

	state = {
		results: false,
	}

  onSearch = debounce( 300, search => {

    if( search.length < 3) {
      return
    }

    this.setState( { results: __( 'Loading…', 'advanced-gutenberg-blocks' ) } )

    fetch( advancedGutenbergBlocksGlobals.ajaxurl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: 'action=search_plugins&search=' + encodeURIComponent( search ),
      credentials: 'same-origin'
    } )
    .then( response => response.json() )
    .then( response => {

			if( response.info.results == 0 ) {
				this.setState( { results: __( 'No result', 'advanced-gutenberg-blocks' ) } )
      } else {
        this.setState( { results: response.plugins } )
			}

    } )
		.catch( error => {

			this.setState( { results: __( "⚠️ Error: Couldn't reach wp.org", 'advanced-gutenberg-blocks' ) } )
    
    } )
  } )

  render() {

		const { results } = this.state

    return (
      <Fragment>

				<TextControl
					type="search"
					placeholder={ __( "Type a plugin name ", 'advanced-gutenberg-blocks' ) }
					onChange={ value => this.onSearch( value ) }
				/>

			  <div className="AGB-panel-results">

          { results && Array.isArray(results) ?
            (
              <ul>
                { results.map( plugin => {

                  return (
                    <li
                      key={plugin.slug}  
                      onClick={ () => this.props.onChange( plugin ) }
                    >
                      <img src={ plugin.icon } alt={ plugin.name } />
                      <span>{ plugin.name }</span>
                    </li>
                  )
                } ) }
              </ul>
            ) : (
              <p>{ results }</p>
            )
          }
        </div>
      </Fragment>
    )
  }
}
