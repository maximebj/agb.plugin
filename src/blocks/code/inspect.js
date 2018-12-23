import React from 'react'
import Select from 'react-select'

import langList from './languages'
import themeList from './themelist'

const { __ } = wp.i18n
const { Component } = wp.element
const { InspectorControls } = wp.editor
const { PanelBody, TextControl, BaseControl } = wp.components

export default class Inspector extends Component {

  findLabel = (array, value) => {
    const entry = _.find( array, { value: value } )
    console.log( entry.label )
    return entry.label
  }

  render() {
    const { language, file, theme, setAttributes } = this.props

    console.log( this.findLabel(theme, themeList) )

    return (
      <InspectorControls>

        <PanelBody title={ __( 'Settings', 'advanced-gutenberg-blocks' ) }>

          <BaseControl
            label={ __('Language:', 'advanced-gutenberg-blocks' ) }
          >
            <Select 
              value={ { value: language, label: language ) } }
              onChange={ language => setAttributes( { language: language.value } ) }
              options={ langList }
              className="AGB-react-select"
              classNamePrefix="AGB-react-select"
            />
          </BaseControl>
          
          <TextControl
            type="text"
            label={ __('File name:', 'advanced-gutenberg-blocks' ) }
            onChange={ file => setAttributes( { file } ) }
            placeHolder={ __(' /my/optionnal/file/name.ext', 'advanced-gutenberg-blocks' ) }
            value={ file }
          />

          <BaseControl
            label={ __('Theme:', 'advanced-gutenberg-blocks' ) }
          >
            <Select 
              value={ { value: theme, label: theme } }
              onChange={ theme => setAttributes( { theme: theme.value } ) }
              options={ themeList }
              className="AGB-react-select"
              classNamePrefix="AGB-react-select"
            />
          </BaseControl>
        </PanelBody>

      </InspectorControls>
    )
  }
}
