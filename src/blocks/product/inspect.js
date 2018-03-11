import SearchProducts from '../../components/searchproducts'

const { Component } = wp.element

const {
  InspectorControls,
	ColorPalette,
} = wp.blocks

const {
  PanelBody,
	PanelColor,
} = wp.components

const { __ } = wp.i18n;

export default class Inspector extends Component {

  constructor( props ) {
    super( props )
  }

  render() {
    return (
      <InspectorControls key="inspector">

        <PanelBody title={ __('Choose a product') }>
          <SearchProducts onChangeProduct={ this.props.onChangeProduct } />
        </PanelBody>

				{ !! this.props.attributes.productID && (
					<span>
						<PanelColor
		          title={ __( 'Price color' ) }
		          colorValue={ this.props.attributes.priceColor }
		          >
		          <ColorPalette
		            value={ this.props.attributes.priceColor }
		            onChange={ this.props.onChangePriceColor }
		          />
		        </PanelColor>

						<PanelColor
		          title={ __( 'Button background color' ) }
		          colorValue={ this.props.attributes.buttonBackgroundColor }
		          >
		          <ColorPalette
		            value={ this.props.attributes.buttonBackgroundColor }
		            onChange={ this.props.onChangeButtonBackgroundColor }
		          />
		        </PanelColor>
					</span>
				) }

      </InspectorControls>
    );
  }

}
