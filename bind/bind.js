//手动实现bind.js
if (!Function.prototype.bind) {
	Function.prototype.bind = function (oThis) {
		if (typeof this !== "function") {
			throw new TypeError("Function.prototype.bind - what is");
		}
	}
	var aArgs = Array.prototype.slice.call(arguments, 1),
	fToBind = this,
	fNOP = function () {},
	fBound = function () {
		return fToBind.apply(this instanceof fNOP && oThis ? this : oThis || window, 
			aArgs.concat(Array.prototype.slice.call(arguments))); 
	};
	fNOP.prototype = this.prototype;
	fBound.prototype = new fNOP();
	return fBound;
}