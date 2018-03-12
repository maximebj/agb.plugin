import classnames from 'classnames'

const { Component } = wp.element

const { __ } = wp.i18n

export default class Preview extends Component {

  constructor( props ) {
    super( props )

		this.state = {
			featuredImage: false,
		}
  }

  render() {

		const post = this.props.post.data

		// Featured image
		if ( post && post.featured_media ) {

			const query = new wp.api.models.Media( { id: post.featured_media } )

			query.fetch().then( image => {
				this.setState( { featuredImage: image.media_details.sizes.medium.source_url } )
			} )
		}

		// Get HTML Excerpt
		const getExcerpt = () => {
  		return {__html: post.excerpt.rendered }
		}

		console.log(post)

    return (
			!! post ? (
				<div className="wp-block-gutenblocks-post">
					{ !! this.state.featuredImage && (
						<a
							href={ post.link }
							className="wp-block-gutenblocks-post__image"
							style={ {
								backgroundImage: `url(${this.state.featuredImage})`
							} }
						/>
					) }
					<div className="wp-block-gutenblocks-post__content">
						<p className="wp-block-gutenblocks-post__title">
							<a href={ post.link }>{ post.title.rendered }</a>
						</p>
						<div
							className="wp-block-gutenblocks-post__excerpt"
							dangerouslySetInnerHTML={ getExcerpt() }
						/>
						<p class="wp-block-gutenblocks-product__actions">
							<a href={ post.link } className="wp-block-gutenblocks-post__button">
								{ __( 'Read more' ) }
							</a>
						</p>
					</div>
				</div>
			) : (
				<p class="gutenblocks-block-message">{ __( 'Loading post...' ) }</p>
			)
    )
  }
}
