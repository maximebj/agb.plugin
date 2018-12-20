import './style.scss'
import './editor.scss'

import logo from './logo'

import { debounce } from 'throttle-debounce'

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
      
      // If API key is not yet provided
      if ( typeof advancedGutenbergBlocksUnsplash.error !== "undefined" ) {
        return (
          <p class="AGB-block-message">
            {__( "⚠️ You need to provide an API key in ", 'advanced-gutenberg-blocks' )}
            <a
              target='_blank'
              href="/wp-admin/admin.php?page=advanced-gutenberg-blocks-manager&modal=advanced-gutenberg-blocks-unsplash"
            >
              {__( "Blocks > Manage Blocks > Unsplash", 'advanced-gutenberg-blocks' )}
            </a>
          </p>
        )
      }

      return (
				<Fragment>

	        <div className="AGB-block-search">
            <p className="AGB-block-search__logo">{logo}</p>
                  
            <TextControl
              type="search"
              className="AGB-block-search__input"
              placeholder={ __( "Search a picture", 'advanced-gutenberg-blocks' ) }
              //onChange={ value => this.onSearch( value ) }
            />        
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
