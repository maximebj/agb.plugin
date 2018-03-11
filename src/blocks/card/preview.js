const { Component } = wp.element

const { __ } = wp.i18n

export default class Preview extends Component {

  constructor( props ) {
    super( props )
  }

  render() {
    return (
			<div className="wp-block-gutenblocks-linkpreview">
				<a href={this.props.attributes.url} className="wp-block-gutenblocks-linkpreview__link"></a>
				<img className="wp-block-gutenblocks-linkpreview__image" src={this.props.attributes.image} alt={this.props.attributes.title} />
				<div className="wp-block-gutenblocks-linkpreview__content">
					<h2 className="wp-block-gutenblocks-linkpreview__title">{this.props.attributes.title}</h2>
					<p className="wp-block-gutenblocks-linkpreview__description">{this.props.attributes.description}</p>
					<p className="wp-block-gutenblocks-linkpreview__url">{this.props.attributes.siteUrl}</p>
				</div>
			</div>
    )
  }
}
