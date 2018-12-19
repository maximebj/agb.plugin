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

		// Activate / Disable Block
		$( '.js-AGB-toggle-state' ).click( function( e ) {
			e.preventDefault();

			const $parent = $( this ).parents( '.AGB-card' );
			const $button = $( this );
			$parent.toggleClass( 'is-active' );

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
			} );
		} );

		// List.js configuration
		const options = {
			valueNames: [ 'AGB-card__title' ],
		};

		var lists = [];
		$('.AGB-cards').each(function() {
			lists.push( new List( $(this).attr('id'), options ) );
		});
		
		const searchBlocks = $( '#search-blocks' );
		searchBlocks.on( 'keyup', function() {
			
			for( var i = 0; i < lists.length; i++ ) {
				lists[i].search( searchBlocks.val() );
			}
			
		} );

		// Modal
		var $modal = $('.AGB-modal');
		const URLparams = new URLSearchParams(location.search);

		$('.js-open-modal').on('click', function(e) {
			e.preventDefault();

			$modal.addClass('is-active');
			$('body').addClass('has-overlay');
			$('.AGB-modal__content.is-active', $modal).removeClass('is-active');

			var id = $(this).attr('data-block');
			$('.AGB-modal__content[id="modal-content-'+id+'"]').addClass('is-active');

			// To reopen modal after save
			URLparams.set('modal', id);
			var newURL = decodeURIComponent(location.pathname + '?' + URLparams);
			window.history.replaceState({}, "", newURL);
			$('input[name="_wp_http_referer"]').val(newURL);

		});

		$('.js-close-modal').on('click', function(e) {
			e.preventDefault();
			
			$modal.removeClass('is-active');
			$('body').removeClass('has-overlay');

			URLparams.delete('modal');
			var newURL = decodeURIComponent(location.pathname + '?' + URLparams);
			window.history.replaceState({}, "", newURL);
			$('input[name="_wp_http_referer"]').val(newURL);
		});

		// Reapply blur
		if( URLparams.has('modal') ) {
			$('body').addClass('has-overlay');
		}

	} );
}( jQuery ) );
