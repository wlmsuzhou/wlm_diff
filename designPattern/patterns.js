//单例模式
var createMask = function () {
	var mask;
	return function () {
		return mask || (mask = document.body.appendChild(document.createElement('div')));
	}
}
//通用单例模式
var singleton = function (fn) {
	var result;
	return function () {
		return result || (result = fn.apply(this, arguments));
	}
}

//工厂模式
function A (name) {
	this.name = name;
}
function ObjectFactory() {
	var obj = {};
	Constructor = Array.prototype.shift.call(arguments);//取得第一个参数
	obj._proto = typeof Constructor.prototype === 'number' ? Object.prototype:Constructor.prototype;
	var ret = Constructor.apply(obj,arguments);
	return typeof ret === 'object' ? ret : obj;
}

//观察者模式
Events = function () {
	var listen, log, obj, one, remove, trigger, __this;
	var obj = {};
	__this = this;
	listen = function (key, eventFn) {
		var stack, _ref;
		stack = (_ref = obj[key] ) != null ?_ref : obj[key] = [];
		stack.push(eventFn);
	};
	one = function (key, eventFn) {
		remove(key);
		return listen(key, eventFn);
	};
	remove = function (key) {
		var _ref;
		return (_ref = obj[key]) != null ? _ref.length = 0 : void 0;
	};
	trigger = function () {
		var fn, stack, _i,_len, _ref, key;
		key = Array.prototype.shift.call(arguments);
		stack = (_ref = obj[key] ) != null ?_ref : obj[key] = [];
		for (_i=0,_len=stack.length;_i < _len;i++) {
			fn = stack[_i];
			if (fn.apply(__this,arguments) === false) {
				return false;
			}
		}
		return {
			listen: listen,
			one: one,
			remove: remove,
			trigger: trigger
		}
	}
}
var adultTv = Events();
adultTv.listen('play', function () {
	console.log('今天是谁的电影' + data.name);
});
adultTv.trigger('play', {'name':'麻生希'});

//适配器模式，相当于filter
//代理模式