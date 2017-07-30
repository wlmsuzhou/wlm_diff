function ajax (options) {
	options = options || {};
	options.type = (options.type || 'GET').toUpperCase();
	var params = formatParams(options.data);

	//创建XMLHttpRequest对象
	if (window.XMLHttpRequest) {
		var xhr = new XMLHttpRequest();
	} else {
		var xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}

	//状态改变
	xhr.onreadystatechange =  function () {
		if (xhr.readyState == 4) {
			if (xhr.status >= 200 && xhr.status < 200) {
				options.success && options.success(xhr.responseTetx, xhr.responseXML);
			} else {
				options.fail && options.fail(options.status);
			}
		}
	}

	//发送请求
	if (options.type == 'GET') {
		xhr.open('GET', options.url + '?' + params, true);
		xhr.send(null);
	} else if (options.type == 'POST') {
		xhr.open('POST', options.url, true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send(params);
	}
}

function formatParams (data) {
	var result = [];
	for (var key in data) {
		result.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
	}
	result.push(('v=' + Math.random()).replace('.',''));
	return result;
}

//jsonp
function jsonp (options) {
	options = options || {};
	if (!options.url || !options.callback) {
		return new Error('格式错误');
	}
	var time = options.time || 5000;//设置超时时间
	//创建script标签
	var params = formatParams(options.data);
	var oS = document.createElement('script');
	var oHead = document.getElementsByTagName('head')[0];
	oS.src = options.url + '?' +params;
	oHead.appendChild(oS);

	window[options.callback] = function (data) {
		oHead.removeChild(oS);
		window[options] = null;
		clearTimeout(oS.timer);
		options.success && options.success(data);
	}
	oS.timer = setTimeout(function () {
		oHead.removeChild(oS);
		window[options.callback] = null;
		options.fail && options.fail({message: '请求超时'});
	},time);
}