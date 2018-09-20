import './style.scss'
import './editor.scss'

import logo from './logo'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { Fragment } = wp.element
const { TextControl } = wp.components

export default registerBlockType(
  'advanced-gutenberg-blocks/unsplash',
  {
    title: __( 'Unsplash', 'advanced-gutenberg-blocks' ),
    description: __( 'Find beautiful pictures from the best free photos stock', 'advanced-gutenberg-blocks' ),
    category: 'agb',
    icon: { background: '#2F313A', foreground: '#DEBB8F', src: 'camera' },
    keywords: [
      __( 'photo', 'advanced-gutenberg-blocks' ),
      __( 'picture', 'advanced-gutenberg-blocks' ),
      __( 'image', 'advanced-gutenberg-blocks' ),
    ],
    attributes: {
      content: {
        type: 'array',
        source: 'children',
        selector: '.wp-block-advanced-gutenberg-blocks-notice__content',
      },
    },
    edit: props => {

			const { attributes: { content }, className, isSelected, setAttributes } = props

      return (
				<Fragment>

	        <div className="AGB-block-search">
            <p>{logo}</p>
            
            <p class="AGB-block-search__input">
              <TextControl
                type="search"
                placeholder={ __( "Search a picture", 'advanced-gutenberg-blocks' ) }
                //onChange={ value => this.onSearch( value ) }
              />
            </p>
	        </div>

				</Fragment>
      )
    },
    save: props => {

			const { content } = props.attributes

			return (
        <div>

        </div>
      )
    },
  },
)
