'use strict';

function isPalindrom(str) {
	for (var i = 0; i < str.length/2; i++) {
		if (str[i] == str[str.length - 1 - i]) {
			return true;
		} else {
			return false;
		}
	}
}

console.log('abcddcba:' + isPalindrom("abcddcba"));
console.log('люблю:' + isPalindrom("люблю"));

function str_combination (str) {
	var new_str = '';
	var str1;
	var str2;
	for (var i = 0; i < str.length; i++) {
		for (var j = 1;j <= str.length; j++){
			str1 = str.substring(i,j);
			str2 = ',' + str1 + ',';
			if (str1 != '' && ! ~new_str.indexOf(str2)) {
			new_str = new_str + str.substring(i,j) + ',';}
		}
	}
	return new_str.slice(0,-1);
}

console.log("sun: "+str_combination ("sun"));

function alphabit (str) {
	var str1;
	for (var i = 0; i < str.length;i++) {
		for (var j = 0; j < str.length-i; j++) {
			if (str[j] > str[j+1]) {
				str1 = str.slice(0,j) + str.charAt(j+1) + str.charAt(j) + str.slice(j+2);
				str = str1;
			}
		}
	}
	return str;
}

console.log("dfecba");
console.log(alphabit ("dfecba"));

function max_word(str) {
	var wordArr = str.split(' ');
	var maxWord = '';
	for (var i = 0; i < wordArr.length; i++)
	{
     if (wordArr[i].length > maxWord.length)
       {
         maxWord= wordArr[i];
       }
	}
	return maxWord;
}

var string = 'My name is Elizaveta my lastname is Barinova';
console.log(string);
console.log(max_word(string));


function unic (str) {
	for (var i = 0; i<str.length; i++) {
		for (var j = i + 1; j < str.length; j++) {
			if (str[i] == str[j]) {
			str = str.slice(0,j) + str.slice(j+1);
			}
		}
	}
	return str;
}

var string = 'thequickbrownfoxjumpsoverthelazydog';
console.log(string);
console.log(unic(string));
