
import { arrayToTree } from 'performant-array-to-tree'

import ListItems from './listitems'

const { __ } = wp.i18n
const { Component } = wp.element
const { flatMap } = lodash

export default class List extends Component {

  // Functions to define headings structure
  // Inspired by packages/editor/src/components/document-outline/index.js in Gutenberg project
  computeOutlineHeadings = ( blocks = [], path = [] ) => {
    return flatMap( blocks, ( block = {} ) => {

      if (
        block.name === 'core/heading' &&
        block.hasOwnProperty('attributes') &&
        block.attributes.hasOwnProperty('content') &&
        block.attributes.content.length > 0
      ) {

        // Define anchor slug
        let slug = block.attributes.content.toString().toLowerCase()
          .replace(/\s+/g, '-')                           // Replace spaces with -
          .replace( /[&\/\\#,!+()$~%.'":*?<>{}]/g, '' )   // Remove special chars
          .replace(/\-\-+/g, '-')                         // Replace multiple - with single -
          .replace(/^-+/, '')                             // Trim - from start of text
          .replace(/-+$/, '');                            // Trim - from end of text

        // Update the title block with the anchor slug ID
        this.props.updateBlockAttributes( block.clientId, { anchor: slug } )

        return {
          ...block,
          path,
          isEmpty: ! block.attributes.content || block.attributes.content.length === 0,
          slug: slug
        }
      }

      return this.computeOutlineHeadings( block.innerBlocks, [ ...path, block ] )
    } )
  }

  // The find your parent function by Victor Sabatier
  compute(blocks) {
    return blocks.map( (block, index) => {
      const blockLevel = block.attributes.level
      if( blockLevel === 0 ) {
        return { ...block, parentId: null };
      }
      let parentId = null
      for(let i = index - 1; i >= 0; i-- ) {
        const currentLevel = blocks[i].attributes.level
        if( blockLevel > currentLevel ) {
          parentId = blocks[i].clientId;
          break
        }
      }
      return {
        ...block,
        parentId
      }
    })
  }

  render() {

    const { ordered, blocks, setAttributes } = this.props

    // Get headings list + define some needed datas
    const headingsRaw = this.computeOutlineHeadings( blocks )

    // Get parents Id in order to make a tree for nested ul/ol > li
    const headingsFlat = this.compute(headingsRaw)

    // Make the tree
    const headings = arrayToTree( headingsFlat, { id: 'clientId', parentId: 'parentId' } )

    return (
      ordered && (
        <ol className='wp-block-advanced-gutenberg-blocks-summary__list'>
          <ListItems { ...{ headings, ordered, setAttributes } } />
        </ol>
      ) || (
        <ul className='wp-block-advanced-gutenberg-blocks-summary__list'>
          <ListItems { ...{ headings, ordered, setAttributes } } />
        </ul>
      )
    )
  }
}
