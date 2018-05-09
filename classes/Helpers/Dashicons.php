<?php

namespace AdvancedGutenbergBlocks\Helpers;

defined('ABSPATH') or die('Cheatin&#8217; uh?');

/**
 * Missing Dashicons
 *
 * @author Maximebj
 * @version 1.0.0
 * @since 1.0.0
 */

abstract class Dashicons {

	const HEADING = '<svg aria-hidden="true" role="img" focusable="false" class="dashicon dashicons-heading" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M12.5 4v5.2h-5V4H5v13h2.5v-5.2h5V17H15V4"></path></svg>';

	const HTML = '<svg aria-hidden="true" role="img" focusable="false" class="dashicon dashicons-html" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M4 16v-2H2v2H1v-5h1v2h2v-2h1v5H4zM7 16v-4H5.6v-1h3.7v1H8v4H7zM10 16v-5h1l1.4 3.4h.1L14 11h1v5h-1v-3.1h-.1l-1.1 2.5h-.6l-1.1-2.5H11V16h-1zM19 16h-3v-5h1v4h2v1zM9.4 4.2L7.1 6.5l2.3 2.3-.6 1.2-3.5-3.5L8.8 3l.6 1.2zm1.2 4.6l2.3-2.3-2.3-2.3.6-1.2 3.5 3.5-3.5 3.5-.6-1.2z"></path></svg>';

	const SEPARATOR = '<svg aria-hidden="true" role="img" focusable="false" class="dashicon dashicons-minus" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M4 9h12v2H4V9z"></path></svg>';

	const COLUMNS ='<svg aria-hidden="true" role="img" focusable="false" class="dashicon dashicons-columns" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M3 15h6V5H3v10zm8 0h6V5h-6v10z"></path></svg>';

	const BUTTON = '<svg aria-hidden="true" role="img" focusable="false" class="dashicon dashicons-button" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm1 7c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v5z"></path></svg>';

	const SHORTCODE = '<svg aria-hidden="true" role="img" focusable="false" class="dashicon dashicons-shortcode" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M6 14H4V6h2V4H2v12h4M7.1 17h2.1l3.7-14h-2.1M14 4v2h2v8h-2v2h4V4"></path></svg>';

	const EMBED_GENERIC = '<svg aria-hidden="true" role="img" focusable="false" class="dashicon dashicons-embed-generic" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M17 4H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3 6.5L12.5 12l1.5 1.5V15l-3-3 3-3v1.5zm1 4.5v-1.5l1.5-1.5-1.5-1.5V9l3 3-3 3z"></path></svg>';

	const EMBED_POST = '<svg aria-hidden="true" role="img" focusable="false" class="dashicon dashicons-embed-post" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M17 4H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8.6 9l-.4.3c-.4.4-.5 1.1-.2 1.6l-.8.8-1.1-1.1-1.3 1.3c-.2.2-1.6 1.3-1.8 1.1-.2-.2.9-1.6 1.1-1.8l1.3-1.3-1.1-1.1.8-.8c.5.3 1.2.3 1.6-.2l.3-.3c.5-.5.5-1.2.2-1.7L8 5l3 2.9-.8.8c-.5-.2-1.2-.2-1.6.3zm5.4 1.5L12.5 12l1.5 1.5V15l-3-3 3-3v1.5zm1 4.5v-1.5l1.5-1.5-1.5-1.5V9l3 3-3 3z"></path></svg>';

	const EMBED_VIDEO = '<svg aria-hidden="true" role="img" focusable="false" class="dashicon dashicons-embed-video" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M17 4H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-7 6.5L8 9.1V11H3V6h5v1.8l2-1.3v4zm4 0L12.5 12l1.5 1.5V15l-3-3 3-3v1.5zm1 4.5v-1.5l1.5-1.5-1.5-1.5V9l3 3-3 3z"></path></svg>';

	const EMBED_PHOTO = '<svg aria-hidden="true" role="img" focusable="false" class="dashicon dashicons-embed-photo" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M17 4H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-7 8H3V6h7v6zm4-1.5L12.5 12l1.5 1.5V15l-3-3 3-3v1.5zm1 4.5v-1.5l1.5-1.5-1.5-1.5V9l3 3-3 3zm-6-4V8.5L7.2 10 6 9.2 4 11h5zM4.6 8.6c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1z"></path></svg>';

	const EMBED_AUDIO = '<svg aria-hidden="true" role="img" focusable="false" class="dashicon dashicons-embed-audio" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M17 4H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-7 3H7v4c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.4 0 .7.1 1 .3V5h4v2zm4 3.5L12.5 12l1.5 1.5V15l-3-3 3-3v1.5zm1 4.5v-1.5l1.5-1.5-1.5-1.5V9l3 3-3 3z"></path></svg>';
}
