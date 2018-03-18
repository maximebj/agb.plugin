import styles from './styles';

const { Component } = wp.element;

export default class StyleSelector extends Component {

  constructor( props ) {
    super( props )
  }

  getStyle( style ) {
    this.props.onChangeStyle( style )
  }

  render() {

    return (
      <div class="gutenblocks-panel-maps">
        { styles.map( value => {
          return (
						<img
							src=""
							alt=""
							onClick={() => this.getStyle(value) }
						/>
          )
        })}
      </div>
    );
  }

}
