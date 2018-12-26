<div class="wp-block-advanced-gutenberg-blocks-code<?php echo $align_class; ?>">
  <header class="wp-block-advanced-gutenberg-blocks-code__header">
    <div class="wp-block-advanced-gutenberg-blocks-code__lang is-lang-js is-lang-<?php  echo $attributes['language']; ?>">
      <?php  echo $lang_label; ?>
    </div>
    <div class="wp-block-advanced-gutenberg-blocks-code__file">
      <?php  echo $attributes['file']; ?>
    </div>
  </header>
  <textarea 
    class="wp-block-advanced-gutenberg-blocks-code__source" 
    name="codemirror-<?php echo $rand; ?>" 
    id="codemirror-<?php echo $rand; ?>"
  ><?php echo htmlspecialchars_decode( $attributes['source'] ); ?></textarea>
  <script>
    CodeMirror.fromTextArea( document.getElementById('codemirror-<?php echo $rand; ?>'), {
      mode:  'php',
      readOnly: true,
      theme: '<?php echo $theme; ?>', 
      lineNumbers: <?php echo $attributes['showLines']; ?>,
      firstLineNumber: <?php echo $attributes['startLine']; ?>,
      matchBrackets: true,
      indentUnit: 4,
      tabSize: 4,
    });
  </script>
</div>