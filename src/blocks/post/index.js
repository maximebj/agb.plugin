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
				default: 'Posts',
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
    edit: withAPIData( ( { attributes } ) => {

				return ( attributes.postID ) ? {
					post: `/wp/v2/${this.attributes.postType}/${attributes.postID}`
				} : false

      } ) ( ( { post, focus, attributes, setAttributes } ) => {

				// Default values
				! attributes.showCategory && setAttributes( { showCategory: true } )
				! attributes.showKeywords && setAttributes( { showKeywords: false } )
				! attributes.showAuthor && setAttributes( { showAuthor: true } )

				const onChangePost = post => {
	        setAttributes( { postID: post.id } )
	      }

				const onChangePostType = postType => {
					setAttributes( { postType: postType } )
				}

				const toggleCategory = () => {
	        setAttributes( { showCategory: ! attributes.showCategory } )
	      }

				const toggleKeywords = () => {
	        setAttributes( { showKeywords: ! attributes.showKeywords } )
	      }

				const toggleAuthor = () => {
	        setAttributes( { showAuthor: ! attributes.showAuthor } )
	      }

				const togglePostType = () => {
	        setAttributes( { showAuthor: ! attributes.showPostType } )
	      }

	      return [
	        !! focus && (
	          <Inspector { ...{ onChangePost, onChangePostType, toggleCategory, toggleKeywords, toggleAuthor, togglePostType, attributes } } />
	        )
					,
	        !! attributes.productID ? (
						<Preview { ...{ post, attributes } } />
	        ) : (
	          <p class="gutenblocks-block-message">{ __( 'Search for a post in the inspector' ) }</p>
	        )
	      ]
    	} )
		,
    save: props => {
      return null
    },
  },
)
