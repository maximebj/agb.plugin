import './style.scss'
import './editor.scss'

import { __ } from '@wordpress/i18n'
const { registerBlockType } = wp.blocks

export default registerBlockType(
  'advanced-gutenberg-blocks/ad',
  {
    title: __( 'Advertisement', 'advanced-gutenberg-blocks' ),
    description: __( 'Put forward a tips or a warning', 'advanced-gutenberg-blocks' ),
    category: 'agb',
    icon: { background: '#2F313A', foreground: '#DEBB8F', src: 'megaphone' },
    keywords: [
      __( 'ad', 'advanced-gutenberg-blocks' ),
      __( 'advertising', 'advanced-gutenberg-blocks' ),
      __( 'banner', 'advanced-gutenberg-blocks' ),
    ],
		edit: props => {
      return (
        <div className='wp-block-advanced-gutenberg-blocks-ad'>
          { __( 'An ad will be displayed here in front', 'advanced-gutenberg-blocks' ) }
        </div>
      )
    },
    save() {
      return null
    },
	},
)
