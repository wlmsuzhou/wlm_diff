//判断数据类型
function isClass (o) {
	if (o == null) return 'Null';
	if (o == undefined) return "Undefined";
	return Object.prototype.toString.call(o).slice(8,-1);
}

//深克隆
function deepClone (obj) {
	var result;
	var oClass = isClass(obj);
	if (oClass === 'Object') {
		result = {};
	} else if (oClass === 'Array') {
		result = [];
	} else {
		return obj;
	}
	for (key in obj) {
		var copy = obj[key];
		if (isClass(copy) === 'Object' || isClass(copy) === 'Array') {
			result[key] = arguments.callee(copy);
		} else {
			result[key] = obj[key];
		}
	}
	return result;
}
var oPerson = {
	oName: 'wlm',
	oAge: 19,
	oAddress: {
		province: 'beijing'
	},
	oFavorite: [
		'swimming', 'watching'
	],
	skill: function () {
		console.log('bob is coding');
	}
}

var oNew = deepClone(oPerson);
oNew.oFavorite[1] = 'eating';
oNew.skill = function () {
	console.log('like eating');
}
console.log(isClass(oNew.skill));
oNew.skill();
oPerson.skill();
console.log(oNew.oFavorite[1]);
console.log(oPerson.oFavorite[1]);