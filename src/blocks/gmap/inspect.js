import Geocoder from './geocoder'

import StyleSelector from './styleselector'

const { Component } = wp.element

const {
  InspectorControls,
} = wp.blocks

const {
  PanelBody,
	BaseControl,
	RangeControl,
} = wp.components

const { __ } = wp.i18n;

export default class Inspector extends Component {

  constructor( props ) {
    super( props )
  }

  render() {
    return (
      <InspectorControls key="inspector">

				<Geocoder onChangeAddress={ this.props.onChangeAddress } />

				<BaseControl
					label={ __( 'Marker Popup Title' ) }
				>
					<input
						type="text"
						placeholder={ __( 'My shop Name' ) }
						className="blocks-text-control__input"
						onChange={ this.props.onChangeName }
						value={ this.props.attributes.name }
					/>
				</BaseControl>

				<RangeControl
					label={ __( 'Zoom' ) }
					value={ this.props.attributes.zoom }
					onChange={ this.props.onChangeZoom }
					min={ 0 }
					max={ 18 }
				/>

				<RangeControl
					label={ __( 'Height' ) }
					value={ this.props.attributes.height }
					onChange={ this.props.onChangeHeight }
					min={ 0 }
					max={ 1000 }
				/>

				<BaseControl
					label={ __( 'Style' ) }
				>
					<StyleSelector onChangeStyle={ this.props.onChangeStyle } />
				</BaseControl>

      </InspectorControls>
    )
  }
}
