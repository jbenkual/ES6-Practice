var isAWeekend = {
	TODAY: function() {
		var d = new Date().getDay();
		if (d > 0 && d < 6) {
			return false; // weekend
		} else {
			return true; // weekday
		}
	}
};

module.exports = isAWeekend;