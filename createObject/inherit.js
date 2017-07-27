//原型链继承
function SuperType () {
	this.property = true;
}
SuperType.prototype.getSuperValue = function () {
	return this.property;
}
function SubType () {
	this.subproperty = false;
}
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
	console.log(this.subproperty);
}

//借用构造函数继承
function Animal (name) {
	this.name = name;
}
function Cat (name, age) {
	Animal.call(this, name);
	this.age = age;
}


//拷贝继承
function Cat (name, age) {
	var animal = new Animal(name);
	for (var key in animal) {
		Cat.prototype[key] = animal[key];
	}
	Cat.age = age;
}


//组合继承 （原型链 + 构造继承）
function Animal (name) {
	this.name = name;
}
function Cat (name, age) {
	Animal.call(this, name);
	this.age = age;
} 
Cat.prototype = new Animal();

//寄生组合继承
function inheritPrototype (subtype, supertype) {
	var o = Object(supertype.prototype);//创建超类原型的一个副本
	o.constructor = supertype;
	subtype.prototype = o;
}
function Animal (name) {
	this.name = name;
}
function Cat (name, age) {
	Animal.call(this, name);
	this.age = age;
}
inheritPrototype(Cat, Animal);