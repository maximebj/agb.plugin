import SearchProduct from '../../components/searchproduct'

const { __ } = wp.i18n
const { Component } = wp.element

const { 
	InspectorControls, 
	PanelColorSettings, 
} = wp.blockEditor

const { PanelBody } = wp.components

export default class Inspector extends Component {

  render() {

		const { attributes: { productID, priceColor, buttonBackgroundColor }, setAttributes } = this.props

    return (
      <InspectorControls>

        <PanelBody title={ __( 'Choose a product', 'advanced-gutenberg-blocks' ) }>
          <SearchProduct
						onChange= { product => setAttributes( { productID: product.id } ) }
						restURL= { advancedGutenbergBlocksProduct.rest }
					/>
        </PanelBody>

				{ !! productID && (
					<PanelColorSettings
						title={ __( 'Colors', 'advanced-gutenberg-blocks' ) }
						colorSettings={ [
							{
								value: priceColor,
								onChange: priceColor => setAttributes( { priceColor } ),
								label: __( 'Price color', 'advanced-gutenberg-blocks' ),
							},
							{
								value: buttonBackgroundColor,
								onChange: buttonBackgroundColor => setAttributes( { buttonBackgroundColor } ),
								label: __( 'Button background color', 'advanced-gutenberg-blocks' ),
							},
						] }
					/>
				) }
      </InspectorControls>
    )
  }
}
