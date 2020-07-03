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

		const ajaxUrl = new URL( advancedGutenbergBlocksOpenGraph.ajax_url )
		ajaxUrl.searchParams.set( '_ajax_nonce', advancedGutenbergBlocksOpenGraph.nonce )
		ajaxUrl.searchParams.set( 'action', 'agb_fetch_card' )
		ajaxUrl.searchParams.set( 'url', url )

		fetch( ajaxUrl )
		.then( response => response.json() )
		.then( response => {

			if ( ! response.success ) {
				const message = response.data && response.data.message ? response.data.message : __( 'Unknown error' )
				this.setState( { results: __( "⚠️ Error: ", 'advanced-gutenberg-blocks' ) + message } )
			} else {
				this.props.onChange( response.data )
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
