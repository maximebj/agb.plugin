	
<div class="AGB-form__setting">
  <div class="AGB-form__label is-required">
    <label for="advanced-gutenberg-blocks-giphy-api-key"><?php _e( 'API Key', 'advanced-gutenberg-blocks' ); ?></label>
  </div>

  <div class="AGB-form__field">
    <?php if( current_user_can( 'manage_options' ) ): ?>
      <input type="text" name="advanced-gutenberg-blocks-giphy-api-key" placeholder="<?php _e( 'Insert your Giphy API Key here', 'advanced-gutenberg-blocks' ); ?>" value="<?php echo get_option( 'advanced-gutenberg-blocks-giphy-api-key' ); ?>">
    <?php else: ?>
      <input type="text" disabled placeholder="<?php _e( 'This field is only editable by an administrator', 'advanced-gutenberg-blocks' ); ?>">
    <?php endif; ?>
  </div>
</div>

<p class="AGB-form__help"><?php _e( 'The API key is mandatory, you can create an App on the <a href="https://developers.giphy.com/dashboard/" target="_blank">Giphy Developers service</a>. ' ); ?></p>