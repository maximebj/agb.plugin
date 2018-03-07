(function($) {
	'use strict';
	$(document).ready(function() {

		// Smooth Scroll
	  $('body').on('click', 'a[href^=\\#]:not([href=\\#])', function(e){
	    e.preventDefault();
	    var anchor = $(this).attr('href');
	    $('html,body').animate({scrollTop: $(anchor).offset().top - 120 }, 300);
	  });


		// Show / Hide settings panel
		$('.js-gutenblocks-show-panel').click( function(e) {
			e.preventDefault();
			var $parent = $(this).parents('.gutenblocks-block');
			$parent.find('.gutenblocks-block__panel').slideToggle();
		});


		// Activate / Disable Block
		$('.js-gutenblocks-toggle-state').click( function(e) {
			e.preventDefault();

			var $parent = $(this).parents('.gutenblocks-block');
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
