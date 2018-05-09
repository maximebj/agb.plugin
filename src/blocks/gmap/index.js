import "./style.scss"
import "./editor.scss"

import Inspector from "./inspect"
import Gmap from "./gmap"

const { registerBlockType } = wp.blocks
const { __ } = wp.i18n

export default registerBlockType(
	'advanced-gutenberg-blocks/gmap',
	{
	title: __( "Google Map", "advanced-gutenberg-blocks" ),
	description: __( "Display a customizable Google map", "advanced-gutenberg-blocks" ),
	category: "common",
	icon: "location-alt",
	keywords: [
    __("gmap", "advanced-gutenberg-blocks" )
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

		const onChangeAddress = geocodedObj => {
			props.setAttributes({
				latitude: geocodedObj.geometry.location.lat()
			})
			props.setAttributes({
				longitude: geocodedObj.geometry.location.lng()
			})
			props.setAttributes({ address: geocodedObj.formatted_address })
		}

		const onChangeName = event => {
			props.setAttributes({ name: event.target.value })
		}

		const onChangeZoom = value => {
			props.setAttributes({ zoom: value })
		}

		const onChangeHeight = value => {
			props.setAttributes({ height: value })
		}

		const onChangeStyle = value => {
			props.setAttributes({ style: value })
		}

		return [
			!! props.focus && (
				<Inspector
					{...{
						onChangeAddress,
						onChangeName,
						onChangeZoom,
						onChangeHeight,
						onChangeStyle,
						...props
					}}
				/>
			),
			<div className="wp-block-advanced-gutenberg-blocks-gmap">
				{ ! props.attributes.address && props.focus && typeof advancedGutenbergBlocksGmap == "undefined" && (
						<p class="advanced-gutenberg-blocks-block-message">
							{__( "Type your address on the inspector", "advanced-gutenberg-blocks" )}
						</p>
					)}
				{ typeof advancedGutenbergBlocksGmap === "undefined" ? (
					<Gmap {...props} />
				) : (
					<p class="advanced-gutenberg-blocks-block-message">
						{__( "⚠️ You need to provide an API key in ", "advanced-gutenberg-blocks" )}
						<a href="/wp-admin/admin.php?page=advanced-gutenberg-blocks-installed#blockgooglemap">
							{__( "Blocks > Installed Blocks > Google Map", "advanced-gutenberg-blocks" )}
						</a>
					</p>
				)}
			</div>
		]
	},
	save: props => {
		return null
	}
})
