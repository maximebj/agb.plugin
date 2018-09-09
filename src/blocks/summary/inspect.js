const { __ } = wp.i18n
const { Component } = wp.element
const { InspectorControls } = wp.editor
const { PanelBody, PanelRow, FormToggle } = wp.components

export default class Inspector extends Component {

  render() {

		const { attributes: { ordered }, setAttributes } = this.props

    return (
      <InspectorControls>

        <PanelBody title={ __( 'Options', 'advanced-gutenberg-blocks' ) }>
          <PanelRow>
            <label
              htmlFor="ordered-form-toggle"
              className="blocks-base-control__label"
            >
              { __( 'Ordered list?', 'advanced-gutenberg-blocks' ) }
            </label>
            <FormToggle
              id="ordered-form-toggle"
              label={ __( 'Ordered list?', 'advanced-gutenberg-blocks' ) }
              checked={ ordered }
              onChange={ () => setAttributes( { ordered: ! ordered } ) }
            />
          </PanelRow>

        </PanelBody>

      </InspectorControls>
    )
  }
}
