import './style.scss'
import './editor.scss'

import classnames from 'classnames'

import Inspector from './inspect'
import Tools from './tools'
import icon from './icons'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { RichText } = wp.editor
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
    category: 'agb',
    icon: { background: '#2F313A', foreground: '#DEBB8F', src: 'warning' },
    keywords: [
      __( 'warning', 'advanced-gutenberg-blocks' ),
      __( 'information', 'advanced-gutenberg-blocks' ),
      __( 'tips', 'advanced-gutenberg-blocks' ),
    ],
    styles: [
      {
        name: 'default',
        label: __( 'Top Line', 'advanced-gutenberg-blocks' ),
        isDefault: true
      },
      {
        name: 'full',
        label: __( 'Full', 'advanced-gutenberg-blocks' )
      },
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
      hasIcon: {
        type: 'boolean',
        default: false,
      },
      content: {
        type: 'array',
        source: 'children',
        selector: '.wp-block-advanced-gutenberg-blocks-notice__content',
      },
    },
    edit: props => {

			const { attributes: { type, content, title, hasIcon }, className, setAttributes } = props

      return (
				<Fragment>

          <Inspector { ...{ hasIcon, setAttributes } } />
					<Tools { ...{ type, types, setAttributes } } />

	        <div className={ classnames( className, `is-variation-${type}`, hasIcon && 'has-icon' ) }>

            { hasIcon && icon[type] }

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
              keepPlaceholderOnFocus="true"
	  				/>
	        </div>

				</Fragment>
      )
    },
    save: props => {

			const { type, title, content, hasIcon } = props.attributes

			return (
        <div className={ classnames('wp-block-advanced-gutenberg-blocks-notice',  `is-variation-${ type }`, hasIcon && 'has-icon' ) } data-type={ type }>
          <p className='wp-block-advanced-gutenberg-blocks-notice__title'>{ title }</p>
          <p className='wp-block-advanced-gutenberg-blocks-notice__content'>{ content }</p>
        </div>
      )
    },
    deprecated: [
      {
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

        save: props => {
        
          const { type, title, content } = props.attributes
    
          return (
            <div className={ `wp-block-advanced-gutenberg-blocks-notice--${ type }` } data-type={ type }>
              <p className='wp-block-advanced-gutenberg-blocks-notice__title'>{ title }</p>
              <p className='wp-block-advanced-gutenberg-blocks-notice__content'>{ content }</p>
            </div>
          )
        }
      }
    ]
  }
)
