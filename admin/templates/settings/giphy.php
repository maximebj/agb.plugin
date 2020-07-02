<?php defined( 'ABSPATH' ) || exit; ?>	
<div class="AGB-form__setting">
  <div class="AGB-form__label is-required">
    <label for="advanced-gutenberg-blocks-giphy-api-key"><?php esc_html__( 'API Key', 'advanced-gutenberg-blocks' ); ?></label>
  </div>

  <div class="AGB-form__field">
    <?php if( current_user_can( 'manage_options' ) ): ?>
      <input type="text" name="advanced-gutenberg-blocks-giphy-api-key" placeholder="<?php esc_html__( 'Insert your Giphy API Key here', 'advanced-gutenberg-blocks' ); ?>" value="<?php echo esc_attr( get_option( 'advanced-gutenberg-blocks-giphy-api-key' ) ); ?>">
    <?php else: ?>
      <input type="text" disabled placeholder="<?php esc_html__( 'This field is only editable by an administrator', 'advanced-gutenberg-blocks' ); ?>">
    <?php endif; ?>
  </div>
</div>

<p class="AGB-form__help"><?php esc_html__( 'The API key is mandatory, you can create an App on the <a href="https://developers.giphy.com/dashboard/" target="_blank">Giphy Developers service</a>. ' ); ?></p>