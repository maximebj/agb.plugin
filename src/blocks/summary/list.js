import { countBy, flatMap } from 'lodash'

import ListItems from './listitems'

const { __ } = wp.i18n
const { Component } = wp.element

export default class List extends Component {

  // Functions to define headings structure
  // Inspired by packages/editor/src/components/document-outline/index.js in Gutenberg project
  computeOutlineHeadings = ( blocks = [], path = [] ) => {
    return flatMap( blocks, ( block = {} ) => {
      if ( block.name === 'core/heading' ) {

        let slug = block.attributes.content[0]
          .replace( /[&\/\\#,!+()$~%.'":*?<>{}]/g, '' )   // remove special chars
          .replace( /[\s#]/g, '-' )                      // turn spaces to dashes
          .replace( /-$/, "" )                          // remove eventual last dash
          .toLowerCase()                               // lowercase it

        let levelClass = 'wp-block-advanced-gutenberg-blocks-summary__level' + block.attributes.level

        this.props.updateBlockAttributes( block.clientId, { anchor: slug } )

        return {
          ...block,
          path,
          isEmpty: ! block.attributes.content || block.attributes.content.length === 0,
          slug: slug,
          levelClass: levelClass
        }
      }

      return this.computeOutlineHeadings( block.innerBlocks, [ ...path, block ] )
    } )
  }

  render() {

    const { ordered, blocks, setAttributes } = this.props

    const headings = this.computeOutlineHeadings( blocks )

    return (
      ordered && (
        <ol className='wp-block-advanced-gutenberg-blocks-summary__list'>
          <ListItems { ...{ headings, setAttributes } } />
        </ol>
      ) || (
        <ul className='wp-block-advanced-gutenberg-blocks-summary__list'>
          <ListItems { ...{ headings, setAttributes } } />
        </ul>
      )
    )
  }
}
