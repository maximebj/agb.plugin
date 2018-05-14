import './style.scss'
import './editor.scss'

import Inspector from './inspect'
import Preview from './preview'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { Fragment } = wp.element

export default registerBlockType(
  'advanced-gutenberg-blocks/plugin',
  {
    title: __( 'Plugin', 'advanced-gutenberg-blocks' ),
    description: __( 'Display informations from a WordPress plugin', 'advanced-gutenberg-blocks' ),
    category: 'common',
    icon: 'admin-plugins',
    keywords: [
      'plugin',
    ],
    attributes: {
      title: {
        source: 'text',
        selector: '.wp-block-advanced-gutenberg-blocks-plugin__title a',
      },
      description: {
        source: 'text',
        selector: '.wp-block-advanced-gutenberg-blocks-plugin__desc',
      },
      image: {
        source: 'attribute',
        selector: '.wp-block-advanced-gutenberg-blocks-plugin__picture img',
        attribute: 'src',
      },
      activeInstalls: {
        source: 'attribute',
        selector: '.wp-block-advanced-gutenberg-blocks-plugin__active',
				attribute: 'data-installs',
      },
      downloadLink: {
        source: 'attribute',
        selector: '.wp-block-advanced-gutenberg-blocks-plugin__download a',
        attribute: 'href',
      },
      rating: {
        source: 'attribute',
        selector: '.wp-block-advanced-gutenberg-blocks-plugin__stars',
        attribute: 'data-note',
      },
			numRatings: {
				souce: 'text',
				selector: '.wp-block-advanced-gutenberg-blocks-plugin__num-rating',
			},
			author: {
				source: 'text',
				selector: '.wp-block-advanced-gutenberg-blocks-plugin__author a',
			},
			homepage: {
				source: 'attribute',
				selector: '.wp-block-advanced-gutenberg-blocks-plugin__author a',
				attribute: 'href',
			},
    },
    edit: props => {

			const { attributes, setAttributes } = props
			const { title } = attributes

      return (
        <Fragment>
          <Inspector { ...{ attributes, setAttributes } } />

	        { !! title ? (
	          <Preview { ...{ attributes } } />
	        ) : (
	          <p class="AGB-block-message">{ __( 'Search for a plugin in the inspector', 'advanced-gutenberg-blocks' ) }</p>
	        ) }

				</Fragment>
      )
    },
    save: props => {

			const { attributes } = props

      return (
        <Preview { ...{ attributes } } />
      )
    },
  },
)
