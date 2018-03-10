const { Component } = wp.element;

const { __ } = wp.i18n;

export default class Preview extends Component {

  constructor( props ) {
    super( props )
  }

  render() {

		const product = this.props.product.data

    return (
			!! typeof product !== 'undefined' ? (
				<div>
					<h2>{ product.name }</h2>
					<div>{ product.description }</div>
					<p> {product.price } </p>
					<p> {product.sale_price } </p>
					<a href={ product.permalink }> voir produit</a>
					<a href={ '/?add-to-cart=' + product.id }> ajouter au panier</a>
				</div>
			) : (
				<p class="gutenblocks-block-message">{ __( 'Loading datas...' ) }</p>
			)
    )
  }

}
