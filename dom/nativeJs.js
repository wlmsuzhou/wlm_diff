window.onload = function () {
	var btn = document.querySelector('button.test');
	btn.onclick = function () {
		var para = document.createElement('p');
		var node = document.createTextNode('这是新段落');
		para.appendChild(node);
		var elements = document.querySelectorAll('p');
		console.log(elements.length);
		var para2 = para.cloneNode(true);
		insertAfter(para, elements[0]);
		insertAfter(para2, elements[1]);
		// elements[1].appendChild(para);
		// elements[2].appendChild(para);
		// for (let i = 0; i < elements.length; i++) {
		// 	console.log(elements[i]);
		// 	elements[i].appendChild(para);
		// }
		// elements.forEach(function (element) {
		// 	element.appendChild(para);
		// });
	};
};
function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}