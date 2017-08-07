jQuery.extend({
	"minValue": function (a, b) {
		return a < b ? a : b;
	},
	"maxValue": function (a,b) {
		return a > b ? a : b;
	}
});
(function ($) {
	$fn.extend({
		"highLight": function (options) {
			//检测用户传进来的参数是否合法
			if (!isValid(options)) {
				return this;
			}
			var opts = $.extend({},defaults,options);//覆盖插件默认参数
			return this.each(function () {
				var $this = $(this);
				$this.css({
					backgroundColor: opts.background,
					color: opts.foreground
				});
				//格式化高亮文本
				var markup = $this.html;
				markup = $.fn.highLight.format(markup);
				$this.html(markup);
			});
		}
	});
	//默认参数
	var defaults = {
		foreground: 'red',
		background: 'yellow'
	};
	$fn.highLight.format = function (str) {
		return '<strong>' + str + '</strong>';
	}
	//该函数用于检查参数是否合法
	function isValid (options) {
		return !options || (options && typeof options === 'object') ? true: false;
	}
})(window.jQuery);