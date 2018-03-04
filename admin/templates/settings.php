<?php
	use GutenbergBlocks\Services\Blocks;

	use GutenbergBlocks\Helpers\Consts;

	$blocks = new Blocks();
	$native_blocks = $blocks->get_native_blocks();
	$disabled_natives_blocks = $blocks->get_disabled_native_blocks();

	$registered_blocks = $blocks->get_registered_blocks();

?>
<form method="post" action="options.php" class="gutenblocks-settings">
	<?php settings_fields('gutenberg-blocks-settings'); ?>
  <?php do_settings_sections('gutenberg-blocks-settings'); ?>

	<header class="gutenblocks-settings__header">
		<div class="gutenblocks-settings__header__inner">
			<img src="<?php echo Consts::get_url().'admin/img/gutenberg-blocks-logo.svg' ?>" alt="Gutenberg Blocks Logo">
			<h1>
				<?php _e('Gutenberg Blocks Settings'); ?>
			</h1>
		</div>
	</header>

	<main class="gutenblocks-settings__content">

		<h2><?php _e('Gutenberg Blocks'); ?></h2>

		<p class="description"><?php _e("Disable the blocks you don't want to deal with for a smoother experience.", 'gutenblocks'); ?></p>

		<ul class="gutenblocks-list">
			<?php foreach($registered_blocks as $block): ?>
			<li class="gutenblocks-block is-active">
				<header class="gutenblocks-block__head">
					<div class="gutenblocks-block__icon">
						<span class="dashicons <?php echo $block['icon']; ?>"></span>
					</div>
					<div class="gutenblocks-block__title">
						<?php echo $block['name']; ?>
					</div>
					<div class="gutenblocks-block__actions">
						<button class="js-gutenblocks-show-settings"><?php _e('Settings', 'gutenblocks'); ?></button>
						<button class=""><?php _e('Enable', 'gutenblocks'); ?></button>
					</div>
				</header>

				<div class="gutenblocks-block__settings">
					<?php call_user_func( $block['options_callback'] ); ?>
				</div>

			</li>
			<?php endforeach; ?>
		</ul>


		<h2><?php _e('Default WordPress blocks', 'gutenblocks'); ?></h2>

		<p class="description"><?php _e("Disable the blocks you don't want to deal with for a smoother experience.", 'gutenblocks'); ?></p>

		<ul class="gutenblocks-list">
			<?php
				foreach($native_blocks as $key => $block):
			?>
			<li class="gutenblocks-block">
				<header class="gutenblocks-block__head">
					<div class="gutenblocks-block__icon">
						<span class="dashicons <?php echo $block['icon']; ?>"></span>
					</div>
					<div class="gutenblocks-block__title">
						<?php echo $block['name']; ?>
					</div>
					<div class="gutenblocks-block__actions">
						<button class="js-gutenblocks-show-settings"><?php _e('Settings', 'gutenblocks'); ?></button>
						<button class=""><?php _e('Enable', 'gutenblocks'); ?></button>
					</div>
				</header>

				<div class="gutenblocks-block__settings">

					<input
						type="checkbox"
						name="gutenberg-native-blocks-disabled[]"
						id="blocks-<?php echo $key; ?>"
						value="<?php echo $block['id']; ?>"
						<?php if( in_array( $block['id'], $disabled_natives_blocks ) ) { echo 'checked'; } ?>
						<label for="blocks-<?php echo $key; ?>"><?php echo $block['name']; ?></label>
					>
				</div>
			</li>
			<?php
				endforeach;
			?>
		</ul>

		<input type="submit" value="Save" class="">

	</main>

</form>
