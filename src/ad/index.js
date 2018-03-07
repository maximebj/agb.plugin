/**
 * BLOCK: Advertisement
 *
 * Display an ad
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
  'gutenblocks/ad',
  {
    title: __( 'Advertisement' ),
    description: __( 'Put forward a tips or a warning' ),
    category: 'common',
    icon: 'megaphone',
    keywords: [
      __('ad'),
      __('advertising'),
      __('publicity'),
    ],
		edit: props => {
      return (
        <div className='wp-block-gutenblocks-ad'>
          { __( 'An ad will be displayed here in front' ) }
        </div>
      );
    },
    save() {
      return null;
    },
	},
);
