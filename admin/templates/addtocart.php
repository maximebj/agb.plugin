<p class="wp-block-gutenblocks-addtocart">
  <a style="background-color:" class="wp-block-gutenblocks-addtocart__button" href={ props.attributes.url }>
    <?php if ( $attributes['has_icon'] ): ?>
      <span class="dashicons dashicons-<?php echo $attributes['icon']; ?>" ></span>
    <?php endif; ?>
    <span class="wp-block-gutenblocks-addtocart__label"><?php echo $attributes['label']; ?></span>
    •
    <span class="wp-block-gutenblocks-addtocart__price"><?php echo $product['price']; ?></span>
    <span class="wp-block-gutenblocks-addtocart__sale-price"><?php echo $product['regular_price']; ?></span>
  </a>
</p>
