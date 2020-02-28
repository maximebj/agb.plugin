import classnames from 'classnames'

const { __ } = wp.i18n
const { Component } = wp.element
const { BlockControls } = wp.blockEditor
const {
  Toolbar,
  IconButton,
  Tooltip,
} = wp.components

export default class Tools extends Component {

  render() {

		const { attributes: { ordered }, setAttributes } = this.props

    return (
      <BlockControls>
				<Toolbar>

          <Tooltip text={ __( 'Ordered list', 'advanced-gutenberg-blocks' ) }>
            <IconButton
              icon='editor-ol'
              className={ classnames(
                'components-icon-button',
                'components-toolbar__control',
                { 'is-active': ordered },
              ) }
              onClick={ () => setAttributes( { ordered: true } ) }
            />
          </Tooltip>

          <Tooltip text={ __( 'Unordered list', 'advanced-gutenberg-blocks' ) }>
            <IconButton
              icon='editor-ul'
              className={ classnames(
                'components-icon-button',
                'components-toolbar__control',
                { 'is-active': ! ordered },
              ) }
              onClick={ () => setAttributes( { ordered: false } ) }
            />
          </Tooltip>

        </Toolbar>
      </BlockControls>
    )
  }
}
