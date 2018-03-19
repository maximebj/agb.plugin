const { Component } = wp.element

const {
  InspectorControls,
} = wp.blocks

const {
  PanelBody,
	PanelRow,
	FormToggle,
} = wp.components

const { __ } = wp.i18n;

export default class Inspector extends Component {

  constructor( props ) {
    super( props )
  }

  render() {
    return (
      <InspectorControls key="inspector">

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
              checked={ !! this.props.attributes.showImage }
              onChange={ this.props.toggleImage }
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
              checked={ !! this.props.attributes.showCompany }
              onChange={ this.props.toggleCompany }
            />
          </PanelRow>
				</PanelBody>

      </InspectorControls>
    )
  }
}
