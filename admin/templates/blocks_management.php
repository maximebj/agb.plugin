<?php
	use AdvancedGutenbergBlocks\Helpers\Consts;
?>
<form method="post" action="options.php" class="AGB-settings">
	<?php settings_fields( 'advanced-gutenberg-blocks-settings' ); ?>
  <?php do_settings_sections( 'advanced-gutenberg-blocks-settings' ); ?>

	<header class="AGB-header">
		<img src="<?php echo Consts::get_url() . 'admin/img/logo.svg' ?>" alt="Advanced Gutenberg Blocks Logo">
		<h1>
			<?php _e('Advanced Gutenberg Blocks'); ?>
		</h1>
		
		<ul class="AGB-header__menu">
			<?php foreach( $categories as $cat ): ?>
				<li><a href="#<?php echo sanitize_title( $cat ); ?>"><?php echo $cat; ?></a></li>
			<?php endforeach; ?>
		</ul>
		
		<div class="AGB-header__search">
			<input type="text" id="search-blocks" placeholder="Start typing to filter…">
		</div>
	</header>

	<main class="AGB-main" id="AGB-main">
		<?php
			foreach( $categories as $key => $cat ):
				// Check for WooCommerce
				$no_woo = ( $cat == "WooCommerce" and ! class_exists( 'WooCommerce' ) );
		?>
			<div class="AGB-cards" id="list-<?php echo sanitize_title( $cat ); ?>">
				<h2 class="AGB-cards__title" id="<?php echo sanitize_title( $cat ); ?>"> 	–– <?php echo $cat; ?></h2>
				<?php if ( $no_woo ) : ?>
					<p class="AGB-cards__info"><?php _e('WooCommerce is not activated on this website.', 'advanced-gutenberg-block'); ?></p>
				<?php endif; ?>
				<ul class="AGB-cards__list list<?php if ($no_woo): ?> is-disabled<?php endif; ?>">
					<?php
						foreach( $registered_blocks as $block ):
							if( $block['category'] != $key ) {
								continue;
							}
							$active = ! in_array( $block['id'], $disabled_blocks );
					?>		
						<li class="AGB-card<?php if ( $active ) : ?> is-active<?php endif; ?>">
							<header class="AGB-card__header">
								<div class="AGB-card__icon">
									<span class="dashicons <?php echo $block['icon']; ?>"></span>
								</div>
								
								<div class="AGB-card__title">
									<?php echo $block['name']; ?>

									<?php if( ! $block['available'] ): ?>
										<small><?php _e( '[Soon]', 'advanced-gutenberg-blocks' ); ?></small>
									<?php endif; ?>
								</div>

								<div class="AGB-card__switch">
									<?php if( ! $no_woo and $block['available'] ): ?>
									<a
										href="#"
										class="AGB-switch js-AGB-toggle-state"
										data-block="<?php echo $block['id']; ?>"
										data-command=<?php echo ( $active ) ? 'disable' : 'enable'; ?>
										data-invert-command=<?php echo ( !$active ) ? 'disable' : 'enable'; ?>
									>
									</a>
									<?php endif; ?>
								</div>
							</header>
							
							<div class="AGB-card__content">
								<p><?php echo $block['description']; ?></p>

								<?php if( isset( $block['require'] ) ) : ?>
									<p class="AGB-card__warning"><?php echo $block['require']; ?></p>
								<?php endif; ?>
							</div>

							<div class="AGB-card__actions">
								<?php if( $block['available'] ): ?>
									<a href="#" class="AGB-button js-open-modal" data-block="<?php echo sanitize_title( $block['id'] ); ?>">
										<?php _e( 'Configure Block', 'advanced-gutenberg-block' ); ?>
									</a>
								<?php endif; ?>
							</div>
							
						</li>
					<?php endforeach; ?>
				</ul>
			</div>
		<?php endforeach; ?>
	</main>

	<?php 
		$modal = isset( $_GET['modal'] ) ? $_GET['modal'] : false;
	?>
	<div class="AGB-modal<?php if( $modal ): ?> is-active<?php endif; ?>">
		<div class="AGB-modal__overlay js-close-modal"></div>
		<div class="AGB-modal__window">
			<a href="#" class="AGB-modal__close js-close-modal">×</a>
			
			<?php 
				foreach( $registered_blocks as $block ): 
					$slug = sanitize_title( $block['id'] );
			?>	
				<div class="AGB-modal__content<?php if( $modal == $slug ): ?> is-active<?php endif; ?>" id="modal-content-<?php echo $slug; ?>">
					<header class="AGB-modal__header">
						<div class="AGB-modal__icon">
							<span class="dashicons <?php echo $block['icon']; ?>"></span>
						</div>

						<div class="AGB-modal__title">
							<?php echo $block['name']; ?>
						</div>
					
					</header>

					<div class="AGB-modal__cols">

						<div class="AGB-modal__cols__left">
							
							<p class="AGB-modal__subtitle"><?php _e( 'Description', 'advanced-gutenberg-blocks' ); ?></p>
							<p><?php echo $block['description']; ?></p>
							
							<?php if( array_key_exists( 'credits_callback', $block ) and $block['credits_callback'] ): ?>
								<div class="AGB-modal__credits">
									<?php call_user_func( $block['credits_callback'] ); ?>
								</div>
							<?php endif; ?>

							<p class="AGB-modal__subtitle"><?php _e( 'Options', 'advanced-gutenberg-blocks' ); ?></p>
							<?php if( array_key_exists( 'options_callback', $block ) and $block['options_callback'] ): ?>
								<div class="AGB-modal__form AGB-form">
									<?php call_user_func( $block['options_callback'] ); ?>
								</div>
								<div class="AGB-modal__action">
									<input type="submit" class="AGB-submit" value="<?php _e( 'Save Changes', 'advanced-gutenberg-blocks' ); ?>">
								</div>
								
							<?php else: ?>
								<p><?php _e( 'No settings for this block.', 'advanced-gutenberg-blocks'); ?></p>
							<?php endif; ?>
						</div>

						<div class="AGB-modal__cols__right">
							<p class="AGB-modal__subtitle"><?php _e('Preview', 'advanced-gutenberg-blocks' ); ?></p>

							<?php if( array_key_exists( 'preview_image', $block ) and $block['preview_image'] ): ?>
								<img src="<?php echo $block['preview_image']; ?>" alt="<?php sprintf( __( '%s example', 'advanced-gutenberg-blocks' ), $block['name'] ); ?>">
							<?php endif; ?>
						</div>
					</div>
					
				</div>
			<?php endforeach; ?>
		</div>
	</div>

</form>
