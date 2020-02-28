const { __ } = wp.i18n
const { registerFormatType } = wp.richText
const { RichTextToolbarButton } = wp.blockEditor

const type = 'advanced-gutenberg-bloc/remove-format'

if( advancedGutenbergBlocksFormats.buttons.includes( 'remove' ) ) {

  registerFormatType( type, {
    title: __( 'Remove formatting', 'advanced-gutenberg-blocks' ),
    tagName: 'span',
    className: 'remove',
    edit: props => {
      
      const { value, onChange } = props

      return (
        <RichTextToolbarButton
          icon='editor-removeformatting'
          title={ __( 'Remove formatting', 'advanced-gutenberg-blocks' ) }
          onClick= { () => onChange( { ...value, formats: Array(value.formats.length) } ) }    
        />
      )
    }
  } )
  
}