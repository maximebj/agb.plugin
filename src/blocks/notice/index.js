import './style.scss'
import './editor.scss'

import classnames from 'classnames'

const { __ } = wp.i18n

const {
  registerBlockType,
  RichText,
} = wp.blocks

const types = {
  'advice': 	__( 'Advice', 'advanced-gutenberg-blocks' ),
  'avoid': 		__( 'Avoid', 'advanced-gutenberg-blocks' ),
  'warning': 	__( 'Warning', 'advanced-gutenberg-blocks' ),
  'info': 		__( 'Information', 'advanced-gutenberg-blocks' ),
}

export default registerBlockType(
  'advanced-gutenberg-blocks/notice',
  {
    title: __( 'Notice', 'advanced-gutenberg-blocks' ),
    description: __( 'Put forward a tips or a warning', 'advanced-gutenberg-blocks' ),
    category: 'common',
    icon: 'warning',
    keywords: [
      __( 'warning', 'advanced-gutenberg-blocks' ),
      __( 'information', 'advanced-gutenberg-blocks' ),
      __( 'tips', 'advanced-gutenberg-blocks' ),
    ],
    attributes: {
      type: {
        source: 'attribute',
        selector: '.wp-block-advanced-gutenberg-blocks-notice',
        attribute: 'data-type',
        default: Object.keys(types)[0],
      },
			title: {
        source: 'text',
        type: 'string',
        selector: '.wp-block-advanced-gutenberg-blocks-notice__title',
				default: types.advice,
      },
      content: {
        type: 'array',
        source: 'children',
        selector: '.wp-block-advanced-gutenberg-blocks-notice__content',
      },
    },
    edit: props => {

			let options = []
      _.each( types, (obj, key) => {
      	options.push(
      		<option value={key}>{obj}</option>
      	)
      } )

      const onChangeContent = value => {
        props.setAttributes( { content: value } )
      }

      const onChangeType = event => {
        props.setAttributes( { type: event.target.value, title: types[event.target.value] } )
      }

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
            <p className='wp-block-advanced-gutenberg-blocks-notice__title'>{ props.attributes.title }</p>
            )
          }

          <RichText
            tagName="p"
            placeholder={ __( 'Your tip/warning content', 'advanced-gutenberg-blocks' ) }
            value={ props.attributes.content }
            className='wp-block-advanced-gutenberg-blocks-notice__content'
            onChange={ onChangeContent }
            focus={ props.focus }
  				/>
        </div>
      )
    },
    save: props => {
      return (
        <div className={ `wp-block-advanced-gutenberg-blocks-notice--${ props.attributes.type }` } data-type={ props.attributes.type }>
          <p className='wp-block-advanced-gutenberg-blocks-notice__title'>{ props.attributes.title }</p>
          <p className='wp-block-advanced-gutenberg-blocks-notice__content'>{ props.attributes.content }</p>
        </div>
      )
    },
  },
)
