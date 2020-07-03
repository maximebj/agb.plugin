<?php defined( 'ABSPATH' ) || exit; ?>
<div class="wp-block-advanced-gutenberg-blocks-code<?php echo esc_attr($alignment); ?><?php echo esc_attr($customClass); ?>">
  <header class="wp-block-advanced-gutenberg-blocks-code__header">
    <div class="wp-block-advanced-gutenberg-blocks-code__lang is-lang-<?php echo esc_attr($lang_slug); ?>">
      <?php echo esc_html($lang_label); ?>
    </div>
    <div class="wp-block-advanced-gutenberg-blocks-code__file">
      <?php echo esc_html($file); ?>
    </div>
  </header>
  <textarea 
    class="wp-block-advanced-gutenberg-blocks-code__source" 
    name="codemirror-<?php echo esc_attr($rand); ?>" 
    id="codemirror-<?php echo esc_attr($rand); ?>"
  ><?php echo esc_html( $source ); ?></textarea>
  <script>
    CodeMirror.fromTextArea( document.getElementById('codemirror-<?php echo esc_html($rand); ?>'), {
      mode: '<?php echo esc_html($lang_mime) ?: esc_html($lang_mode); ?>',
      readOnly: true,
      theme: '<?php echo esc_html($theme); ?>', 
      lineNumbers: <?php echo ( esc_html($showLines) ) ? 'true' : 'false'; ?>,
      firstLineNumber: <?php echo esc_html($startLine); ?>,
      matchBrackets: true,
      indentUnit: 4,
      tabSize: 4,
      lineWrapping: <?php echo ( esc_html($wrapLines) ) ? 'true' : 'false'; ?>,
    } )<?php echo esc_html($mark_text); ?>; 
  </script>
</div>
