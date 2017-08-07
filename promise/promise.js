function fn (num) {
	return new Promise(function (resolve, reject) {
		if (typeof num == 'Number') {
			resolve('success');
		} else {
			reject('err');
		}
	});
}
fn(123).then(function(data) {
	console.log(data);
},function (err) {
	console.log(err);
});
function ajax (options) {
	return new Promise (function (resolve, reject){
		var options = options || {};
		options.type = (options.type || 'GET').toUpperCase();
		options.dataType = options.type || 'json';
		var params = formatParams(options.data) || null;
		//新建XMLHttpRequest对象
		if (window.XMLHttpRequest) {
			var xhr = new XMLHttpRequest();
		} else {
			var xhr = new ActiveXObject('Miscrosoft.XMLHTTP');
		}
		xhr.onreadystatechange = function () {
			if (xhr.state === 4) {
				var status = xhr.status;
				if (status>=200 && status < 300) {
					var response = JSON.parse(xhr.responseText);
					resolve(response);
				} else {
					reject(xhr.status);
				}
			}
		}
		//发送请求
		if (options.type == 'GET') {
			if (params) {
				xhr.open('GET', options.url+'?'+params, true);
			} else {
				xhr.open('GET', options.url, true);
			}
			xhr.send(null);
		} else if (options.type == 'POST') {
			if (params) {
				throw new Error('参数不合法');
			} else {
				xhr.open('POST', options.url, true);
				xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				xhr.send(params);
			}
		}
	});
}
function formatParams (data) {
	var result = [];
	for (var key in data) {
		var temp = encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
		result.push(key);
	}
	return result.join('&');
}