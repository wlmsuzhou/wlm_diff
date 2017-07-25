$(document).ready(function () {
	$('button.test').click(function () {
		var html = $('<p>test</p>');
		html.insertAfter('p');
	});
});