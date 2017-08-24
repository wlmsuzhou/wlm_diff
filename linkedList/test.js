function insert(arr, item, index) {
	var result = arr.slice(0,index);
	result.push(item);
	var result2 = result.concat(arr.slice(index,arr.length));
	return result2;
}
function count(arr, item) {
    var result = 0;
	for (var i in arr) {
        if (arr[i] == item)
        {
        	console.log(i);
            result++;
        }
    }
    return result;
}
function duplicates(arr) {
    var hash = {};
    var temp = [];
    for (var i in arr) {
    	if(hash[arr[i]]) {
 			hash[arr[i]] = false;
    	} else {
    		hash[arr[i]] = true;
    	}
    }
    return temp;
}
function parse2Int(num) {
	return parseInt(num);
}
function count(start, end) {
    console.log(start);
    start++;
	var temp = setInterval(function () {
		if(start == end){
            clearInterval(temp);
        }
        console.log(start++);
        
    },100);
}
function fizzBuzz(num) {
	if (num%5==0 && num%3==0){
        return 'fizzbuzz';
    } else if (num % 3==0){
        return  'fizz';
    } else if (num % 5==0) {
        return  'buzz';
    } else if (num == null || typeof num != "number") {
        return false;
    } else {
        return num;
    }
}
//连接两个函数的参数
function functionFunction (str) {
	var ret = Array.prototype.slice.call(arguments).join(',');
	console.log(ret);
	var temp = function (str2) {
		ret = [ret, Array.prototype.slice.call(arguments).join(', ')].join(', ');
		return temp;
	}
	temp.toString = function () {
		return ret;
	}
	return temp;
}
//闭包
//es6用非闭包实现
function makeClosures(arr, fn) {
	var result = new Array();
	for (let i = 0; i < arr.length; i++) {
		result[i] = function () {
			return fn(arr[i]);
		}
	}
	return result;
}
//es5用闭包实现
function makeClosures(arr, fn) {
	var result = new Array();
	for (var i = 0; i < arr.length; i++) {
		result[i] = function (num) {
			return function () {
				return fn(num);
			}
		}(arr[i]);
	}
	return result;
}
//用bind实现
function makeClosures (arr, fn) {
	var result = new Array();
	for (var i = 0; i < arr.length; i++) {
		result[i] = fn.bind(null, arr[i]);
	}
	return result;
}
console.log(functionFunction('hello','wlm')('world').toString());
console.log(fizzBuzz(15))
var a = [1, 2, 4, 4, 3, 3, 1, 5, 3];
var b = 4;
var result = insert(a, b, 3);
// console.log(result);
// console.log(count(a,4));
// console.log(duplicates(a));
// console.log(parse2Int('0x12'));
// count(0,5);
// call
function Animal () {
	this.name = "animal";
	this.showName = function () {
		console.log(this.name);
	}
}
function Dog () {
	this.name = "dog"
}
var animal = new Animal();
var dog = new Dog();
animal.showName.call(dog);
var num = 128;
// console.log(num.toString(2).charAt(7));
function convertToBinary(num) {
	var result = num.toString(2);
	console.log(result);
    for (var i = result.length;i<8;i++) {
        result = '0' + result;
    }
    return result;
}
//得到非原型链属性的几种方法
function iter(obj) {
	var result = [];
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			result.push(key + ": " + obj[key]);
		}
	}
	return result;
}
//Object.keys只收集自身属性名，不继承来自原型链上的属性
function iter2(obj) {
	var arr = Object.keys(obj);
	var result = [];
	arr.forEach(function (e) {
		result.push(e+": "+obj[e]);
	});
	return result;
}
//判断字符串里是不是包含数字
function containsNumber(str) {
	//正则表达式
	var temp = /\d/;
	return temp.test(str);
}
//判断数字是否在字符串中出现过
function containsNumber2(str) {
	for (var i = 0; i < 10;i++) {
		if (str.indexOf(i)!=-1) {
			return true;
		}
	}
	return false;
}
//将字符串分割成数组，遍历数字
function containsNumber3 (str) {
    var arr = str.split(''); //切割为数组 
    for (var i = 0; i < arr.length; i++) { //遍历数组 
        if (!isNaN(parseInt(arr[i]))) { //判断是否为数字 
            return true;
            break; //一旦有数字跳出循环 
        }
    }
    return false;
}
//判断连续重复的字母
function containsRepeatingLetter(str) {
	var arr = str.split('');
	var temp = /[a-zA-Z]/g;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i+1] && temp.test(str[i])) {
            return true;
        }
    }
    return false;
}
console.log(containsRepeatingLetter("rattler"));
//递归函数
function digui(num) {
	if (num == 1) {
		return num;
	} else {
		return num * arguments.callee(num-1);
	}
}
//caller
var a = function () {
	console.log(a.caller);
}
var b = function () {
	a();
}
b();
//数组去重
function unique (arr) {
	var hash = {}, res = [];
	for (var key in arr) {
		if (!hash[arr[key]]) {
			hash[arr[key]] = true;
			res.push(arr[key]);
		}
	}
	return res;
}

//实现两个有序数组合并
function mergeSort(arr1, arr2) {
	var result = [];
	var temp1 = 0, len1 = arr1.length, temp2 = 0, len2 = arr2.length;
	while (temp1 < len1 && temp2 < len2) {
		if (arr1[temp1] < arr2[temp2]) {
			result.push(arr1[temp1]);
			temp1++;
		} else if (arr1[temp1] == arr2[temp2]) {
			result.push(arr1[temp1]);
			result.push(arr2[temp2]);
			temp1++;
			temp2++;
		} else {
			result.push(arr2[temp2]);
			temp2++;
		}
	}
	return result.concat(arr1.slice(temp1)).concat(arr2.slice(temp2));
}
var test1 = [1,3,4,6,8];
var test2 = [2,2,3,4,9];
console.log(mergeSort(test1, test2));

//url去参数
function getUrl (url) {
	var result = '';
	if (url.indexOf('?') != -1) {
		result = url.split('?')[0];
	}
	return result;
}
var s1 = 'http://www.baidu.com?username=wlm&password=sss';
console.log(getUrl(s1));

// for循环setTimeout()异步问题
for (var i=0;i < 5;i++) {
	(function (num) {
		setTimeout(function () {
			console.log(num);
		}, 1000);
	})(i);
}

var temp = [0];
if (temp) {
	console.log(a==true);
}