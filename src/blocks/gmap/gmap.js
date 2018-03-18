import styles from './styles'

const { Component } = wp.element

const { __ } = wp.i18n

export default class Gmap extends Component {

  constructor( props ) {
    super( props )

		this.state = {
      Gmap: '',
			marker: '',
    }
  }

	componentDidMount() {

		let coords = { lat: this.props.attributes.latitude, lng: this.props.attributes.longitude }

		console.log(coords)

    let map = new google.maps.Map( document.querySelector( '.wp-block-gutenblocks-gmap__canvas' ), {
      zoom: this.props.attributes.zoom,
      center: coords
    } )

    let marker = new google.maps.Marker({
      position: coords,
      map: map
    } )

		this.setState( {
			Gmap: map,
			marker: marker,
		} )

	}

	componentDidUpdate(lastProps, lastState) {

		// Update zoom
		if(lastProps.attributes.zoom != this.props.attributes.zoom ) {
			this.state.Gmap.setZoom( this.props.attributes.zoom );
		}

		// Update style
		if(lastProps.attributes.style != this.props.attributes.style ) {
			this.state.Gmap.setOptions( {styles: this.state.styles[this.props.attributes.style] } )
		}
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
