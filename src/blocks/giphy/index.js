import './style.scss'
import './editor.scss'

import logo from './logo'

import { debounce } from 'throttle-debounce'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { Fragment } = wp.element
const { TextControl } = wp.components

export default registerBlockType(
  'advanced-gutenberg-blocks/giphy',
  {
    title: __( 'Giphy', 'advanced-gutenberg-blocks' ),
    description: __( 'Search and insert a GIF from Giphy', 'advanced-gutenberg-blocks' ),
    category: 'agb',
    icon: { background: '#2F313A', foreground: '#DEBB8F', src: 'images-alt2' },
    keywords: [
      __( 'gif', 'advanced-gutenberg-blocks' ),
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
                placeholder={ __( "Search a GIF", 'advanced-gutenberg-blocks' ) }
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
