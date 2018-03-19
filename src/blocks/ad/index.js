/**
 * BLOCK: Advertisement
 *
 * Display an ad
 */

import './style.scss'
import './editor.scss'

import classnames from 'classnames'

const { __ } = wp.i18n

const {
  registerBlockType,
} = wp.blocks


export default registerBlockType(
  'gutenblocks/ad',
  {
    title: __( 'Advertisement', 'advanced-gutenberg-blocks' ),
    description: __( 'Put forward a tips or a warning', 'advanced-gutenberg-blocks' ),
    category: 'common',
    icon: 'megaphone',
    keywords: [
      __( 'ad', 'advanced-gutenberg-blocks' ),
      __( 'advertising', 'advanced-gutenberg-blocks' ),
      __( 'publicity', 'advanced-gutenberg-blocks' ),
    ],
		edit: props => {
      return (
        <div className='wp-block-gutenblocks-ad'>
          { __( 'An ad will be displayed here in front', 'advanced-gutenberg-blocks' ) }
        </div>
      )
    },
    save() {
      return null
    },
	},
)
