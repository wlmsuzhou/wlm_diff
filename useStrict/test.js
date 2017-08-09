// "use strict"
// function fun() {return this};
// console.log(fun() === undefined);
// console.log(fun.call(2) === 2);
// console.log(fun.call(null) === null);
// console.log(fun.call(undefined) === undefined);
// console.log(fun.bind(true)() === true);

function test (a, b) {
	console.log(arguments.length);
}
test(1);

console.log(test.length);