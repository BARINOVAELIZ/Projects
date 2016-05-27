'use strict'
function Shape() {
	var _type;
	
	Object.defineProperty(this, 'type', {
		get: function () {
			return _type;
		},
		set: function (type) {
			_type = type;
		}
	});
}

Shape.prototype.getPerimeter = function () {
	console.log('Perimeter of ' + this.type + ' is ' + this.perimeter);
};

Shape.prototype.draw = function () {
	return console.log( this.type + ' is drawn');
};



function Triangle(a, b, c) {
	Shape.apply(this, arguments);
	this.type = 'Triangle';
	this.a = a;
	this.b = b;
	this.c = c;
	this.perimeter = a + b + c;
	
}

Triangle.prototype = new Shape();


function Square(a, b, c, d){
	this.type = 'Square';
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.perimeter = a + b + c + d;
	
}

Square.prototype = new Shape();


function Rhombus(a, b, c){
	Triangle.apply(this, arguments);
	this.type = 'Rhombus';
	this.perimeter = 2*(this.a + this.b);
	this.square = this.a*this.c;
	this.getSquare = function(){
		console.log('Square of ' + this.type + ' is ' + this.square) ;
	};
	
}

Rhombus.prototype = new Triangle();



var tre = new Triangle(3, 4, 5);
console.log(tre.type);
tre.getPerimeter();
tre.draw();

var sq = new Square(3, 4, 5, 6);
console.log(sq.type);
sq.getPerimeter();
sq.draw();

var rb = new Rhombus(3, 3, 5);
console.log(rb.type);
rb.getPerimeter();
rb.draw();
rb.getSquare();

