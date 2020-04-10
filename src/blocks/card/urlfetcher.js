import { debounce } from 'throttle-debounce'

import { __ } from '@wordpress/i18n'
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

			} else if ( response.openGraph.error ) {

				// Fallback for non OG datas
				this.props.onChange( response.hybridGraph )
			} else {

				// Sometimes OG datas has no image, we get it on hybrid datas
				if ( ! response.openGraph.image && response.hybridGraph.image ) {
					response.openGraph.image = response.hybridGraph.image
				}

				// Sometimes OG datas has no description, we get it on hybrid datas
				if ( ! response.openGraph.description && response.hybridGraph.description ) {
					response.openGraph.description = response.hybridGraph.description
				}

				// Sometimes Og data provides an object of images
				if( typeof response.openGraph.image === "object" ) {
					response.openGraph.image = response.openGraph.image.url
				}

				this.props.onChange( response.openGraph )
			}

		} )
	} )

  render() {

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
					<div className="AGB-fetch">
						<p>{ this.state.results } <Spinner /></p>
					</div>
				) }
			</Placeholder>
    )
  }
}
