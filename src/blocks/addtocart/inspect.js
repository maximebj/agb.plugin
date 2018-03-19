import SearchProduct from '../../components/searchproduct'
import IconList from './iconlist'

const { Component } = wp.element
const {
  InspectorControls,
	ColorPalette,
} = wp.blocks

const {
  PanelBody,
  PanelRow,
  FormToggle,
	PanelColor,
} = wp.components

const { __ } = wp.i18n

export default class Inspector extends Component {

  constructor( props ) {
    super( props )
  }
  render() {
    return (
      <InspectorControls key="inspector">
				<PanelBody title={ __( 'Search Product', 'advanced-gutenberg-blocks' ) }>
          <SearchProduct onChangeProduct={this.props.onChangeProduct} />
        </PanelBody>

				<PanelColor
          title={ __( 'Background Color', 'advanced-gutenberg-blocks' ) }
          colorValue={ this.props.attributes.backgroundColor }
          >
          <ColorPalette
            value={ this.props.attributes.backgroundColor }
            onChange={ this.props.onChangeBackgroundColor }
          />
        </PanelColor>

        <PanelBody
          title={ __( 'Icon', 'advanced-gutenberg-blocks' ) }
        >
          <PanelRow>
            <label
              htmlFor="icon-form-toggle"
              className="blocks-base-control__label"
            >
              { __( 'Display Icon?', 'advanced-gutenberg-blocks' ) }
            </label>
            <FormToggle
              id="icon-form-toggle"
              label={ __( 'Display Icon?', 'advanced-gutenberg-blocks' ) }
              checked={ !! this.props.attributes.hasIcon }
              onChange={ this.props.toggleHasIcon }
            />
          </PanelRow>

          {
            !! this.props.attributes.hasIcon && (
              <IconList onChangeIcon={ this.props.onChangeIcon } />
            )
          }

        </PanelBody>

      </InspectorControls>
    );
  }
}
