var a = [1,2,5,4,5]
a.forEach(function (item,index) {
 	a[index] = item*2;
});
console.log(a);
var b = a.map(function (item) {
	return item * 2;
});
console.log(b);