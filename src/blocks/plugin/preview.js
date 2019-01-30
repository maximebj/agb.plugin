const { __ } = wp.i18n
const { Component } = wp.element
const { Spinner } = wp.components

export default class Preview extends Component {

	state = {
		plugin: false,
	}

	getPlugin = () => {

		const { slug } = this.props

		fetch( advancedGutenbergBlocksGlobals.ajaxurl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: 'action=get_plugin&slug=' + slug,
      credentials: 'same-origin'
    } )
    .then( response => response.json() )
    .then( response => {
		
			this.setState( { plugin: response } )

		} )
	}

	componentWillMount() {
    this.getPlugin()
  }

	componentDidUpdate( lastProps, lastStates ) {

		if( lastProps.slug != this.props.slug ) {
			this.getPlugin()
		}
	}

  render() {

		const { downloadLink, image, name, description, activeInstalls, homepage, rating, numRatings, author, stars, icon } = this.state.plugin

		if( ! this.state.plugin ) {

			return (
				<p class="AGB-block-message">
					<Spinner />
					{ __( 'Loading plugin…', 'advanced-gutenberg-blocks' ) }
				</p>
			)

		} else {

			console.log(icon)

	    return (
				<div className="wp-block-advanced-gutenberg-blocks-plugin">
					<div className="wp-block-advanced-gutenberg-blocks-plugin__content">
		        <a href={ downloadLink } className="wp-block-advanced-gutenberg-blocks-plugin__picture">
		          <img src={ icon } alt={ name } />
		        </a>

	          <div className="wp-block-advanced-gutenberg-blocks-plugin__main">
	            <p className="wp-block-advanced-gutenberg-blocks-plugin__title">
								<a href={ downloadLink }>{ name }</a>
							</p>
	            <p className="wp-block-advanced-gutenberg-blocks-plugin__desc">{ description }</p>
							<p className="wp-block-advanced-gutenberg-blocks-plugin__author">
								{ __( 'By', 'advanced-gutenberg-blocks' ) }
								&nbsp;
								<a href={ homepage } target='_blank'>
									{ author }
								</a>
							</p>
	          </div>
	        </div>

					<footer className="wp-block-advanced-gutenberg-blocks-plugin__footer">
						<div className="wp-block-advanced-gutenberg-blocks-plugin__meta">
							<p className="wp-block-advanced-gutenberg-blocks-plugin__rating">
								<span
									className="wp-block-advanced-gutenberg-blocks-plugin__stars"
									dangerouslySetInnerHTML={ { __html: stars } }
								/>
								&nbsp;
								<span className="wp-block-advanced-gutenberg-blocks-plugin__num-rating">
									{ numRatings }
								</span>
							</p>
							<p className="wp-block-advanced-gutenberg-blocks-plugin__active">
								<span>{ activeInstalls }</span>
								&nbsp;
								{ __( 'Active Installations', 'advanced-gutenberg-blocks' ) }
							</p>
						</div>
						<div className="wp-block-advanced-gutenberg-blocks-plugin__download">
							<a
								href={ downloadLink }
								target="_blank"
								className="wp-block-advanced-gutenberg-blocks-plugin__button">
									{ __( 'Plugin page', 'advanced-gutenberg-blocks' ) }
								</a>
						</div>
					</footer>
	      </div>
	    )
		}
  }
}
