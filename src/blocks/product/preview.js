const { Component } = wp.element;

const { __ } = wp.i18n;

export default class Preview extends Component {

  constructor( props ) {
    super( props )
  }

  render() {
    return (
			!! typeof this.props.product.data !== 'undefined' ? (
				<p> coucou </p>
			) : (
				<p class="gutenblocks-block-message">{ __( 'Loading datas...' ) }</p>
			)
    )
  }

}
