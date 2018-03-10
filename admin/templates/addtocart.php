<p class="wp-block-gutenblocks-addtocart">
  <a
    style={ {
      backgroundColor: props.attributes.backgroundColor
    } }
    class="wp-block-gutenblocks-addtocart__button"
    href={ props.attributes.url }
    data-type={ props.attributes.buttonClass }
  >
    { !! props.attributes.hasIcon && (
      <span
        class={ classnames('dashicons', `dashicons-${props.attributes.icon}`) }
        data-icon={ props.attributes.icon }
      >
      </span>
      )
    }
    <span class="wp-block-gutenblocks-addtocart__label">{ props.attributes.label }</span>
    •
    <span class="wp-block-gutenblocks-addtocart__price">{ props.attributes.price }</span>
    <span class="wp-block-gutenblocks-addtocart__sale-price">{ props.attributes.salePrice }</span>
  </a>
</p>
