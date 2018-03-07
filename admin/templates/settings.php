<?php
	use GutenbergBlocks\Helpers\Consts;
?>
<form method="post" action="options.php" class="gutenblocks-settings">
	<?php settings_fields( Consts::SETTINGS_GROUP ); ?>
  <?php do_settings_sections( Consts::SETTINGS_GROUP ); ?>

	<header class="gutenblocks-settings__header">
		<div class="gutenblocks-settings__header__inner">
			<img src="<?php echo Consts::get_url() . 'admin/img/gutenblocks-logo.svg' ?>" alt="Gutenberg Blocks Logo">
			<h1>
				<?php _e('Gutenberg Blocks Settings'); ?>
			</h1>
		</div>
	</header>

	<main class="gutenblocks-settings__content">

		<h2><?php _e( 'Gutenberg Blocks', 'gutenblocks' ); ?></h2>

		<p class="gutenblocks-settings__description"><?php _e( "Check out these awesome blocks to improve your WordPress experience.", 'gutenblocks' ); ?></p>

		<div class="gutenblocks-list">
			<?php foreach( $categories as $key => $cat ): ?>
			<p class="gutenblocks-list__title"><?php echo $cat; ?></p>
			<ul>
				<?php
					foreach( $registered_blocks as $block ):
						if( $block['category'] != $key ) {
							continue;
						}
						$active = !in_array( $block['id'], $disabled_blocks );
				?>
				<li class="gutenblocks-block<?php if( $active ): ?> is-active<?php endif; ?>">
					<header class="gutenblocks-block__head">
						<div class="gutenblocks-block__icon js-gutenblocks-show-panel">
							<span class="dashicons <?php echo $block['icon']; ?>"></span>
						</div>
						<div class="gutenblocks-block__title js-gutenblocks-show-panel">
							<?php echo $block['name']; ?>
							<?php if( !$block['available'] ): ?>
								<small><?php _e( '[Soon]', 'gutenblocks' ); ?></small>
							<?php endif; ?>
						</div>
						<div class="gutenblocks-block__actions">
							<a href="" class="gutenblocks-block__button js-gutenblocks-show-panel"><?php _e( 'Settings', 'gutenblocks' ); ?></a>
							<a
								href="#"
								class="gutenblocks-block__button js-gutenblocks-toggle-state"
								data-block="<?php echo $block['id']; ?>"
								data-command=<?php echo ( $active ) ? 'disable' : 'enable'; ?>
								data-invert-command=<?php echo ( !$active ) ? 'disable' : 'enable'; ?>
								data-invert-label=<?php echo ( !$active ) ? __( 'Disable', 'gutenblocks' ) : __( 'Enable', 'gutenblocks' ); ?>
							>
								<?php echo ( $active ) ? __( 'Disable', 'gutenblocks' ) : __( 'Enable', 'gutenblocks' ); ?>
							</a>
						</div>
					</header>

					<div class="gutenblocks-block__panel">
						<?php if( $block['description'] ): ?>
							<div class="gutenblocks-block__description">
								<p class="gutenblocks-block__panel__title"><?php _e( 'Description', 'gutenblocks' ); ?></p>
								<p><?php echo $block['description']; ?></p>
							</div>
						<?php endif; ?>

						<?php if( $block['preview_image'] ): ?>
							<div class="gutenblocks-block__preview">
								<p class="gutenblocks-block__panel__title"><?php _e( 'Preview', 'gutenblocks'); ?></p>
								<img src="<?php echo $block['preview_image']; ?>" alt="<?php sprintf( __( '%s example', 'gutenblocks' ), $block['name'] ); ?>">
							</div>
						<?php endif; ?>

						<div class="gutenblocks-block__settings">
							<p class="gutenblocks-block__panel__title"><?php _e( 'Settings', 'gutenblocks'); ?></p>
							<?php if( $block['options_callback'] ): ?>
								<?php call_user_func( $block['options_callback'] ); ?>
								<p>
									<input type="submit" class="button button-primary" value="<?php _e( 'Save Changes' ); ?>">
								</p>
							<?php else: ?>
							<p><?php _e( 'No settings for this block.', 'gutenblocks'); ?></p>
							<?php endif; ?>
						</div>

					</div> <!-- .gutenblocks-block__panel -->

				</li>
				<?php endforeach; ?>
			</ul>
			<?php endforeach; ?>
		</div>


		<h2><?php _e('Default WordPress blocks', 'gutenblocks'); ?></h2>

		<p class="gutenblocks-settings__description"><?php _e("Disable the blocks you don't want to deal with for a lighter user interface.", 'gutenblocks'); ?></p>

		<div class="gutenblocks-list">
			<?php
				foreach($native_blocks as $cat => $blocks):
			?>
				<p class="gutenblocks-list__title"><?php echo $cat; ?></p>
				<ul>
				<?php foreach($blocks as $block):
					$active = !in_array( $block['id'], $disabled_blocks );
				?>
					<li class="gutenblocks-block<?php if ( $active ) : ?> is-active<?php endif; ?>">
						<header class="gutenblocks-block__head">
							<div class="gutenblocks-block__icon">
								<?php if ( $block['icon'] ): ?>
									<span class="dashicons <?php echo $block['icon']; ?>"></span>
								<?php elseif( $block['svg'] ): ?>
									<?php echo $block['svg']; ?>
								<?php endif; ?>
							</div>
							<div class="gutenblocks-block__title">
								<?php echo $block['name']; ?>
							</div>
							<div class="gutenblocks-block__actions">
								<?php /*<a href="" class="gutenblocks-block__button js-gutenblocks-show-panel"><?php _e( 'Settings', 'gutenblocks' ); ?></a> */ ?>

		            <?php if( $block['can_disable'] ): ?>
								<a
									href="#"
									class="gutenblocks-block__button js-gutenblocks-toggle-state"
									data-block="<?php echo $block['id']; ?>"
									data-command=<?php echo ( $active ) ? 'disable' : 'enable'; ?>
									data-invert-command=<?php echo ( !$active ) ? 'disable' : 'enable'; ?>
									data-invert-label=<?php echo ( !$active ) ? __( 'Disable', 'gutenblocks' ) : __( 'Enable', 'gutenblocks' ); ?>
								>
									<?php echo ( $active ) ? __( 'Disable', 'gutenblocks' ) : __( 'Enable', 'gutenblocks' ); ?>
								</a>
		            <?php endif; ?>
							</div>
						</header>

						<div class="gutenblocks-block__settings">
						</div>
					</li>
			<?php
					endforeach;
				endforeach;
			?>
		</ul>

	</main>

</form>
