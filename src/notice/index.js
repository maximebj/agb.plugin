/**
 * BLOCK: Notice
 *
 * Display a notice block
 * 4 types are available : Tips, Warning, Avoid, Info
 */

import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;

import classnames from 'classnames'

const {
  registerBlockType,
  RichText,
} = wp.blocks;

const types = {
  'advice': __( 'Advice' ),
  'avoid': __( 'Avoid' ),
  'warning': __( 'Warning' ),
  'info': __( 'Information' ),
}

export default registerBlockType(
  'gutenblocks/notice',
  {
    title: __( 'Notice' ),
    description: __( 'Put forward a tips or a warning' ),
    category: 'common',
    icon: 'warning',
    keywords: [
      __('warning'),
      __('information'),
      __('tips'),
    ],
    attributes: {
      type: {
        source: 'attribute',
        selector: '.wp-block-gutenblocks-notice',
        attribute: 'data-type',
        default: Object.keys(types)[0],
      },
			title: {
        source: 'text',
        type: 'string',
        selector: '.wp-block-gutenblocks-notice__title',
				default: types.advice,
      },
      content: {
        type: 'array',
        source: 'children',
        selector: '.wp-block-gutenblocks-notice__content',
      },
    },
    edit: props => {

			let options = []
      _.each(types, (obj, key) => {
      	options.push(
      		<option value={key}>{obj}</option>
      	)
      })

      const onChangeContent = value => {
        props.setAttributes( { content: value } )
      };

      const onChangeType = event => {
        props.setAttributes( { type: event.target.value, title: types[event.target.value]  } )
      };

      return (
        <div className={ classnames( props.className, `${props.className}--${props.attributes.type}` ) }>
          { !! props.focus ? (
            <select
              name="type"
              onChange={ onChangeType }
              value={ props.attributes.type }
            >
							{options}
            </select>
            ) : (
            <p className='wp-block-gutenblocks-notice__title'>{ props.attributes.title }</p>
            )
          }

          <RichText
            tagName="p"
            placeholder={ __('Your tip/warning content') }
            value={ props.attributes.content }
            className='wp-block-gutenblocks-notice__content'
            onChange={ onChangeContent }
            focus={ props.focus }
  				/>
        </div>
      );
    },
    save: props => {
      return (
        <div className={ `wp-block-gutenblocks-notice--${ props.attributes.type }` } data-type={ props.attributes.type }>
          <p className='wp-block-gutenblocks-notice__title'>{ props.attributes.title }</p>
          <p className='wp-block-gutenblocks-notice__content'>{ props.attributes.content }</p>
        </div>
      );
    },
  },
);
