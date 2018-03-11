import classnames from 'classnames'

const { Component } = wp.element

const { __ } = wp.i18n

export default class Preview extends Component {

  constructor( props ) {
    super( props )
  }

  render() {

		const post = this.props.post.data

    return (
			!! product ? (
				<div className="wp-block-gutenblocks-post">

				</div>
			) : (
				<p class="gutenblocks-block-message">{ __( 'Loading post...' ) }</p>
			)
    )
  }
}
