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
			siteUrl: {
				source: 'text',
        selector: '.wp-block-advanced-gutenberg-blocks-card__url',
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
					siteUrl: site.mainURL,
        } )
			}

      return (
				<div>
					{
						title === '' ? (
		          <URLFetcher { ...{ onURLFetched } } />
		        ) : (
							<Preview { ...attributes } />
	        	)
					}
				</div>
      )
    },
		save: props => {
      return (
        <Preview { ...props } />
      )
    },
	},
)
