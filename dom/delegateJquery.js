$(document).ready(function () {
	var num = 4;
	$('button.test').on('click', function () {
		var li = $('<li>test'+num+'<span class="delete">x</li>');
		num++;
		$('ul').append(li);
	});
	$('ul').delegate('span','click',function () {
		$(this).parent('li').remove();
	});
});