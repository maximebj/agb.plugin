import { debounce } from 'throttle-debounce'

const { Component } = wp.element

const { __ } = wp.i18n

export default class SearchPlugin extends Component {

	state = {
		results: false,
	}

  onSearch = event => {
    this.performSearch( event.target.value )
  }

  performSearch = debounce(300, search => {

    if( search.length < 3) {
      return
    }

    this.setState( { results: __( 'Loading...', 'advanced-gutenberg-blocks' ) } )

    fetch(advancedGutenbergBlocksGlobals.ajaxurl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: 'action=search_plugins&search='+encodeURIComponent(search),
      credentials: 'same-origin'
    })
    .then(response => response.json() )
    .then(response => {

			if(response.info.results == 0 ) {
				this.setState( { results: __( 'No result', 'advanced-gutenberg-blocks' ) } )
      } else {
				this.setState( { results: response.plugins } )
			}
    })
		.catch( error => {
			this.setState( { results: __( "⚠️ Error: Couldn't reach wp.org", 'advanced-gutenberg-blocks' ) } )
		})
  })

  onChangeValue = slug => {
    this.props.onChange( _.find(this.state.results, { slug: slug} ) )
  }

  render() {
    return (
      <div>

        <input
          type="search"
          placeholder={ __( 'Search Plugin', 'advanced-gutenberg-blocks' ) }
          className='blocks-text-control__input'
          onChange={ this.onSearch }
        />

			  <div className="advanced-gutenberg-blocks-panel-results">

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
      </div>
    )
  }
}
