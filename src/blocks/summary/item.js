const { __ } = wp.i18n
const { Component } = wp.element

export default class Item extends Component {

  render() {

    const { heading, children, ordered } = this.props

    let subItems = null

    // The node component calls itself if there are children
    if( children ) {
      subItems = children.map( function( subItem ) {
       return (
         <Item
          key={subItem.data.clientId}
          heading={subItem}
          children={subItem.children}
          ordered={ordered}
         />
       )
     } )
    }
    
    const markup = ordered ? <ol>{subItems}</ol> : <ul>{subItems}</ul>
    const link = '#' + heading.data.slug
    const content = heading.data.attributes.content.replace(/[&]nbsp[;]/gi, ' ' )

    return (
      <li key={heading.data.clientId}>
        <a href={link}>{content}</a>
        { subItems && markup }
      </li>
    )
  }
}
