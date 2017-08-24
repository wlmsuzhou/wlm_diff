console.log('5' - 2);
console.log([] instanceof Object);


function isMerge (s,part1,part2) {
	var arr = s.split('');
	var arr1 = part1.split('');
	var arr2 = part2.split('');
	var i = 0, j = 0, k = 0;
	while (i < arr.length) {
		while (j < arr1.length && k < arr2.length) {
			if (arr[i] == arr1[j]) {
				i++;
				j++;
			} else if (arr[i] == arr2[k]) {
				i++;
				k++;
			} else {
				return false;
			}
		}
	}
	if (i == arr.length && j == arr1.length && k == arr2.length) {
		return true;
	}
}
var s = 'codewars';
var a1 = 'cdw';
var a2 = 'oears';
console.log(isMerge(s, a1, a2));

// Array.prototype.unique = function () {
// var arr = this;	
// 	var hash = {}, ret = [];
// 	for (var key in arr) {
// 		if (!hash[arr[key]]) {
// 			hash[arr[key]] = true;
// 			ret.push(arr[key]);
// 		}
// 	}
// 	return ret;
// }
