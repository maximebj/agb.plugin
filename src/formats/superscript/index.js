const { __ } = wp.i18n
const { Fragment } = wp.element
const { registerFormatType, toggleFormat } = wp.richText
const { RichTextToolbarButton, RichTextShortcut } = wp.blockEditor

import icon from './icon'

const type = 'advanced-gutenberg-bloc/sup-format'

if( advancedGutenbergBlocksFormats.buttons.includes( 'superscript' ) ) {

  registerFormatType( type, {
    title: __( 'Superscript', 'advanced-gutenberg-blocks' ),
    tagName: 'sup',
    className: null,
    edit: props => {
      
      const { isActive, value, onChange } = props

      const onToggle = () => onChange( toggleFormat( value, { type } ) )

      return (
        <Fragment>
          <RichTextShortcut
            type='primary'
            character=','
            onUse={ onToggle }
          />
          <RichTextToolbarButton
            icon={ icon }
            title={ __( 'Superscript', 'advanced-gutenberg-blocks' ) }
            isActive={ isActive }
            onClick= { onToggle }    
          />
        </Fragment>
      )
    }
  } )
  
}