/**
 * BLOCK: Plugin
 *
 * Display informations from a WordPress plugin
 */

import './style.scss'
import './editor.scss'

import Inspector from './inspect'
import Preview from './preview'

const {
  registerBlockType,
} = wp.blocks

const { __ } = wp.i18n

export default registerBlockType(
  'gutenblocks/plugin',
  {
    title: __( 'Plugin' ),
    description: __( 'Display informations from a WordPress plugin' ),
    category: 'common',
    icon: 'admin-plugins',
    keywords: [
      'plugin',
    ],
    attributes: {
      title: {
        source: 'text',
        selector: '.wp-block-gutenblocks-plugin__title a',
      },
      description: {
        source: 'text',
        selector: '.wp-block-gutenblocks-plugin__desc',
      },
      image: {
        source: 'attribute',
        selector: '.wp-block-gutenblocks-plugin__picture img',
        attribute: 'src',
      },
      activeInstalls: {
        source: 'attribute',
        selector: '.wp-block-gutenblocks-plugin__active',
				attribute: 'data-installs',
      },
      downloadLink: {
        source: 'attribute',
        selector: '.wp-block-gutenblocks-plugin__download a',
        attribute: 'href',
      },
      rating: {
        source: 'attribute',
        selector: '.wp-block-gutenblocks-plugin__stars',
        attribute: 'data-note',
      },
			numRatings: {
				souce: 'text',
				selector: '.wp-block-gutenblocks-plugin__num-rating',
			},
			author: {
				source: 'text',
				selector: '.wp-block-gutenblocks-plugin__author a',
			},
			homepage: {
				source: 'attribute',
				selector: '.wp-block-gutenblocks-plugin__author a',
				attribute: 'href',
			},
    },
    edit: props => {

      const onChangePlugin = (plugin) => {
        props.setAttributes( {
          title: plugin.name,
          description: plugin.short_description,
          image: defineImage(plugin.icons),
          downloadLink: `https://fr.wordpress.org/plugins/${plugin.slug}`,
          activeInstalls: plugin.active_installs,
          rating: plugin.rating,
					author: plugin.author,
					homepage: plugin.homepage,
					numRatings: plugin.num_ratings,
        } )
      }

      const defineImage = (icons) => {
        if (icons['2x']) {
          return icons['2x']
        } else if(icons['1x']) {
          return icons['1x']
        } else {
          return icons.default
        }
      }

      return [
        !! props.focus && (
          <Inspector onChangePlugin={onChangePlugin} />
        )
				,
        !! props.attributes.title ? (
          <Preview {...props} />
        ) : (
          <p class="gutenblocks-block-message">{ __( 'Search for a plugin in the inspector' ) }</p>
        )
      ]
    },
    save: props => {
      return (
        <Preview {...props} />
      )
    },
  },
)
