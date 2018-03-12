import classnames from 'classnames'

const { Component } = wp.element

const { __ } = wp.i18n

export default class Preview extends Component {

  constructor( props ) {
    super( props )

		this.state = {
			featuredImage: false,
			post: false,
			author: false,
			category: false,
		}
  }

	getPost() {
		const postQuery = new wp.api.models.Post( { id: this.props.attributes.postID } );

		// Fetch post via API
		postQuery.fetch().then( post => {
			this.setState( { post: post } )

			// Get author
			postQuery.getAuthorUser().done( author => {
				this.setState( { author: author.attributes.name } )
			} )

			// Get Categories
			postQuery.getCategories().done( categories => {
				this.setState( { category: categories[0].name } )
			} )

			// Get Featured Image
			postQuery.getFeaturedMedia().done( media => {
				this.setState( { featuredImage: media.attributes.media_details.sizes.medium.source_url } )
			} )

		} )
	}

	componentWillMount() {
    this.getPost()
  }

	componentDidUpdate(lastProps, lastStates) {

		if( lastProps.attributes.postID != this.props.attributes.postID ) {
			this.getPost()
		}
	}

  render() {

		// Get HTML Excerpt
		const getExcerpt = () => {
  		return {__html: this.state.post.excerpt.rendered }
		}

    return (
			!! this.state.post ? (
				<div className="wp-block-gutenblocks-post">
					{ !! this.state.featuredImage && this.props.attributes.showImage && (
						<a
							href={ this.state.post.link }
							className="wp-block-gutenblocks-post__image"
							style={ {
								backgroundImage: `url(${this.state.featuredImage})`
							} }
						/>
					) }
					<div className="wp-block-gutenblocks-post__content">
						<p className="wp-block-gutenblocks-post__title">
							<a href={ this.state.post.link }>{ this.state.post.title.rendered }</a>
						</p>
						<p className="wp-block-gutenblocks-post__metas">
							<em>
								{ !! this.state.category && this.props.attributes.showCategory && (
								<span> { __( 'In' ) + ' ' + this.state.category } </span>
								) }
								{ !! this.state.author && this.props.attributes.showAuthor && (
								<span> { __( 'By' ) + ' ' + this.state.author } </span>
								) }
							</em>
						</p>
						<div
							className="wp-block-gutenblocks-post__excerpt"
							dangerouslySetInnerHTML={ getExcerpt() }
						/>
						<p class="wp-block-gutenblocks-product__actions">
							<a href={ this.state.post.link } className="wp-block-gutenblocks-post__button">
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
