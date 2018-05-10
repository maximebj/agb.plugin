import classnames from 'classnames'

import dashIconList from './dashiconlist'

const { Component } = wp.element

export default class IconList extends Component {

  render() {

    return (
      <div class="advanced-gutenberg-blocks-panel-buttons">
        { dashIconList.map( value => {
          return (
            <span
              className={ classnames('dashicons', `dashicons-${value}`) }
              onClick={ () => this.props.onChange( value ) }
            >
            </span>
          )
        })}
      </div>
    )
  }
}
