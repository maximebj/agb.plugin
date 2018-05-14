const { Component } = wp.element

export default class Preview extends Component {

  render() {

		const { attributes: { url, title, image, description, siteUrl } } = this.props

    return (
			<div className="wp-block-advanced-gutenberg-blocks-card">
				<a href={ url } className="wp-block-advanced-gutenberg-blocks-card__link" onClick={ e => e.preventDefault() }></a>
				{ image && (
					<img className="wp-block-advanced-gutenberg-blocks-card__image" src={ image } alt={ title } />
				) }
				<div className="wp-block-advanced-gutenberg-blocks-card__content">
					<p className="wp-block-advanced-gutenberg-blocks-card__title">{ title }</p>
					<p className="wp-block-advanced-gutenberg-blocks-card__description">{ description }</p>
					<p className="wp-block-advanced-gutenberg-blocks-card__url">{ url }</p>
				</div>
			</div>
    )
  }
}
