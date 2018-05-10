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

			const { attributes: { type, content, title },  isSelected, setAttributes } = props


			// TODO

			/*
			{ Object.keys(styles).map( key => {

				return (

			*/
			let options = []
      _.each( types, (obj, key) => {
      	options.push(
      		<option value={key}>{obj}</option>
      	)
      } )


      const onChangeType = event => {
        props.setAttributes( {
					type: event.target.value,
					title: types[event.target.value]
				} )
      }

      return (
        <div className={ classnames( props.className, `${props.className}--${props.attributes.type}` ) }>
          { isSelected ? (
            <select
              name="type"
              onChange={ onChangeType }
              value={ type }
            >
							{options}
            </select>
            ) : (
            <p className='wp-block-advanced-gutenberg-blocks-notice__title'>{ title }</p>
            )
          }

          <RichText
            tagName="p"
            placeholder={ __( 'Your tip/warning content', 'advanced-gutenberg-blocks' ) }
            value={ content }
            className='wp-block-advanced-gutenberg-blocks-notice__content'
            onChange={ content => setAttributes( { content } ) }
            focus={ isSelected }
  				/>
        </div>
      )
    },
    save: props => {

			const { type, title, content } = props.attributes

			return (
        <div className={ `wp-block-advanced-gutenberg-blocks-notice--${ type }` } data-type={ type }>
          <p className='wp-block-advanced-gutenberg-blocks-notice__title'>{ title }</p>
          <p className='wp-block-advanced-gutenberg-blocks-notice__content'>{ content }</p>
        </div>
      )
    },
  },
)
