var t = n = 0,count;
$(document).ready(function () {
	count = $('div#imgList a').length;
	console.log(count);
	$('div#imgList a:not(:first-child)').hide();
	$('span.banner-info').html($('#imgList a:first-child').find('img').attr('alt'));
	$('span.banner-info').on('click', function () {
		window.open($('imgList a:first-child').attr('href'),"_blank");
	});
	$('ul li').on('click', function () {
		var i = $(this).text() - 1;
		if (i >= count) return;
		$('span.banner-info').html($('#imgList a').eq(i).find('img').attr('alt'));
		$('span.banner-info').unbind().click(function () {
			window.open($('imgList a').eq(i).attr('href'),"_blank");
		});
		$('div#imgList a').filter(':visible').fadeOut(500).parent().children().eq(i).fadeIn(1000);
		$(this).toggleClass('on');
		$(this).siblings().removeClass('on');
	});
	t = setInterval('showAuto()',4000);
	$('div.main').hover(function () {
		clearInterval(t);
	}, function () {
		t = setInterval('showAuto()',4000);
	});
});
function showAuto() {
	console.log(count);
	n = n >=(count - 1) ? 0 : ++n;
	$('ul li').eq(n).trigger('click');
}