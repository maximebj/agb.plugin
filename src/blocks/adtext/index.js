/**
 * BLOCK: Advertisement + Text
 *
 * Display an ad with text
 */

import './style.scss'
import './editor.scss'

const { __ } = wp.i18n

import classnames from 'classnames'

const {
  registerBlockType,
  RichText,
} = wp.blocks


export default registerBlockType(
  'gutenblocks/adtext',
  {
    title: __( 'Text + Ad', 'advanced-gutenberg-blocks' ),
    description: __( 'Display a text on the left and a rectangle ad on the right', 'advanced-gutenberg-blocks' ),
    category: 'common',
    icon: 'align-right',
    keywords: [
      __( 'ad', 'advanced-gutenberg-blocks' ),
      __( 'advertising', 'advanced-gutenberg-blocks' ),
      __( 'publicity', 'advanced-gutenberg-blocks' ),
    ],
		attributes: {
      content: {
        type: 'array',
        source: 'children',
        selector: '.wp-block-gutenblocks-adtext__content',
      },
			script: {
        type: 'array',
        source: 'children',
        selector: '.wp-block-gutenblocks-adtext__ad',
      }
    },
		edit: props => {

			const onChangeContent = value => {
        props.setAttributes( { content: value } )
      }

      return (
        <div className='wp-block-gutenblocks-adtext'>
					<div className="wp-block-gutenblocks-adtext__ad">
						{ __( 'Advertisement', 'advanced-gutenberg-blocks' ) }
					</div>
					<RichText
            tagName="div"
            multiline="p"
            placeholder={ __( 'Write text here', 'advanced-gutenberg-blocks' ) }
            value={ props.attributes.content }
            className="wp-block-gutenblocks-adtext__content"
            onChange={ onChangeContent }
            focus={ props.focus }
  				/>
        </div>
      );
    },
		save: props => {

			const createMarkup = () => {
				return {__html: gutenblocksAdTextSettings.script }
			}

      return (
				<div className='wp-block-gutenblocks-adtext'>
					<div className="wp-block-gutenblocks-adtext__ad" dangerouslySetInnerHTML={ createMarkup() }>
					</div>

					<div className="wp-block-gutenblocks-adtext__content">
          	{ props.attributes.content }
        	</div>
				</div>
      )
    },
	},
)
