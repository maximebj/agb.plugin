import SearchPlugins from './searchplugins'

const { Component } = wp.element

const {
  InspectorControls,
} = wp.blocks

const {
  PanelBody,
} = wp.components

const { __ } = wp.i18n

export default class Inspector extends Component {

  constructor( props ) {
    super( props )
  }

  render() {
    return (
      <InspectorControls key="inspector">

        <PanelBody title={ __( 'Search plugin', 'advanced-gutenberg-blocks' ) }>
          <SearchPlugins onChangePlugin={this.props.onChangePlugin} />
        </PanelBody>

      </InspectorControls>
    );
  }

}
