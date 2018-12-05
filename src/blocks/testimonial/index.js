import "./style.scss";
import "./editor.scss";

import classnames from "classnames";

import Inspector from "./inspect";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.editor;
const { Fragment } = wp.element;

export default registerBlockType("advanced-gutenberg-blocks/testimonial", {
	title: __("Testimonial", "advanced-gutenberg-blocks"),
	description: __(
		"Display a testimonial with a picture, text, name and company",
		"advanced-gutenberg-blocks"
	),
	category: "agb",
	icon: { background: "#2F313A", foreground: "#DEBB8F", src: "format-status" },
	keywords: [__("review", "advanced-gutenberg-blocks")],
	attributes: {
		image: {
			type: "string"
		},
		content: {
			type: "array",
			source: "children",
			selector: ".wp-block-advanced-gutenberg-blocks-testimonial__content"
		},
		name: {
			type: "array",
			source: "children",
			selector: ".wp-block-advanced-gutenberg-blocks-testimonial__name"
		},
		company: {
			type: "array",
			source: "children",
			selector: ".wp-block-advanced-gutenberg-blocks-testimonial__company"
		},
		showCompany: {
			type: "boolean",
			default: true
		},
		showImage: {
			type: "boolean",
			default: true
		}
	},
	edit: props => {
		const {
			attributes: { image, content, name, company, showImage, showCompany },
			setAttributes,
			isSelected
		} = props;

		const onSelectMedia = media => {
			const image = media.sizes.medium ? media.sizes.medium.url : media.url;
			setAttributes({ image });
		};

		return (
			<Fragment>
				<Inspector {...{ showCompany, showImage, setAttributes }} />

				<div className="wp-block-advanced-gutenberg-blocks-testimonial">
					{!!showImage && (
						<div className="wp-block-advanced-gutenberg-blocks-testimonial__picture">
							<MediaUpload
								onSelect={onSelectMedia}
								type="image"
								value={image}
								render={({ open }) =>
									!!image ? (
										<div>
											{isSelected && (
												<div className="wp-block-advanced-gutenberg-blocks-testimonial__picture__actions">
													<a onClick={() => setAttributes({ image: null })}>
														{__("× Remove", "advanced-gutenberg-blocks")}
													</a>
												</div>
											)}

											<div
												className="wp-block-advanced-gutenberg-blocks-testimonial__picture__image"
												style={{
													backgroundImage: `url(${image})`
												}}
												onClick={open}
											/>
										</div>
									) : (
										<a
											className="wp-block-advanced-gutenberg-blocks-testimonial__picture__image"
											onClick={open}
										>
											{__("Select Image", "advanced-gutenberg-blocks")}
										</a>
									)
								}
							/>
						</div>
					)}

					<div
						className={classnames(
							"wp-block-advanced-gutenberg-blocks-testimonial__bubble",
							showImage &&
								"wp-block-advanced-gutenberg-blocks-testimonial__bubble--with-arrow"
						)}
					>
						<RichText
							tagName="div"
							multiline="p"
							placeholder={__(
								"Write testimonial content here",
								"advanced-gutenberg-blocks"
							)}
							value={content}
							className="wp-block-advanced-gutenberg-blocks-testimonial__content"
							onChange={content => setAttributes({ content })}
						/>

						<div className="wp-block-advanced-gutenberg-blocks-testimonial__signature">
							<RichText
								tagName="p"
								placeholder={__("Matt Mullenweg", "advanced-gutenberg-blocks")}
								value={name}
								className="wp-block-advanced-gutenberg-blocks-testimonial__name"
								onChange={name => setAttributes({ name })}
								keepPlaceholderOnFocus="true"
							/>

							{!!showCompany && (
								<RichText
									tagName="p"
									placeholder={__("Automattic", "advanced-gutenberg-blocks")}
									value={company}
									className="wp-block-advanced-gutenberg-blocks-testimonial__company"
									onChange={company => setAttributes({ company })}
									keepPlaceholderOnFocus="true"
								/>
							)}
						</div>
					</div>
				</div>
			</Fragment>
		);
	},
	save: props => {
		const {
			image,
			content,
			name,
			company,
			showImage,
			showCompany
		} = props.attributes;

		return (
			<div className="wp-block-advanced-gutenberg-blocks-testimonial">
				{showImage && (
					<div className="wp-block-advanced-gutenberg-blocks-testimonial__picture">
						<div
							className="wp-block-advanced-gutenberg-blocks-testimonial__picture__image"
							style={{
								backgroundImage: `url(${image})`
							}}
						/>
					</div>
				)}

				<div
					className={classnames(
						"wp-block-advanced-gutenberg-blocks-testimonial__bubble",
						showImage &&
							"wp-block-advanced-gutenberg-blocks-testimonial__bubble--with-arrow"
					)}
				>
					<div className="wp-block-advanced-gutenberg-blocks-testimonial__content">
						{content}
					</div>

					<div className="wp-block-advanced-gutenberg-blocks-testimonial__signature">
						<p className="wp-block-advanced-gutenberg-blocks-testimonial__name">
							{name}
						</p>

						{showCompany && (
							<p className="wp-block-advanced-gutenberg-blocks-testimonial__company">
								{company}
							</p>
						)}
					</div>
				</div>
			</div>
		);
	}
});
