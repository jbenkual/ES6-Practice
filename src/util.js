/*jshint esnext: true */
export default {
	splitSum: (s, d) => s.split(d).reduce((a,b) => parseInt(a)+parseInt(b))
};

/*
	function(str, divider) {
		var arr = str.split(divider);

		return arr.reduce(function(a, b) {
			return parseInt(a) + parseInt(b);
		});
	}
	*/