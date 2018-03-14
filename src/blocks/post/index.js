/**
 * BLOCK: Post
 *
 * Display a pretty post link (from any post type)
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
  'gutenblocks/post',
  {
    title: __( 'Post' ),
    description: __( 'Display a pretty post link (from any post type)' ),
    category: 'common',
    icon: 'admin-post',
    keywords: [
      __( 'link' ),
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
          <p class="gutenblocks-block-message">{ __( 'Search for a post in the inspector' ) }</p>
        )
      ]
  	},
    save: props => {
      return null
    },
  },
)
