<?php defined( 'ABSPATH' ) || exit; ?>
<div class="AGB-form__setting">
  <div class="AGB-form__label is-required">
    <label for="advanced-gutenberg-blocks-gmap-api-key"><?php esc_html__( 'API Key', 'advanced-gutenberg-blocks' ); ?></label>
  </div>

  <div class="AGB-form__field">
		<?php if( current_user_can( 'manage_options' ) ): ?>
      <input type="text" name="advanced-gutenberg-blocks-gmap-api-key" placeholder="<?php esc_html__( 'Insert your Google Maps API Key here', 'advanced-gutenberg-blocks' ); ?>" value="<?php echo esc_attr( get_option( 'advanced-gutenberg-blocks-gmap-api-key' ) ); ?>">
    <?php else: ?>
			<input type="text" disabled placeholder="<?php esc_html__( 'This field is only editable by an administrator', 'advanced-gutenberg-blocks' ); ?>">
		<?php endif; ?>
  </div>
</div>

<p class="AGB-form__help"><?php esc_html__( 'The API key is mandatory.', 'advanced-gutenberg-blocks'); ?><br><?php esc_html__( 'You can create one on the <a href="https://console.cloud.google.com/apis/credentials" target="_blank">Google Maps JS Api page</a>. ', 'advanced-gutenberg-blocks' ); ?></p>
