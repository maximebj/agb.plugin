const { __ } = wp.i18n
const { registerFormatType, applyFormat, removeFormat, getActiveFormat } = wp.richText
const { InspectorControls, PanelColorSettings } = wp.editor

if( advancedGutenbergBlocksFormats.buttons.includes( 'color' ) ) {
    
  const type = 'advanced-gutenberg-blocks/color-format'
  
  registerFormatType( type, {
    title: __( 'Selected Text Color', 'advanced-gutenberg-blocks' ),
    tagName: 'span',
    className: 'color',
    attributes: {
      style: 'style'
    },
    edit: props => {
      
      const { isActive, value, onChange } = props

      let activeColor
      let activeBGColor

      if ( isActive ) {
        const activeFormat = getActiveFormat( value, type )
        const style = activeFormat.attributes.style

        activeColor = style.replace( new RegExp(`^color:\\s*`), '' )
        activeBGColor = style.replace( new RegExp(`^background-color:\\s*`), '' )
      }

      return (
        <InspectorControls>
          <PanelColorSettings
            title={ __( 'Selected Text Color', 'advanced-gutenberg-blocks' ) }
            colorSettings={ [
              {
                value: activeColor,
                onChange: ( color ) => {
                  if ( color ) {
                    onChange( applyFormat( value, {
                      type,
                      attributes: {
                        style: `color:${color}`
                      }
                    } ) )
                    return
                  }

                  onChange( removeFormat( value, type ) )
                },
                label: __( 'Text color', 'advanced-gutenberg-blocks' )
              },
              {
                value: activeBGColor,
                onChange: ( color ) => {
                  if ( color ) {
                    onChange( applyFormat( value, {
                      type,
                      attributes: {
                        style: `background-color:${color}`
                      }
                    } ) )
                    return
                  }

                  onChange( removeFormat( value, type ) )
                },
                label: __( 'Background color', 'advanced-gutenberg-blocks' )
              },
            ] }
          />
        </InspectorControls>
      )
    }
  } )
  
}