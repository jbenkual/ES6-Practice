/*jshint esnext: true */
export default {
	TODAY: () => new Date().getDay() === 0 || new Date().getDay() === 6
};