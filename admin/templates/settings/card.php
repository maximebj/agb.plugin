<?php defined( 'ABSPATH' ) || exit; ?>
<div class="AGB-form__setting">
  <div class="AGB-form__label is-required">
    <label for="advanced-gutenberg-blocks-opengraph-api-key"><?php esc_html__( 'API Key', 'advanced-gutenberg-blocks' ); ?></label>
  </div>

  <div class="AGB-form__field">
    <?php if( current_user_can( 'manage_options' ) ): ?>
      <input type="text" name="advanced-gutenberg-blocks-opengraph-api-key" placeholder="<?php esc_html__( 'Insert your OpenGraph.io API Key here', 'advanced-gutenberg-blocks' ); ?>" value="<?php echo esc_attr( get_option( 'advanced-gutenberg-blocks-opengraph-api-key' ) ); ?>">
    <?php else: ?>
      <input type="text" disabled placeholder="<?php esc_html__( 'This field is only editable by an administrator', 'advanced-gutenberg-blocks' ); ?>">
    <?php endif; ?>
  </div>
</div>

<p class="AGB-form__help"><?php esc_html__( 'The API key is mandatory, you can create one on the <a href="https://www.opengraph.io/" target="_blank">OpenGraph.io API service</a>. ' ); ?></p>