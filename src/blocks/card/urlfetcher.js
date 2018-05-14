import { debounce } from 'throttle-debounce'

const { __ } = wp.i18n
const { Component } = wp.element
const { Placeholder, Spinner, TextControl } = wp.components

export default class URLFetcher extends Component {

	state = {
		results: false,
	}

	fetchURL = debounce( 300, url => {

		if( url.length < 10) {
      return
    }

		this.setState( { results: __( 'Fetching website...', 'advanced-gutenberg-blocks' ) } )

		fetch(
			`https://opengraph.io/api/1.0/site/${encodeURIComponent(url)}?app_id=${advancedGutenbergBlocksOpenGraph.apiKey}`
		)
		.then( response => response.json() )
		.then( response => {

			if ( response.error ) {
				this.setState( { results: __( "⚠️ Error: ", 'advanced-gutenberg-blocks' ) + response.error.message } )

			// Fallback for non OG compatible website
		} else if ( response.openGraph.error ) {
				this.props.onChange( response.hybridGraph )
			} else {

				if ( ! response.openGraph.image && response.hybridGraph.image ) {
					response.openGraph.image = response.hybridGraph.image
				}

				this.props.onChange( response.openGraph )
			}

		} )
	} )

  render() {

		const { isSelected } = this.props

    return (
			<Placeholder
				icon="admin-site"
				label={ __( "Website card preview", 'advanced-gutenberg-blocks' ) }
			>
				<TextControl
					type="url"
					onChange={ value => this.fetchURL( value ) }
					placeHolder={ __('Paste URL here', 'advanced-gutenberg-blocks' ) }
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
