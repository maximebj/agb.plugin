import {debounce} from 'throttle-debounce'

const { Component } = wp.element;

const { __ } = wp.i18n;

const {
  Dashicon,
	IconButton,
} = wp.components;

export default class URLFetcher extends Component {

  constructor( props ) {
    super( props )

		this.onSubmitForm = this.onSubmitForm.bind( this )
    this.fetchURL = debounce( 300, this.fetchURL )
  }

  onSubmitForm( event ) {
		event.preventDefault()

		const form = event.currentTarget
		const url = form.url.value

		console.log(url)

		this.fetchURL( url )
  }

	fetchURL( site ) {

		if( site.length < 10) {
      return
    }

		fetch(
			`https://opengraph.io/api/1.0/site/${encodeURIComponent(site)}?app_id=5a9e67e4929fbe0b005d4dd8`
		)
		.then( response => response.json() )
		.then( response => {
			const OG = response.openGraph

			console.log(OG)
			this.props.onURLFetched( OG );
		})
	}

  render() {
    return (
			<form
        key="form-link"
        onSubmit={ this.onSubmitForm }
      >
				<Dashicon icon='admin-links' />
				<input
					name="url"
					type="url"
					id="url"
					placeholder={ __('Type URL or paste') }
					focus={this.props.focus}
				/>
				<IconButton
          icon="editor-break"
          label={ __( 'Apply' ) }
          type="submit"
        />
			</form>
    );
  }

}
