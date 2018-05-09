import {debounce} from 'throttle-debounce'

const { Component } = wp.element

const { __ } = wp.i18n

const {
  Dashicon,
	IconButton,
} = wp.components

export default class URLFetcher extends Component {

  constructor( props ) {
    super( props )

		this.state = {
			results: false,
		}

		this.onSubmitForm = this.onSubmitForm.bind( this )
    this.fetchURL = debounce( 300, this.fetchURL )
  }

  onSubmitForm( event ) {
		event.preventDefault()

		const form = event.currentTarget
		const url = form.url.value

		this.fetchURL( url )
  }

	fetchURL( site ) {

		if( site.length < 10) {
      return
    }

		this.setState( { results: __( 'Fetching website...', 'advanced-gutenberg-blocks' ) } )

		fetch(advancedGutenbergBlocksGlobals.ajaxurl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: 'action=fetch_site&url=' + encodeURIComponent( site ),
      credentials: 'same-origin'
    })
    .then( site => site.json() )
    .then( site => {

			if ( site.error == 'sitenotfound') {
				this.setState( { results: __( "⚠️ Error: Couldn't reach website", 'advanced-gutenberg-blocks' ) } )
			} else {
				this.props.onURLFetched( site )
			}

    } )
		.catch( error => { } )

	}

  render() {
    return (
			<div>
				<form
	        key="form-link"
	        onSubmit={ this.onSubmitForm }
					className="wp-block-advanced-gutenberg-blocks-card__urlfetcher"
	      >
					<Dashicon icon='admin-links' />
					<input
						name="url"
						type="url"
						id="url"
						placeholder={ __( 'Type URL or paste', 'advanced-gutenberg-blocks' ) }
						focus={this.props.focus}
					/>
					<IconButton
	          icon="editor-break"
	          label={ __( 'Apply', 'advanced-gutenberg-blocks' ) }
	          type="submit"
	        />
				</form>

				{ this.state.results && (
					<p className="advanced-gutenberg-blocks-block-message">{ this.state.results }</p>
				) }
			</div>
    )
  }
}
