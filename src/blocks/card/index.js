/**
 * BLOCK: Link Preview
 *
 * Display a site link preview
 */

import './style.scss';
import './editor.scss';

import classnames from 'classnames'

import URLFetcher from './urlfetcher'
import Preview from './preview'

const { __ } = wp.i18n;

const {
  registerBlockType,
} = wp.blocks;

export default registerBlockType(
  'gutenblocks/card',
  {
    title: __( 'Website card preview' ),
    description: __( 'Turn a simple url in a pretty card preview' ),
    category: 'common',
    icon: 'admin-links',
    keywords: [
      __( 'url' ),
      __( 'link' ),
    ],
		attributes: {
			title: {
				source: 'text',
        selector: '.wp-block-gutenblocks-linkpreview__title',
				default: '',
      },
			description: {
				source: 'text',
        selector: '.wp-block-gutenblocks-linkpreview__description',
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
        selector: '.wp-block-gutenblocks-linkpreview__url',
      },
    },
		edit: props => {

			const onURLFetched = (site) => {

				props.setAttributes( {
          title: site.title,
          description: site.description,
          image: site.image,
          url: site.url,
					siteUrl: getSiteURL(site.url),
        } )
			}

			const getSiteURL = url => {

				const parts = url.split('/')
				return parts[0]+'//'+parts[2]
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
);
