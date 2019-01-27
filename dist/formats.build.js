( function( wp ) {
  
  if( advancedGutenbergBlocksFormats.buttons.includes('color') ) {
    wp.richText.registerFormatType(
      'advanced-gutenberg-blocks/color-format', {
      title: wp.i18n.__( 'Color', 'advanced-gutenberg-blocks' ),
      tagName: 'span',
      className: null,
      edit: function( props ) {
        return wp.element.createElement(
          wp.editor.RichTextToolbarButton, {
            icon: 'admin-appearance',
            title: wp.i18n.__( 'Color', 'advanced-gutenberg-blocks' ),
            onClick: function() {
              props.onChange( wp.richText.toggleFormat(
                props.value,
                { type: 'advanced-gutenberg-blocks/color-format' }
              ) );
            },
            isActive: props.isActive,
          }
        );
      }
    } );  
  }

  if( advancedGutenbergBlocksFormats.buttons.includes('code') ) {
    wp.richText.registerFormatType(
      'advanced-gutenberg-blocks/code-format', {
      title: wp.i18n.__( 'Code', 'advanced-gutenberg-blocks' ),
      tagName: 'code',
      className: null,
      edit: function( props ) {
        return wp.element.createElement(
          wp.editor.RichTextToolbarButton, {
            icon: 'editor-code',
            title: wp.i18n.__( 'Code', 'advanced-gutenberg-blocks' ),
            onClick: function() {
              props.onChange( wp.richText.toggleFormat(
                props.value,
                { type: 'advanced-gutenberg-blocks/code-format' }
              ) );
            },
            isActive: props.isActive,
          }
        );
      }
    } );
  }

  if( advancedGutenbergBlocksFormats.buttons.includes('strike') ) {
    wp.richText.registerFormatType(
      'advanced-gutenberg-blocks/strike-format', {
      title: wp.i18n.__( 'Strike Trough', 'advanced-gutenberg-blocks' ),
      tagName: 'del',
      className: null,
      edit: function( props ) {
        return wp.element.createElement(
          wp.editor.RichTextToolbarButton, {
            icon: 'editor-strikethrough',
            title: wp.i18n.__( 'Strike Trough', 'advanced-gutenberg-blocks' ),
            onClick: function() {
              props.onChange( wp.richText.toggleFormat(
                props.value,
                { type: 'advanced-gutenberg-blocks/strike-format' }
              ) );
            },
            isActive: props.isActive,
          }
        );
      }
    } );
  }

  if( advancedGutenbergBlocksFormats.buttons.includes('superscript') ) {
    wp.richText.registerFormatType(
      'advanced-gutenberg-blocks/sup-format', {
      title: wp.i18n.__( 'Superscript', 'advanced-gutenberg-blocks' ),
      tagName: 'sup',
      className: null,
      edit: function( props ) {
        return wp.element.createElement(
          wp.editor.RichTextToolbarButton, {
            icon: 'editor-textcolor',
            title: wp.i18n.__( 'Superscript', 'advanced-gutenberg-blocks' ),
            onClick: function() {
              props.onChange( wp.richText.toggleFormat(
                props.value,
                { type: 'advanced-gutenberg-blocks/sup-format' }
              ) );
            },
            isActive: props.isActive,
          }
        );
      }
    } );
  }

  if( advancedGutenbergBlocksFormats.buttons.includes('subscript') ) {
    wp.richText.registerFormatType(
      'advanced-gutenberg-blocks/sub-format', {
      title: wp.i18n.__( 'Subrscript', 'advanced-gutenberg-blocks' ),
      tagName: 'sub',
      className: null,
      edit: function( props ) {
        return wp.element.createElement(
          wp.editor.RichTextToolbarButton, {
            icon: 'editor-textcolor',
            title: wp.i18n.__( 'Subscript', 'advanced-gutenberg-blocks' ),
            onClick: function() {
              props.onChange( wp.richText.toggleFormat(
                props.value,
                { type: 'advanced-gutenberg-blocks/sub-format' }
              ) );
            },
            isActive: props.isActive,
          }
        );
      }
    } );
  }

  if( advancedGutenbergBlocksFormats.buttons.includes('remove') ) {
    wp.richText.registerFormatType(
      'advanced-gutenberg-blocks/remove-format', {
      title: wp.i18n.__( 'Remove formatting', 'advanced-gutenberg-blocks' ),
      tagName: '<span>',
      className: null,
      edit: function( props ) {
        return wp.element.createElement(
          wp.editor.RichTextToolbarButton, {
            icon: 'editor-removeformatting',
            title: wp.i18n.__( 'Remove formatting', 'advanced-gutenberg-blocks' ),
            onClick: function() {
              props.onChange( wp.richText.removeFormat(
                props.value,
                { type: 'advanced-gutenberg-blocks/remove-format' }
              ) );
            },
            isActive: props.isActive,
          }
        );
      }
    } );
  }

} )( window.wp );