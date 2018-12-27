import classnames from 'classnames'
import React from 'react'
import CodeMirror from 'react-codemirror'

// Require langs for CodeMirror
advancedGutenbergBlocksCode.languages.map( lang => { 
  require(`codemirror/mode/${lang.mode}/${lang.mode}`)
} )

// Addons
require(`codemirror/addon/edit/matchbrackets`)

const { __ } = wp.i18n
const { Component } = wp.element

export default class Preview extends Component {

  render() {

    const { attributes, setAttributes, entry } = this.props
    const { source, language, file, showLines, startLine, alignment } = attributes
    
    const theme = advancedGutenbergBlocksCode.selectedTheme

    const options = {
      lineNumbers: showLines,
      theme: theme,
      firstLineNumber: startLine,
      mode: entry.mode,
      indentUnit: 4,
      tabSize: 4,
      matchBrackets: true,
    }
  
    return (
      <div className="wp-block-advanced-gutenberg-blocks-code" data-align={ alignment }>
        <link rel='stylesheet' href={ `../wp-content/plugins/advanced-gutenberg-blocks/vendor/codemirror/themes/${theme}.css` }type='text/css' />
        <header className="wp-block-advanced-gutenberg-blocks-code__header">
          <div className={ classnames( 'wp-block-advanced-gutenberg-blocks-code__lang', `is-lang-${language}`) }>
            { entry.label }
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
