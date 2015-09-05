/*jshint esnext: true */
var result;

//--------------------------------------------------------
// 1. argsSum()
// Takes N arguments, and should work on any number of arguments
//--------------------------------------------------------

import argsSum from "./argSum";
result = argsSum(3,7,8);
console.log(result); // 18
result = argsSum(1,1,1,1,1,1,1,1,1,1,1,1,1,1);
console.log(result); // 14

//--------------------------------------------------------
// 2. splitSum()
// Takes 2 arguments
//--------------------------------------------------------

import splitSum1 from "./util";
let splitSum = splitSum1.splitSum;
result = splitSum("3:4:5:1", ":");
console.log(result); // 13
result = splitSum("-1$-5$5$-4", "$");
console.log(result); // -5

//--------------------------------------------------------
// 3. createArray()
// Takes 2 arguments
//--------------------------------------------------------

import createArrayFromAtoB from "./arrayFunction";

result = createArrayFromAtoB()(4, 9);
console.log(result); // [4, 5, 6, 7, 8, 9]
result = createArrayFromAtoB()(-1, 3);
console.log(result); // [-1, 0, 1, 2, 3]

//--------------------------------------------------------
// 4. isTodayAWeekend()
// Takes no arguments
//--------------------------------------------------------

import isTodayAWeekend from "./isAWeekend";

result = isTodayAWeekend.TODAY();
console.log(result);
// It will return true if today is Saturday or Sunday, otherwise, false