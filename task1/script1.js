'use strict';

function most (a, b) {
	return (a > b) ? a : b;
}

console.log("10,8 max=" + most(10,8));
console.log("-10,8 max="+most(-10,8));
console.log("8,8 max="+most(8,8));

var numb = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numb);
for (var i = 0; i < 9; i++) {
	if (isOdd(numb[i])) {
		console.log(numb[i] + '-even') 
	} else {
		console.log(numb[i] + '-odd');
	}
}

function isOdd(number) {
	return number % 2 == 0;
}

function is_Blank (str) {
	return ! /\S/.test(str); // \S - не пробельный символ
}

console.log("''   " + is_Blank('')); 
console.log("'     '   " + is_Blank('     ')); 
console.log("'  abc  '   " + is_Blank('  abc  '));