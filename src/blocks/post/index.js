import './style.scss'
import './editor.scss'

import Inspector from './inspect'
import Preview from './preview'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { Fragment } = wp.element

export default registerBlockType(
  'advanced-gutenberg-blocks/post',
  {
    title: __( 'Post', 'advanced-gutenberg-blocks' ),
    description: __( 'Display a pretty post link (from any post type)', 'advanced-gutenberg-blocks' ),
    category: 'common',
    icon: { background: '#D56561', foreground: "#fff", src: 'admin-post' },
    keywords: [
      __( 'link', 'advanced-gutenberg-blocks' ),
    ],
    attributes: {
      postID: {
        type: 'string',
				default: false,
      },
      postType: {
        type: 'string',
      },
			showCategory: {
        type: 'boolean',
				default: true,
      },
			showAuthor: {
        type: 'boolean',
				default: true,
      },
			showImage: {
        type: 'boolean',
				default: true,
      },
    },
    edit: props => {

			const { attributes, setAttributes } = props
			const { postID, postType } = attributes

      // Set default values (keep here to save them in html
      ! postType && setAttributes( { postType: 'Post' } )

      return (
				<Fragment>

          <Inspector { ...{ attributes, setAttributes } } />

	        { !! postID ? (
						<Preview { ...{ attributes } } />
	        ) : (
	          <p class="AGB-block-message">{ __( 'Search for a post in the inspector', 'advanced-gutenberg-blocks' ) }</p>
	        ) }

				</Fragment>
      )
  	},
    save: () => {
      return null
    },
  },
)
