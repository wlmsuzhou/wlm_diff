
function unid(arr) {
	var arr1 = (arr + '').split(',');
	arr2 = arr1.map(function (x) {
		return Number(x);
	});
	return arr2;
}
var arr = [1,[2,[3,4],5],6];
console.log(unid(arr));