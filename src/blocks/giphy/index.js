import './style.scss'
import './editor.scss'

import SearchGiphy from './search'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

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
    attributes: {},

    edit: props => {

      const { clientId, insertBlocksAfter } = props
      
      // If API key is not yet provided
      if ( typeof advancedGutenbergBlocksGiphy.error !== "undefined" ) {
        return (
          <p class="AGB-block-message">
            {__( "⚠️ You need to provide an API key in ", 'advanced-gutenberg-blocks' )}
            <a
              target='_blank'
              href="/wp-admin/admin.php?page=advanced-gutenberg-blocks-manager&modal=advanced-gutenberg-blocks-giphy"
            >
              {__( "Blocks > Manage Blocks > Giphy", 'advanced-gutenberg-blocks' )}
            </a>
          </p>
        )
      }

      return (
        <SearchGiphy
          clientId={clientId}
          insertBlocksAfter={insertBlocksAfter}
        />
      )
    },
    save: () => {
      return null
    },
  },
)
