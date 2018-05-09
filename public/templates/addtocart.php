<p class="wp-block-advanced-gutenberg-blocks-addtocart">
  <a style="background-color: <?php echo $attributes['backgroundColor']; ?>" class="wp-block-advanced-gutenberg-blocks-addtocart__button" href="<?php echo $add_to_cart_url; ?>">
    <?php if ( $attributes['hasIcon'] !== false ): ?>
      <span class="dashicons dashicons-<?php echo $attributes['icon']; ?>" ></span>
    <?php endif; ?>
    <span class="wp-block-advanced-gutenberg-blocks-addtocart__label"><?php echo $attributes['label']; ?></span>
    <span class="wp-block-advanced-gutenberg-blocks-addtocart__separator"> • </span>
		<span class="wp-block-advanced-gutenberg-blocks-addtocart__price">
			<?php if($product->get_sale_price() == ""): ?>
				<?php echo $cb.$product->get_price().$ca; ?></span>
			<?php else: ?>
		    <?php echo $cb.$product->get_price().$ca; ?>
				<del class="wp-block-advanced-gutenberg-blocks-addtocart__sale"><?php echo $cb.$product->get_regular_price().$ca; ?></del>
			<?php endif; ?>
		</span>
  </a>
</p>
