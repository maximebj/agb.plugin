import './style.scss'
import './editor.scss'

import classnames from 'classnames'

import URLFetcher from './urlfetcher'
import Preview from './preview'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

export default registerBlockType(
  'gutenblocks/card',
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
        selector: '.wp-block-gutenblocks-card__title',
				default: '',
      },
			description: {
				source: 'text',
        selector: '.wp-block-gutenblocks-card__description',
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
        selector: '.wp-block-gutenblocks-card__url',
      },
    },
		edit: props => {

			const onURLFetched = site => {

				props.setAttributes( {
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
						!! props.attributes.title == '' ? (
		          <URLFetcher onURLFetched={ onURLFetched } />
		        ) : (
							<Preview { ...props } />
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
