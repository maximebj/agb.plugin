(function($) {
	'use strict';
	$(document).ready(function() {

		$('.js-gutenblocks-show-settings').click( function(e) {
			e.preventDefault();
			var $parent = $(this).parents('.gutenblocks-block');
			$parent.find('.gutenblocks-block__settings').slideToggle();
		});

	});
})(jQuery);
