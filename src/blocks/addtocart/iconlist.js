import classnames from 'classnames'

import dashIconList from './dashiconlist';

const { Component } = wp.element;


export default class IconList extends Component {

  constructor( props ) {
    super( props )
  }

  getIcon(icon) {
    this.props.onChangeIcon(icon)
  }

  render() {

    return (
      <div class="gutenblocks-panel-buttons">
        { dashIconList.map( value => {
          return (
            <span
              className={ classnames('dashicons', `dashicons-${value}`) }
              onClick={() => this.getIcon(value) }
            >
            </span>
          )
        })}
      </div>
    );
  }

}
