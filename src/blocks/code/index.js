import './style.scss'
import './editor.scss'

import ListControl from '../../components/listcontrol'
import langList from './languages'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { Fragment } = wp.element
const { TextControl } = wp.components

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
      },
			language: {
        type: 'string',
        default: 'html',
      },
      file: {
        type: 'string',
        default: '',
      },
    },
    edit: props => {

      const { attributes : { source, language, file }, setAttributes, isSelected } = props

      return (
        <Fragment>
          {/* { isSelected && ( */}
            <div>           
              <div>
                { __('Language:', 'advanced-gutenberg-blocks' ) }
                <ListControl 
                  value={ language }
                  onChange={ language => setAttributes( { language } ) }
                  options={ langList }
                />
              </div>
              <div>
                { __('File name:', 'advanced-gutenberg-blocks' ) }
                <TextControl
                  type="text"
                  onChange={ file => setAttributes( { file } ) }
                  placeHolder={ __(' /my/optionnal/file/name.ext', 'advanced-gutenberg-blocks' ) }
                  value={ file }
                />
              </div>
            </div>
          {/* ) } */}
          <div className="wp-block-advanced-gutenberg-blocks-code">
            <header className="wp-block-advanced-gutenberg-blocks-code__header">
              <div className="wp-block-advanced-gutenberg-blocks-code__lang is-lang-js">
                {language}
              </div>
              <div className="wp-block-advanced-gutenberg-blocks-code__file">
                {file}
              </div>
            </header>
            <pre className="wp-block-advanced-gutenberg-blocks-code__source">
              code
            </pre>
          </div>
        </Fragment>
      )
    },
    save: () => {
      return null
    },
  },
)
