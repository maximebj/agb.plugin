const { Component } = wp.element
const { BlockControls, BlockAlignmentToolbar } = wp.editor

export default class Tools extends Component {
  render() {

		const { alignment, setAttributes } = this.props

    return (
			<BlockControls>
        <BlockAlignmentToolbar
					value={ alignment }
					onChange={ alignment => setAttributes( { alignment } ) }
				/>
			</BlockControls>
    )
  }
}
