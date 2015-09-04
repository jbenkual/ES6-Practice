argSum = require("./argSum");

var util = {
	splitSum: function (str, divider) {
		var arr = str.split(divider);
		return argSum(arr);
	}
};

module.exports = util;