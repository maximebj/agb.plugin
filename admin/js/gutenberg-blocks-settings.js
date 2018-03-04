(function($) {
	'use strict';
	$(document).ready(function() {

		$('.js-gutenblocks-show-settings').click( function() {
			$(this).find('.gutenblocks-block__settings').slideToggle();
		});

	});
})(jQuery);
