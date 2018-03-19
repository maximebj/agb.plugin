import debounce from 'throttle-debounce'

import StyleSelector from './styleselector'

const { Component } = wp.element

const {
  InspectorControls,
} = wp.blocks

const {
  PanelBody,
	RangeControl,
	BaseControl,
} = wp.components

const { __ } = wp.i18n;

export default class Inspector extends Component {

  constructor( props ) {
    super( props )

		//this.onSearch = this.onSearch.bind(this)
    //this.performSearch = debounce(300, this.performSearch)
  }

	onSearch( event ) {
    this.performSearch( event.target.value )
  }

  performSearch( search ) {
		console.log('search')
	}

  render() {
    return (
      <InspectorControls key="inspector">

				<BaseControl
					label={ __( 'Address' ) }
				>
	        <input
	          type="search"
	          placeholder={ __( 'Type an address' ) }
	          className="blocks-text-control__input"
	          onChange={ this.onSearch }
	        />
				</BaseControl>

				<RangeControl
					label={ __( 'Zoom' ) }
					value={ this.props.attributes.zoom }
					onChange={ this.props.onChangeZoom }
					min={ 0 }
					max={ 18 }
				/>

				<RangeControl
					label={ __( 'Height' ) }
					value={ this.props.attributes.height }
					onChange={ this.props.onChangeHeight }
					min={ 0 }
					max={ 1000 }
				/>

				<BaseControl
					label={ __( 'Style' ) }
				>
					<StyleSelector onChangeStyle={ this.props.onChangeStyle } />
				</BaseControl>

      </InspectorControls>
    )
  }
}
