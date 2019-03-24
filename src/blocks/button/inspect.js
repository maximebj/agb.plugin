const { Component } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, ToggleControl, ColorPalette, TextControl } = wp.components;

export default class Inspector extends Component {
	render() {
		const { url, isBlank, setAttributes } = this.props;

		return (
			<InspectorControls>
				<PanelBody title="Insert URL">
					<TextControl
						type="url"
						value={url}
						onChange={url => setAttributes({ url })}
						placeHolder="https://"
					/>

					<ToggleControl
						label="Open in new tab"
						checked={isBlank}
						onChange={() => setAttributes({ isBlank: !isBlank })}
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}
