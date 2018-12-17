=== Advanced Gutenberg Blocks ===
Contributors: maximebj
Tags: Gutenberg blocks, Customizable block, Google Maps, testimonial, deactivate blocks, plugin, ad, marketplace, WooCommerce, Product,
Requires at least: 4.5
Tested up to: 5.0
Requires PHP: 5.6
Stable tag: 1.5
Donate link: https://paypal.me/maximebj
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Advanced Gutenberg Blocks bring awesome blocks for the new WordPress editor, for a real WYSIWYG experience

== Description ==

Advanced Gutenberg Blocks is the perfect tool for the new WordPress Editor:
* New blocks: Dozen of new and awesome blocks
* Block management: disable native blocks you don't need
* Editor tweaks: options to customize the editor experience 

https://www.youtube.com/watch?v=PBVHKo172mU

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
* Subhead: A nice first paragraph for your posts

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

= Extensible =

Create your own blocks and register them in the Advanced Gutenberg Blocks settings page.

= Contribute! =

Help us making great blocks! Join the project on [Github](https://github.com/maximebj/Gutenberg-blocks)

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress.
3. Go in 'Blocks' menu to manage your blocks

__This plugin requires Gutenberg plugin__


== Frequently Asked Questions ==

= What is Advanced Gutenberg Blocks? =

AGB brings new blocks for the new WordPress editor and a settings page to configure them.

== Screenshots ==

== Changelog ==

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
