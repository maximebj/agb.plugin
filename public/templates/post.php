<?php defined( 'ABSPATH' ) || exit; ?>
<div class="wp-block-advanced-gutenberg-blocks-post<?php echo esc_attr($customClass); ?>">
	<?php if( $image ): ?>
		<a href="<?php the_permalink(); ?>" class="wp-block-advanced-gutenberg-blocks-post__image" style="background-image: url('<?php echo esc_url($image); ?>')">
		</a>
	<?php endif; ?>
	<div class="wp-block-advanced-gutenberg-blocks-post__content">
		<p class="wp-block-advanced-gutenberg-blocks-post__title">
			<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
		</p>
		<p class="wp-block-advanced-gutenberg-blocks-post__metas">
			<em>
				<?php if( $category ): ?>
					<span> <?php esc_html__( 'In', 'advanced-gutenberg-blocks' ); ?> <?php echo esc_html($category); ?> </span>
				<?php endif; ?>
				<?php if( $author ): ?>
					<span> <?php esc_html__( 'By', 'advanced-gutenberg-blocks' ); ?> <?php echo esc_html($author); ?> </span>
				<?php endif; ?>
			</em>
		</p>
		<div class="wp-block-advanced-gutenberg-blocks-post__excerpt">
			<p>
				<?php the_excerpt(); ?>
			</p>
		</div>
		<p class="wp-block-advanced-gutenberg-blocks-product__actions">
			<a href="<?php the_permalink(); ?>" class="wp-block-advanced-gutenberg-blocks-post__button">
				<?php esc_html__( 'Read more', 'advanced-gutenberg-blocks' ); ?>
			</a>
		</p>
	</div>
</div>
