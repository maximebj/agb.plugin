import "./style.scss"
import "./editor.scss"

import Inspector from "./inspect"
import Gmap from "./gmap"

const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { Fragment } = wp.element

export default registerBlockType(
	'advanced-gutenberg-blocks/gmap',
	{
	title: __( "Google Map", 'advanced-gutenberg-blocks' ),
	description: __( "Display a customizable Google map", 'advanced-gutenberg-blocks' ),
	category: "common",
	icon: "location-alt",
	keywords: [
    __("gmap", 'advanced-gutenberg-blocks' )
	],
	attributes: {
		address: {
			type: "string",
			default: "Paris"
		},
		name: {
			type: "string",
			default: "",
		},
		latitude: {
			type: "float",
			default: 48.8566,
		},
		longitude: {
			type: "float",
			default: 2.3522,
		},
		zoom: {
			type: "integer",
			default: 15,
		},
		height: {
			type: "integer",
			default: 400
		},
		style: {
			type: "string",
			default: "default"
		}
	},
	edit: props => {

		const { attributes, setAttributes, isSelected } = props
		const { address, name, zoom, height, style } = attributes

		return (
			<Fragment>
				<Inspector { ...{ attributes, setAttributes } } />

				<div className="wp-block-advanced-gutenberg-blocks-gmap">
					{ typeof advancedGutenbergBlocksGmap === "undefined" ? (
						<Gmap { ...{ attributes } } />
					) : (
						<p class="AGB-block-message">
							{__( "⚠️ You need to provide an API key in ", 'advanced-gutenberg-blocks' )}
							<a href="/wp-admin/admin.php?page=advanced-gutenberg-blocks-installed#blockgooglemap">
								{__( "Blocks > Installed Blocks > Google Map", 'advanced-gutenberg-blocks' )}
							</a>
						</p>
					) }
				</div>
			</Fragment>
		)
	},
	save: props => {
		return null
	}
})
