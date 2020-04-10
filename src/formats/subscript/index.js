import { __ } from '@wordpress/i18n'
const { Fragment } = wp.element
const { registerFormatType, toggleFormat } = wp.richText
const { RichTextToolbarButton, RichTextShortcut } = wp.blockEditor

import icon from './icon'

const type = 'advanced-gutenberg-blocks/sub-format'

if( advancedGutenbergBlocksFormats.buttons.includes( 'subscript' ) ) {

  registerFormatType( type, {
    title: __( 'Subscript', 'advanced-gutenberg-blocks' ),
    tagName: 'sub',
    className: null,
    edit: props => {
      
      const { isActive, value, onChange } = props

      const onToggle = () => onChange( toggleFormat( value, { type } ) )

      return (
        <Fragment>
          <RichTextShortcut
            type='primary'
            character='.'
            onUse={ onToggle }
          />
          <RichTextToolbarButton
            icon={ icon }
            title={ __( 'Subscript', 'advanced-gutenberg-blocks' ) }
            isActive={ isActive }
            onClick= { onToggle }    
          />
        </Fragment>
      )
    }
  } )
  
}