<?php defined( 'ABSPATH' ) || exit; ?>
<p class="wp-block-advanced-gutenberg-blocks-addtocart<?php echo $customClass; ?>">
  <a style="background-color: <?php echo $attributes['backgroundColor']; ?>" class="wp-block-advanced-gutenberg-blocks-addtocart__button" href="<?php echo $add_to_cart_url; ?>">
    <?php if ( $has_icon ): ?>
      <span class="dashicons dashicons-<?php echo $attributes['icon']; ?>" ></span>
    <?php endif; ?>
    <span class="wp-block-advanced-gutenberg-blocks-addtocart__label"><?php echo $attributes['label']; ?></span>
    <span class="wp-block-advanced-gutenberg-blocks-addtocart__separator"> • </span>
		<span class="wp-block-advanced-gutenberg-blocks-addtocart__price">
			<?php if($product->get_sale_price() == ""): ?>
				<?php echo wc_price( $product->get_price() ); ?></span>
			<?php else: ?>
		    <?php echo wc_price( $product->get_price() ); ?>
				<del class="wp-block-advanced-gutenberg-blocks-addtocart__sale"><?php echo wc_price( $product->get_regular_price() ); ?></del>
			<?php endif; ?>
		</span>
  </a>
</p>
