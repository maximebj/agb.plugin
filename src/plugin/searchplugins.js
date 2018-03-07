import {debounce} from 'throttle-debounce'

const { Component } = wp.element;

const { __ } = wp.i18n;

export default class SearchPlugins extends Component {

  constructor( props ) {
    super( props )

    this.state = {
      status: false,
      plugins: {},
    };

    this.onSearch = this.onSearch.bind(this)
    this.performSearch = debounce(300, this.performSearch)
  }

  onSearch( event ) {
    this.performSearch( event.target.value)
  }

  performSearch( search ) {

    if( search.length < 3) {
      return
    }

    this.setState( { status: __('Loading...') } )

    fetch(gutenblocksGlobals.ajaxurl, {
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
          this.setState( { status: __( 'No result') } )
        } else {
          this.setState( { plugins: response.plugins, status: true } )
        }
      }
    )
  }

  getPluginSlug(slug) {
    this.props.onChangePlugin(_.find(this.state.plugins, { slug: slug}) )
  }

  render() {
    return (
      <div>

        <input
          type="search"
          placeholder={ __( 'Search Plugin' ) }
          className='blocks-text-control__input'
          onChange={ this.onSearch }
        />

			<div className="gutenblocks-panel-results">

          { this.state.status===true ?
            (
              <ul>
                { this.state.plugins.map( plugin => {

                  let icon = (!! plugin.icons['1x']) ? plugin.icons['1x'] : plugin.icons.default

                  return (
                    <li onClick={() => this.getPluginSlug(plugin.slug) } >
                      <img src={icon} alt={ plugin.name } />
                      <span>{ plugin.name }</span>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <p>{this.state.status}</p>
            )
          }
        </div>
      </div>
    );
  }

}
