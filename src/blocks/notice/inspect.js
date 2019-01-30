const { __ } = wp.i18n
const { Component } = wp.element
const { InspectorControls } = wp.editor
const { PanelBody, ToggleControl } = wp.components

export default class Inspector extends Component {

  render() {

		const { hasIcon, setAttributes } = this.props

    return (
      <InspectorControls>

        <PanelBody title={ __( 'Customize', 'advanced-gutenberg-blocks' ) }>

          <ToggleControl
            label={ __( 'Show icon', 'advanced-gutenberg-blocks' ) }
            checked={ hasIcon }
            onChange={ () => setAttributes( { hasIcon: ! hasIcon } ) }
          />

        </PanelBody>

      </InspectorControls>
    )
  }
}
