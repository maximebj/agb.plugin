( function( $ ) {
	'use strict';
	$( document ).ready( function() {
		// Smooth Scroll
		$( 'body' ).on( 'click', 'a[href^=\\#]:not([href=\\#])', function( e ) {
			e.preventDefault();
			const anchor = $( this ).attr( 'href' );
			$( 'html,body' ).animate(
				{ scrollTop: $( anchor ).offset().top - 120 },
				300
			);
		} );

		// Show / Hide settings panel
		if ( window.location.hash !== '' ) {
			$( window.location.hash )
				.find( '.AGB-block__panel' )
				.slideToggle();
		}

		$( document ).on( 'click', '.js-AGB-show-panel', function( e ) {
			e.preventDefault();
			const $parent = $( this ).parents( '.AGB-block' );
			const panel = $parent.find( '.AGB-block__panel' );
			panel.slideToggle();
		} );

		// Activate / Disable Block
		$( '.js-AGB-toggle-state' ).click( function( e ) {
			e.preventDefault();

			const $parent = $( this ).parents( '.AGB-block' );
			const $button = $( this );
			$parent.toggleClass( 'is-active' );

			const $buttonLabel = $button.html();
			$button.html( '...' );

			const data = {
				action: 'toggle_block',
				command: $( this ).attr( 'data-command' ),
				block: $( this ).attr( 'data-block' ),
			};

			$.ajax( {
				type: 'POST',
				url: ajaxurl,
				data: data,
			} ).done( function() {
				// invert command
				const $invertCommand = $button.attr( 'data-invert-command' );
				$button.attr(
					'data-invert-command',
					$button.attr( 'data-command' )
				);
				$button.attr( 'data-command', $invertCommand );

				$button.html( $button.attr( 'data-invert-label' ) );
				$button.attr( 'data-invert-label', $buttonLabel );
			} );
		} );

		// List.js configuration
		const options = {
			valueNames: [ 'AGB-block__name' ],
		};

		const CustomBlockList = new List( 'AGB-blocks--custom', options );
		const NativeBlockList = new List( 'AGB-blocks--native', options );

		const searchBlocks = $( '#search-blocks' );
		searchBlocks.on( 'keyup', function() {
			CustomBlockList.search( searchBlocks.val() );
			NativeBlockList.search( searchBlocks.val() );
		} );
	} );
}( jQuery ) );
