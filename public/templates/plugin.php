<div class="wp-block-advanced-gutenberg-blocks-plugin">
	<div class="wp-block-advanced-gutenberg-blocks-plugin__content">
		<a href="<?php echo $plugin['downloadLink']; ?>" class="wp-block-advanced-gutenberg-blocks-plugin__picture">
			<img src="<?php echo $plugin['icon']; ?>" alt="<?php echo $plugin['name']; ?>" />
		</a>

		<div class="wp-block-advanced-gutenberg-blocks-plugin__main">
			<p class="wp-block-advanced-gutenberg-blocks-plugin__title">
				<a href="<?php echo $plugin['downloadLink']; ?>"><?php echo $plugin['name']; ?></a>
			</p>
			<p class="wp-block-advanced-gutenberg-blocks-plugin__desc"><?php echo $plugin['description']; ?></p>
			<p class="wp-block-advanced-gutenberg-blocks-plugin__author">
				<?php __( 'By', 'advanced-gutenberg-blocks' ) ?>
				<a href="<?php echo $plugin['homepage']; ?>" target='_blank'>
					<?php echo $plugin['author']; ?>
				</a>
			</p>
		</div>
	</div>

	<footer class="wp-block-advanced-gutenberg-blocks-plugin__footer">
		<div class="wp-block-advanced-gutenberg-blocks-plugin__meta">
			<p class="wp-block-advanced-gutenberg-blocks-plugin__rating">
				<span class="wp-block-advanced-gutenberg-blocks-plugin__stars">
					<?php echo $plugin['stars']; ?>
				</span>
				<span class="wp-block-advanced-gutenberg-blocks-plugin__num-rating"><?php echo $plugin['numRatings']; ?></span>
			</p>
			<p class="wp-block-advanced-gutenberg-blocks-plugin__active">
				<span><?php echo $plugin['activeInstalls']; ?></span>
				<?php _e( 'Active Installations', 'advanced-gutenberg-blocks' ) ?>
			</p>
		</div>
		<div class="wp-block-advanced-gutenberg-blocks-plugin__download">
			<a
				href="<?php echo $plugin['downloadLink']; ?>"
				target="_blank"
				class="wp-block-advanced-gutenberg-blocks-plugin__button">
					<?php _e( 'Plugin page', 'advanced-gutenberg-blocks' ) ?>
				</a>
		</div>
	</footer>
</div>
