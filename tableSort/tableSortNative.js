window.onload = function () {
	var tBody = document.getElementsByTagName('tbody')[0];
	var tr = tBody.rows;
	var th = document.getElementsByTagName('th');
	console.log(th);
	var arr = new Array();
	for (var i=0;i<tr.length;i++) {
		arr.push(tr[i]);
	}
	function bind_click (_i) {
		th[_i].onclick = function () {
			console.log(_i);
		}
	}
	var count = new Array();
	for (var k=0;k<th.length;k++) {
		count.push(true);
	}
	for (var j = 0;j<th.length;j++) {
		th[j].onclick = (function (arg) {
			return function () {
				if (count[arg]) {
					if (arg == 0) {
						strSortDown(arr, arg);
					} else {
						sortDown(arr, arg);
					}
				} else {
					if (arg == 0) {
						strSortUp(arr, arg);
					} else {
						sortUp(arr, arg);
					}
				}
				var fragment = document.createDocumentFragment();
				for (var s=0;s<arr.length;s++) {
					fragment.appendChild(arr[s]);
				}
				tBody.appendChild(fragment);
				count[arg] = !count[arg];

			}
		})(j);
	}
};


function sortDown (arr,n) {
	arr.sort(function (a,b) {
		return a.children[n].innerText - b.children[n].innerText;
	});
}
//数字升序
function sortUp (arr, n) {
	arr.sort(function (a, b) {
		return b.children[n].innerText - a.children[n].innerText;
	});
}
//字符串降序
function strSortDown (arr,n) {
	arr.sort(function (a, b) {
		return a.children[n].innerText.localeCompare(b.children[n].innerText);
	});
}
//字符串升序
function strSortUp (arr,n) {
	arr.sort(function (a, b) {
		return -(a.children[n].innerText.localeCompare(b.children[n].innerText));
	});
}