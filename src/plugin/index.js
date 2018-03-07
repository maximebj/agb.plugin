import Inspector from './inspect'
import Preview from './preview'

const {
  registerBlockType,
} = wp.blocks;

const { __ } = wp.i18n;

export default registerBlockType(
  'gutenblocks/plugin',
  {
    title: __( 'Plugin' ),
    description: __( 'Display informations from a WordPress plugin' ),
    category: 'common',
    icon: 'admin-plugins',
    keywords: [
      'plugin',
    ],
    attributes: {
      title: {
        source: 'text',
        selector: '.plugin__title a',
      },
      description: {
        source: 'text',
        selector: '.plugin__desc',
      },
      image: {
        source: 'attribute',
        selector: '.plugin__picture img',
        attribute: 'src',
      },
      activeInstalls: {
        source: 'text',
        selector: '.plugin__meta__active span',
      },
      downloadLink: {
        source: 'attribute',
        selector: '.plugin__meta .button',
        attribute: 'href',
      },
      rating: {
        source: 'attribute',
        selector: '.plugin__rating',
        attribute: 'data-note',
      },
    },
    edit: props => {

      const onChangePlugin = (plugin) => {

        props.setAttributes( {
          title: plugin.name,
          description: plugin.short_description,
          image: defineImage(plugin.icons),
          downloadLink: `https://fr.wordpress.org/plugins/${plugin.slug}`,
          activeInstalls: plugin.active_installs,
          rating: plugin.rating,
        } )
      };

      const defineImage = (icons) => {
        if (icons['2x']) {
          return icons['2x']
        } else if(icons['1x']) {
          return icons['1x']
        } else {
          return icons.default
        }
      }

      return [
        !! props.focus && (
          <Inspector onChangePlugin={onChangePlugin} />
        )
				,
        !! props.attributes.title ? (
          <Preview {...props} />
        ) : (
          <p class="captain-choose">{ __( 'Search for a plugin in the inspector' ) }</p>
        )
      ]
    },
    save: props => {
      return (
        <Preview {...props} />
      )
    },
  },
);
