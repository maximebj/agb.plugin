import styles from "./styles"

const { Component } = wp.element

export default class Gmap extends Component {

	gmapObj = {
		Gmap: "",
		marker: "",
		infoWindow: ""
	}

	createMap = coords => {
		return new google.maps.Map(
			document.querySelector(".wp-block-advanced-gutenberg-blocks-gmap__canvas"),
			{
				zoom: this.props.attributes.zoom,
				center: coords,
				styles: styles[this.props.attributes.style]
			}
		)
	}

	createMarker = (map, coords) => {
		return new google.maps.Marker({
			position: coords,
			map: map
		})
	}

	createInfoWindow = () => {
		return new google.maps.InfoWindow({
			content: this.setInfoWindowContent(this.props.attributes)
		})
	}

	setInfoWindowContent = (attributes) => {
		const { name, address } = attributes
		return `
			<p><strong>${name}</strong></p>
			<p>${address}</p>
		`
	}

	componentDidMount() {
		const { latitude, longitude } = this.props.attributes

		const coords = {
			lat: latitude,
			lng: longitude
		}

		this.gmapObj.Gmap = this.createMap( coords )
		this.gmapObj.marker = this.createMarker( this.gmapObj.Gmap, coords )
		this.gmapObj.infoWindow = this.createInfoWindow()

		marker.addListener( "click", () => {
			infoWindow.open( this.gmapObj.Gmap, this.gmapObj.marker )
		})
	}

	componentWillReceiveProps( nextProps ) {
		const { address, zoom, style, name } = this.props.attributes
		const { Gmap, marker, infoWindow } = this.gmapObj

		const {
			address: nextAddress,
			zoom: nextZoom,
			style: nextStyle,
			name: nextName,
			latitude: nextLatitude,
			longitude: nextLongitude
		} = nextProps.attributes

		// Update position
		if ( address != nextAddress ) {
			const coords = {
				lat: nextLatitude,
				lng: nextLongitude
			}

			Gmap.setCenter( coords )
			marker.setPosition( coords )
		}

		// Update zoom
		if ( zoom != nextZoom ) {
			Gmap.setZoom( nextZoom )
		}

		// Update style
		if ( style != nextStyle ) {

			Gmap.setOptions( {
				styles: styles[nextStyle]
			} )
		}

		// Update infoWindow
		if (name != nextName) {
			infoWindow.setContent( this.setInfoWindowContent( nextProps.attributes ) )
		}
	}


	render() {

		const { attributes: { height } } = this.props

		return (
			<div
				className="wp-block-advanced-gutenberg-blocks-gmap__canvas"
				style={{
					height: height
				}}
			/>
		)
	}
}
