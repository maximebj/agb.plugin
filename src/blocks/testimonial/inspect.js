const { __ } = wp.i18n
const { Component } = wp.element
const { InspectorControls } = wp.blockEditor
const {
  PanelBody,
	PanelRow,
	FormToggle,
} = wp.components


export default class Inspector extends Component {

  render() {

		const { showImage, showCompany, setAttributes } = this.props

    return (
      <InspectorControls>

				<PanelBody>
					<PanelRow>
            <label
              htmlFor="image-form-toggle"
              className="blocks-base-control__label"
            >
              { __( 'Show Image?', 'advanced-gutenberg-blocks' ) }
            </label>
            <FormToggle
              id="image-form-toggle"
              label={ __( 'Show Image?', 'advanced-gutenberg-blocks' ) }
              checked={ showImage }
              onChange={ () => setAttributes( { showImage: ! showImage } ) }
            />
          </PanelRow>
					<PanelRow>
            <label
              htmlFor="author-form-toggle"
              className="blocks-base-control__label"
            >
              { __( 'Show Company name?', 'advanced-gutenberg-blocks' ) }
            </label>
            <FormToggle
              id="author-form-toggle"
              label={ __( 'Show Company name?', 'advanced-gutenberg-blocks' ) }
              checked={ showCompany }
              onChange={ () => setAttributes( { showCompany: ! showCompany } ) }
            />
          </PanelRow>
				</PanelBody>

      </InspectorControls>
    )
  }
}
