import "./style.scss";
import "./editor.scss";

import classnames from "classnames";
import Inspector from "./inspect";

const { __ } = wp.i18n;
const { registerBlockType, createBlock } = wp.blocks;
const { RichText } = wp.editor;
const { Fragment } = wp.element;

export default registerBlockType("advanced-gutenberg-blocks/button", {
	title: __("Button", "advanced-gutenberg-blocks"),
	description: __("An advanced kind of button.", "advanced-gutenberg-blocks"),
	category: "agb",
	icon: { background: "#2F313A", foreground: "#DEBB8F", src: "carrot" },
	keywords: [
		__("button", "advanced-gutenberg-blocks"),
		__("cta", "advanced-gutenberg-blocks")
	],
	attributes: {
		label: {
			type: "string",
			source: "text",
			selector: "a"
		},
		url: {
			source: "attribute",
			attribute: "href",
			selector: "a"
		},
		isBlank: {
			type: "boolean",
			default: true
		},
		buttonClass: {
			default: "start"
		}
	},
	edit: props => {
		const {
			attributes: { url, buttonClass, isBlank, label },
			setAttributes
		} = props;

		return (
			<Fragment>
				<Inspector
					{...{
						url,
						isBlank,
						buttonClass,
						setAttributes
					}}
				/>

				<div className="wp-block-advanced-gutenberg-blocks-button">
					<div
						className={classnames(
							"editor-button",
							`button--${buttonClass}`
						)}
					>
						<RichText
							tagname="span"
							placeholder="Inserisci testo"
							value={label}
							onChange={label => setAttributes({ label })}
						/>
					</div>
				</div>
			</Fragment>
		);
	},
	save: props => {
		const { buttonClass, label, url, isBlank } = props.attributes;

		return (
			<div className="wp-block-advanced-gutenberg-blocks-button">
				<a
					href={url}
					target={isBlank && "_blank"}
					className={classnames("button", `button--${buttonClass}`)}
					data-type={buttonClass}
				>
					<span>{label}</span>
				</a>
			</div>
		);
	}
});
