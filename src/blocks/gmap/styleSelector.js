import styles from './styles';

const { Component } = wp.element;

export default class StyleSelector extends Component {

  render() {

		const { style, setAttributes } = props

    return (
      <div class="AGB-panel-maps">
        { Object.keys(styles).map( key => {

          return (
						<div className="AGB-panel-maps__item">
							<img
								src={ `${advancedGutenbergBlocksGlobals.pluginurl}/admin/img/maps/${key}.png` }
								alt={ `Style ${key}` }
								onClick={ () => setAttibutes( { style } ) }
							/>
						</div>
          )
        } ) }
      </div>
    );
  }

}
