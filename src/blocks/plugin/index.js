import './style.scss'
import './editor.scss'

import Inspector from './inspect'
import Preview from './preview'

import { __ } from '@wordpress/i18n'
const { registerBlockType } = wp.blocks
const { Fragment } = wp.element

export default registerBlockType(
  'advanced-gutenberg-blocks/plugin',
  {
    title: __( 'Plugin', 'advanced-gutenberg-blocks' ),
    description: __( 'Display informations from a WordPress plugin', 'advanced-gutenberg-blocks' ),
    category: 'agb',
    icon: { background: '#2F313A', foreground: '#DEBB8F', src: 'admin-plugins' },
    keywords: [
      'plugin',
    ],
    attributes: {
			slug: {
				type: 'string',
				default: false,
			},
    },
    edit: props => {

			const { attributes: { slug }, setAttributes } = props

      return (
        <Fragment>
          <Inspector { ...{ slug, setAttributes } } />

	        { !! slug ? (
	          <Preview { ...{ slug } } />
	        ) : (
	          <p class="AGB-block-message">{ __( 'Search for a plugin in the inspector', 'advanced-gutenberg-blocks' ) }</p>
	        ) }

				</Fragment>
      )
    },
		save: props => {
			return null
		},
  },
)
