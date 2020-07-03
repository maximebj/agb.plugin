<?php defined( 'ABSPATH' ) || exit; ?>
<div class="AGB-form__setting">
  <div class="AGB-form__label">
    <label for="advanced-gutenberg-blocks-summary-title"><?php esc_html__( 'Default title', 'advanced-gutenberg-blocks' ); ?></label>
  </div>

  <div class="AGB-form__field">
    <input type="text" name="advanced-gutenberg-blocks-summary-title" placeholder="<?php esc_html__( 'Table of contents', 'advanced-gutenberg-blocks' ); ?>" value="<?php echo esc_attr( get_option( 'advanced-gutenberg-blocks-summary-title' ) ); ?>">
  </div>
</div>

<div class="AGB-form__setting">
  <div class="AGB-form__label">
    <label for="advanced-gutenberg-blocks-summary-max-depth"><?php esc_html__( 'Max level depth', 'advanced-gutenberg-blocks' ); ?></label>
  </div>

  <div class="AGB-form__field">
    <select name="advanced-gutenberg-blocks-summary-max-depth">
      <option value="2" <?php if( $level == '2'){ echo 'selected'; } ?>>H2</option>
      <option value="3" <?php if( $level == '3'){ echo 'selected'; } ?>>H3</option>
      <option value="4" <?php if( $level == '4'){ echo 'selected'; } ?>>H4</option>
      <option value="5" <?php if( $level == '5'){ echo 'selected'; } ?>>H5</option>
      <option value="6" <?php if( $level == '6' or $level =='' ){ echo 'selected'; } ?>><?php esc_html__( 'All levels', 'advanced-gutenberg-blocks' ) ?></option>
    </select>
  </div>
</div>

<div class="AGB-form__setting">
  <div class="AGB-form__label">
    <?php esc_html__( 'Smooth scrolling', 'advanced-gutenberg-blocks' ); ?>
  </div>
  <div class="AGB-form__field">
    <input type="checkbox" name="advanced-gutenberg-blocks-smooth-scrolling" id="advanced-gutenberg-blocks-smooth-scrolling" <?php echo esc_attr($state); ?>>
    <label for="advanced-gutenberg-blocks-smooth-scrolling"><?php esc_html__( 'Activate smooth scrolling', 'advanced-gutenberg-blocks' ); ?></label>
  </div>
</div>

<div class="AGB-form__setting">
  <div class="AGB-form__label">
    <?php esc_html__( 'Folding', 'advanced-gutenberg-blocks' ); ?>
  </div>
  <div class="AGB-form__field">
    <input type="checkbox" name="advanced-gutenberg-blocks-summary-folded" id="advanced-gutenberg-blocks-summary-folded" <?php echo esc_attr($folded); ?>>
    <label for="advanced-gutenberg-blocks-summary-folded"><?php esc_html__( 'Folded by default', 'advanced-gutenberg-blocks' ); ?></label>
  </div>
</div>

