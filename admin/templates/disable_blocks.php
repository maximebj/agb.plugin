<?php
	defined( 'ABSPATH' ) || exit;
	use AdvancedGutenbergBlocks\Helpers\Consts;
?>
<form method="post" action="options.php" class="AGB-settings">

	<header class="AGB-header">
		<img src="<?php echo Consts::get_url() . 'admin/img/logo.svg' ?>" alt="Advanced Gutenberg Blocks Logo">
		<h1>
			<?php _e( 'Advanced Gutenberg Blocks', 'advanced-gutenberg-blocks' ); ?>
		</h1>

		<ul class="AGB-header__menu">
			<?php foreach( $native_categories as $key => $cat ): ?>
				<li><a href="#<?php echo esc_attr( $key ); ?>"><?php echo $cat; ?></a></li>
			<?php endforeach; ?>
		</ul>

		<div class="AGB-header__search">
			<input type="text" id="search-blocks" placeholder="Start typing to filter…">
		</div>
	</header>

	<main class="AGB-main" id="AGB-main">
		<?php
			foreach( $native_categories as $key => $cat ):
		?>
			<div class="AGB-cards" id="list-<?php echo esc_attr( $key ); ?>">
				<h2 class="AGB-cards__title" id="<?php echo esc_attr( $key ); ?>"> –– <?php echo $cat; ?></h2>
				<ul class="AGB-cards__list list">
					<?php
						foreach( $native_blocks[$key] as $block ):
							$active = ! in_array( $block['id'], $disabled_blocks );
					?>
						<li class="AGB-card<?php if ( $active ) : ?> is-active<?php endif; ?>">
							<header class="AGB-card__header">
								<div class="AGB-card__icon">
									<?php echo $block['svg']; ?>
								</div>

								<div class="AGB-card__title">
									<?php echo $block['name']; ?>
								</div>

								<div class="AGB-card__switch">
									<?php if( $block['can_disable'] ): ?>
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
							</div>

						</li>
					<?php endforeach; ?>
				</ul>
			</div>
		<?php endforeach; ?>

	</main>

</form>
