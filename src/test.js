function weirdMath(op) {
	return function(a,b) {
		if(op === "+") {
			return a+b;
		}
		else if(op === "-") {
			return a-b;
		}
		else if(op === "*") {
			return a*b;
		}
		else if(op === "/") {
			return a/b;
		}
		else {
			return "Unknown operator: " + op;
		}
		//return eval(a+op+b);
	};
}

console.log(weirdMath('+')(2,3));