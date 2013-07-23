function foreach(callback) {
	for (var i = 0; i < 9; ++i) {
		for (var j = 0; j < 9; ++j) {
			callback($('#sqr' + i + j), i, j);
		}
	}
}

$(document).ready(function() {
	$('.sqr').numeric();
	
	$('#enableEdit').attr('checked', true);
	
	$('#enableEdit').click(function() {
		var isChecked = $(this).is(':checked');
		
		if (isChecked) {
			foreach(function(input) {
				input.removeClass('value');
				input.attr('readonly', false);
			});
		} else {
			foreach(function(input) {
				if (input.val()) {
					input.addClass('value');
					input.attr('readonly', true);
				}
			});
		}
	});
});
