import "./style.scss"
import "./editor.scss"

import Tools from './tools'
import Inspector from "./inspect"
import Gmap from "./gmap"

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { Fragment } = wp.element

export default registerBlockType(
	'advanced-gutenberg-blocks/gmap',
	{
	title: __( "Google Map", 'advanced-gutenberg-blocks' ),
	description: __( "Display a customizable Google map", 'advanced-gutenberg-blocks' ),
	category: 'agb',
	icon: { background: '#2F313A', foreground: '#DEBB8F', src: "location-alt" },
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
		},
		alignment: {
			type: 'string',
		},
	},
	useOnce: true,
	getEditWrapperProps( attributes ) {
		const { alignment } = attributes;
		if ( [ 'wide', 'full', 'left', 'right' ].indexOf( alignment ) !== -1 ) {
			return { 'data-align': alignment };
		}
	},
	edit: props => {

		const { attributes, setAttributes } = props
		const { alignment } = attributes

		// If API key is not yet provided
		if ( typeof advancedGutenbergBlocksGmap.error !== "undefined" ) {
			return (
				<p class="AGB-block-message">
					{__( "⚠️ You need to provide an API key in ", 'advanced-gutenberg-blocks' )}
					<a
						target='_blank'
						href={ `${advancedGutenbergBlocksGlobals.adminurl}admin.php?page=advanced-gutenberg-blocks-manager&modal=advanced-gutenberg-blocks-gmap` }
					>
						{__( "Blocks > Installed Blocks > Google Map", 'advanced-gutenberg-blocks' )}
					</a>
				</p>
			)
		}

		return (
			<Fragment>
				<Tools { ...{ alignment, setAttributes } } />
				<Inspector { ...{ attributes, setAttributes } } />

				<div className="wp-block-advanced-gutenberg-blocks-gmap" dataAlign={ alignment }>
					<Gmap { ...{ attributes } } />
				</div>
			</Fragment>
		)
	},
	save: props => {
		return null
	}
})
