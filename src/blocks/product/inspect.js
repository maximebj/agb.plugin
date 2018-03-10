import SearchProducts from '../../components/searchproducts'

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

        <PanelBody title={ __('Choose a product') }>

          <SearchProducts onChangeProduct={ this.props.onChangeProduct } />

        </PanelBody>

      </InspectorControls>
    );
  }

}
