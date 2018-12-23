import langList from './languages'

import React from 'react'
import CodeMirror from 'react-codemirror'

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/css/css');
require('codemirror/mode/php/php');

const { __ } = wp.i18n
const { Component } = wp.element

export default class Preview extends Component {

  render() {

    const { attributes, setAttributes, findLabel } = this.props
    const { source, language, file, showLines, startLine, alignment } = attributes
    
    const theme = advancedGutenbergBlocksCode.selectedTheme

    const options = {
      lineNumbers: showLines,
      theme: theme,
      firstLineNumber: startLine,
      mode: language,
      indentUnit: 4,
      tabSize: 4,
		}

    return (
      <div className="wp-block-advanced-gutenberg-blocks-code" dataAlign={ alignment }>
        <link rel='stylesheet' href={ `../wp-content/plugins/advanced-gutenberg-blocks/dist/code-mirror-themes/${theme}.css` }type='text/css' />
        <header className="wp-block-advanced-gutenberg-blocks-code__header">
          <div className="wp-block-advanced-gutenberg-blocks-code__lang is-lang-js">
            {findLabel( langList, language )}
          </div>
          <div className="wp-block-advanced-gutenberg-blocks-code__file">
            {file}
          </div>
        </header>
        
        <CodeMirror 
          value={source} 
          onChange={ source => setAttributes( { source } ) } 
          options={options}
        />
      </div>
    )
  }
}
