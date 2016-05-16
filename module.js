'use strict';
var worker = (function () {
	 var myData;
	 var myData2;
	 var myData3;
	 
	//получить значение
	function inputData (inpData1, inpData2,inpData3) {
		myData = inpData1;
		myData2 = inpData2;
		myData3 = inpData3;
		return myData;
	}
	
	//вывод результата выполнения
	function test (inputdata) {
		console.log(inputdata);
	}
	
	//1проверка на массив
	function is_array () {
		return myData instanceof Array;
	}
	//2глубокое клонирование
	function deepCopy (arr) {
    if (arr instanceof Array) {
        var out = [];
        for ( var i = 0; i < arr.length; i++ ) {
            out[i] = deepCopy(arr[i]);
        }
      return out;
    } else {
        return arr;
    }
    } 

    function cloneMass() {
        return deepCopy(myData);
    }  
	
	//3ищем часто встречающийся элемент массива
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
	
	
	function findFrequent() {
        return frequent(myData);
    }
	
	
	//4удалить повторения
	function delRepetition() {
		var a = myData;
		a.sort(); // сортируем массив
		var a1,a2;
		for (var i = a.length - 1; i > 0; i--) {
			if (typeof a == "String") {
			a1 = a[i].toLowerCase;
			a2 = a[i-1].toLowerCase;
			} else {
				a1 = a[i];
				a2 = a[i-1];
			}
			if (a1 == a2) {
				a.splice( i, 1);
			}
		
		}
		return a;
	}
	
	
	//5перетасовать массив
	function compareRandom(a, b) {
		return Math.random() - 0.5;
	}
	
	function shuffleArr () {
		var arr = myData;
		return arr.sort(compareRandom);
	}
	
	//6сортировать по названию
	function compareTitle(a, b) {
		return a.title > b.title;
	}
	
	function sortKey () {
		var obj;
		myData.sort(compareTitle);
		for (var i=0; i < myData.length; i++) {
			console.log(myData[i].title);
		}
		
	}
	
	//7объединить массивы
	function merge () {
		var mergedArr = myData.concat(myData2);
		mergedArr.sort();
		for (var i = mergedArr.length - 1; i > 0; i--) {
			if (mergedArr[i] === mergedArr[i-1]) {
			mergedArr.splice( i, 1);
		}
		}
		return mergedArr;
	}
	//8удалить элементы
	function removeEl () {
		var newArr = myData;
		var ind = newArr.indexOf(myData2);
		if (ind != -1) {
		newArr.splice(ind, 1);
		}
		return newArr;
	}
	
	//9получить рандомный элемент
	function getRandomElem (){
		var ind = Math.floor(Math.random() * myData.length);
		return myData[ind];
	}	
	
	//10 переместить элемент на позицию
	function moveEl () {
		var arr = myData;
		var elem = myData2;
		var pos = myData3;
		var ind = arr.indexOf(elem);
		arr.splice(ind,1);
		arr.splice (pos,0,elem);
		return arr;
	}
	
	//11
	function arrWords () {
		var str = myData;
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
	
	
	//12первая буква большая
	function firstLet () {
		var str = myData;
		str = str[0].toUpperCase() + str.slice(1);
		return str;
	}
	
	//13верблюд
	function camelize () {
		var str = myData;
		str = str[0].toUpperCase() + str.slice(1);
		for (var i=0; i < str.length; i++) {
			if (str[i] == '-' || str[i] == ' ' ) {
				str = str.slice(0,i) + str[i+1].toUpperCase() + str.slice(i+2);
			}
		}
		return str;
	}
	
	//14 сумма элементов
	function iterateArray(array, callback){
		for (var i=0; i < array.length; i++) {
			callback (array[i]);
		}
	}
	
	function sumOfElems(){
		var arr = myData;
		var result = 0;
		iterateArray(arr, function(el){
			result += el;
		});
		return result;
	}
	
	//15 количество ключей
	function objLength () {
		var obj = myData;
		return Object.keys(book).length;
	}

	return {
		inputData: inputData,
		is_array: is_array,
		test:test,
		cloneMass: cloneMass,
		findFrequent: findFrequent,
		delRepetition: delRepetition,
		shuffleArr:shuffleArr,
		sortKey: sortKey,
		merge: merge,
		removeEl: removeEl,
		getRandomElem: getRandomElem,
		moveEl: moveEl,
		arrWords: arrWords,
		firstLet:firstLet,
		camelize: camelize,
		sumOfElems:sumOfElems,
		objLength:objLength
	};
} )();

var mass = worker.inputData([1, 2, 3, 4, 2, 5, 6, 2]);
worker.test(mass);

var is_arr = worker.is_array();
worker.test(is_arr);

var cloneArr = worker.cloneMass();
worker.test(cloneArr);

var frequent = worker.findFrequent();
worker.test(frequent);

var noRepeat = worker.delRepetition();
worker.test(noRepeat);

var newArr = worker.shuffleArr();
worker.test(newArr);


mass = worker.inputData([ 
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}]);
worker.test(mass);
var sortTitle = worker.sortKey();


mass = worker.inputData([1, 2, 56, 23, 4, 9], [1, 6, 8, 9]);
worker.test(mass);
var mergedArr = worker.merge();
worker.test(mergedArr);

var mass_el = worker.inputData([1, 2, 56, 23, 4, 9], 56);
worker.test(mass_el);
var removeElem = worker.removeEl();
worker.test(removeElem);

var randomEl = worker.getRandomElem();
worker.test(randomEl);


var mass_el_pos = worker.inputData([1, 2, 56, 23, 4, 9], 56, 4);
worker.test(mass_el_pos);
var moveElem = worker.moveEl();
worker.test(moveElem);


var stroka = worker.inputData("Мне нравится плавать.А еще мне нравится читать,вышивать и слушать музыку.");
worker.test(stroka);
var getArrWord = worker.arrWords();
worker.test(getArrWord);


stroka = worker.inputData("мама мыла раму");
worker.test(stroka);
var upfirstLet = worker.firstLet();
worker.test(upfirstLet);


stroka = worker.inputData("java-script");
worker.test(stroka);
var get_camelize = worker.camelize();
worker.test(get_camelize);


mass = worker.inputData([1, 2, 56, 23, 4, 9]);
worker.test(mass);
var getSumOfElems = worker.sumOfElems();
worker.test(getSumOfElems);

var book = worker.inputData({ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264});
worker.test(book);
var getObjLength = worker.objLength();
worker.test(getObjLength);