import SearchPlugin from '../../components/searchplugin'

const { __ } = wp.i18n
const { Component } = wp.element
const { InspectorControls } = wp.blocks
const { PanelBody } = wp.components

export default class Inspector extends Component {

  render() {
		const { setAttributes } = this.props

    return (
      <InspectorControls>

        <PanelBody title={ __( 'Choose a plugin', 'advanced-gutenberg-blocks' ) }>
          <SearchPlugin
						onChange={ plugin => setAttributes( { slug: plugin.slug } ) }
					/>
        </PanelBody>

      </InspectorControls>
    )
  }

}
