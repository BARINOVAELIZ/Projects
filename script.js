'use strict'

var name = 'Elizaveta';
var lastName = 'Barinova';

console.log(name + ' ' + lastName);

var a, b, c;
function SqTrey(a, b, c) {
 var  p = (a + b + c) / 2;
 return Math.sqrt(p * (p - a) * (p - b) * (p - c));
   
}

var test = SqTrey(3, 4, 5);
console.log(test); 

var even = [2, 4, 6, 8, 10];
console.log(even);

var odd = [];

var n = 0;
while(n < even.length){
    odd[n] = even[n] + 1;
	n++;
}

console.log(odd);

n = 0;

do {
  	odd[n] = even[n] + 1;
	n++;
} while(n < even.length);

console.log(odd);


for (var i = 0; i < even.length; i++) {
   odd[i] = even[i] + 1;
}

console.log(odd);

var x=1;
var y;

y=++x;
console.log(x);
console.log(y);

x=1;
y=x++;
console.log(x);
console.log(y);

function number(z) {
	if (z==0) {
		return "Это ноль"
	}
	else {
		if (z>0) {
			return "Положительное"
		}
		else 
			return "Отрицательное"
	}
}

var numb=number(6);
console.log(numb);
var numb=number(-6);
console.log(numb);
var numb=number(0);
console.log(numb);

var name = prompt("Как Вас зовут?");
alert("Здравствуйте, " + name + "!");

function factorial(q) {
	var rez=1;
	for (i = 2; i <= q; i++) {
		rez=rez*i;
	}
	return rez;
}

console.log(factorial(4));