// var obj = {};
// Object.defineProperty(obj, 'hello', {
// 	get: function () {
// 		console.log('get done');
// 	},
// 	set: function (val) {
// 		document.getElementById('a').value = val;
// 		document.getElementById('b').innerHTML = val;
// 	}
// });
// document.addEventListener('keyup', function (e) {
// 	obj.hello = e.target.value;
// });

function compile (node, vm) {
	var reg = /\{\{(.*)\}\}/;
	//节点类型为元素
	if (node.nodeType === 1) {
		var attr = node.attributes;
		for (var i=0;i<attr.length;i++) {
			if (attr[i].nodeName == 'v-model') {
				var name = attr[i].nodeValue;
				node.addEventListener('keyup', function (e) {
					vm[name] = e.target.value;
				});
				node.value = vm.data[name];
				node.removeAttribute('v-model');
			}
		}
	}

	//节点类型为text
	if (node.nodeType === 3) {
		if (reg.test(node.nodeValue)) {
			var name = RegExp.$1;//获取到匹配的字符串
			name = name.trim();
			//node.nodeValue = vm.data[name];
			new Watcher(vm, node, name);
		}
	}
}

function Watcher (vm, node, name) {
	Dep.target = this;
	this.name = name;
	this.node = node;
	this.vm = vm;
	this.update();
	Dep.target = null;
}
Watcher.prototype = {
	update: function () {
		this.get();
		this.node.nodeValue = this.value;
	},
	get: function () {
		this.value = this.vm[this.name];
	}
}
function nodeToFragment (node, vm) {
	var flag = document.createDocumentFragment();
	var child;
	while (child = node.firstChild) {
		compile(child, vm);
		flag.appendChild(child);
	}
	return flag;
}
function defineReactive (obj, key, val) {
	var dep = new Dep();
	Object.defineProperty(obj, key, {
		get: function () {
			if (Dep.target) {
				dep.addSub(Dep.target);
			}
			return val;
		},
		set: function (newVal) {
			if (newVal === val) return;
			val = newVal;
			dep.notify();
		}
	});
}

function observe (obj, vm) {
	Object.keys(obj).forEach(function (key) {
		defineReactive(vm, key, obj[key]);
	});
}

function Vue (options) {
	this.data = options.data;
	var data = this.data;
	observe(data, this);
	var id = options.el;
	var dom = nodeToFragment(document.getElementById(id), this);
	document.getElementById(id).appendChild(dom);
}
function Dep () {
	this.subs = [];
}

Dep.prototype = {
	addSub: function (sub) {
		this.subs.push(sub);
	},
	notify: function () {
		this.subs.forEach(function (sub) {
			sub.update();
		});
	}
}
var vm = new Vue({
	el: 'app',
	data: {
		text: 'hello world'
	}
})
