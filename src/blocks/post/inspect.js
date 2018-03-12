import SearchPost from '../../components/searchpost'

const { Component } = wp.element

const {
  InspectorControls,
	ColorPalette,
} = wp.blocks

const {
  PanelBody,
	PanelRow,
	FormToggle,
} = wp.components

const { __ } = wp.i18n;

export default class Inspector extends Component {

  constructor( props ) {
    super( props )
  }

  render() {
    return (
      <InspectorControls key="inspector">

        <PanelBody title={ __('Choose a post') }>
          <SearchPost onChangePost={ this.props.onChangePost } />
        </PanelBody>

				{ !! this.props.attributes.postID && (

					<PanelBody title={ __('Customize') }>
						<PanelRow>
	            <label
	              htmlFor="image-form-toggle"
	              className="blocks-base-control__label"
	            >
	              { __( 'Show Image?') }
	            </label>
	            <FormToggle
	              id="image-form-toggle"
	              label={ __( 'Show Image?') }
	              checked={ !! this.props.attributes.showImage }
	              onChange={ this.props.toggleImage }
	            />
	          </PanelRow>
						<PanelRow>
	            <label
	              htmlFor="author-form-toggle"
	              className="blocks-base-control__label"
	            >
	              { __( 'Show Author?') }
	            </label>
	            <FormToggle
	              id="author-form-toggle"
	              label={ __( 'Show Author?') }
	              checked={ !! this.props.attributes.showAuthor }
	              onChange={ this.props.toggleAuthor }
	            />
	          </PanelRow>

						<PanelRow>
	            <label
	              htmlFor="category-form-toggle"
	              className="blocks-base-control__label"
	            >
	              { __( 'Show Category?') }
	            </label>
	            <FormToggle
	              id="category-form-toggle"
	              label={ __( 'Show Category?') }
	              checked={ !! this.props.attributes.showCategory }
	              onChange={ this.props.toggleCategory }
	            />
	          </PanelRow>
					</PanelBody>
				) }

      </InspectorControls>
    )
  }
}
