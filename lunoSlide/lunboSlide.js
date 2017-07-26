var num = 0,count;
$(document).ready(function () {
	count = $('div#imgList a').length;
	var i = 0;
	var oneWidth = $('div#imgList a').eq(0).width();
	console.log(oneWidth);
	$('span.banner-info').html($('div#imgList a').eq(i).find('img').attr('alt'));
	$('ul li').on('click', function () {
		$(this).toggleClass('on').siblings().removeClass('on');
		num = $(this).index();//获取在列表中的index
		$('span.banner-info').html($('div#imgList a').eq(num).find('img').attr('alt'));
		$('div#imgList').animate({
			'right': oneWidth*num,
		});
	});
	$('span.left').on('click', function () {
		//$('div#imgList').stop(true,true);
		num--;
		if (num < 0) {
			num = count - 1;
		}
		$('ul li').eq(num).trigger('click');
	});
	$('span.right').on('click', function () {
		//$('div#imgList').stop(true,true);
		num++;
		if (num >= count) {
			num = 0;
		}
		$('ul li').eq(num).trigger('click');
	});
	var timer = setInterval('showAuto()',3000);
	$('div.main').hover(function () {
		console.log('sss');
		clearInterval(timer);
	}, function () {
		timer = setInterval('showAuto()',3000);
	});
});
function showAuto() {
	num = num >=(count - 1) ? 0 : ++num;
	$('ul li').eq(num).trigger('click');
}