
function unique (arr) {
	var hash = {}, res = [];
	for (var key in arr) {
		if (!hash[arr[key]]) {
			hash[arr[key]] = true;
			res.push(arr[key]);
		}
	}
	return res;
}
var input = "";
var input_arr = [];
process.stdin.resume();
process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
	input += data;
});
process.stdin.on('end', function () {
	input_arr = input.split('\n');
	console.log(input_arr);
});
  