function foreach(callback) {
	for (var i = 0; i < 9; ++i) {
		for (var j = 0; j < 9; ++j) {
			callback($('#sqr' + i + j), i, j);
		}
	}
}

function setValue(input, set) {
	if (set) {
		input.addClass('value');
		input.attr('readonly', true);
	} else {
		input.removeClass('value');
		input.attr('readonly', false);
	}
}

function load() {
	var data = $('#sudokuData').val();
	
	foreach(function(input, i, j) {
		var position = (i * 18) + (j * 2);
		
		setValue(input, data.charAt(position) == '1' && !$('#enableEdit').is(':checked'));
		
		var value = data.charAt(position + 1);
		
		if (value != '0') {
			input.val(value);
		}
	});
}

function save() {
	var result = '';
	
	foreach(function(input) {
		var current = 0;
		
		result += (input.hasClass('value')) ? 1 : 0;
		result += (input.val()) ? input.val() : 0;
	});
	
	$('#sudokuData').val(result);
}

$(document).ready(function() {
	$('.sqr').numeric();
	
	$('#saveData').click(save);
	$('#loadData').click(load);
	
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
