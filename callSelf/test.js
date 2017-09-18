function callSelf (n,time) {
	var n2 = n || 100;
	var time2 = time || 5;
	for (var i=0;i<n2;i++) {
		var that = argumets.callee;
		return (function () {
			setTimeout(that(),time2);
		})(i);
	}
}