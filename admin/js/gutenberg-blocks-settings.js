(function($) {
	'use strict';
	$(document).ready(function() {

		// Show / Hide settings panel

		$('.js-gutenblocks-show-settings').click( function(e) {
			e.preventDefault();
			var $parent = $(this).parents('.gutenblocks-block');
			$parent.find('.gutenblocks-block__settings').slideToggle();
		});


		// Activate / Disable Block
		$('.js-gutenblocks-toggle-state').click( function(e) {
			e.preventDefault();

			var $parent = $(this).parent('.gutenblocks-block');
			var $button = $(this);
			$parent.toggleClass('is-active');

			var $buttonLabel = $button.html();
			$button.html('...');

			var data = {
				action : 'toggle_block',
				command : $(this).attr('data-command'),
				block : $(this).attr('data-block')
			};

			$.ajax({
				type: "POST",
				url: ajaxurl,
				data: data
			}).done(function(response) {

				// invert command
				var $invertCommand = $(this).attr('data-invert-command');
				$button.attr('data-invert-command', $button.attr('data-command'));
				$button.attr('data-command', $invertCommand);

				$button.html($button.attr('data-invert-label'));
				$button.attr('data-invert-label', $buttonLabel);

			});
		});

	});
})(jQuery);
