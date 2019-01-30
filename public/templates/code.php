<div class="wp-block-advanced-gutenberg-blocks-code<?php echo $alignment; ?>">
  <header class="wp-block-advanced-gutenberg-blocks-code__header">
    <div class="wp-block-advanced-gutenberg-blocks-code__lang is-lang-<?php echo $lang_slug; ?>">
      <?php echo $lang_label; ?>
    </div>
    <div class="wp-block-advanced-gutenberg-blocks-code__file">
      <?php echo $file; ?>
    </div>
  </header>
  <textarea 
    class="wp-block-advanced-gutenberg-blocks-code__source" 
    name="codemirror-<?php echo $rand; ?>" 
    id="codemirror-<?php echo $rand; ?>"
  ><?php echo esc_html( $source ); ?></textarea>
  <script>
    CodeMirror.fromTextArea( document.getElementById('codemirror-<?php echo $rand; ?>'), {
      mode: '<?php echo $lang_mode; ?>',
      readOnly: true,
      theme: '<?php echo $theme; ?>', 
      lineNumbers: <?php echo ( $showLines ) ? 'true' : 'false'; ?>,
      firstLineNumber: <?php echo $startLine; ?>,
      matchBrackets: true,
      indentUnit: 4,
      tabSize: 4,
      wrapLine: <?php echo ( $wrapLines ) ? 'true' : 'false'; ?>,
    } )<?php echo $mark_text; ?>; 
  </script>
</div>
