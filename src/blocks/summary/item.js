import { __ } from '@wordpress/i18n'
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

    // (C) https://stackoverflow.com/a/9609450/1454656
    const decodeEntities = (function() {
      // this prevents any overhead from creating the object each time
      const element = document.createElement('div');

      function decodeHTMLEntities (str) {
        if (str && typeof str === 'string') {
          // strip script/html tags
          str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
          str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
          element.innerHTML = str;
          str = element.textContent;
          element.textContent = '';
        }

        return str;
      }

      return decodeHTMLEntities;
    })();

    const markup = ordered ? <ol>{subItems}</ol> : <ul>{subItems}</ul>
    const link = '#' + heading.data.slug
    const content = decodeEntities(heading.data.attributes.content);

    return (
      <li key={heading.data.clientId}>
        <a href={link}>{content}</a>
        { subItems && markup }
      </li>
    )
  }
}
