import './style.scss'
import './editor.scss'

import logo from './logo'
import Inspector from './inspect'

import classnames from 'classnames'

import { __ } from '@wordpress/i18n'
const { registerBlockType } = wp.blocks
const { RichText } = wp.blockEditor
const { Fragment } = wp.element

export default registerBlockType(
  'advanced-gutenberg-blocks/clicktotweet',
  {
    title: __( 'Click to tweet', 'advanced-gutenberg-blocks' ),
    description: __( 'Display a nice click to tweet box so your user can easily share your most meaningful sentences', 'advanced-gutenberg-blocks' ),
    category: 'agb',
    icon: { background: '#2F313A', foreground: '#DEBB8F', src: 'twitter' },
    keywords: [ 'twitter' ],
    attributes: {
			content: {
        type: 'string'
      },
      hashtags: {
        type: 'string'
      }
    },
    edit: props => {

			const { attributes, className, isSelected, setAttributes } = props
      const { content } = attributes

      return (
				<Fragment>

          <Inspector { ...{ attributes, setAttributes } } />

	        <div className={ className }>
            <RichText
	            tagName="div"
              format="string"
	            value={ content }
	            className={ `${className}__content` }
	            onChange={ content => setAttributes( { content } ) }
              placeholder={ __( 'Your tweetable content', 'advanced-gutenberg-blocks' ) }
	  				/>
            <footer className={ `${className}__footer` }>
              <span>{ __( 'Click to tweet', 'advanced-gutenberg-blocks' ) }</span>
              {logo}
            </footer>
	        </div>

				</Fragment>
      )
    },
    save: props => {
			return null
		},
  },
)
