var sum = function() {
	var total = 0;
	for (var i = 0; i < arguments.length; i++) {
		total += parseInt(arguments[i]);
	}
	return total;
};

module.exports = sum;