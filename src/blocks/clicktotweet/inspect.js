import { __ } from '@wordpress/i18n'
const { Component } = wp.element
const { InspectorControls } = wp.blockEditor
const { PanelBody, TextareaControl } = wp.components

export default class Inspector extends Component {

  render() {

		const { attributes: { hashtags }, setAttributes } = this.props

    return (
      <InspectorControls>

        <PanelBody title={ __( 'Hashtags', 'advanced-gutenberg-blocks' ) }>

          <TextareaControl
            label={ __( 'Add some hashtags (optionnal)', 'advanced-gutenberg-blocks' ) }
            help={ __( 'Comma separated values, don\'t add #', 'advanced-gutenberg-blocks' ) }
						onChange={ hashtags => setAttributes( { hashtags } ) }
            value={ hashtags }
            rows='2'
					/>
        </PanelBody>

      </InspectorControls>
    )
  }
}
