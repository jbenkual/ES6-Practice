var arrayFunction = function () {
	return function (min, max) {
		var arr = [];
	  for (var i = min; i <= max; i++) {
	    arr.push(i);
	  }
	  return arr;
	};
}

module.exports = arrayFunction;