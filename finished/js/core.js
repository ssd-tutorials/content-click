$(function() {
	"use strict";
	$('.trigger').live('click', function(e) {
		e.preventDefault();
		var thisTarget = $(this).attr('data-target');
		var thisContent = $(this).attr('data-content');
		if ($('#' + thisTarget).length > 0) {
			$('#' + thisTarget).html(thisContent);
		}
	});
});