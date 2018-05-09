import './style.scss'
import './editor.scss'

import classnames from 'classnames'

import Inspector from './inspect'

const { __ } = wp.i18n

const {
  registerBlockType,
  RichText,
	MediaUpload,
} = wp.blocks

export default registerBlockType(
  'advanced-gutenberg-blocks/testimonial',
  {
    title: __( 'Testimonial', 'advanced-gutenberg-blocks' ),
    description: __( 'Display a testimonial with a picture, text, name and company', 'advanced-gutenberg-blocks' ),
    category: 'common',
    icon: 'format-status',
    keywords: [
      __( 'review', 'advanced-gutenberg-blocks' ),
    ],
    attributes: {
			image: {
				type: 'string',
			},
      content: {
        type: 'array',
        source: 'children',
        selector: '.wp-block-advanced-gutenberg-blocks-testimonial__content',
      },
			name: {
        type: 'array',
        source: 'children',
        selector: '.wp-block-advanced-gutenberg-blocks-testimonial__name',
      },
			company: {
        type: 'array',
        source: 'children',
        selector: '.wp-block-advanced-gutenberg-blocks-testimonial__company',
      },
			showCompany: {
				type: 'boolean',
				default: true,
			},
			showImage: {
        type: 'boolean',
				default: true,
      },
    },
    edit: props => {

			const onSelectMedia = media => {

				let image = ( media.sizes.medium ) ? media.sizes.medium.url : media.url;
				console.log(image)
				props.setAttributes( { image: image } )
			}

      const onChangeContent = value => {
        props.setAttributes( { content: value } )
      }

			const onChangeName = value => {
        props.setAttributes( { name: value } )
      }

			const onChangeCompany = value => {
				props.setAttributes( { company: value } )
			}

			const onRemoveImage = () => {
				props.setAttributes( { image: false } )
			}

			const toggleCompany = () => {
        props.setAttributes( { showCompany: ! props.attributes.showCompany } )
      }

			const toggleImage = () => {
        props.setAttributes( { showImage: ! props.attributes.showImage } )
      }

      return [
        !! props.focus && (
          <Inspector { ...{ toggleCompany, toggleImage, ...props } } />
        )
				,
        <div className="wp-block-advanced-gutenberg-blocks-testimonial">
					{ !! props.attributes.showImage && (
					<div className="wp-block-advanced-gutenberg-blocks-testimonial__picture">

						<MediaUpload
							onSelect={ onSelectMedia }
							type="image"
							value={ props.attributes.image }
							render={ ( { open } ) => (
								( !! props.attributes.image ? (
									<div>
										{ !! props.focus && (
										<div className="wp-block-advanced-gutenberg-blocks-testimonial__picture__actions">
											<a onClick={ onRemoveImage }>
												{ __( '× Remove', 'advanced-gutenberg-blocks' ) }
											</a>
										</div>
										) }

										<div
											className="wp-block-advanced-gutenberg-blocks-testimonial__picture__image"
											style={ {
						            backgroundImage: `url(${props.attributes.image})`
						          } }
											onClick={ open }
										/>
									</div>

								) : (
									<a className="wp-block-advanced-gutenberg-blocks-testimonial__picture__image" onClick={ open }>
										{ __( 'Select Image', 'advanced-gutenberg-blocks' ) }
									</a>
								) )
							) }
						/>
					</div>
					) }

					<div className={ classnames( "wp-block-advanced-gutenberg-blocks-testimonial__bubble", props.attributes.showImage && "wp-block-advanced-gutenberg-blocks-testimonial__bubble--with-arrow" ) }>

	          <RichText
	            tagName="div"
							multiline="p"
	            placeholder={ __( 'Write testimonial content here', 'advanced-gutenberg-blocks' ) }
	            value={ props.attributes.content }
	            className='wp-block-advanced-gutenberg-blocks-testimonial__content'
	            onChange={ onChangeContent }
	  				/>

						<div className="wp-block-advanced-gutenberg-blocks-testimonial__signature">

							<RichText
								tagName="p"
								placeholder={ __( 'Matt Mullenweg', 'advanced-gutenberg-blocks' ) }
								value={ props.attributes.name }
								className='wp-block-advanced-gutenberg-blocks-testimonial__name'
								onChange={ onChangeName }
							/>
						{ !! props.attributes.showCompany && (
							<RichText
								tagName="p"
								placeholder={ __( 'Automattic', 'advanced-gutenberg-blocks' ) }
								value={ props.attributes.company }
								className='wp-block-advanced-gutenberg-blocks-testimonial__company'
								onChange={ onChangeCompany }
							/>
						) }

						</div>

					</div>
        </div>
      ]
    },
    save: props => {
      return (
				<div className="wp-block-advanced-gutenberg-blocks-testimonial">
					{ !! props.attributes.showImage && (
					<div className="wp-block-advanced-gutenberg-blocks-testimonial__picture">
						<div
							className="wp-block-advanced-gutenberg-blocks-testimonial__picture__image"
							style={ {
								backgroundImage: `url(${props.attributes.image})`
							} }
						/>
					</div>
					) }

					<div className={ classnames( "wp-block-advanced-gutenberg-blocks-testimonial__bubble", props.attributes.showImage && "wp-block-advanced-gutenberg-blocks-testimonial__bubble--with-arrow" ) }>

						<div className="wp-block-advanced-gutenberg-blocks-testimonial__content">
							{ props.attributes.content }
						</div>

						<div className="wp-block-advanced-gutenberg-blocks-testimonial__signature">
							<p className="wp-block-advanced-gutenberg-blocks-testimonial__name">
								{ props.attributes.name }
							</p>

							{ !! props.attributes.showCompany && (
								<p className='wp-block-advanced-gutenberg-blocks-testimonial__company'>
									{ props.attributes.company }
								</p>
							) }

						</div>
					</div>
				</div>
      )
    },
  },
)
