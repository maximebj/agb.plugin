( function( $ ) {
	'use strict';
	$( document ).ready( function() {
		
		// Color Picker
		$('#AGB-colors .AGB-color-picker').wpColorPicker();
		
		// Dynamic Color fields
		$('.js-add-color').on('click', function(e) {
			e.preventDefault();
			var $template = $('#AGB-color-fields li').clone();
			$template.find('.AGB-color-picker').wpColorPicker();
			$template.appendTo('#AGB-colors');
			
		});

		$('#AGB-colors').on('click', '.js-remove-color', function(e) {
			e.preventDefault();
			$(this).parents('.AGB-color').remove();
		});

		// Dynamic Sizes fields
		$('.js-add-size').on('click', function(e) {
			e.preventDefault();
			var $template = $('#AGB-size-fields li').clone();
			$template.find('.AGB-color-picker').wpColorPicker();
			$template.appendTo('#AGB-sizes');
			
		});

		$('#AGB-sizes').on('click', '.js-remove-size', function(e) {
			e.preventDefault();
			$(this).parents('.AGB-size').remove();
		});

	} );
}( jQuery ) );