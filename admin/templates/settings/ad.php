<?php defined( 'ABSPATH' ) || exit; ?>
<div class="AGB-form__setting">
  <div class="AGB-form__label is-required">
    <label for="advanced-gutenberg-blocks-ad-script"> <?php esc_html__( 'JS unit code', 'advanced-gutenberg-blocks' ); ?></label>
  </div>

  <div class="AGB-form__field">
    <textarea name="advanced-gutenberg-blocks-ad-script" rows="4"><?php echo get_option('advanced-gutenberg-blocks-ad-script'); ?></textarea>
  </div>
</div>

<p class="AGB-form__help"><?php esc_html__( 'Grab this code from your Adsense account.', 'advanced-gutenberg-blocks' ); ?></p>