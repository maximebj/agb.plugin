import { __ } from '@wordpress/i18n'

import classnames from 'classnames'

const icon = {}

icon.info = <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round'
strokeLinejoin='round' className='feather feather-info'>
    <circle cx='12' cy='12' r='10' />
    <line x1='12' y1='16' x2='12' y2='12' />
    <line x1='12' y1='8' x2='12' y2='8' />
</svg>

icon.advice = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>

icon.avoid = <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round'
strokeLinejoin='round' className='feather feather-alert-octagon'>
    <polygon points='7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2'
    />
    <line x1='12' y1='8' x2='12' y2='12' />
    <line x1='12' y1='16' x2='12' y2='16' />
</svg>

icon.warning = <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round'
strokeLinejoin='round' className='feather feather-alert-triangle'>
    <path d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'
    />
    <line x1='12' y1='9' x2='12' y2='13' />
    <line x1='12' y1='17' x2='12' y2='17' />
</svg>

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
  },
  {
    attributes: attrsv2,

    save: props => {
    
      const { type, title, hasIcon, content } = props.attributes

      return (
        <div className={ classnames('wp-block-advanced-gutenberg-blocks-notice', `is-variation-${ type }`, hasIcon && 'has-icon' ) } data-type={ type }>
          { hasIcon && icon[type] }
          <p className='wp-block-advanced-gutenberg-blocks-notice__title'>{ title }</p>
          <p className='wp-block-advanced-gutenberg-blocks-notice__content'>{ content }</p>
        </div>
      )
    }
  }
]

export default deprecated