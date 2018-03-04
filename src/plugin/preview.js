const { Component } = wp.element;

const { __ } = wp.i18n;

export default class Preview extends Component {

  constructor( props ) {
    super( props )

    this.state = {
      stars: false
    }
  }

  componentWillMount() {
    this.setStars()
  }

  componentDidUpdate(lastProps, lastStates) {
    console.log(lastProps.attributes.rating)
    if(lastProps.attributes.rating != this.props.attributes.rating) {
      this.setStars()
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
        <span class="dashicons dashicons-star-filled"></span>
      )
      last++;
    }

    if(floor != rating) {
      stars.push(
        <span class="dashicons dashicons-star-half"></span>
      )
      last++;
    }

    for (let i = last; i < max; i++) {
      stars.push(
        <span class="dashicons dashicons-star-empty"></span>
      )
    }

    this.setState( { stars: stars } )

  }

  render() {
    return (
      <div className="plugin">
        <div className="plugin__picture">
          <img src={this.props.attributes.image} alt={this.props.attributes.title} />
        </div>
        <div className="plugin__content">
          <div className="plugin__main">
            <p className="plugin__title"><a href={this.props.attributes.downloadLink}>{this.props.attributes.title}</a></p>
            <p className="plugin__desc">{this.props.attributes.description}</p>
          </div>
          <div className="plugin__meta">
            <a href={this.props.attributes.downloadLink} target="_blank" className="plugin__button button button--main">Télécharger</a>
            <p className="plugin__meta__active">Installations actives : <span>{this.props.attributes.activeInstalls}</span></p>
            <p>Note :
              <span className="plugin__rating" data-note={this.props.attributes.rating}>
                {this.state.stars}
              </span>
            </p>
          </div>
        </div>
      </div>
    )
  }

}
