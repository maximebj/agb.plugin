import React from 'react'
import Select from 'react-select'

import { __ } from '@wordpress/i18n'
const { Component } = wp.element
const { InspectorControls } = wp.blockEditor
const { PanelBody, TextControl, BaseControl, ToggleControl } = wp.components

export default class Inspector extends Component {

  render() {
    const { file, showLines, startLine, wrapLines, highlightStart, highlightEnd, entry, setAttributes } = this.props

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
            label={ __( 'Auto wrap long lines', 'advanced-gutenberg-blocks' ) }
            checked={ wrapLines }
            onChange={ () => setAttributes( { wrapLines: ! wrapLines } ) }
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

          <div class="AGB-2cols">
            <div>
              <TextControl
                type="number"
                label={ __('Highlight Lines', 'advanced-gutenberg-blocks' ) }
                onChange={ highlightStart => setAttributes( { highlightStart } ) }
                placeHolder={ __('Start line', 'advanced-gutenberg-blocks' ) }
                value={ highlightStart }
                min="1"
              />
            </div>
            <div>
            <TextControl
              type="number"
              label="&nbsp;"
              onChange={ highlightEnd => setAttributes( { highlightEnd } ) }
              placeHolder={ __('End line', 'advanced-gutenberg-blocks' ) }
              value={ highlightEnd }
              min="1"
            />
            </div>
          </div>
        </PanelBody>

      </InspectorControls>
    )
  }
}
