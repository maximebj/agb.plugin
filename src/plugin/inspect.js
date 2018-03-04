import SearchPlugins from './searchplugins'

const { Component } = wp.element;

const {
  InspectorControls,
} = wp.blocks;

const {
  PanelBody,
} = wp.components;

const { __ } = wp.i18n;

export default class Inspector extends Component {

  constructor( props ) {
    super( ...arguments )
  }

  render() {
    return (
      <InspectorControls key="inspector">

        <PanelBody title={ __('Search plugin' ) }>

          <SearchPlugins onChangePlugin={this.props.onChangePlugin} plugins={this.props.plugins} />

        </PanelBody>

      </InspectorControls>
    );
  }

}
