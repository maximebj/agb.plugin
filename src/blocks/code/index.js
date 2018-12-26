import './style.scss'
import './editor.scss'

import Tools from './tools'
import Inspector from './inspect'
import Preview from './preview'

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
        type: 'string',
        default: '',
      },
			language: {
        type: 'string',
        default: advancedGutenbergBlocksCode.languages[0].value,
      },
      file: {
        type: 'string',
        default: '',
      },
      showLines: {
        type: 'boolean',
        default: true,
      },
      startLine: {
        type: 'integer',
        default: 1,
      },
      alignment: {
        type: 'string',
      },
    },
    getEditWrapperProps( attributes ) {
      const { alignment } = attributes;
      if ( [ 'wide', 'full', 'left', 'right' ].indexOf( alignment ) !== -1 ) {
        return { 'data-align': alignment };
      }
    },
    edit: props => {

      const findLabel = ( array, value ) => {
        let entry = _.find( array, { value: value } )
        if( _.isUndefined( entry ) ) {
          return array[0].label
        }
        return entry.label
      }

      const { attributes, setAttributes } = props
      const { language, file, showLines, startLine, alignment } = attributes

      return (
        <Fragment>
          <Tools { ...{ alignment, setAttributes } } />
          <Inspector { ...{ language, file, showLines, startLine, setAttributes, findLabel } } />
          <Preview { ...{ attributes, setAttributes, findLabel } } />
        </Fragment>
      )
    },
    save: () => {
      return null
    },
  },
)
