import icons from './icons'

const { Component } = wp.element

const { __ } = wp.i18n

export default class Preview extends Component {

	stars = false
	installs = ''
	author = ''

	setStars = () => {
    let rating = parseInt( this.props.attributes.rating ) / 20
    let floor = Math.floor( rating )

    let max = 5
    let last = 0

    let stars = []

    for( let i=0; i < floor; i++ ) {
      stars.push( icons.starFilled )
      last++
    }

    if( floor != rating ) {
      stars.push( icons.starHalf )
      last++
    }

    for (let i = last; i < max; i++) {
      stars.push( icons.starEmpty )
    }

    this.stars = stars
  }

	formatInstallsNumber = () => {

		const { activeInstalls } = this.props.attributes

		if ( activeInstalls > 1000000 ) {
			this.installs = __( '1+ Million', 'advanced-gutenberg-blocks' )
		}
		else if( activeInstalls < 10 ) {
			this.installs = __( 'Less than 10', 'advanced-gutenberg-blocks' )
		}
		else {
			this.installs = activeInstalls + '+'
		}
	}

	extractAuthor = () => {
		this.author = this.props.attributes.author.replace(/<(?:.|\n)*?>/gm, '')
	}

  componentWillMount() {
    this.setStars()
		this.formatInstallsNumber()
		this.extractAuthor()
  }

  componentDidUpdate( lastProps, lastStates ) {
    if( lastProps.attributes.rating != this.props.attributes.rating ) {
      this.setStars()
    }

		if( lastProps.attributes.activeInstalls != this.props.attributes.activeInstalls ) {
			this.formatInstallsNumber()
		}

		if( lastProps.attributes.author != this.props.attributes.author ) {
			this.extractAuthor()
		}
  }

  render() {

		const { downloadLink, image, title, description, activeInstalls, homepage, rating, numRatings } = this.props.attributes
		const { author, stars, installs } = this.state

    return (
      <div className="wp-block-advanced-gutenberg-blocks-plugin">
				<div className="wp-block-advanced-gutenberg-blocks-plugin__content">
	        <a href={ downloadLink } className="wp-block-advanced-gutenberg-blocks-plugin__picture">
	          <img src={ image} alt={ title } />
	        </a>

          <div className="wp-block-advanced-gutenberg-blocks-plugin__main">
            <p className="wp-block-advanced-gutenberg-blocks-plugin__title">
							<a href={ downloadLink }>{ title }</a>
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
							<span className="wp-block-advanced-gutenberg-blocks-plugin__stars" data-note={ rating }>
								{ stars }
							</span>
							&nbsp;
							<span className="wp-block-advanced-gutenberg-blocks-plugin__num-rating">
								{ numRatings }
							</span>
						</p>
						<p className="wp-block-advanced-gutenberg-blocks-plugin__active" data-installs={ activeInstalls }>
							<span>{ installs }</span>
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
