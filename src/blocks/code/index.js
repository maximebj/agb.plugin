import './style.scss'
import './editor.scss'

import Inspector from './inspect'
import Preview from './preview'

import langList from './languages'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { Fragment } = wp.element

export default registerBlockType(
  'advanced-gutenberg-blocks/code',
  {
    title: __( 'Code', 'advanced-gutenberg-blocks' ),
    description: __( 'Syntax highlighting with custom themes for every languages.', 'advanced-gutenberg-blocks' ),
    category: 'agb',
    icon: { background: '#2F313A', foreground: '#DEBB8F', src: 'editor-code' },
    keywords: [
      __( 'highlight', 'advanced-gutenberg-blocks' ),
      __( 'syntax', 'advanced-gutenberg-blocks' ),
    ],
    attributes: {
      source: {
        type: 'array',
        source: 'children',
        selector: '.wp-block-advanced-gutenberg-blocks-code__content',
        default: '',
      },
			language: {
        type: 'string',
        default: langList[0].value,
      },
      file: {
        type: 'string',
        default: '',
      },
      theme: {
        type: 'string',
        default: 'atom-dark-one',
      },
    },
    edit: props => {

      const { attributes, setAttributes } = props
      const { source, language, file, theme } = attributes

      return (
        <Fragment>
          <Inspector { ...{ language, file, theme, setAttributes } } />
          <Preview { ...{ attributes, setAttributes } } />
        </Fragment>
      )
    },
    save: () => {
      return null
    },
  },
)
