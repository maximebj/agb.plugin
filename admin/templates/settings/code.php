<?php defined( 'ABSPATH' ) || exit; ?>
<div class="AGB-form__setting">
  <div class="AGB-form__label">
    <label for="advanced-gutenberg-blocks-bloc-theme"><?php esc_html__( 'Theme', 'advanced-gutenberg-blocks' ); ?></label>
  </div>

  <div class="AGB-form__field">
    <select name="advanced-gutenberg-blocks-code-theme">
      <?php echo esc_html($select_html); ?>
    </select>
  </div>
</div>

<p class="AGB-form__help"><?php esc_html__( 'What does it look like? <a href="https://codemirror.net/demo/theme.html" target="_blank">Find it out here</a>. ', 'advanced-gutenberg-blocks' ); ?></p>