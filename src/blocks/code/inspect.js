import React from 'react'
import Select from 'react-select'

const { __ } = wp.i18n
const { Component } = wp.element
const { InspectorControls } = wp.editor
const { PanelBody, TextControl, BaseControl, ToggleControl } = wp.components

export default class Inspector extends Component {

  render() {
    const { file, showLines, startLine, entry, setAttributes } = this.props

    return (
      <InspectorControls>

        <PanelBody title={ __( 'Settings', 'advanced-gutenberg-blocks' ) }>

          <BaseControl
            label={ __('Language', 'advanced-gutenberg-blocks' ) }
          >
            <Select 
              value={ { value: entry.slug, label: entry.label } }
              onChange={ language => setAttributes( { language: language.slug } ) }
              options={ advancedGutenbergBlocksCode.languages }
              className="AGB-react-select"
              classNamePrefix="AGB-react-select"
            />
          </BaseControl>
          
          <TextControl
            type="text"
            label={ __('File name', 'advanced-gutenberg-blocks' ) }
            onChange={ file => setAttributes( { file } ) }
            placeHolder={ __(' /my/optionnal/file/name.ext', 'advanced-gutenberg-blocks' ) }
            value={ file }
          />

          <ToggleControl
            label={ __( 'Show lines numbers', 'advanced-gutenberg-blocks' ) }
            checked={ showLines }
            onChange={ () => setAttributes( { showLines: ! showLines } ) }
          />

          { showLines && (
            <TextControl
              type="number"
              label={ __('Start line', 'advanced-gutenberg-blocks' ) }
              onChange={ startLine => setAttributes( { startLine: parseInt(startLine) } ) }
              value={ startLine }
              className='components-text-control__input--small'
              min="1"
            />
          ) }
        </PanelBody>

      </InspectorControls>
    )
  }
}
