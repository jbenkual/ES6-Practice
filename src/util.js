var util = {
	splitSum: function (str, divider) {
		var arr = str.split(divider);

		return arr.reduce(function(a,b) {return parseInt(a)+parseInt(b);});
	}
};

module.exports = util;