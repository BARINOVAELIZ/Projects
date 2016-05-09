'use strict';

//1.	Write a JavaScript program to display the current day and time in the following format. 

var now = new Date();
var day = now.getDay();
var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log("Today is " + week[now.getDay()]);
console.log("Now is " + now.getHours() + ":" + now.getMinutes());

//2.	Write a JavaScript program to get the current date. 
var now = new Date();
console.log(now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear());

//3.	Write a JavaScript program to find 1st January be a Sunday between 2014 and 2050. 
for (var i = 2014; i <= 2050; i++) {
	var date = new Date(i, 0, 1);
	var day = date.getDay();
	
	if (day == 0) {
		console.log(i);
	}
}

//4.	Write a JavaScript program to calculate days left until next New Year.
var date = new Date();
var year = date.getFullYear();
var dateNewYear = new Date(year+1, 0, 1);
var wait = dateNewYear - date;
date /= 1000;
date /= 60;
date /= 60;
date /= 24;
console.log(Math.floor(date) + " days until next New Year");

//5.	Write a JavaScript function to check whether an `input` is an array or not.

function is_array (p) {
	
	Array.isArray()
	return (p instanceof Array) ? true : false;
}

console.log('qwe-array ' + is_array('qwe')); 
console.log('[1, 2, 4, 0]-array ' + is_array([1, 2, 4, 0]));

//6.	Write a JavaScript function to clone an array

function clone (mass) {
	return mass.slice(0);
}
var a = [1, 2, 3];
console.log (a);
console.log(clone (a));

//7.	Write a JavaScript function to find the most frequent item of an array.
function frequent (mas) {				
	var kmas = [];
	for (var i = 0; i < mas.length; i++) {			//идем по массиву элементов
		var k = 0;
		for (var j = 0 ; j < mas.length; j++){	//идем с элемента до конца массива
			if (mas[i] == mas[j]) {
				k++;							//считаем элементы
			}
		}
		kmas[i] = k;
	}	

	
	
	var max = kmas[0];
	var maxEl = mas[0];
	for (var i = 1; i < mas.length; i++) {
		if (kmas[i]>max) {
			max = kmas[i];
			maxEl = mas[i];
		}
	}
	return maxEl;
}

console.log('[2,1,4,1,2,3,5,1]  most frequent is ' + frequent([2,1,4,1,2,3,5,1]));

//8.	Write a JavaScript function that inverts the case of the letters of the given string and returns new string

function invertLett (str) {
	var strRes = '';
	for (var i = 0; i < str.length; i++){
		if (str.charCodeAt(i) >= 1040 && str.charCodeAt(i) <= 1071){
			strRes += str[i].toLowerCase();
		} else if (str.charCodeAt(i) >= 1072 && str.charCodeAt(i) <= 1103) {
			strRes += str[i].toUpperCase();
		}
	}
	return strRes;
}

var str1 = "Мама мыла раму";
console.log(str1);
console.log(invertLett(str1));

//9.	Write a JavaScript program to remove duplicate strings from a string array (ignore case sensitivity)

var a = ['МПЦ','Кав','Блабла','Мпц','ываыв','Блабла',];
a.sort(); // сортируем массив
console.log(a); // выводим массив
var a1,a2;
for (var i = a.length - 1; i > 0; i--) {
	a1 = a[i].toLowerCase();
	a2 = a[i-1].toLowerCase();
	console.log(a1+' '+a2);
    if (a1 == a2) {
		a.splice( i, 1);
	}
}
console.log(a); // выводим массив


//10.	Write a JavaScript program to shuffle an array
function compareRandom(a, b) {
  return Math.random() - 0.5;
}

var a = [1, 2, 3, 4, 5, 6, 7];
console.log(a);
console.log(a.sort(compareRandom));

//11.	Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array

var a = [NaN, "hjh",'', false, true, undefined, null, 0, '0'];
console.log(a);
	var a = a.filter(function(x) {
	return !!x;  
});
console.log(a);



// 12.	Write a JavaScript function to sort the following array of objects by title value using ‘sort’ method
var library = [
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, 
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

function compareTitle(a, b) {
  return a.title > b.title;
}
library.sort(compareTitle);
for (var i=0; i < library.length; i++) {
	console.log(library[i].title);
}

//13.	Write a JavaScript function to merge two arrays and removes all duplicates elements

function merge (arr1, arr2) {
	var mergedArr = arr1.concat(arr2);
	mergedArr.sort();
	for (var i = mergedArr.length - 1; i > 0; i--) {
		if (mergedArr[i] === mergedArr[i-1]) {
		mergedArr.splice( i, 1);
		}
	}
	return mergedArr;
}
var numb1 = [1, 2, 56, 23, 4, 9];
var numb2 = [1, 6, 8, 9];
console.log('numb1 :' + numb1 + ' numb2:' + numb2);
console.log(merge(numb1, numb2));

//14.	Write a JavaScript function to remove a specific element from an array
function removeEl (arr, value) {
	var ind = arr.indexOf(value);
    if (ind != -1) {
       arr.splice(ind, 1);
    }
	return arr;
}

var arr = [12, 3, 45, 78, 654, 343, 98, 65];
console.log(arr);
console.log(removeEl(arr,343));

//15.	Write a JavaScript function to get a random item from an array

function getRandomElem (arr){
	var ind = Math.floor(Math.random() * arr.length);
	return arr[ind];
}

var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
console.log( arr );
console.log (getRandomElem(arr));

//16.	Write a JavaScript function to move an array element from one position to another
function moveEl (arr,elem,pos) {
	var ind = arr.indexOf(elem);
	arr.splice(ind,1);
	arr.splice (pos,0,elem);
	return arr;
}
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
console.log( arr );
console.log (moveEl(arr, "Груша",1));


//17.	Write a JavaScript function to get difference between two dates in days

function daysBetween(date1, date2) {
	var dateDifference = date2 - date1;
	dateDifference /= 1000;
	dateDifference /= 60;
	dateDifference /= 60;
	dateDifference /= 24;
	return Math.floor(dateDifference);
}
var date2 = new Date();
var year = date2.getFullYear();
var date1 = new Date(year, 0, 1);
console.log(date1.getDate() + "/" + (date1.getMonth()+1) + "/" + date1.getFullYear() + "    " + date2.getDate() + "/" + (date2.getMonth()+1) + "/" + date2.getFullYear());
console.log(daysBetween(date1,date2));

//18.	Write a JavaScript function to get the maximum date from an array of dates

function maxDate (arr) {
	arr.sort();
	return arr[arr.length-1];
}
console.log(['2015/02/01', '2015/02/02', '2015/01/03']);
console.log(maxDate(['2015/02/01', '2015/02/02', '2015/01/03']));

//19.	Write a JavaScript function to split a string and convert it into an array of words
function arrWords (str) {
	var mass = [];
	var pos = 0;
	var j = 0;
	for (var i=1; i < str.length; i++) {
		if (str[i] == ',' || str[i] == ' ' || str[i] == '.') {
			mass[j] = str.slice(pos,i);
			j++;
			pos = i+1;
		}
	}
	return mass;
}
var str = "Мне нравится плавать.А еще мне нравится читать,вышивать и слушать музыку.";
console.log(str);
console.log(arrWords(str));

//20.	Write a JavaScript function to capitalize the first letter of a string

function firstLet (str) {
	str = str[0].toUpperCase() + str.slice(1);
	return str;
}

var str = "мама мыла раму";
console.log(str);
console.log(firstLet(str));

//21.	Write a JavaScript function to convert a string into camel case
function camelize (str) {
	str = str[0].toUpperCase() + str.slice(1);
	for (var i=0; i < str.length; i++) {
		if (str[i] == '-' || str[i] == ' ' ) {
			str = str.slice(0,i) + str[i+1].toUpperCase() + str.slice(i+2);
		}
	}
	return str;
}
console.log(camelize("Java Script")); 
console.log(camelize("java-script")); 
console.log(camelize("Java Script Exercises"));

//22.	Write a JavaScript function to find the highest value in an array
function masMax (arr) {
	var max = arr[0];
	arr.forEach(function(item, arr){
		if (item > max) {
			max = item;
		}
	});
	return max;
}

console.log(numb1);
console.log(masMax(numb1));

//23.	Write a JavaScript function to find the lowest value in an array
function masMin (arr) {
	var min = arr[0];
	arr.forEach(function(item, arr){
		if (item < min) {
			min = item;
		}
	});
	return min;
}
console.log(numb1);
console.log(masMin(numb1));

//24.	Write a JavaScript function to check to check whether a variable is numeric or not

function isNum (value) {
	return (typeof value == "number") ? true : false;
}
console.log(numb1);
console.log(isNum(numb1));
console.log(6);
console.log(isNum(6));

//25.	Write a JavaScript function to calculate the sum of values in an array
function arrSum (arr) {
	var sum = 0;
	arr.forEach(function (item, arr){
		sum += item;
	});
	return sum;
}
console.log(numb1);
console.log(arrSum(numb1));

//26.	Write a JavaScript program to get the length of a JavaScript object
var book = { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264};
var book_length = Object.keys(book).length;
console.log(book);
console.log(book_length);

//27.	Write a JavaScript program to list the properties of a JavaScript object

var book = { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264};
for (var key in book) {
	if (!book.hasOwnProperty(key)) {
		continue;
	}
    console.log(key + ':' + book[key]);
}