import styles from './styles'

const { Component } = wp.element

const { __ } = wp.i18n

export default class Gmap extends Component {

  constructor( props ) {
    super( props )

		this.state = {
      Gmap: '',
			marker: '',
			infoWindow: '',
    }
  }

	componentDidMount() {

		const coords = { lat: this.props.attributes.latitude, lng: this.props.attributes.longitude }
		console.log(coords)
		// Create Map
    const map = new google.maps.Map( document.querySelector( '.wp-block-gutenblocks-gmap__canvas' ), {
      zoom: this.props.attributes.zoom,
      center: coords,
			styles: styles[this.props.attributes.style]
    } )

		// Create Marker
    const marker = new google.maps.Marker( {
      position: coords,
      map: map
    } )

		// Create Info Window
		const infoWindow = new google.maps.InfoWindow( {
    	content: this.setInfoWindowContent()
  	} )

		// On marker click: open info window
		marker.addListener('click', function() {
    	infoWindow.open( map, marker );
  	} )

		// Set everything in state to access it later
		this.setState( {
			Gmap: map,
			marker: marker,
			infoWindow: infoWindow
		} )

	}

	componentDidUpdate(lastProps, lastState) {

		// Update position
		if( lastProps.attributes.address != this.props.attributes.address ) {

			const coords = { lat: this.props.attributes.latitude, lng: this.props.attributes.longitude }

			this.state.Gmap.setCenter( coords )
			this.state.marker.setPosition( coords )
			this.state.infoWindow.setContent( this.setInfoWindowContent() )
		}

		// Update zoom
		if( lastProps.attributes.zoom != this.props.attributes.zoom ) {
			this.state.Gmap.setZoom( this.props.attributes.zoom );
		}

		// Update style
		if( lastProps.attributes.style != this.props.attributes.style ) {
			this.state.Gmap.setOptions( {styles: styles[this.props.attributes.style] } )
		}

		// Update infoWindow
		if( lastProps.attributes.name != this.props.attributes.name ) {
			this.state.infoWindow.setContent( this.setInfoWindowContent() )
		}
	}

	setInfoWindowContent() {
		return `
			<p><strong>${this.props.attributes.name}</strong></p>
			<p>${this.props.attributes.address}</p>
		`
	}

  render() {

    return (
			<div
				className="wp-block-gutenblocks-gmap__canvas"
				style={ {
					height: this.props.attributes.height
				} }
			>
			</div>
    )
  }
}
