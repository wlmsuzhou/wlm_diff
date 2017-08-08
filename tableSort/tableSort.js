$(document).ready(function () {
	var tBody = $('tbody').html();
	console.log(tBody);
	var th = $('th');
	var tr = $('tbody tr');
	var arr = new Array();
	for (var i=0;i<tr.length;i++) {
		arr.push(tr[i]);
	}
	var count = new Array();
	for (var i=0;i<th.length;i++) {
		count.push(true);
	}
	$('th').on('click', function () {
		$(this).toggleClass('on').siblings().removeClass('on');
		var index = $(this).index();
		if (count[index]) {
			if (index == 0) {
				strSortDown(arr, index);
			} else {
				sortDown(arr, index);
			}
		} else {
			if (index == 0) {
				strSortUp(arr, index);
			} else {
				sortUp(arr, index);
			}
		}
		var fragment = document.createDocumentFragment();
		for (var j=0;j<arr.length;j++) {
			fragment.append(arr[j]);
		}
		$('tbody').append(fragment);
		count[index] = !count[index];
	});
});
//数字降序
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