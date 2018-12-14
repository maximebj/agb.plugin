<?php
  use AdvancedGutenbergBlocks\Helpers\Consts;
?>

<div class="wrap">
  
  <h1><?php _e( 'Editor settings', 'advanced-gutenberg-blocks' ); ?></h1>

  <form method="post" action="options.php">
    <?php settings_fields( Consts::SETTINGS_GROUP ); ?>
    <?php do_settings_sections( Consts::SETTINGS_GROUP ); ?>

    <table class="form-table">

      <tr>
        <th scope="row">
          <label for="editor_width"><?php _e('Editor Width', 'advanced-gutenberg-blocks'); ?></label>
        </th>
        <td>
          <input name="advanced-gutenberg-blocks_editor_width" type="number" min="500" max="2000" value="<?php echo esc_attr( get_option( 'advanced-gutenberg-blocks_editor_width' ) ); ?>" class="small-text">
          <p class="description"><?php _e('Editor custom width in px'); ?></p>
        </td>
      </tr>

      <tr>
        <th scope="row">
          <label for="advanced-gutenberg-blocks_editor_wide_width"><?php _e( 'Editor Wide Blocks Width', 'advanced-gutenberg-blocks' ); ?></label>
        </th>
        <td>
          <input name="advanced-gutenberg-blocks_editor_wide_width" type="number" min="500" max="2000" value="<?php echo esc_attr( get_option( 'advanced-gutenberg-blocks_editor_wide_width' ) ); ?>" class="small-text">
          <p class="description"><?php _e('Large blocks custom width in px'); ?></p>
        </td>
      </tr>

    </table>

    <?php submit_button(); ?>
  </form>
</div>
