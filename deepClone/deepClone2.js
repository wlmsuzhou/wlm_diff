function isClass (obj) {
	if (obj == null) {
		return 'Null';
	}
	if (obj == undefined) {
		return 'Undefined';
	}
	return Object.prototype.toString().call(obj).slice(8, -1);
}
function deepClone (obj) {
	var result;
	var oClass = isClass(obj);
	if (oClass === 'Object') {
		result = {};
	} else if (oClass === 'Array') {
		result = [];
	}
	else {
		return obj;
	}
	for (var key in obj) {
		var copy = obj[key];
		if (isClass(copy) === 'Object' || isClass(copy) === 'Array') {
			return arguments.callee(copy);
		} else {
			result[key] = copy;
		}
	}
	return result;
}