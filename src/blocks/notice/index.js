import './style.scss'
import './editor.scss'

import classnames from 'classnames'

import Tools from './tools'

const { __ } = wp.i18n

const {
  registerBlockType,
  RichText,
} = wp.blocks

const { Fragment } = wp.element

const types = [
  {
		slug: 'advice',
		title: __( 'Advice', 'advanced-gutenberg-blocks' ),
		icon: 'thumbs-up',
	},
	{
		slug: 'info',
		title: __( 'Information', 'advanced-gutenberg-blocks' ),
		icon: 'info',
	},
	{
		slug: 'warning',
		title: __( 'Warning', 'advanced-gutenberg-blocks' ),
		icon: 'warning',
	},
	{
		slug: 'avoid',
		title: __( 'Avoid', 'advanced-gutenberg-blocks' ),
		icon: 'dismiss',
	},
]

export default registerBlockType(
  'advanced-gutenberg-blocks/notice',
  {
    title: __( 'Notice', 'advanced-gutenberg-blocks' ),
    description: __( 'Put forward a tips or a warning', 'advanced-gutenberg-blocks' ),
    category: 'common',
    icon: 'warning',
    keywords: [
      __( 'warning', 'advanced-gutenberg-blocks' ),
      __( 'information', 'advanced-gutenberg-blocks' ),
      __( 'tips', 'advanced-gutenberg-blocks' ),
    ],
    attributes: {
      type: {
        source: 'attribute',
        selector: '.wp-block-advanced-gutenberg-blocks-notice',
        attribute: 'data-type',
        default: types[0].slug,
      },
			title: {
        source: 'text',
        type: 'string',
        selector: '.wp-block-advanced-gutenberg-blocks-notice__title',
				default: types[0].title,
      },
      content: {
        type: 'array',
        source: 'children',
        selector: '.wp-block-advanced-gutenberg-blocks-notice__content',
      },
    },
    edit: props => {

			const { attributes: { type, content, title }, className, isSelected, setAttributes } = props

      return (
				<Fragment>

					<Tools { ...{ type, types, setAttributes } } />

	        <div className={ classnames( className, `${className}--${type}` ) }>

						<RichText
	            tagName="p"
	            value={ title }
	            className='wp-block-advanced-gutenberg-blocks-notice__title'
	            onChange={ title => setAttributes( { title } ) }
	  				/>

	          <RichText
	            tagName="p"
	            placeholder={ __( 'Your tip/warning content', 'advanced-gutenberg-blocks' ) }
	            value={ content }
	            className='wp-block-advanced-gutenberg-blocks-notice__content'
	            onChange={ content => setAttributes( { content } ) }
	  				/>
	        </div>

				</Fragment>
      )
    },
    save: props => {

			const { type, title, content } = props.attributes

			return (
        <div className={ `wp-block-advanced-gutenberg-blocks-notice--${ type }` } data-type={ type }>
          <p className='wp-block-advanced-gutenberg-blocks-notice__title'>{ title }</p>
          <p className='wp-block-advanced-gutenberg-blocks-notice__content'>{ content }</p>
        </div>
      )
    },
  },
)
