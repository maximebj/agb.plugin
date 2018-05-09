<div class="wp-block-advanced-gutenberg-blocks-post">
	<?php if( $image ): ?>
		<a href="<?php echo $link; ?>" class="wp-block-advanced-gutenberg-blocks-post__image" style="background-image: url('<?php echo $image; ?>')">
		</a>
	<?php endif; ?>
	<div class="wp-block-advanced-gutenberg-blocks-post__content">
		<p class="wp-block-advanced-gutenberg-blocks-post__title">
			<a href="<?php echo $link; ?>"><?php echo $post->post_title; ?></a>
		</p>
		<p class="wp-block-advanced-gutenberg-blocks-post__metas">
			<em>
				<?php if( $category ): ?>
					<span> <?php _e( 'In', 'advanced-gutenberg-blocks' ); ?> <?php echo $category; ?> </span>
				<?php endif; ?>
				<?php if( $author ): ?>
					<span> <?php _e( 'By', 'advanced-gutenberg-blocks' ); ?> <?php echo $author; ?> </span>
				<?php endif; ?>
			</em>
		</p>
		<div class="wp-block-advanced-gutenberg-blocks-post__excerpt">
			<p>
				<?php echo $excerpt; ?>
			</p>
		</div>
		<p class="wp-block-advanced-gutenberg-blocks-product__actions">
			<a href="<?php echo $link; ?>" class="wp-block-advanced-gutenberg-blocks-post__button">
				<?php _e( 'Read more', 'advanced-gutenberg-blocks' ); ?>
			</a>
		</p>
	</div>
</div>
