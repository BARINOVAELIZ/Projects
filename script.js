

function Calculator(leftOperand){
	var result = leftOperand;
	this.multiply = function () {
		for (var i=0;i < arguments.length; i++) {
			result*=arguments[i];
		}
		return this;
	}
	
	
	this.add = function () {
		
		for (var i = 0;i < arguments.length; i++) {
			result += arguments[i];
		}
		return this;
	}
	
	this.subtract = function () {
		for (var i = 0;i < arguments.length; i++) {
			result -= arguments[i];
		}
		return this;
	}
	
	this.divide = function () {
		for (var i = 0;i < arguments.length; i++) {
			result /= arguments[i];
		}
		return this;
	}
	
	this.toString = function () {
		return result;
	}
	
	this.reset = function () {
		result=leftOperand;
	}
	
 
};


var calc = new Calculator(12);

//Various number of arguments
alert(calc.multiply(3, 1, 2)); 
calc.reset();
alert(calc.add(3, 1, 2).subtract(1)); 
calc.reset();
alert(calc.subtract(1, 4, 2, 1)); 
calc.reset();
alert(calc.divide(2, 6)); 