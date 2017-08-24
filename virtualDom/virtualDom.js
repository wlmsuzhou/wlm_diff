var VElement = function (tagName,props, children) {
	if (!(this instanceof VElement)) {
		return new VElement(tagName, props, children);
	}
	//可以通过只传递tagName 和 children参数
	if (util.isArray(props)) {
		children = props;
		props = {};
	}
	this.tagName = tagName;
	this.props = props || {};
	this.children = children || [];
	this.key = props?props.key:void 666;
	var count = 0;
	util.each(this.children,function (child, i) {
		if (child instanceof VElement) {
			count += child.count
		} else {
			children[i] = child
		}
		count++;
	});
	this.count = count;
}

VElement.prototype.render = function () {
	var el = document.createElement(this.tagName);
	var props = this.props;
	for (var propName in props) {
		var propValue = props[propName];
		util.SetAttr(el,propName,propValue);
	}
	util.each(this.children, function (child) {
		var childE1 = (child instanceof VElement)?child.render():document.createTextNode(child);
		el.appendChild(childE1);
	});
	return el;
}