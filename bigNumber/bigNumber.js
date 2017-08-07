function add (a, b) {
	a = a.toString();
	b = b.toString();
	var result = [];
	var count =  0;
	if (a.length > b.length) {
		b = Array(a.length - b.length + 1).join('0') + b;
	} else if (a.length < b.length) {
		a = Array(b.length - a.length + 1).join('0') + a;
	}
	var arrA = a.split('');
	//console.log(arrA.length)
	var arrB = b.split('');
	//console.log(arrB);
	var length = arrA.length;
	for (var j=0; j < length;j++) {
		console.log(j);
		var temp = (Number(arrA.pop()) + Number(arrB.pop())) + count;
		 
	}
	result.push(count);
	return result.reverse().join('').replace(/^0+/,'');
}
var a = 1111111, b = 2222222222;
console.log(add(a,b));