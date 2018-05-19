<?php
	use AdvancedGutenbergBlocks\Helpers\Consts;
?>
<form method="post" action="options.php" class="AGB-settings">
	<?php settings_fields( Consts::SETTINGS_GROUP ); ?>
  <?php do_settings_sections( Consts::SETTINGS_GROUP ); ?>

	<header class="AGB-settings__header">
		<div class="AGB-settings__header__inner">
			<img src="<?php echo Consts::get_url() . 'admin/img/logo.svg' ?>" alt="Gutenberg Blocks Logo">
			<h1>
				<?php _e('Gutenberg Blocks Settings'); ?>
			</h1>
      <ul class="AGB-settings__header__menu">
        <li><a href="#my-blocks"><?php _e( 'My Blocks', 'advanced-gutenberg-blocks' ); ?></a></li>
        <li><a href="#wp-blocks"><?php _e( 'WordPress Blocks', 'advanced-gutenberg-blocks' ); ?></a></li>
      </ul>
		</div>
	</header>

	<main class="AGB-settings__content">

		<h2 id="my-blocks"><?php _e( 'My Blocks', 'advanced-gutenberg-blocks' ); ?></h2>

		<p class="AGB-settings__description"><?php _e( "Check out these awesome blocks to improve your WordPress experience.", 'advanced-gutenberg-blocks' ); ?></p>

		<div class="AGB-list">
			<?php foreach( $categories as $key => $cat ): ?>
			<p class="AGB-list__title">
				<?php echo $cat; ?>
				<?php
					if ( $cat == "WooCommerce" and ! class_exists( 'WooCommerce' ) ) {
						echo "<small><em>[" . __( 'WooCommerce is required to use these blocks', 'advanced-gutenberg-blocks' ) . "]</em></small>";
					}
				?>
			</p>
			<ul>
				<?php
					foreach( $registered_blocks as $block ):
						if( $block['category'] != $key ) {
							continue;
						}
						$active = ! in_array( $block['id'], $disabled_blocks );
				?>
				<li class="AGB-block<?php if( $active ): ?> is-active<?php endif; ?>" id="<?php echo sanitize_title($block['id']); ?>">
					<header class="AGB-block__head">
						<div class="AGB-block__icon js-AGB-show-panel">
							<span class="dashicons <?php echo $block['icon']; ?>"></span>
						</div>
						<div class="AGB-block__title js-AGB-show-panel">
							<?php echo $block['name']; ?>
							<?php if( !$block['available'] ): ?>
								<small><?php _e( '[Soon]', 'advanced-gutenberg-blocks' ); ?></small>
							<?php endif; ?>
						</div>
						<div class="AGB-block__actions">
							<a href="" class="AGB-block__button js-AGB-show-panel"><?php _e( 'Settings', 'advanced-gutenberg-blocks' ); ?></a>
							<?php if ( $cat == "WooCommerce" and ! class_exists( 'WooCommerce' ) ) : ?>
							<?php else: ?>
							<a
								href="#"
								class="AGB-block__button js-AGB-toggle-state"
								data-block="<?php echo $block['id']; ?>"
								data-command=<?php echo ( $active ) ? 'disable' : 'enable'; ?>
								data-invert-command=<?php echo ( !$active ) ? 'disable' : 'enable'; ?>
								data-invert-label=<?php echo ( !$active ) ? __( 'Disable', 'advanced-gutenberg-blocks' ) : __( 'Enable', 'advanced-gutenberg-blocks' ); ?>
							>
								<?php echo ( $active ) ? __( 'Disable', 'advanced-gutenberg-blocks' ) : __( 'Enable', 'advanced-gutenberg-blocks' ); ?>
							</a>
							<?php endif; ?>
						</div>
					</header>

					<div class="AGB-block__panel">
						<?php if( $block['description'] ): ?>
							<div class="AGB-block__description">
								<p class="AGB-block__panel__title"><?php _e( 'Description', 'advanced-gutenberg-blocks' ); ?></p>
								<p><?php echo $block['description']; ?></p>
							</div>
						<?php endif; ?>

						<?php if( $block['preview_image'] ): ?>
							<div class="AGB-block__preview">
								<p class="AGB-block__panel__title"><?php _e( 'Preview', 'advanced-gutenberg-blocks'); ?></p>
								<img src="<?php echo $block['preview_image']; ?>" alt="<?php sprintf( __( '%s example', 'advanced-gutenberg-blocks' ), $block['name'] ); ?>">
							</div>
						<?php endif; ?>

						<div class="AGB-block__settings">
							<p class="AGB-block__panel__title"><?php _e( 'Settings', 'advanced-gutenberg-blocks'); ?></p>
							<?php if( $block['options_callback'] ): ?>
								<?php call_user_func( $block['options_callback'] ); ?>
								<p>
									<input type="submit" class="button button-primary" value="<?php _e( 'Save Changes' ); ?>">
								</p>
							<?php else: ?>
							<p><?php _e( 'No settings for this block.', 'advanced-gutenberg-blocks'); ?></p>
							<?php endif; ?>
						</div>

					</div> <!-- .AGB-block__panel -->

				</li>
				<?php endforeach; ?>
			</ul>
			<?php endforeach; ?>
		</div>


		<h2 id="wp-blocks"><?php _e('Default WordPress blocks', 'advanced-gutenberg-blocks'); ?></h2>

		<p class="AGB-settings__description"><?php _e("Disable the blocks you don't want to deal with for a lighter user interface.", 'advanced-gutenberg-blocks'); ?></p>

		<div class="AGB-list">
			<?php
				foreach($native_blocks as $cat => $blocks):
			?>
				<p class="AGB-list__title"><?php echo $cat; ?></p>
				<ul>
				<?php foreach($blocks as $block):
					$active = !in_array( $block['id'], $disabled_blocks );
				?>
					<li class="AGB-block<?php if ( $active ) : ?> is-active<?php endif; ?>">
						<header class="AGB-block__head">
							<div class="AGB-block__icon">
								<?php if ( isset( $block['icon'] ) ): ?>
									<span class="dashicons <?php echo $block['icon']; ?>"></span>
								<?php elseif( $block['svg'] ): ?>
									<?php echo $block['svg']; ?>
								<?php endif; ?>
							</div>
							<div class="AGB-block__title">
								<?php echo $block['name']; ?>
							</div>
							<div class="AGB-block__actions">
								<?php /*<a href="" class="AGB-block__button js-AGB-show-panel"><?php _e( 'Settings', 'advanced-gutenberg-blocks' ); ?></a> */ ?>

		            <?php if( $block['can_disable'] ): ?>
								<a
									href="#"
									class="AGB-block__button js-AGB-toggle-state"
									data-block="<?php echo $block['id']; ?>"
									data-command=<?php echo ( $active ) ? 'disable' : 'enable'; ?>
									data-invert-command=<?php echo ( !$active ) ? 'disable' : 'enable'; ?>
									data-invert-label=<?php echo ( !$active ) ? __( 'Disable', 'advanced-gutenberg-blocks' ) : __( 'Enable', 'advanced-gutenberg-blocks' ); ?>
								>
									<?php echo ( $active ) ? __( 'Disable', 'advanced-gutenberg-blocks' ) : __( 'Enable', 'advanced-gutenberg-blocks' ); ?>
								</a>
		            <?php endif; ?>
							</div>
						</header>

						<div class="AGB-block__settings">
						</div>
					</li>
			<?php
					endforeach;
				endforeach;
			?>
		</ul>

	</main>

</form>
