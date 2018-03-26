import Geocoder from "./geocoder"

import StyleSelector from "./styleselector"

const { Component } = wp.element

const { InspectorControls } = wp.blocks

const { PanelBody, BaseControl, RangeControl } = wp.components

const { __ } = wp.i18n

const Inspector = props => {
	return (
		<InspectorControls key="inspector">
			<Geocoder onChangeAddress={props.onChangeAddress} />

			<BaseControl
				label={__("Marker Popup Title", "advanced-gutenberg-blocks")}
			>
				<input
					type="text"
					placeholder={__(
						"My shop Name",
						"advanced-gutenberg-blocks"
					)}
					className="blocks-text-control__input"
					onChange={props.onChangeName}
					value={props.attributes.name}
				/>
			</BaseControl>

			<RangeControl
				label={__("Zoom", "advanced-gutenberg-blocks")}
				value={props.attributes.zoom}
				onChange={props.onChangeZoom}
				min={0}
				max={18}
			/>

			<RangeControl
				label={__("Height", "advanced-gutenberg-blocks")}
				value={props.attributes.height}
				onChange={props.onChangeHeight}
				min={0}
				max={1000}
			/>

			<BaseControl label={__("Style", "advanced-gutenberg-blocks")}>
				<StyleSelector onChangeStyle={props.onChangeStyle} />
			</BaseControl>
		</InspectorControls>
	)
}

export default Inspector
