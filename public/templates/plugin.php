<?php defined( 'ABSPATH' ) || exit; ?>
<div class="wp-block-advanced-gutenberg-blocks-plugin<?php echo esc_attr($customClass); ?>">
	<div class="wp-block-advanced-gutenberg-blocks-plugin__content">
		<a href="<?php echo esc_url($plugin['downloadLink']); ?>" class="wp-block-advanced-gutenberg-blocks-plugin__picture">
			<img src="<?php echo esc_url($plugin['icon']); ?>" alt="<?php echo esc_attr($plugin['name']); ?>" />
		</a>

		<div class="wp-block-advanced-gutenberg-blocks-plugin__main">
			<p class="wp-block-advanced-gutenberg-blocks-plugin__title">
				<a href="<?php echo esc_url($plugin['downloadLink']); ?>"><?php echo esc_html($plugin['name']); ?></a>
			</p>
			<p class="wp-block-advanced-gutenberg-blocks-plugin__desc"><?php echo esc_html($plugin['description']); ?></p>
			<p class="wp-block-advanced-gutenberg-blocks-plugin__author">
				<?php __( 'By', 'advanced-gutenberg-blocks' ) ?>
				<a href="<?php echo esc_url($plugin['homepage']); ?>" target='_blank'>
					<?php echo esc_html($plugin['author']); ?>
				</a>
			</p>
		</div>
	</div>

	<footer class="wp-block-advanced-gutenberg-blocks-plugin__footer">
		<div class="wp-block-advanced-gutenberg-blocks-plugin__meta">
			<p class="wp-block-advanced-gutenberg-blocks-plugin__rating">
				<span class="wp-block-advanced-gutenberg-blocks-plugin__stars">
					<?php echo esc_html($plugin['stars']); ?>
				</span>
				<span class="wp-block-advanced-gutenberg-blocks-plugin__num-rating"><?php echo esc_html($plugin['numRatings']); ?></span>
			</p>
			<p class="wp-block-advanced-gutenberg-blocks-plugin__active">
				<span><?php echo esc_html($plugin['activeInstalls']); ?></span>
				<?php esc_html__( 'Active Installations', 'advanced-gutenberg-blocks' ) ?>
			</p>
		</div>
		<div class="wp-block-advanced-gutenberg-blocks-plugin__download">
			<a
				href="<?php echo esc_url($plugin['downloadLink']); ?>"
				target="_blank"
				class="wp-block-advanced-gutenberg-blocks-plugin__button">
					<?php esc_html__( 'Plugin page', 'advanced-gutenberg-blocks' ) ?>
				</a>
		</div>
	</footer>
</div>
