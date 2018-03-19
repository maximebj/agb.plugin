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
					label={ __( 'Marker Popup Title', 'advanced-gutenberg-blocks' ) }
				>
					<input
						type="text"
						placeholder={ __( 'My shop Name', 'advanced-gutenberg-blocks' ) }
						className="blocks-text-control__input"
						onChange={ this.props.onChangeName }
						value={ this.props.attributes.name }
					/>
				</BaseControl>

				<RangeControl
					label={ __( 'Zoom', 'advanced-gutenberg-blocks' ) }
					value={ this.props.attributes.zoom }
					onChange={ this.props.onChangeZoom }
					min={ 0 }
					max={ 18 }
				/>

				<RangeControl
					label={ __( 'Height', 'advanced-gutenberg-blocks' ) }
					value={ this.props.attributes.height }
					onChange={ this.props.onChangeHeight }
					min={ 0 }
					max={ 1000 }
				/>

				<BaseControl
					label={ __( 'Style', 'advanced-gutenberg-blocks' ) }
				>
					<StyleSelector onChangeStyle={ this.props.onChangeStyle } />
				</BaseControl>

      </InspectorControls>
    )
  }
}
