import './style.scss'
import './editor.scss'

import classnames from 'classnames'
import { countBy, flatMap } from 'lodash'

import Inspector from './inspect'

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
    description: __( 'Display an auto generated summary', 'advanced-gutenberg-blocks' ),
    category: 'common',
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
        source: 'text',
        type: 'children',
        selector: '.wp-block-advanced-gutenberg-blocks-summary__list',
      },
      ordered: {
				type: 'boolean',
				default: false,
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
    			updateAttributes: updateBlockAttributes,
    		}
      } )
    ] ) ( props => {

      // Functions to define headings structure
      // Inspired by packages/editor/src/components/document-outline/index.js in Gutenberg project
      const computeOutlineHeadings = ( blocks = [], path = [] ) => {
      	return flatMap( blocks, ( block = {} ) => {
      		if ( block.name === 'core/heading' ) {

            let slug = block.attributes.content[0].replace( /[\s#]/g, '-' ).toLowerCase()
            let levelClass = 'wp-block-advanced-gutenberg-blocks-summary__level' + block.attributes.level

            props.updateAttributes( block.clientId, { anchor: slug } )

            return {
      				...block,
      				path,
      				isEmpty: isEmptyHeading( block ),
              slug: slug,
              levelClass: levelClass
      			}
      		}

      		return computeOutlineHeadings( block.innerBlocks, [ ...path, block ] )
      	} )
      }

      const isEmptyHeading = ( heading ) => ! heading.attributes.content || heading.attributes.content.length === 0;

      // Block

  		const { attributes, setAttributes, blocks } = props
      const { title, ordered } = attributes

      const headings = computeOutlineHeadings( blocks )
      let prevHeadingLevel = 1;

      const specialClass = ordered ? "wp-block-advanced-gutenberg-blocks-summary__list--ordered" : ""

      // Not super top
      let summary = ''
      headings.map( ( item, index ) => {
        var link = '#' + item.slug
        if( ! item.isEmpty ) {
          summary += `<li class='${item.levelClass}'><a href='${link}'>${item.attributes.content}</a></li>`
        }
      } )
      setAttributes( { summary } )

      return (
				<Fragment>

          <Inspector { ...{ attributes, setAttributes } } />

	        <div className="wp-block-advanced-gutenberg-blocks-summary">
            <RichText
	            tagName="p"
	            value={ title }
	            className='wp-block-advanced-gutenberg-blocks-summary__title'
	            onChange={ title => setAttributes( { title } ) }
	  				/>
          <ul className={ classnames('wp-block-advanced-gutenberg-blocks-summary__list', specialClass ) }>
              { headings.length < 1 && (
                <li className="wp-block-advanced-gutenberg-blocks-summary__none">
                  { __('(No heading found yet)', 'advanced-gutenberg-blocks' ) }
                </li>

              ) || headings.map( ( item, index ) => {

                  var link = '#' + item.slug

                  return(
                    ! item.isEmpty && (
                      <li className={item.levelClass}><a href={link}>{item.attributes.content}</a></li>
                    )
                  )
                } )
              }
            </ul>
	        </div>

				</Fragment>
      )
    } ),
    save: props => {

			const { title, summary, ordered } = props.attributes

      const specialClass = ordered ? "wp-block-advanced-gutenberg-blocks-summary__list--ordered" : ""

			return (
        <div>
          <p className="wp-block-advanced-gutenberg-blocks-summary__title">{title}</p>
          <ul
            className={ classnames('wp-block-advanced-gutenberg-blocks-summary__list', specialClass ) }
            dangerouslySetInnerHTML={ {__html: summary} }
          >
          </ul>
        </div>
      )
    },
  },
)
