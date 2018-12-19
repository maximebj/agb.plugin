<?php
  use AdvancedGutenbergBlocks\Helpers\Consts;
?>

<div class="wrap">
  
  <h1><?php _e( 'Editor settings', 'advanced-gutenberg-blocks' ); ?></h1>

  <form method="post" action="options.php">
    <?php settings_fields( 'advanced-gutenberg-blocks-editor-settings' ); ?>
    <?php do_settings_sections( 'advanced-gutenberg-blocks-editor-settings' ); ?>

    <p>
      <?php _e( "If your theme doesn't handle some Editor features, you can activate them from here.", 'advanced-gutenberg-blocks' ); ?>
    </p>

    <table class="form-table">

      <tr>
        <th scope="row">
          <label for="advanced-gutenberg-blocks_editor_width">
            <?php _e( 'Editor Width', 'advanced-gutenberg-blocks' ); ?>
          </label>
        </th>
        <td>
          <input 
            name="advanced-gutenberg-blocks_editor_width" 
            type="number" 
            min="500" 
            max="2000" 
            value="<?php echo esc_attr( get_option( 'advanced-gutenberg-blocks_editor_width' ) ); ?>" 
            class="small-text"
          >
          <p class="description"><?php _e( 'Editor custom width in px', 'advanced-gutenberg-blocks' ); ?></p>
        </td>
      </tr>

      <tr>
        <th scope="row">
          <label for="advanced-gutenberg-blocks_editor_wide_width">
            <?php _e( 'Editor Wide Blocks Width', 'advanced-gutenberg-blocks' ); ?>
          </label>
        </th>
        <td>
          <input 
            name="advanced-gutenberg-blocks_editor_wide_width" 
            type="number" 
            min="500" 
            max="2000" 
            value="<?php echo esc_attr( get_option( 'advanced-gutenberg-blocks_editor_wide_width' ) ); ?>" 
            class="small-text"
          >
          <p class="description"><?php _e( 'Large blocks custom width in px', 'advanced-gutenberg-blocks' ); ?></p>
        </td>
      </tr>

            <tr>
        <th scope="row">
          <?php _e( 'Blocks default styles', 'advanced-gutenberg-blocks' ); ?>
        </th>
        <td>
          <label for="advanced-gutenberg-blocks_editor_default_styles">
            <input 
              name="advanced-gutenberg-blocks_editor_default_styles" 
              type="checkbox" 
              id="advanced-gutenberg-blocks_editor_default_styles" 
              value="1" 
              <?php echo checked( 1, get_option( 'advanced-gutenberg-blocks_editor_default_styles' ), false ); ?>
            >
            <?php _e( 'Activate front stylesheet for default blocks styles', 'advanced-gutenberg-blocks' ); ?>
          </label>
        </td>
      </tr>

      <tr>
        <th scope="row">
          <?php _e( 'Responsive Embeds', 'advanced-gutenberg-blocks' ); ?>
        </th>
        <td>
          <label for="advanced-gutenberg-blocks_editor_responsive_embeds">
            <input 
              name="advanced-gutenberg-blocks_editor_responsive_embeds" 
              type="checkbox" 
              id="advanced-gutenberg-blocks_editor_responsive_embeds" 
              value="1" 
              <?php echo checked( 1, get_option( 'advanced-gutenberg-blocks_editor_responsive_embeds' ), false ); ?>
            >
            <?php _e( 'Activate responsive Embeds styles', 'advanced-gutenberg-blocks' ); ?>
          </label>
        </td>
      </tr>

      <tr>
        <th scope="row">
          <?php _e( 'Wide Blocks', 'advanced-gutenberg-blocks' ); ?>
        </th>
        <td>
          <label for="advanced-gutenberg-blocks_editor_wide_blocks">
            <input 
              name="advanced-gutenberg-blocks_editor_wide_blocks" 
              type="checkbox" 
              id="advanced-gutenberg-blocks_editor_wide_blocks" 
              value="1" 
              <?php echo checked( 1, get_option( 'advanced-gutenberg-blocks_editor_wide_blocks' ), false ); ?>
            >
            <?php _e( 'Activate Wide blocks', 'advanced-gutenberg-blocks' ); ?>
          </label>
        </td>
      </tr>

    </table>

    <h2><?php _e( 'Colors', 'advanced-gutenberg-blocks' ); ?></h2>

    <table class="form-table">

      <tr>
        <th scope="row">
          <label for="editor_width">
            <?php _e('Custom color palette', 'advanced-gutenberg-blocks' ); ?>
          </label>
        </th>
        <td>
          <?php $colors = get_option( 'advanced-gutenberg-blocks_editor_colors' ); ?>
          <ul class="AGB-multiple" id="AGB-colors">
            <?php if( $colors ): foreach( $colors['hexa'] as $key => $color ): ?>
            <li class="AGB-color">
              <input 
                name="advanced-gutenberg-blocks_editor_colors[hexa][]"
                type="text" 
                value="<?php echo esc_attr( $color ); ?>" 
                class="AGB-color-picker" 
              >
              <input 
                name="advanced-gutenberg-blocks_editor_colors[name][]" 
                type="text" 
                value="<?php echo esc_attr( $colors['name'][$key] ); ?>"
                placeholder="<?php _e('Color name', 'advanced-gutenberg-blocks'); ?>"
              > 
              <a href="#" class="AGB-remove-link js-remove-color"><?php _e( 'Remove', 'advanced-gutenberg-blocks' ); ?></a>
            </li>
            <?php endforeach; endif; ?>
          </ul>
          <p>
            <button class="button js-add-color"><?php _e( 'Add Color', 'advanced-gutenberg-blocks' ); ?></button>
          </p>
        </td>
      </tr>

      <tr>
        <th scope="row">
          <?php _e( 'Custom color button', 'advanced-gutenberg-blocks' ); ?>
        </th>
        <td>
          <label for="advanced-gutenberg-blocks_editor_custom_color">
            <input 
              name="advanced-gutenberg-blocks_editor_custom_color" 
              type="checkbox" 
              id="advanced-gutenberg-blocks_editor_custom_color" 
              value="1" 
              <?php echo checked( 1, get_option( 'advanced-gutenberg-blocks_editor_custom_color' ), false ); ?>
            >
            <?php _e( 'Disable custom color button in Color Palette', 'advanced-gutenberg-blocks' ); ?>
          </label>
        </td>
      </tr>

      </table>

      <h2><?php _e( 'Font sizes', 'advanced-gutenberg-blocks' ); ?></h2>

      <table class="form-table">

        <tr>
          <th scope="row">
            <?php _e('Custom font sizes', 'advanced-gutenberg-blocks'); ?>
          </th>
          <td>
            <?php $sizes = get_option( 'advanced-gutenberg-blocks_editor_font_sizes' ); ?>
            <ul class="AGB-multiple" id="AGB-sizes">
              <?php if( $sizes ): foreach( $sizes['px'] as $key => $size ): ?>
              <li class="AGB-size">
                <input 
                  name="advanced-gutenberg-blocks_editor_font_sizes[px][]"
                  type="number" 
                  value="<?php echo esc_attr( $size ); ?>" 
                  class="small-text"
                  placeholder="18"
                  min="0"
                > 
                <span class="AGB-suffixe">px</span>
                <input 
                  name="advanced-gutenberg-blocks_editor_font_sizes[name][]" 
                  type="text" 
                  value="<?php echo esc_attr( $sizes['name'][$key] ); ?>"
                  placeholder="<?php _e('Size name (eg: Large)', 'advanced-gutenberg-blocks'); ?>"
                >
                <a href="#" class="AGB-remove-link js-remove-size"><?php _e( 'Remove', 'advanced-gutenberg-blocks' ); ?></a>
              </li>
              <?php endforeach; endif; ?>
            </ul>
            <p>
              <button class="button js-add-size"><?php _e( 'Add Size', 'advanced-gutenberg-blocks' ); ?></button>
            </p>
          </td>
        </tr>

      <tr>
        <th scope="row">
          <?php _e( 'Custom font size input', 'advanced-gutenberg-blocks' ); ?>
        </th>
        <td>
          <label for="advanced-gutenberg-blocks_editor_custom_font_size">
            <input 
              name="advanced-gutenberg-blocks_editor_custom_font_size" 
              type="checkbox" 
              id="advanced-gutenberg-blocks_editor_custom_font_size" 
              value="1" 
              <?php echo checked( 1, get_option( 'advanced-gutenberg-blocks_editor_custom_font_size' ), false ); ?>
            >
            <?php _e( 'Disable custom font size input in Paragraph Block', 'advanced-gutenberg-blocks' ); ?>
          </label>
        </td>
      </tr>

    </table>

    <?php submit_button(); ?>
  </form>
</div>


<div class="AGB-template" id="AGB-color-fields">
  <li class="AGB-color">
    <input 
      name="advanced-gutenberg-blocks_editor_colors[hexa][]"
      type="text" 
      value="" 
      class="AGB-color-picker" 
    >
    <input 
      name="advanced-gutenberg-blocks_editor_colors[name][]" 
      type="text" 
      value=""
      placeholder="<?php _e('Color name', 'advanced-gutenberg-blocks'); ?>"
    > 
    <a href="#" class="AGB-remove-link js-remove-color"><?php _e( 'Remove', 'advanced-gutenberg-blocks' ); ?></a>
  </li>
</div>

<div class="AGB-template" id="AGB-size-fields">
  <li class="AGB-size">
    <input 
      name="advanced-gutenberg-blocks_editor_font_sizes[px][]"
      type="number" 
      value="" 
      class="small-text"
      placeholder="18"
      min="0"
    > 
    <span class="AGB-suffixe">px</span>
    <input 
      name="advanced-gutenberg-blocks_editor_font_sizes[name][]" 
      type="text" 
      value=""
      placeholder="<?php _e('Size name (eg: Large)', 'advanced-gutenberg-blocks'); ?>"
    >
    <a href="#" class="AGB-remove-link js-remove-size"><?php _e( 'Remove', 'advanced-gutenberg-blocks' ); ?></a>
  </li>
</div>