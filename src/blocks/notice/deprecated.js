const { __ } = wp.i18n

import classnames from 'classnames'
import icon from './icons'


const attrsv1 = {
  type: {
    source: 'attribute',
    selector: '.wp-block-advanced-gutenberg-blocks-notice',
    attribute: 'data-type',
    default: 'advice',
  },
  title: {
    source: 'text',
    type: 'string',
    selector: '.wp-block-advanced-gutenberg-blocks-notice__title',
    default: __( 'Advice', 'advanced-gutenberg-blocks' ),
  },
  content: {
    type: 'array',
    source: 'children',
    selector: '.wp-block-advanced-gutenberg-blocks-notice__content',
  },
}

const attrsv2 = {
  type: {
    source: 'attribute',
    selector: '.wp-block-advanced-gutenberg-blocks-notice',
    attribute: 'data-type',
    default: 'advice',
  },
  title: {
    source: 'text',
    type: 'string',
    selector: '.wp-block-advanced-gutenberg-blocks-notice__title',
    default: __( 'Advice', 'advanced-gutenberg-blocks' ),
  },
  hasIcon: {
    type: 'boolean',
  },
  content: {
    type: 'array',
    source: 'children',
    selector: '.wp-block-advanced-gutenberg-blocks-notice__content',
  },
}


const deprecated = [
  {
    attributes: attrsv1,

    save: props => {
    
      const { type, title, content } = props.attributes

      return (
        <div className={ `wp-block-advanced-gutenberg-blocks-notice--${ type }` } data-type={ type }>
          <p className='wp-block-advanced-gutenberg-blocks-notice__title'>{ title }</p>
          <p className='wp-block-advanced-gutenberg-blocks-notice__content'>{ content }</p>
        </div>
      )
    }
  },
  {
    attributes: attrsv2,

    save: props => {
    
      const { type, title, hasIcon, content } = props.attributes

      return (
        <div className={ classnames('wp-block-advanced-gutenberg-blocks-notice', `wp-block-advanced-gutenberg-blocks-notice--${ type }`, `is-variation-${ type }`, hasIcon && 'has-icon' ) } data-type={ type }>
          <p className='wp-block-advanced-gutenberg-blocks-notice__title'>{ title }</p>
          <p className='wp-block-advanced-gutenberg-blocks-notice__content'>{ content }</p>
        </div>
      )
    }
  },
  {
    attributes: attrsv2,

    save: props => {
    
      const { type, title, hasIcon, content } = props.attributes

      return (
        <div className={ classnames('wp-block-advanced-gutenberg-blocks-notice', `is-variation-${ type }`, hasIcon && 'has-icon' ) } data-type={ type }>
          <p className='wp-block-advanced-gutenberg-blocks-notice__title'>{ title }</p>
          <p className='wp-block-advanced-gutenberg-blocks-notice__content'>{ content }</p>
        </div>
      )
    }
  }
]

export default deprecated