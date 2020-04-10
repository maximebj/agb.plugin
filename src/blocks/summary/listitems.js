import { __ } from '@wordpress/i18n'
const { Component } = wp.element

import Item from './item'

export default class ListItems extends Component {

  componentDidUpdate( lastProps, lastStates ) {

    // Save the markup in attributes
    const summary = document.querySelector('.wp-block-advanced-gutenberg-blocks-summary__list').innerHTML
    this.props.setAttributes( { summary } )
  }

  render() {

    const { headings, ordered, setAttributes } = this.props

    // Define the markup
    let markup = headings.map( heading => {
      return(
        <Item
          key={heading.data.clientId}
          heading={heading}
          children={heading.children}
          ordered={ordered}
        />
      )
    } )

    return (
      headings.length < 1 && (
        <li className="wp-block-advanced-gutenberg-blocks-summary__none">
          { __('(No heading found yet)', 'advanced-gutenberg-blocks' ) }
        </li>
      ) || markup
    )
  }
}
