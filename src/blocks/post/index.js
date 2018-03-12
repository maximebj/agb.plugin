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

const {
	withAPIData,
} = wp.components

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
      },
			showKeywords: {
        type: 'boolean',
      },
			showAuthor: {
        type: 'boolean',
      },
			showPostType: {
        type: 'boolean',
      },
    },
    edit: props => {

			// Default values
			! props.attributes.showCategory && props.setAttributes( { showCategory: true } )
			! props.attributes.showKeywords && props.setAttributes( { showKeywords: false } )
			! props.attributes.showAuthor && props.setAttributes( { showAuthor: true } )

			const onChangePost = post => {
        props.setAttributes( { postID: post.id } )
      }

			const onChangePostType = postType => {
				props.setAttributes( { postType: postType } )
			}

			const toggleCategory = () => {
        props.setAttributes( { showCategory: ! props.attributes.showCategory } )
      }

			const toggleKeywords = () => {
        props.setAttributes( { showKeywords: ! props.attributes.showKeywords } )
      }

			const toggleAuthor = () => {
        props.setAttributes( { showAuthor: ! props.attributes.showAuthor } )
      }

			const togglePostType = () => {
        props.setAttributes( { showAuthor: ! props.attributes.showPostType } )
      }

      return [
        !! props.focus && (
          <Inspector { ...{ onChangePost, onChangePostType, toggleCategory, toggleKeywords, toggleAuthor, togglePostType, attributes } } />
        )
				,
        !! props.attributes.postID ? (
					<Preview postID={ props.attributes.postID } />
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
