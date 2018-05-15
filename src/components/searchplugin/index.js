import { debounce } from 'throttle-debounce'

const { Component, Fragment } = wp.element
const { TextControl } = wp.components
const { __ } = wp.i18n

export default class SearchPlugin extends Component {

	state = {
		results: false,
	}

  onSearch = debounce( 300, search => {

    if( search.length < 3) {
      return
    }

    this.setState( { results: __( 'Loading...', 'advanced-gutenberg-blocks' ) } )

    fetch(advancedGutenbergBlocksGlobals.ajaxurl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: 'action=search_plugins&search=' + encodeURIComponent( search ),
      credentials: 'same-origin'
    } )
    .then(response => response.json() )
    .then(response => {

			if(response.info.results == 0 ) {
				this.setState( { results: __( 'No result', 'advanced-gutenberg-blocks' ) } )
      } else {
				this.setState( { results: response.plugins } )
			}
    } )
		.catch( error => {
			this.setState( { results: __( "⚠️ Error: Couldn't reach wp.org", 'advanced-gutenberg-blocks' ) } )
		} )
  } )

  onChangeValue = slug => {
    this.props.onChange( _.find(this.state.results, { slug: slug} ) )
  }

  render() {
    return (
      <Fragment>

				<TextControl
					type="search"
					placeholder={ __( "Type a plugin name ", 'advanced-gutenberg-blocks' ) }
					onChange={ value => this.onSearch( value ) }
				/>

			  <div className="AGB-panel-results">

          { this.state.results && Array.isArray(this.state.results) ?
            (
              <ul>
                { this.state.results.map( plugin => {

                  let icon = (!! plugin.icons['1x']) ? plugin.icons['1x'] : plugin.icons.default

                  return (
                    <li onClick={ () => this.onChangeValue( plugin.slug ) } >
                      <img src={ icon } alt={ plugin.name } />
                      <span>{ plugin.name }</span>
                    </li>
                  )
                } ) }
              </ul>
            ) : (
              <p>{ this.state.results }</p>
            )
          }
        </div>
      </Fragment>
    )
  }
}
