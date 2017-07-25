window.onload = function () {
	var btn = document.querySelector('button');
	var ul = document.querySelector('ul');
	//代理模式
	ul.onclick = function (event) {
		var eve = event || window.event;
		// console.log('ul');
		console.log(eve.target.nodeName);
		if (eve.target && eve.target.nodeName.toLowerCase() == 'span') {
			var li = eve.target.parentNode;
			ul.removeChild(li);
		}
	}
	btn.onclick = function () {
		var liNode = document.createElement('li');
		var textNode = document.createTextNode('test');
		var spanNode = document.createElement('span');
		var spanText = document.createTextNode('x');
		spanNode.appendChild(spanText);
		spanNode.setAttribute('class','delete');
		liNode.appendChild(textNode);
		liNode.appendChild(spanNode);
		ul.appendChild(liNode);
	}
	//传统模式
	// var liNodes = document.querySelectorAll('li');
	// liNodes.forEach(function (node) {
	// 	node.onclick = function () {
	// 		console.log('sss');
	// 	}
	// });
}