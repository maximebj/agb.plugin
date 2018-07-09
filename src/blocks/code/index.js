import './style.scss'
import './editor.scss'

import classnames from 'classnames'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { RichText } = wp.editor
const { Fragment } = wp.element

export default registerBlockType(
  'advanced-gutenberg-blocks/code',
  {
    title: __( 'Code snippet', 'advanced-gutenberg-blocks' ),
    description: __( 'Display ', 'advanced-gutenberg-blocks' ),
    category: 'common',
    icon: { background: '#D56561', foreground: "#fff", src: 'editor-code' },
    keywords: [],
    attributes: {
			lang: {
        source: 'text',
        type: 'string',
        selector: '.wp-block-advanced-gutenberg-blocks-code__lang',
      },
      code: {
        type: 'array',
        source: 'children',
        selector: '.wp-block-advanced-gutenberg-blocks-code__source',
      },
    },
    edit: props => {

			const { attributes: { lang, code }, className, isSelected, setAttributes } = props


      return (
				<Fragment>

	        <div className={ className }>

	        </div>

				</Fragment>
      )
    },
    save: props => {

			const { type, title, content } = props.attributes

			return (
        <div className={ `wp-block-advanced-gutenberg-blocks-notice--${ type }` }>
        </div>
      )
    },
  },
)
