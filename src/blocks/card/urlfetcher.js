import { debounce } from 'throttle-debounce'

const { __ } = wp.i18n
const { Component } = wp.element
const { UrlInput } = wp.blocks
const { Placeholder, Spinner } = wp.components

export default class URLFetcher extends Component {

	state = {
		results: false,
	}

	fetchURL = debounce( 300, url => {

		if( url.length < 10) {
      return
    }

		this.setState( { results: __( 'Fetching website...', 'advanced-gutenberg-blocks' ) } )

		fetch(advancedGutenbergBlocksGlobals.ajaxurl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: 'action=fetch_site&url=' + encodeURIComponent( url ),
      credentials: 'same-origin'
    })
    .then( site => site.json() )
    .then( site => {

			if ( site.error == 'sitenotfound') {
				this.setState( { results: __( "⚠️ Error: Couldn't reach website", 'advanced-gutenberg-blocks' ) } )
			} else {
				this.props.onChange( site )
			}

    } )
		.catch( error => { } )

	} )

  render() {

		const { isSelected } = this.props

    return (
			<Placeholder
				icon="admin-site"
				label={ __( "Website card preview", 'advanced-gutenberg-blocks' ) }
			>
				<UrlInput
					onChange={ value => this.fetchURL( value ) }
				/>

				{ this.state.results && (
					<p>
						<Spinner />
						{ this.state.results }
					</p>
				) }
			</Placeholder>
    )
  }
}
