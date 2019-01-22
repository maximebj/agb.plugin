import './style.scss'
import './editor.scss'

import Tools from './tools'
import List from './list'

import deprecated from './deprecated'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { RichText } = wp.editor
const { Fragment } = wp.element
const { withSelect, withDispatch } = wp.data
const { compose } = wp.compose

export default registerBlockType(
  'advanced-gutenberg-blocks/summary',
  {
    title: __( 'Table of contents', 'advanced-gutenberg-blocks' ),
    description: __( 'Display an auto generated, dynamic table of contents', 'advanced-gutenberg-blocks' ),
    category: 'agb',
    icon: { background: '#2F313A', foreground: '#DEBB8F', src: 'book-alt' },
    keywords: [ __('summary', 'advanced-gutenberg-blocks' ) ],
    attributes: {
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
			},
    },
    edit: compose(
      withSelect( ( select ) => ({
        blocks: select( 'core/editor' ).getBlocks()
      })),
      withDispatch( dispatch => ({
    		updateBlockAttributes: dispatch( 'core/editor' ).updateBlockAttributes
      }))
    ) ( props => {

  		const { attributes, setAttributes, blocks, updateBlockAttributes } = props
      const { title, ordered } = attributes

      return (
				<Fragment>

          <Tools { ...{ attributes, setAttributes } } />

	        <div className="wp-block-advanced-gutenberg-blocks-summary">
            <RichText
	            tagName="p"
	            value={ title }
	            className='wp-block-advanced-gutenberg-blocks-summary__title'
	            onChange={ title => setAttributes( { title } ) }
	  				/>
            <div className="wp-block-advanced-gutenberg-blocks-summary__fold">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
            </div>
            <List { ...{ ordered, setAttributes, blocks, updateBlockAttributes } } />
	        </div>

				</Fragment>
      )
    } ),
    save: props => {

      const { title, summary, ordered } = props.attributes
      
			return (
        <div>
          <p className="wp-block-advanced-gutenberg-blocks-summary__title">{title}</p>
          <div className="wp-block-advanced-gutenberg-blocks-summary__fold">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
          </div>

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
    },
    deprecated: deprecated
  }
)
