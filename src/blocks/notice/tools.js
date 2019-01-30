import classnames from 'classnames'

const { __ } = wp.i18n
const { Component } = wp.element
const { BlockControls } = wp.editor
const {
  Toolbar,
  IconButton,
  Tooltip,
} = wp.components

export default class Tools extends Component {
  render() {

		const { type, types, setAttributes } = this.props

    return (
			<BlockControls>

				<Toolbar>

					{ types.map( option => {
						return(

							<Tooltip text={ option.title  }>
								<IconButton
									icon={ option.icon }
									className={ classnames(
										'components-icon-button',
										'components-toolbar__control',
										`AGB-toolbar-icon-${option.slug}`,
										{ 'is-active': option.slug == type },
									) }
									onClick={ () => setAttributes( { type: option.slug, title: option.title } ) }
								/>
							</Tooltip>
						)
					} ) }

				</Toolbar>
			</BlockControls>
    )
  }
}
