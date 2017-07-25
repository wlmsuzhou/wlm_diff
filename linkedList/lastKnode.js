//es5实现
function Node (val,next) {
	this.val = val;
	this.next = next
}
Node.prototype.toString = function () {
	return this.val;
}
function lastKNode (node,k) {
	var head = node;
	for (var i = 0;i < k-1;i++) {
		head = head.next;
	}
	var behind = node;
	while (head.next != null) {
		behind = behind.next;
		head = head.next;
	}
	return behind;
}
var temp1 = new Node(1,null);
var temp2 = new Node(2,temp1);
var temp3 = new Node(3,temp3);
var temp4 = new Node(4,temp4);
console.log(lastKNode(temp4,2))