window.onload = function () {
	var aImg = document.querySelectorAll('img');
    var len = aImg.length;
    var n = 0;//存储图片加载到的位置，避免每次都从第一张图片开始遍历
    window.onscroll = function () {
    	var seeHeight = window.innerHeight;
	    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	    for (var i = n; i < len; i++) {
	    	// console.log('img' + aImg[i].offsetTop);
	    	// console.log(seeHeight);
	    	// console.log(scrollTop);

	        if (aImg[i].offsetTop < seeHeight + scrollTop) {
	            if (aImg[i].getAttribute('src') == '') {
	               	aImg[i].src = aImg[i].getAttribute('data-src');
	            }
	            n = i + 1;
	            console.log('n = ' + n);
	        }
	    }
    }
	
}