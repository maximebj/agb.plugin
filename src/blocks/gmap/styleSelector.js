import styles from './styles';

const { Component } = wp.element;

export default class StyleSelector extends Component {

  render() {

		const { style, setAttributes } = this.props

    return (
      <div class="AGB-panel-maps">
        { Object.keys(styles).map( style => {

          return (
						<div className="AGB-panel-maps__item">
							<img
								src={ `${advancedGutenbergBlocksGlobals.pluginurl}/admin/img/maps/${style}.png` }
								alt={ `Style ${style}` }
								onClick={ () => setAttributes( { style } ) }
							/>
						</div>
          )
        } ) }
      </div>
    );
  }

}
