<?php defined( 'ABSPATH' ) || exit; ?>
<div class="AGB-form__setting">
  <div class="AGB-form__label is-required">
    <label for="advanced-gutenberg-blocks-unsplash-access-key"><?php esc_html__( 'API Access Key', 'advanced-gutenberg-blocks' ); ?></label>
  </div>

  <div class="AGB-form__field">
    <?php if( current_user_can( 'manage_options' ) ): ?>
      <input type="text" name="advanced-gutenberg-blocks-unsplash-access-key" placeholder="<?php esc_html__( 'Insert your Access Key here', 'advanced-gutenberg-blocks' ); ?>" value="<?php echo esc_attr( get_option( 'advanced-gutenberg-blocks-unsplash-access-key' ) ); ?>">
    <?php else: ?>
      <input type="text" disabled placeholder="<?php esc_html__( 'This field is only editable by an administrator', 'advanced-gutenberg-blocks' ); ?>">
    <?php endif; ?>
  </div>
</div>

<p class="AGB-form__help"><?php esc_html__( 'The API Access Key is mandatory, you can create an App on the <a href="https://unsplash.com/oauth/applications" target="_blank">Unsplash Developers service</a>. ' ); ?></p>