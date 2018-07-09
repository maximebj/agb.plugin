import './style.scss'
import './editor.scss'

import logo from './logo'
import Inspector from './inspect'

import classnames from 'classnames'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { RichText } = wp.editor
const { Fragment } = wp.element

export default registerBlockType(
  'advanced-gutenberg-blocks/clicktotweet',
  {
    title: __( 'Click to tweet', 'advanced-gutenberg-blocks' ),
    description: __( 'Display a nice click to tweet box so your user can easily share your most meaningful sentences', 'advanced-gutenberg-blocks' ),
    category: 'common',
    icon: { background: '#D56561', foreground: "#fff", src: 'twitter' },
    keywords: [ 'twitter' ],
    attributes: {
			content: {
        source: 'text',
        type: 'string',
        selector: '.wp-block-advanced-gutenberg-blocks-clicktotweet__content',
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

			const { content, hashtags } = props.attributes

      const url  = encodeURI( document.location.href )
      const user = encodeURI( advancedGutenbergBlocksClickToTweet.username )
      const text = encodeURI( content )
      const tags = typeof( hashtags ) === "undefined" ? '' : encodeURI( hashtags )

      const intentURL = `https://twitter.com/intent/tweet?url=${url}&via=${user}&text=${text}&hashtags=${tags}`

			return (
        <a href={intentURL} className='wp-block-advanced-gutenberg-blocks-clicktotweet'>
          <div className='wp-block-advanced-gutenberg-blocks-clicktotweet__content'>
            {content}
          </div>
          <div className='wp-block-advanced-gutenberg-blocks-clicktotweet__footer'>
            <span>{ __( 'Click to tweet', 'advanced-gutenberg-blocks' ) }</span>
            {logo}
          </div>
        </a>
      )
    },
  },
)
