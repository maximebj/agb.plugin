import styles from "./styles"

const { Component } = wp.element

export default class Gmap extends Component {
	gmapObj = {
		Gmap: "",
		marker: "",
		infoWindow: ""
	}

	_createMap = coords => {
		return new google.maps.Map(
			document.querySelector(".wp-block-gutenblocks-gmap__canvas"),
			{
				zoom: this.props.attributes.zoom,
				center: coords,
				styles: styles[this.props.attributes.style]
			}
		)
	}

	_createMarker = (map, coords) => {
		return new google.maps.Marker({
			position: coords,
			map: map
		})
	}

	_createInfoWindow = () => {
		return new google.maps.InfoWindow({
			content: this._setInfoWindowContent(this.props.attributes)
		})
	}

	componentDidMount() {
		const coords = {
			lat: this.props.attributes.latitude,
			lng: this.props.attributes.longitude
		}

		this.gmapObj.Gmap = this._createMap(coords)
		this.gmapObj.marker = this._createMarker(this.gmapObj.Gmap, coords)
		this.gmapObj.infoWindow = this._createInfoWindow()

		this.gmapObj.marker.addListener("click", () => {
			this.gmapObj.infoWindow.open(this.gmapObj.Gmap, this.gmapObj.marker)
		})
	}

	componentWillReceiveProps(nextProps) {
		const { address, zoom, style, name } = this.props.attributes
		const {
			address: nextAddress,
			zoom: nextZoom,
			style: nextStyle,
			name: nextName,
			latitude: nextLatitude,
			longitude: nextLongitude
		} = nextProps.attributes
		const { Gmap, marker, infoWindow } = this.gmapObj

		// Update position
		if (address != nextAddress) {
			const coords = {
				lat: nextLatitude,
				lng: nextLongitude
			}

			Gmap.setCenter(coords)
			marker.setPosition(coords)
			infoWindow.setContent(this._setInfoWindowContent(nextProps.attributes))
		}

		// Update zoom
		if (zoom != nextZoom) {
			Gmap.setZoom(nextZoom)
		}

		// Update style
		if (style != nextStyle) {
			Gmap.setOptions({
				styles: styles[nextStyle]
			})
		}

		// Update infoWindow
		if (name != nextName) {			
			infoWindow.setContent(this._setInfoWindowContent(nextProps.attributes))
		}
	}

	_setInfoWindowContent = (attributes) => {
		const { name, address } = attributes
		return `
			<p><strong>${name}</strong></p>
			<p>${address}</p>
		`
	}

	render() {
		return (
			<div
				className="wp-block-gutenblocks-gmap__canvas"
				style={{
					height: this.props.attributes.height
				}}
			/>
		)
	}
}
