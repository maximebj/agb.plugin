
<div class="AGB-form__setting">
  <div class="AGB-form__label is-required">
    <label for="advanced-gutenberg-blocks-gmap-api-key"><?php _e( 'API Key', 'advanced-gutenberg-blocks' ); ?></label>
  </div>

  <div class="AGB-form__field">
		<?php if( current_user_can( 'manage_options' ) ): ?>
      <input type="text" name="advanced-gutenberg-blocks-gmap-api-key" placeholder="<?php _e( 'Insert your Google Maps API Key here', 'advanced-gutenberg-blocks' ); ?>" value="<?php echo get_option( 'advanced-gutenberg-blocks-gmap-api-key' ); ?>">
    <?php else: ?>
			<input type="text" disabled placeholder="<?php _e( 'This field is only editable by an administrator', 'advanced-gutenberg-blocks' ); ?>">
		<?php endif; ?>
  </div>
</div>

<p class="AGB-form__help"><?php _e( 'The API key is mandatory.', 'advanced-gutenberg-blocks'); ?><br><?php _e( 'You can create one on the <a href="https://developers.google.com/maps/documentation/javascript/" target="_blank">Google Maps JS Api page</a>. ' ); ?></p>
