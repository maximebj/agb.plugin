import './style.scss'
import './editor.scss'

import Tools from './tools'
import Inspector from './inspect'
import Preview from './preview'

import { __ } from '@wordpress/i18n'
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
      language: {
        type: 'string',
        default: '',
      },
      file: {
        type: 'string',
        default: '',
      },
      source: {
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
      wrapLines: {
        type: 'boolean',
        default: true,
      },
      highlightStart: {
        type: 'string',
      },
      highlightEnd: {
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

      const findEntry = () => {
        let entry = _.find( advancedGutenbergBlocksCode.languages, { slug: language } )
        if( _.isUndefined( entry ) ) {
          return advancedGutenbergBlocksCode.languages[0]
        }
        return entry
      }

      const { attributes, setAttributes } = props
      const { language, file, showLines, startLine, wrapLines, alignment, highlightStart, highlightEnd } = attributes

      const entry = findEntry()

      // Force set a language in attributes object
      if( language == "" ) { setAttributes( { 'language': advancedGutenbergBlocksCode.languages[0].slug } ) }
  
      return (
        <Fragment>
          <Tools { ...{ alignment, setAttributes } } />
          <Inspector { ...{ file, showLines, startLine, wrapLines, highlightStart, highlightEnd, setAttributes, entry } } />
          <Preview { ...{ attributes, setAttributes, entry } } />
        </Fragment>
      )
    },
    save: () => {
      return null
    },
  },
)
