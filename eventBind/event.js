var handlers = {};
bind = (function () {
	if (window.addEventListener) {
		return function (el,type,callback, capture) {
			el.addEventListener(type, function () {
				callback();
				handlers[type] = handlers[type] || [];
				handlers[type].push(arguments.callee);
			}, !!capture);
		}
	} else if (window.attachEvent) {
		return function (el, type, callback){
			el.attachEvent('on'+type, function () {
				callback.call(el);
				handlers[type] = handlers[type] = [];
				handlers[type].push(arguments.callee);
			});
		}; 
	} else {
		return function (el, type, callback) {
			el.on + 'type' = callback;
		}
	}
})(window);

unbind = (function () {
	if (window.addEventListener) {
		return function (el, type) {
			if (handlers[type]) {
				var i = 0, len = handlers[type].length;
				for (;i<len;i++) {
					el.removeEventListener(type, handlers[type][i]);
				}
			}
		}
	} else if (window.attachEvent) {
		return function (el, type) {
			if (handlers[type]) {
				var i=0, len = handlers[type].length;
				for (;i<len;i++) {
					el.detachEvent('on'+type, handlers[type][i]);
				}
			}
		}
	} else {
		return function (el, type) {
			el.on + 'type' = null;
		}
	}
})(window);