<div class="AGB-form__setting">
  <div class="AGB-form__label is-required">
    <label for="advanced-gutenberg-blocks-unsplash-access-key"><?php _e( 'API Access Key', 'advanced-gutenberg-blocks' ); ?></label>
  </div>

  <div class="AGB-form__field">
    <?php if( current_user_can( 'manage_options' ) ): ?>
      <input type="text" name="advanced-gutenberg-blocks-unsplash-access-key" placeholder="<?php _e( 'Insert your Access Key here', 'advanced-gutenberg-blocks' ); ?>" value="<?php echo get_option( 'advanced-gutenberg-blocks-unsplash-access-key' ); ?>">
    <?php else: ?>
      <input type="text" disabled placeholder="<?php _e( 'This field is only editable by an administrator', 'advanced-gutenberg-blocks' ); ?>">
    <?php endif; ?>
  </div>
</div>

<p class="AGB-form__help"><?php _e( 'The API Access Key is mandatory, you can create an App on the <a href="https://unsplash.com/oauth/applications" target="_blank">Unsplash Developers service</a>. ' ); ?></p>