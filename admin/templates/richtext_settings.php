<?php
  defined( 'ABSPATH' ) || exit;
	use AdvancedGutenbergBlocks\Helpers\Consts;
?>
<div class="wrap">
  
  <h1><?php esc_html__( 'Rich Text Tools', 'advanced-gutenberg-blocks' ); ?></h1>

  <form method="post" action="options.php">
    <?php settings_fields( 'advanced-gutenberg-blocks-richtext-settings' ); ?>
    <?php do_settings_sections( 'advanced-gutenberg-blocks-richtext-settings' ); ?>

    <p>
      <?php esc_html__( "Add useful buttons to the RichText toolbar. Bring back the ones you loved from TinyMCE.", 'advanced-gutenberg-blocks' ); ?>
    </p>

    <table class="form-table">

      <tr>
        <th scope="row">
          <?php esc_html__( 'Toolbar buttons', 'advanced-gutenberg-blocks' ); ?>
        </th>
        <td>
          <p>
            <label for="advanced-gutenberg-blocks_richtext_buttons_superscript">
              <input 
                name="advanced-gutenberg-blocks_richtext_buttons[]" 
                type="checkbox" 
                id="advanced-gutenberg-blocks_richtext_buttons_superscript" 
                value="superscript" 
                <?php 
                  if ( get_option( 'advanced-gutenberg-blocks_richtext_buttons' ) ) {
                    echo in_array( 'superscript', get_option( 'advanced-gutenberg-blocks_richtext_buttons' ), false ) ? 'checked' : '';
                  } 
                ?>              
              >
              <?php esc_html__( 'Superscript button', 'advanced-gutenberg-blocks' ); ?>
            </label>
          </p>
          <p>
            <label for="advanced-gutenberg-blocks_richtext_buttons_subscript">
              <input 
                name="advanced-gutenberg-blocks_richtext_buttons[]" 
                type="checkbox" 
                id="advanced-gutenberg-blocks_richtext_buttons_subscript" 
                value="subscript" 
                <?php 
                  if ( get_option( 'advanced-gutenberg-blocks_richtext_buttons' ) ) {
                    echo in_array( 'subscript', get_option( 'advanced-gutenberg-blocks_richtext_buttons' ), false ) ? 'checked' : '';
                  } 
                ?>
              >
              <?php esc_html__( 'Subscript button', 'advanced-gutenberg-blocks' ); ?>
            </label>
          </p>
          <p>
            <label for="advanced-gutenberg-blocks_richtext_buttons_remove">
              <input 
                name="advanced-gutenberg-blocks_richtext_buttons[]" 
                type="checkbox" 
                id="advanced-gutenberg-blocks_richtext_buttons_remove" 
                value="remove" 
                <?php 
                  if ( get_option( 'advanced-gutenberg-blocks_richtext_buttons' ) ) {
                    echo in_array( 'remove', get_option( 'advanced-gutenberg-blocks_richtext_buttons' ), false ) ? 'checked' : '';
                  } 
                ?>
              >
              <?php esc_html__( 'Remove formatting button', 'advanced-gutenberg-blocks' ); ?>
            </label>
          </p>
          <p>
            <label for="advanced-gutenberg-blocks_richtext_buttons_color">
              <input 
                name="advanced-gutenberg-blocks_richtext_buttons[]" 
                type="checkbox" 
                id="advanced-gutenberg-blocks_richtext_buttons_color" 
                value="color" 
                checked
                disabled
              >
              <?php esc_html__( 'Color button', 'advanced-gutenberg-blocks' ); ?> <?php esc_html__( '(native)', 'advanced-gutenberg-blocks' ); ?>
            </label>
          </p>
          <p>
            <label for="advanced-gutenberg-blocks_richtext_buttons_code">
              <input 
                name="advanced-gutenberg-blocks_richtext_buttons[]" 
                type="checkbox" 
                id="advanced-gutenberg-blocks_richtext_buttons_code" 
                value="code" 
                checked
                disabled
              >
              <?php esc_html__( 'Code button', 'advanced-gutenberg-blocks' ); ?> <?php esc_html__( '(native)', 'advanced-gutenberg-blocks' ); ?>
            </label>
          </p>
          <p>
            <label for="advanced-gutenberg-blocks_richtext_buttons_strike">
              <input 
                name="advanced-gutenberg-blocks_richtext_buttons[]" 
                type="checkbox" 
                id="advanced-gutenberg-blocks_richtext_buttons_strike" 
                value="strike" 
                checked
                disabled
              >
              <?php esc_html__( 'Strike through button', 'advanced-gutenberg-blocks' ); ?> <?php esc_html__( '(native)', 'advanced-gutenberg-blocks' ); ?>
            </label>
          </p>
        </td>
      </tr>

    </table>

    <?php submit_button(); ?>

    <p>
      <img src="<?php echo Consts::get_url() . 'admin/img/editor-tools.jpg'; ?>" width="700" alt="The editor with more options">
    </p>

  </form>
</div>