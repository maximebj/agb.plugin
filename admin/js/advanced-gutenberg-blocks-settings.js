;(function($) {
	"use strict"
	$(document).ready(function() {

		// Smooth Scroll
		$("body").on("click", "a[href^=\\#]:not([href=\\#])", function(e) {
			e.preventDefault()
			var anchor = $(this).attr("href")
			$("html,body").animate(
				{ scrollTop: $(anchor).offset().top - 120 },
				300
			)
		})

		// Show / Hide settings panel
		if (window.location.hash != "") {
			$(window.location.hash)
				.find(".advanced-gutenberg-blocks-block__panel")
				.slideToggle()
		}

		$(document).on("click", ".js-advanced-gutenberg-blocks-show-panel", function(e) {
			e.preventDefault()
			var $parent = $(this).parents(".advanced-gutenberg-blocks-block")
			var panel = $parent.find(".advanced-gutenberg-blocks-block__panel")
			panel.slideToggle()
		})

		// Activate / Disable Block
		$(".js-advanced-gutenberg-blocks-toggle-state").click(function(e) {
			e.preventDefault()

			var $parent = $(this).parents(".advanced-gutenberg-blocks-block")
			var $button = $(this)
			$parent.toggleClass("is-active")

			var $buttonLabel = $button.html()
			$button.html("...")

			var data = {
				action: "toggle_block",
				command: $(this).attr("data-command"),
				block: $(this).attr("data-block")
			}

			$.ajax({
				type: "POST",
				url: ajaxurl,
				data: data
			}).done(function(response) {
				// invert command
				var $invertCommand = $(this).attr("data-invert-command")
				$button.attr(
					"data-invert-command",
					$button.attr("data-command")
				)
				$button.attr("data-command", $invertCommand)

				$button.html($button.attr("data-invert-label"))
				$button.attr("data-invert-label", $buttonLabel)
			})
		})
	})
})(jQuery)
