import './style.scss'
import './editor.scss'

import SearchUnsplash from './search'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

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
    attributes: {},

    edit: props => {

      const { clientId, insertBlocksAfter } = props
      
      // If API key is not yet provided
      if ( typeof advancedGutenbergBlocksUnsplash.error !== "undefined" ) {
        return (
          <p class="AGB-block-message">
            {__( "⚠️ You need to provide an API key in ", 'advanced-gutenberg-blocks' )}
            <a
              target='_blank'
              href={ `${advancedGutenbergBlocksGlobals.adminurl}admin.php?page=advanced-gutenberg-blocks-manager&modal=advanced-gutenberg-blocks-unsplash` }
            >
              {__( "Blocks > Manage Blocks > Unsplash", 'advanced-gutenberg-blocks' )}
            </a>
          </p>
        )
      }

      return (
				<SearchUnsplash
          clientId={clientId}
          insertBlocksAfter={insertBlocksAfter}
        />
      )
    },
    save: props => {
      return null
    },
  },
)
