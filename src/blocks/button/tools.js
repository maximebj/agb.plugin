const { __ } = wp.i18n;
const { Component } = wp.element;
const { BlockControls, BlockAlignmentToolbar } = wp.editor;

export default class Tools extends Component {
	render() {
		const { blockAlignment, setAttributes } = this.props;

		return (
			<BlockControls key="controls">
				<BlockAlignmentToolbar
					value={blockAlignment}
					onChange={blockAlignment =>
						setAttributes({ blockAlignment })
					}
					controls={["left", "center", "right"]}
				/>
			</BlockControls>
		);
	}
}
