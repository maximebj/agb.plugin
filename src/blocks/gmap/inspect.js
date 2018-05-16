import Geocoder from "./geocoder"
import StyleSelector from "./styleselector"

const { __ } = wp.i18n
const { Component } = wp.element
const { InspectorControls } = wp.blocks
const { PanelBody, BaseControl, TextControl, RangeControl } = wp.components

export default class Inspector extends Component {

	render() {

		const { attributes: { address, name, zoom, height, style }, setAttributes } = this.props

		return (
			<InspectorControls>

				<PanelBody title={ __( "Map options", 'advanced-gutenberg-blocks' ) }>
					<Geocoder { ...{ address, setAttributes } } />

					<TextControl
						type="text"
						label={ __( "Marker Popup Title", 'advanced-gutenberg-blocks' ) }
						placeholder={ __( "My shop Name", 'advanced-gutenberg-blocks' ) }
						onChange={ name => setAttributes( { name } ) }
						value={ name }
					/>

					<RangeControl
						label={ __( "Zoom", 'advanced-gutenberg-blocks' ) }
						value={ zoom }
						onChange={ zoom => setAttributes( { zoom } ) }
						min={0}
						max={18}
					/>

					<RangeControl
						label={ __( "Height", 'advanced-gutenberg-blocks' ) }
						value={ height }
						onChange={ height => setAttributes( { height } ) }
						min={0}
						max={1000}
					/>

					<BaseControl label={ __( "Style", 'advanced-gutenberg-blocks' ) }>
						<StyleSelector { ...{ style, setAttributes } } />
					</BaseControl>

				</PanelBody>

			</InspectorControls>
		)
	}
}
