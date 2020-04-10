import { __ } from '@wordpress/i18n'

const attrsv1 = {
  title: {
    source: 'text',
    type: 'string',
    selector: '.wp-block-advanced-gutenberg-blocks-summary__title',
    default: advancedGutenbergBlocksSummary.title,
  },
  summary: {
    source: 'html',
    selector: '.wp-block-advanced-gutenberg-blocks-summary__list',
  },
  ordered: {
    type: 'boolean',
    default: true,
  }
}


const deprecated = [
  {
    attributes: attrsv1,

    save: props => {
    
      const { title, summary, ordered } = props.attributes

      return (
        <div>
          <p className="wp-block-advanced-gutenberg-blocks-summary__title">{title}</p>
          { ordered && (
              <ol
                role='directory'
                className='wp-block-advanced-gutenberg-blocks-summary__list'
                dangerouslySetInnerHTML={ {__html: summary} }
              />
            ) || (
              <ul
                role='directory'
                className='wp-block-advanced-gutenberg-blocks-summary__list'
                dangerouslySetInnerHTML={ {__html: summary} }
              />
            )
          }
        </div>
      )
    }
  },
]

export default deprecated