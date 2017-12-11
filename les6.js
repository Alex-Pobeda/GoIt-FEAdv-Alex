let summ = function(x, y){
	if((typeof(x) == "number") && (typeof(y) == "number")){
		return x + y;
	} else {
		alert(`Вводите только цифры!`);
	}
}



let getName = function(name){
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

//3. Функция получает число. Если число <1024,
//то переменная device = ‘mobile’,
//в ином случае ‘desktop’
let device;
let getNum = function(a){
	if(typeof(a) == "number"){
		if(a < 1024){
			device = "mobile";
		} else{
			device = "desktop";
		}
		return device;
	} else {
		alert(`Вводите только цифры!`);
	}
}


//4. Функция складывает любое количество чисел переданных в неё
let getSum = function(){
	let result = 0;
	for (let i = 0; i < arguments.length; i++){
		if(typeof(arguments[i]) === "number"){
			result += arguments[i];
		} else{
			alert(`Вводите только цифры!`);
		}
	}
	return result;
}