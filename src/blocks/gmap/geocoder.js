import {debounce} from 'throttle-debounce'

const { Component } = wp.element
const { __ } = wp.i18n

const {
	BaseControl,
} = wp.components

export default class Geocoder extends Component {

  constructor( props ) {
    super( props )

    this.state = {
      results: false,
    }

    this.onSearch = this.onSearch.bind( this )
    this.performSearch = debounce( 300, this.performSearch )
  }

  onSearch( event ) {
    this.performSearch( event.target.value )
  }

  performSearch( search ) {
    if( search.length < 3) {
      return
    }

    this.setState( { results: __( 'Loading...' ) } )

		const geocoder = new google.maps.Geocoder()
		const component = this

		geocoder.geocode( { 'address': search }, function(results, status) {
      if (status == 'OK') {

				if(results.length == 0 ) {
	        results = __( 'No result' )
	      }

				component.setState( { results: results } )

			} else {
				component.setState( { results: __( 'Geocode was not successful for the following reason:' ) + status } )
      }
		} )
  }

	getGeocodedObj(obj) {
		this.props.onChangeAddress( obj )
	}

  render() {
    return (
      <div>
				<BaseControl
					label={ __( 'Address' ) }
				>
	        <input
	          type="search"
	          placeholder={ __( 'Type an address' ) }
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
	                      onClick={ () => this.getGeocodedObj( result ) }
	                    >
	                      { result.formatted_address }
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

      </div>
    )
  }
}
