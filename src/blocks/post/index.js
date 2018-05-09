import './style.scss'
import './editor.scss'

import Inspector from './inspect'
import Preview from './preview'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

export default registerBlockType(
  'advanced-gutenberg-blocks/post',
  {
    title: __( 'Post', 'advanced-gutenberg-blocks' ),
    description: __( 'Display a pretty post link (from any post type)', 'advanced-gutenberg-blocks' ),
    category: 'common',
    icon: 'admin-post',
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
				default: 'posts',
			},
			showCategory: {
        type: 'boolean',
				default: true,
      },
			showKeywords: {
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

			const onChangePost = post => {
        props.setAttributes( { postID: post.id } )
      }

			const onChangePostType = postType => {
				props.setAttributes( { postType: postType } )
			}

			const toggleImage = () => {
        props.setAttributes( { showImage: ! props.attributes.showImage } )
      }

			const toggleCategory = () => {
        props.setAttributes( { showCategory: ! props.attributes.showCategory } )
      }

			const toggleAuthor = () => {
        props.setAttributes( { showAuthor: ! props.attributes.showAuthor } )
      }

      return [
        !! props.focus && (
          <Inspector { ...{ onChangePost, onChangePostType, toggleCategory, toggleAuthor, toggleImage, ...props } } />
        )
				,
        !! props.attributes.postID ? (
					<Preview { ...props } />
        ) : (
          <p class="advanced-gutenberg-blocks-block-message">{ __( 'Search for a post in the inspector', 'advanced-gutenberg-blocks' ) }</p>
        )
      ]
  	},
    save: props => {
      return null
    },
  },
)
