function merge(left, right) {
	var result = [];
	while (left.length > 0 && right.length > 0) {
		if(left[0] < right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}
	return result.concat(left).concat(right);
	
}
function mergeSort(arr) {
	if (arr.length == 1) {
		return arr;
	}
	var mid = Math.floor(arr.length/2);//四舍五入
	var left_arr = arr.slice(0, mid);//不包括mid元素
	var right_arr = arr.slice(mid);
	return merge(mergeSort(left_arr),mergeSort(right_arr));
}
var arr = [12,20,30,21,15,33,26,19,40,25];
console.log(mergeSort(arr));
var data = {};
data['s'] = 1;
console.log(data);