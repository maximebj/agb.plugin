const { __ } = wp.i18n
const { Component } = wp.element

export default class ListItems extends Component {

  componentDidUpdate( lastProps, lastStates ) {
    const summary = document.querySelector('.wp-block-advanced-gutenberg-blocks-summary__list').innerHTML
    this.props.setAttributes( { summary } )
  }

  render() {

    const { headings } = this.props

    return (
      headings.length < 1 && (
        <li className="wp-block-advanced-gutenberg-blocks-summary__none">
          { __('(No heading found yet)', 'advanced-gutenberg-blocks' ) }
        </li>

      ) || headings.map( ( item, index ) => {

          const link = '#' + item.slug

          return(
            ! item.isEmpty && (
              <li className={item.levelClass}><a href={link}>{item.attributes.content}</a></li>
            )
          )
        }
      )
    )
  }
}
