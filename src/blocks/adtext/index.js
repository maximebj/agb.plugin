import './style.scss'
import './editor.scss'

import classnames from 'classnames'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { RichText } = wp.editor

export default registerBlockType(
  'advanced-gutenberg-blocks/adtext',
  {
    title: __( 'Text + Ad', 'advanced-gutenberg-blocks' ),
    description: __( 'Display a text on the left and a rectangle ad on the right', 'advanced-gutenberg-blocks' ),
    category: 'common',
    icon: { background: '#D56561', foreground: "#fff", src: 'align-right' },
    keywords: [
      __( 'ad', 'advanced-gutenberg-blocks' ),
      __( 'advertising', 'advanced-gutenberg-blocks' ),
      __( 'publicity', 'advanced-gutenberg-blocks' ),
    ],
		attributes: {
      content: {
        type: 'array',
        source: 'children',
        selector: '.wp-block-advanced-gutenberg-blocks-adtext__content',
      },
			script: {
        type: 'array',
        source: 'children',
        selector: '.wp-block-advanced-gutenberg-blocks-adtext__ad',
      }
    },
		edit: props => {

			const { attributes: { content }, isSelected, setAttributes } = props

      return (
        <div className='wp-block-advanced-gutenberg-blocks-adtext'>
					<div className="wp-block-advanced-gutenberg-blocks-adtext__ad">
						{ __( 'Advertisement', 'advanced-gutenberg-blocks' ) }
					</div>
					<RichText
            tagName="div"
            multiline="p"
            placeholder={ __( 'Write text here', 'advanced-gutenberg-blocks' ) }
            value={ content }
            className="wp-block-advanced-gutenberg-blocks-adtext__content"
            onChange={ content => setAttributes( { content } ) }
  				/>
        </div>
      );
    },
		save: props => {

			const { content } = props.attributes

			const createMarkup = () => {
				return {__html: advancedGutenbergBlocksAdTextSettings.script }
			}

      return (
				<div className='wp-block-advanced-gutenberg-blocks-adtext'>
					<div className="wp-block-advanced-gutenberg-blocks-adtext__ad" dangerouslySetInnerHTML={ createMarkup() }>
					</div>

					<div className="wp-block-advanced-gutenberg-blocks-adtext__content">
          	{ content }
        	</div>
				</div>
      )
    },
	},
)
