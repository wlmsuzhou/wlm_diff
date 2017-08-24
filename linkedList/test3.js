console.log('sss');
function isWho(n) {
	var arr = ['S','L','P','R','H'];
	for (var i=1;i < n;i++) {
		var temp = arr.shift();
		console.log(temp);
		arr.push(temp);
		arr.push(temp);
	}
	return arr[0];
}
console.log(isWho(7));