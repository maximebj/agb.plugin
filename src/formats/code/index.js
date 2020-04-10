import { __ } from '@wordpress/i18n'
const { Fragment } = wp.element
const { registerFormatType, toggleFormat } = wp.richText
const { RichTextToolbarButton, RichTextShortcut } = wp.blockEditor

const type = 'advanced-gutenberg-blocks/code-format'

if( advancedGutenbergBlocksFormats.buttons.includes( 'code' ) ) {
  
  registerFormatType( type, {
    title: __( 'Code', 'advanced-gutenberg-blocks' ),
    tagName: 'code',
    className: null,
    edit: props => {
      
      const { isActive, value, onChange } = props

      const onToggle = () => onChange( toggleFormat( value, { type } ) )

      return (
        <Fragment>
          <RichTextShortcut
            type='alt'
            character='c'
            onUse={ onToggle }
          />
          <RichTextToolbarButton
            icon='editor-code'
            title={ __( 'Code', 'advanced-gutenberg-blocks' ) }
            isActive={ isActive }
            onClick= { onToggle }    
          />
        </Fragment>
      )
    }
  } )
  
}