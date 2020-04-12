=== Advanced Gutenberg Blocks ===
Contributors: maximebj
Tags: Gutenberg blocks, Customizable block, Google Maps, testimonial, deactivate blocks, plugin, ad, marketplace, WooCommerce, Product,
Requires at least: 5.0
Tested up to: 5.4
Requires PHP: 7.0
Stable tag: 1.9.8
Donate link: https://paypal.me/maximebj
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Advanced Gutenberg Blocks bring awesome blocks for the new WordPress editor, for a real WYSIWYG experience

== Description ==

Advanced Gutenberg Blocks is the perfect tool for the new WordPress Editor:
* New blocks: Dozen of new and awesome blocks
* Block management: disable native blocks you don't need
* Editor tweaks: options to customize the editor experience
* RichText tools: missing the old TinyMCE buttons? Bring them back in a click

https://www.youtube.com/watch?v=P7UsHBSuAvE

= Blocks =

* Notice: Display a sweet Info/Advice/Warning/Avoid/ notice
* Post: Display pretty posts link (from any post type)
* WooCommerce Product: Display WooCommerce Product in your post
* WooCommerce Add to cart button: An add to cart button to quickly purchase a WooCommerce product
* Banner Ad: Monetize your website by inserting banner Ads in your content
* Text + rectangle Ad: Monetize your website by inserting Rectangle Ads in your content
* WordPress Plugin Card: Display a Plugin informations from the official WordPress repository
* Website Card preview: Do you like how Facebook, Twitter or Slack display a sweet preview to a website in a card? Don't be jealous, we've made the same for you in WordPress!
* Testimonial: Display a testimonial with a picture, text, name and company
* Google Map: Display a customizable Google Map in your content
* Click to Tweet: a nice click to tweet box featuring a content ready to be retweeted
* Table of contents: An auto generated, dynamic summary for your long posts
* Intro: A nice first paragraph for your posts
* Giphy: Quickly search and insert a GIF from Giphy
* Unsplash: Find beautiful pictures from the best free photos stock
* Code: Finally the code block you deserve with dozens of themes and languages

= Block management =

Advanced Gutenberg Blocks features a setting page with all the blocks where you can edit default settings and manage your blocks

= Deactivate blocks =

Don't want some of the blocks (from this plugin or the WP default ones) ? Disable them in one click from the blocks management page!

= Tweak Editor settings = 

Customize a lot of settings within the editor without a line of code: 

* Customize Editor width (and wide blocks)
* Customize default colors in palettes
* Disable custom color button in palettes
* Customize default font sizes
* Disable custom font size option
* Activate Wide blocks 
* Activate default blocks stylesheet when theme doesn't handle blocks styles
* Activate responsive embeds

= RichText Tools =

Bring back your Tiny MCE buttons in the editor toolbar in a click to improve your writing experience.

* Sub and sup
* Remove formatting
* Code (now native)
* Striketrough (now native)
* Selected text color (now native)

= Extensible =

Create your own blocks and register them in the Advanced Gutenberg Blocks settings page.

= Built with performances in mind = 

Don't worry about performances: only the needed scripts are loaded in frontend. 

= Contribute! =

Help me making great blocks! Join the project on [Github](https://github.com/maximebj/Gutenberg-blocks)

= Credits = 

This plugin uses the awesome [Create-Guten-Block](https://github.com/ahmadawais/create-guten-block) Boilerplate by Ahmad Awais! 

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress.
3. Go in 'Blocks' menu to manage blocks and settings


== Frequently Asked Questions ==

= What is Advanced Gutenberg Blocks? =

AGB brings new blocks for the new WordPress editor and a settings page to configure them. AGB also provides a page to tweak the WordPress editor, and deactivate native blocks that you don't want to use.

= Does the blocks exists in standalone? =

No, but only the needed scripts are loaded in front, so don't worry about performances

= I have a block idea! How can I reach you? =

Just throw me an e-mail at maxime [at] dysign . fr and let's get in touch!

== Screenshots ==

== Changelog ==

= 1.9.8 (12/04/2020) =
* Fixed: Due to a bug on wp.org, translations for the blocks are defined directly on this plugin

= 1.9.7 (11/04/2020) =
* Fixed: missing strings in translation

= 1.9.6 (10/04/2020) =
* Fixed: translations in editor weren't properly loaded
* Fixed: issue in add to cart button
* Fixed: an error causing every block to crash (due to formats doubles)
* Improved: remove formats that are now in core (strikethrough, inline code, color)
* Improved: updated some depreciated code
* Improved: use of WooCommerce v3 API if available thanks to Julià Mestieri
* Improved: WooCommerce blocks can find variables products thanks to Julià Mestieri
* Improved: Updated the way the plugin handles translation to fit wp.org standards

= 1.9.5.1 (02/03/2020) =
* Fixed: a bug with plugin block and missing strings for translation

= 1.9.5 (27/02/2020) =
* Added: You can now transform text and intro in notices blocks thanks to Frederico Bond
* Improved: the way styles and scripts are loaded
* Improved: Updated code to handle depreciations
* Improved: Some security improvments (Thanks to Camilo517)
* Fixed: some bugs in e-commerce blocks thanks to Julià Mestieri
* Fixed: overrided editor and theme annoying styles in editor
* Fixed: Blocks deactivation
* Fixed: Custom editor width that didn't worked anymore on some themes
* Fixed: some blocks that couldn't get custom classes thanks to Theremingenieur
* Fixed: multiple errors

= 1.9.4 (28/10/2019) =
* Ready for WordPress 5.3
* Fixed: Some styles, script and the Noto font were loading in front, increasing HTTP requests for nothing

= 1.9.3 (09/10/2019) =
* Fixed: Text domain wasn't properly called
* Fixed: Removed WP texturize in block content to avoid -- being transformed in – thanks to @lukaszmn
* Fixed: Table of content entities and tags are handled better thanks to @lukaszmn
* Improved: Added support for new languages: TypeScript and JSON thanks to lukaszmn
* Fixed: Code block line Wrapping works fine thanks to @mcbenton
* Fixed: Plugin blocks works again thanks to @dezodev
* General improvements

= 1.9.2 (06/04/2019) =

* Fixed: Issue in website block
* Warning: OpenGraph API has changed plans. You must login and accept new free plan so the website block works again.

= 1.9.1 (21/03/2019) =

* Improved: missing strings are now translatable in every language

= 1.9 (07/03/2019) =

* New: You can now add buttons to the editor Toolbar to improve the Tiny MCE experience
* Improved: Updated the way the plugin unregister blocks (following [this issue](https://www.google.com/url?q=https://github.com/WordPress/gutenberg/pull/12613%23issuecomment-457563671&source=gmail&ust=1548507266759000&usg=AFQjCNFe04mgNvl8DIH6jxFgV4FTQwwgGw))

= 1.8.5 (24/01/2019) =

* Fixed: Better default values handling in PHP rendered blocks
* Fixed: Post block didn't display post Thumbnail anymore

= 1.8.4 (22/01/2019) =

* Fixed: Notice Block needed more depreciation scheme after fixing messy SVG icons
* Fixed: Table of Content JS didn't work for people who changed the native jQuery version on theme

= 1.8.3 (22/01/2019) =

Big update with a few new features but a lot of fixes. I've heard you on wp.org and Github! Thanks for your support.  

* French translation up to date
* New: Code Block now supports plain text (Thanks to ronisbr)
* New: Table of content is now foldable (Thanks to fethomm) and has more options: default header text, maximum level depth and folded by default
* Improved: API Key fields in block management page are now only accessible for 'manage_options' capabilities (Thanks to Sebastient Serre)
* Improved: Dashboard styles
* Improved: Paragraph can now be transformed in Intro block
* Fixed: Some PHP data validation where messy (Thanks to Thierry Pigot)
* Fixed: Error with Post Block rendering
* Fixed: Code block JSX lang is now properly working
* Fixed: Code block Rust lang is now properly working
* Fixed: Code block Shell lang is now properly working
* Fixed: Escaped code in code block to avoid issues with apostrophes (thanks to Pwharton)
* Fixed: PHP lang was hard to choose because of a missing CSS z-index attribute
* Fixed: Plugin without icon now displays a placeholder image
* Fixed: Get full size image in Post Block thumbnail if Large is not available
* Fixed: Bug with Notice block icon rendering
* Fixed: When a block invites to set API key, the URL to blocks management page is now always good (even on multisite)
* Fixed: Depreciation in Notice block now works
* Fixed: &nbsp; chars are no longer appearing in Table of Contents Block

= 1.8.2 (02/01/2019) =
* Fixed: Bad settings values in CodeMirror in Code Block
* Fixed: Bug preventing PHP code in front in Code Block

= 1.8.1 (28/12/2018) =
* New Setting: Long lines wrap in Code block
* New Setting: Highlight lines in Code block
* Fixed: Custom Post Types on Post block
* Fixed: Search broken on product block
* Fixed: Admin CSS/JS didn't load on non english languages

= 1.8 (27/12/2018) =
* New block: Code with syntax highlighting, dozen of themes and languages
* Improved: Gmap block supports wide and full alignment
* Optimization: Better performances

= 1.7.1 (21/12/2018) =
* Fix: Giphy now works on HTTPS sites
* Fix: Unsplash image description

= 1.7 (21/12/2018) =
* New Block: Search and display GIFs from Giphy
* New Block: Search and import images from Unsplash 
* Fixed: Notice block icon bug

= 1.6 (19/12/2018) =
* New: Dashboard to manage blocks
* New: separate Dashboard to disable native blocks
* Fixed: a bug preventing activation
* Fixed: loss of options data

= 1.5 (17/12/2018) =
* New Feature: "Editor settings" - tweak editor setting without code!
* New Editor settings option: Customize Editor Width (and wide blocks width too)
* New Editor settings option: Customize default colors in color Palette
* New Editor settings option: Disable custom color button in color Palette
* New Editor settings option: Customize fonts sizes and names in paragraph size selector
* New Editor settings option: Disable custom font size option in paragraphs
* New Editor settings option: Activate Wide blocks
* New Editor settings option: Activate Editor blocks defaults stylesheet 
* New Editor settings option: Activate responsive embeds
* New in Notice Block: New styles variations available
* New in Notice Block: Notices can display an icon
* Fixed: 2 bugs on Add to cart block

= 1.4.4 (10/12/2018) =
* Fixed: error on WP 4.x
* Fixed: error on Blocks management page

= 1.4.3 (05/12/2018) =
* Compatible with WordPress 5.0 and Gutenberg official release!
* Blocks are now grouped in the same category in the inserter
* Changed blocks colors in inserter menu
* Fixed: bug in Add to cart button
* Fixed: bug in Summary code preventing good anchors slugs
* Fixed: bug in Post block forgetting its ID
* Fixed: bug in Post block with no thumbnail
* Fixed: multiple little things

= 1.4.2 (19/09/2018) =
* Added filters for template files
* Fixed a bug when searching for a post or a product
* Removed lodash dependency and use the one in gutenberg

= 1.4.1 (12/09/2018) =
* Fixed a bug crashing the table of contents
* Improved React code to fit good practices

= 1.4 (12/09/2018) =
* New block: Table of contents block
* New block: Subhead block
* Checking compatibility with Gutenberg 3.8

= 1.3.2 (04/09/2018) =
* Compatibility with Gutenberg 3.7
* Fixed a bug causing an error on activation
* Fixed deactivated blocks to work with the newer Gutenberg versions
* Rewrote Add To Cart Button because withAPIData has been deprecated in Gutenberg
* Rewrote Product Block because withAPIData has been deprecated in Gutenberg
* Fixed accessing WooCommerce API by adding an API Key authentification
* Fixed dynamic search in Settings page
* Fixed Post block when choosing other post types
* A backend CSS style was loaded in front, causing CSS conflicts with 2 columns block

= 1.3.1 (07/08/2018) =
* Fixed bad URL in Click To Tweet block

= 1.3 (09/07/2018) =
* New block: Click To Tweet
* Added a fuzzy search to help you find a block on settings page

= 1.2.7 (29/06/2018) =
* Added background color to blocks in Gutenberg Block list
* Fixed bug preventing settings to be saved

= 1.2.6 (25/05/2018) =
* Fixed bug occuring when WooCommerce is not installed/enabled

= 1.2.5 (25/05/2018) =
* Fixed disable block functionality thanks to D Willitzer (djdesign)
* Fixed bug on activation
* Improved code for better performances

= 1.2.4 (19/05/2018) =
* Compatibility with the new Gutenberg 2.9
* Fixed a bug on plugin activation thanks to Thierry (Theremingenieur)

= 1.2.3 (17/05/2018) =
* Fixed a bug occuring in plugins page

= 1.2.2 (17/05/2018) =
* Improved Plugin block. Now fully dynamic. Warning: You'll need to recreate your Plugin blocks.
* Fixed post block link
* General improvment

= 1.2.1 (14/05/2018) =
* Improved Card preview data fetching
* Fixed a bug with Card plugin API key
* Fixed Assets version to avoid cache issues on update
* Fixed text input labels and styles

= 1.2 (14/05/2018) =
* WARNING: This version breaks compatibility with previous version. You'll need to recreate your blocks. Sorry for that, it wont happen again : I'm changing the plugin slug, textdomain and blocks ID to avoid conflict with another plugin.
* Compatibility with Gutenberg 2.8
* Fixed Post block issues
* Fixed Website Card issues
* Fixed testimonial unselectable fields
* General improvements

= 1.1.1 (26/03/2018) =
* Fixed Gmap block
* Improved front style consistency

= 1.1.0 (18/03/2018) =
* Added Google Maps Block
* French Translation

= 1.0.0 (13/03/2018) =
* First release with a few blocks and the blocks manager
