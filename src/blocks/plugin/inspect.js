import SearchPlugin from '../../components/searchplugin'

const { __ } = wp.i18n
const { Component } = wp.element
const { InspectorControls } = wp.blocks
const { PanelBody } = wp.components

export default class Inspector extends Component {

	onChangePlugin = (plugin) => {
		const { setAttributes } = this.props

		setAttributes( {
			title: plugin.name,
			description: plugin.short_description,
			image: this.defineImage(plugin.icons),
			downloadLink: `https://wordpress.org/plugins/${plugin.slug}`,
			activeInstalls: plugin.active_installs,
			rating: plugin.rating,
			author: plugin.author,
			homepage: plugin.homepage,
			numRatings: plugin.num_ratings,
		} )
	}

	defineImage = (icons) => {
		if (icons['2x']) {
			return icons['2x']
		} else if(icons['1x']) {
			return icons['1x']
		} else {
			return icons.default
		}
	}

  render() {
    return (
      <InspectorControls>

        <PanelBody title={ __( 'Search plugin', 'advanced-gutenberg-blocks' ) }>
          <SearchPlugin
						onChange={ (plugin) => this.onChangePlugin( plugin ) }
					/>
        </PanelBody>

      </InspectorControls>
    )
  }

}
