import { debounce } from "throttle-debounce"

const { Component, Fragment } = wp.element
const { __ } = wp.i18n
const { TextControl } = wp.components

export default class Geocoder extends Component {

	state = {
    results: false
  }

  onSearch = debounce( 300, searchQuery => {

		if ( searchQuery.length < 3 ) {
      return
    }

    this.setState( {
      results: __( "Loading...", 'advanced-gutenberg-blocks' )
    } )

    const geocoder = new google.maps.Geocoder()

    geocoder.geocode( { address: searchQuery }, (results, status) => {
      if (status == "OK") {
        if (results.length == 0) {
          results = __( "No result", 'advanced-gutenberg-blocks' )
        }

        this.setState( { results: results } )
      } else {
        this.setState( {
          results: __( "Geocode was not successful for the following reason:", 'advanced-gutenberg-blocks' ) + status
        } )
      }
    } )
  } )

  setGeocodedObj = geocodedObj => {
		this.props.setAttributes( {
			latitude: geocodedObj.geometry.location.lat(),
			longitude: geocodedObj.geometry.location.lng(),
			address: geocodedObj.formatted_address
		} )
  }

  renderResults = () => {
    return this.state.results.map(result => {
      return (
        <li key={`gmap-result-${result.place_id}`} onClick={ () => this.setGeocodedObj(result) }>
          {result.formatted_address}
        </li>
      )
    } )
  }

  render() {

    return (
			<Fragment>
				<TextControl
					type="search"
					label={ __( "Address", 'advanced-gutenberg-blocks' ) }
					placeholder={ __( "Type an address", 'advanced-gutenberg-blocks' ) }
					onChange={ value => this.onSearch( value ) }
				/>

				<div className="AGB-panel-results">
					{ !! this.state.results && Array.isArray( this.state.results ) ? (
						<ul>{ this.renderResults() }</ul>
					) : (
						<p>{ this.state.results }</p>
					)}
				</div>
			</Fragment>
    )
  }
}
