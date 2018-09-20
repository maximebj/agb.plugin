import './style.scss'
import './editor.scss'

import Tools from './tools'
import List from './list'

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
    icon: { background: '#D56561', foreground: "#fff", src: 'book-alt' },
    keywords: [ __('summary', 'advanced-gutenberg-blocks' ) ],
    attributes: {
			title: {
        source: 'text',
        type: 'string',
        selector: '.wp-block-advanced-gutenberg-blocks-summary__title',
        default: __( "Table of contents", 'advanced-gutenberg-blocks' ),
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
      [ withSelect( ( select ) => {
        const { getBlocks } = select( 'core/editor' )
        return { blocks: getBlocks() };

      } ),
      withDispatch( dispatch => {
    		const {
    			updateBlockAttributes,
    		} = dispatch( 'core/editor' )

    		return {
    			updateBlockAttributes: updateBlockAttributes,
    		}
      } )
    ] ) ( props => {

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
  }
)
