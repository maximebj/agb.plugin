const { __ } = wp.i18n
const { registerFormatType, toggleFormat } = wp.richText
const { RichTextToolbarButton } = wp.blockEditor

if( advancedGutenbergBlocksFormats.buttons.includes( 'code' ) ) {

  registerFormatType( 'advanced-gutenberg-blocks/strike-format', {
    title: __( 'Strike Trough', 'advanced-gutenberg-blocks' ),
    tagName: 'del',
    className: null,
    edit: props => {
      
      const { isActive, value, onChange } = props

      return (
        <RichTextToolbarButton
          icon='editor-strikethrough'
          title={ __( 'Strike Trough', 'advanced-gutenberg-blocks' ) }
          isActive={ isActive }
          onClick= { () =>
            onChange( toggleFormat(
              value,
              { type: 'advanced-gutenberg-blocks/strike-format' }
            ) )
          }    
        />
      )
    }
  } )
  
}