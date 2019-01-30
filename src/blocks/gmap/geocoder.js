import { debounce } from "throttle-debounce"

const { __ } = wp.i18n
const { Component, Fragment } = wp.element
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
      results: __( "Loading…", 'advanced-gutenberg-blocks' )
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


  render() {

		const { results } = this.state

    return (
			<Fragment>
				<TextControl
					type="search"
					label={ __( "Address", 'advanced-gutenberg-blocks' ) }
					placeholder={ __( "Type an address", 'advanced-gutenberg-blocks' ) }
					onChange={ value => this.onSearch( value ) }
				/>

				<div className="AGB-panel-results">
					{ !! results && Array.isArray( results ) ? (
						<ul>
							{ results.map( result => {

								return (
									<li onClick={ () => this.setGeocodedObj( result ) }>
					          {result.formatted_address}
					        </li>
								)
							} ) }
						</ul>
					) : (
						<p>{ results }</p>
					)}
				</div>
			</Fragment>
    )
  }
}
