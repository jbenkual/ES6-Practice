var sum = function () {
	var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += i;
  }
  return i;
};

module.exports = sum;