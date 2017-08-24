function choose (arr) {
	var len = arr.length;
	for (var i=0;i<len-1;i++) {
		var temp = i;
		for (var j=i+1;j<len;j++) {
			if (arr[j]<arr[temp]) {
				temp = j;
			}
		}
		if (temp != i) {
			var s = arr[i];
			arr[i] = arr[temp];
			arr[temp] = s;
		}
	}
	return arr;
}
function choose2 () {

}
var arr1 = [3,2,1,5,6,2];
console.log(choose(arr1));