//工厂模式 抽象了对象创建的具体过程,该方法的缺点是无法判别对象的类型
function createObject (name, age, job) {
	var o = new Object();
	o.name = name;
	o.age  = age;
	o.job = job;
	o.sayName = function () {
		console.log(this.name);
	}
	return o;
}
//构造函数,构造函数的问题在于对于两个实例对象中，不能共享实现同功能的函数，造成资源浪费
function Person (name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function () {
		console.log(this.name);
	}
}

//原型模式 js的根本继承模式 原型继承
function Person () {
}
Person.prototype.name = 'wlm';
Person.prototype.age = 12;
Person.prototype.job = 'programmer';
Person.prototype.sayName = function () {
	console.log(this.name);
}

var person1 = new Person(); 
person1.sayName();

//组合模式(构造模式+原型模式)
function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
}
Person.prototype = {
	constructor: Person,
	sayName: function () {
		console.log(this.name);
	}
}
//寄生构造函数
function Person (name, age, job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function () {
		console.log(this.name);
	}
}
