function jsonp (options) {
	options = options || {};
	var time = options.time || 5000;//做超时处理
	if (!options.url || !options.callback) {
		throw new Error('参数不合法');
	}
	//创建script标签
	var callbackName = ('jsonp_' + Math.random()).replace('.','');
	options.data[options.callback] = callbackName;
	var oHead = document.getElementByTagName('head')[0];
	var params = formatParams(options.data);
	var oS = document.createElement('script');
	oHead.appendChild(oS);

	//创建jsonp函数
	window[callbackName] = function (json) {
		oHead.removeChild(oS);
		clearTimeout(oS.timer);
		window[callbackName] = null;
		options.success && options.success(json);
	}
	oS.src = options.url + '?' + params;

	//超时处理
	if (time) {
		oS.timer = setTimeout(function () {
			window[callbackName] = null;
			oHead.removeChild(oS);
			options.fail && options.fail({message: '超时'});
		}, time);
	}
}
function formatParams (data) {
	var result = [];
	for (var key in data) {
		result.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
	}
	return result.join('&');
}