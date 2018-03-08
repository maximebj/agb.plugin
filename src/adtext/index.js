/**
 * BLOCK: Advertisement + Text
 *
 * Display an ad with text
 */

import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;

import classnames from 'classnames'

const {
  registerBlockType,
  RichText,
} = wp.blocks;


export default registerBlockType(
  'gutenblocks/adtext',
  {
    title: __( 'Text + Ad' ),
    description: __( 'Display a text on the left and a rectangle ad on the right' ),
    category: 'common',
    icon: 'align-right',
    keywords: [
      __('ad'),
      __('advertising'),
      __('publicity'),
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
						{ __( 'Advertisement' ) }
					</div>
					<RichText
            tagName="div"
            multiline="p"
            placeholder={ __( 'Write text here' ) }
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
      );
    },
	},
);
