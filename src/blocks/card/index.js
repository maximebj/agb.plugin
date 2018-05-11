import './style.scss'
import './editor.scss'

import classnames from 'classnames'

import URLFetcher from './urlfetcher'
import Preview from './preview'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

export default registerBlockType(
  'advanced-gutenberg-blocks/card',
  {
    title: __( 'Website card preview', 'advanced-gutenberg-blocks' ),
    description: __( 'Turn a simple url in a pretty card preview', 'advanced-gutenberg-blocks' ),
    category: 'common',
    icon: 'admin-links',
    keywords: [
      __( 'url', 'advanced-gutenberg-blocks' ),
      __( 'link', 'advanced-gutenberg-blocks' ),
    ],
		attributes: {
			title: {
				source: 'text',
        selector: '.wp-block-advanced-gutenberg-blocks-card__title',
				default: '',
      },
			description: {
				source: 'text',
        selector: '.wp-block-advanced-gutenberg-blocks-card__description',
      },
			image: {
        type: 'string',
        source: 'attribute',
        selector: 'img',
        attribute: 'src',
      },
			url: {
        type: 'string',
        source: 'attribute',
        selector: 'a',
        attribute: 'href',
      },
    },
		edit: props => {

			const { attributes, setAttributes } = props
			const { title } = attributes

			const onURLFetched = site => {

				setAttributes( {
          title: site.title,
          description: site.description,
          image: site.image,
          url: site.url,
        } )
			}

			// If API key is not yet provided
			if ( typeof advancedGutenbergBlocksOpenGraph.error !== "undefined" ) {
				return (
					<p class="AGB-block-message">
						{__( "⚠️ You need to provide an API key in ", 'advanced-gutenberg-blocks' )}
						<a
							target='_blank' href="/wp-admin/admin.php?page=advanced-gutenberg-blocks-installed#advanced-gutenberg-blocks-card"
						>
							{__( "Blocks > Installed Blocks > Card Preview", 'advanced-gutenberg-blocks' )}
						</a>
					</p>
				)
			}

      return (
				title === '' ? (
          <URLFetcher
						onChange={ site => onURLFetched( site ) }
					/>
        ) : (
					<Preview { ...{ attributes } } />
      	)
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
