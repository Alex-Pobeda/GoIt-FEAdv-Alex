//Задача 0
let admin, name;
name = "Василий";
admin = name;
console.log(admin);


//Задача 1
let newStringName = function(str){
	let newStr = str.toString();
	if((typeof newStr == "string" || typeof newStr == "number") && newStr.toString().length <=5){
		for(var i = 0; i < newStr.length; i++){
			console.log(newStr[i]);
		}
	} else {
		console.log("Invalid data!");
	}
	return newStr[i];
}

//Задача 2
let setNewLength = function(){
	let distance = prompt("Введите расстояние в метрах", "");
	distance = parseInt(distance)/1000;
	if(!isNaN(distance)){
		console.log(`Введённое расстояние составляет ${distance} км`);
	} else {
		console.log(`Вводите только цифры!`);
	}
}

//Задача 3
let compareNums = function(x, y){
	if((typeof(x) == "number") && (typeof(y) == "number")){
		if (x > y){
			console.log(`больше`);
		} else if (x < y) {
			console.log(`меньше`);
		} else {
			console.log(`Эти числа равны`);
		}
	} else {
		alert(`Вводите только цифры!`);
	}
}

//Задача 4
let getSum = (n, k) => {
	let result = 0;
	if((typeof(n) == "number") && (typeof(k) == "number")){
		for(let i = 1; i <= n; i++){
			result += i**k;
			console.log(result);
		}
		return result;
	} else {
		alert(`Вводите только цифры!`);
	}
}

//Задача 5
let compareNumbers = function(){
	let num = prompt("Введите двузначное число", "");
	let numStr = num.toString();
	if((typeof numStr == "string" || typeof numStr == "number") && numStr.length == 2){
		let firstNum = numStr.slice(0,1);
		firstNum = parseInt(firstNum);
		let secondNum = numStr.slice(1);
		secondNum = parseInt(secondNum);
		if(firstNum == 0){
			console.log(`ноль не может быть первой цифрой!`);
		} else	if (firstNum > secondNum){
			console.log(`первая цифра больше второй`);
		} else if (firstNum == secondNum){
			console.log(`первая цифра равна второй`);
		} else {
			console.log(`первая цифра меньше второй`);
		}
	} else {
		alert(`Вводите только двузначные цифры!`);
	}
}

//Задача 6
let countSum = function(){
	let num = prompt("Введите число", "");
	num = parseInt(num);
	let sum = 0;
	let a = 0;
	if(typeof(num) == "number"){
		while(a <= num){
			if(a % 5 == 0){
				sum += a;
				a += 1;
			} else {
				a += 1;
			}
		}
		return sum;
	} else {
		alert(`Вводите только цифры!`);
	}
}

//Задача 7
let getPow = function(x, n){
	let result = x;
	if((typeof(x) == "number") && (typeof(n) == "number")){
		if(n != 0){
			for(let i = 1; i < n; i++){
				result *= x;
				console.log(result);
			}
			return result;
		} else {
			result = 1;
			return result;
		}
	} else {
		alert(`Вводите только цифры!`);
	}
}

//Задача 8
let prepareName = function(name){
	if(typeof name == "string"){
		name = name.toLowerCase();
		let firstChar = (name.substr(0, 1)).toUpperCase();
		let letters = name.substr(1);
		name = firstChar + letters;
		console.log(`Ваше имя: ${name}`);
	} else{
		alert(`Введите правильное имя!`);
	}
}


//Задача 9
let getTaxlessSalary = function(x){
	let receiveTax = x * 0.18;
	let warTax = x * 0.01;
	let tax = receiveTax + warTax;
	return {
		"receiveTax": receiveTax,
		"warTax": warTax,
		"tax": tax
	}
}


//Задача 10
let getRandomArray = (a, b) => {
	let arr = [];
	for(let i = a; i < (10 + a); i++){
		let randNum = (Math.floor(Math.random() * (b - a)) + a);
			arr.push(randNum);
	}
	return arr;
}

//Задача 11
let countLetters = (str) => {
	let obj = {};
	for(let i = 0; i < str.length; i++){
		if(str[i] in obj){
			obj[str[i]] += 1
		} else {
			obj[str[i]] = 1
		}
	}
	return obj;
}

//Задача 12
let getMedian = function(){
	let result = 0;
	let args = arguments.length;
	for (let i = 0; i < args; i++){
		if(typeof(arguments[i]) === "number"){
			result += arguments[i];
		} else{
			alert(`Вводите только цифры!`);
		}
	}
	let median = result/args;
	return median;
}

