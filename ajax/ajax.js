// 原生ajax
function ajax (options) {
	options = options || {};
	options.type = (options.type || 'GET').toUpperCase();
	options.dataType = options.dataType || 'json';
	var params = formatParams(options.data) || null;
	

	//创建xmlRequest
	if (window.XMLHttpRequest) {
		var xhr = new XMLHttpRequest();
	} else {
		var xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}
	//接收
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			var status = xhr.status;
			if (status >= 200 && status < 300) {
				options.success && options.success(xhr.responseText, xhr.responseXML);
			} else {
				options.fail && options.fail(xhr.status);
			}
		}
	}
	//链接和发送
	if (options.type == 'GET') {
		if (params) {
			xhr.open('GET', options.url + '?' + params,true);
		} else {
			xhr.open('GET', options.url, true);
		}
		
		xhr.send(null);
	} else if (options.type == 'POST') {
		if (params) {
			throw new Error('参数不合法');
		} else {
			xhr.open('POST', options.url, true);
			//设置表单提交内容
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.send(params);
		}
	}
}
//格式化参数
function formatParams (data) {
	var arr = [];
	for (var key in data) {
		arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
	}
	arr.push(('v=' + Math.random()).replace('.',''));
	return arr.join('&');
}
var data = {name: 'wlm',age: 20};
console.log(formatParams(data));
// var s = '&&@/?wlm';
// console.log(escape(s));