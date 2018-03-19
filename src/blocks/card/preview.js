const { Component } = wp.element

export default class Preview extends Component {

  constructor( props ) {
    super( props )
  }

  render() {
    return (
			<div className="wp-block-gutenblocks-card">
				<a href={this.props.attributes.url} className="wp-block-gutenblocks-card__link"></a>
				<img className="wp-block-gutenblocks-card__image" src={this.props.attributes.image} alt={this.props.attributes.title} />
				<div className="wp-block-gutenblocks-card__content">
					<p className="wp-block-gutenblocks-card__title">{this.props.attributes.title}</p>
					<p className="wp-block-gutenblocks-card__description">{this.props.attributes.description}</p>
					<p className="wp-block-gutenblocks-card__url">{this.props.attributes.siteUrl}</p>
				</div>
			</div>
    )
  }
}
