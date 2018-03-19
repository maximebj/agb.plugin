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
        { Object.keys(styles).map( key => {

          return (
						<div className="gutenblocks-panel-maps__item">
							<img
								src={ `${gutenblocksGlobals.pluginurl}/admin/img/maps/${key}.png` }
								alt={ `Style ${key}` }
								onClick={ () => this.getStyle( key ) }
							/>
						</div>
          )
        } ) }
      </div>
    );
  }

}
