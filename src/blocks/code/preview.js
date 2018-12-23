const { __ } = wp.i18n
const { Component } = wp.element

export default class Preview extends Component {

  render() {

    const { attributes, setAttributes } = this.props
    const { source, theme, language, file } = attributes

    return (
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
          {source}
        </pre>
      </div>
    )
  }
}
