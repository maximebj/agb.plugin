import icons from './icons'

const { Component } = wp.element;

const { __ } = wp.i18n;

export default class Preview extends Component {

  constructor( props ) {
    super( props )

    this.state = {
      stars: false,
			installs: ''
    }
  }

  componentWillMount() {
    this.setStars()
		this.formatInstallsNumber()
		this.extractAuthor()
  }

  componentDidUpdate(lastProps, lastStates) {
    if(lastProps.attributes.rating != this.props.attributes.rating) {
      this.setStars()
    }

		if(lastProps.attributes.activeInstalls != this.props.attributes.activeInstalls) {
			this.formatInstallsNumber()
		}

		if(lastProps.attributes.author != this.props.attributes.author) {
			this.extractAuthor()
		}
  }

  setStars() {
    let rating = parseInt(this.props.attributes.rating) / 20
    let floor = Math.floor(rating)

    let max = 5;
    let last = 0;

    let stars = []

    for(let i=0; i < floor; i++) {
      stars.push(
        icons.starFilled
      )
      last++;
    }

    if(floor != rating) {
      stars.push(
        icons.starHalf
      )
      last++;
    }

    for (let i = last; i < max; i++) {
      stars.push(
        icons.starEmpty
      )
    }

    this.setState( { stars: stars } )
  }

	formatInstallsNumber() {
		if ( this.props.attributes.activeInstalls > 1000000 ) {
			this.setState( { installs: __( '1+ Million' ) } )
		}
		else if( this.props.attributes.activeInstalls < 10 ) {
			this.setState( { installs: __( 'Less than 10' ) } )
		}
		else {
			this.setState( { installs: this.props.attributes.activeInstalls+'+' } )
		}
	}

	extractAuthor() {
		this.setState( { author: this.props.attributes.author.replace(/<(?:.|\n)*?>/gm, '') } )
	}

  render() {
    return (
      <div className="wp-block-gutenblocks-plugin">
				<div className="wp-block-gutenblocks-plugin__content">
	        <a href={this.props.attributes.downloadLink} className="wp-block-gutenblocks-plugin__picture">
	          <img src={this.props.attributes.image} alt={this.props.attributes.title} />
	        </a>

          <div className="wp-block-gutenblocks-plugin__main">
            <p className="wp-block-gutenblocks-plugin__title">
							<a href={this.props.attributes.downloadLink}>{this.props.attributes.title}</a>
						</p>
            <p className="wp-block-gutenblocks-plugin__desc">{this.props.attributes.description}</p>
						<p className="wp-block-gutenblocks-plugin__author">
							{ __( 'By' ) }
							&nbsp;
							<a href={this.props.attributes.homepage} target='_blank'>
								{this.state.author}
							</a>
						</p>
          </div>
        </div>

				<footer className="wp-block-gutenblocks-plugin__footer">
					<div className="wp-block-gutenblocks-plugin__meta">
						<p className="wp-block-gutenblocks-plugin__rating">
							<span className="wp-block-gutenblocks-plugin__stars" data-note={this.props.attributes.rating}>
								{this.state.stars}
							</span>
							&nbsp;
							<span className="wp-block-gutenblocks-plugin__num-rating">
								{this.props.attributes.numRatings}
							</span>
						</p>
						<p className="wp-block-gutenblocks-plugin__active" data-installs={this.props.attributes.activeInstalls}>
							<span>{this.state.installs}</span>
							&nbsp;
							{ __( 'Active Installations' ) }
						</p>
					</div>
					<div className="wp-block-gutenblocks-plugin__download">
						<a
							href={this.props.attributes.downloadLink}
							target="_blank"
							className="wp-block-gutenblocks-plugin__button">
								{ __('Plugin page') }
							</a>
					</div>
				</footer>
      </div>
    )
  }

}
