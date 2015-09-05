/*jshint esnext: true */
export default () => (min, max) => Array(...Array(max-min)).map((a,b,c) => b + min);