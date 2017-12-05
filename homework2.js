//-----Задание 1
let num = prompt("Введите число от 1 до 3\n1 - Taba\n2 - Sharm\n3 - Hurgada", "");
num = parseInt(num);
switch(num) {
		case 1: {
			console.log("Вы выбрали - Taba");
			break;
		}
		case 2: {
			console.log("Вы выбрали - Sharm");
			break;
		}
		case 3: {
			console.log("Вы выбрали - Hurgada");
			break;
		}
		default: {
			alert("Вы ввели неправильное число!\nДля такого числа нет курорта!");
			break;
		}
}


//-----Задание 2
	//let num = prompt("Введите количество мест", "");
	num = parseInt(num);
	if(isNaN(num) || num == 0){
		alert("Введите корректное число!");
	}
	let sharmPlaces = 15;
	let hurgadaPlaces = 25;
	let tabaPlaces = 6;
	if(num <= tabaPlaces){
		let confirmTaba = confirm(`В группе taba есть ${tabaPlaces} мест. Вы хотите быть в этой группе?`);
		if(confirmTaba == true){
			tabaPlaces -= num;
			console.log(tabaPlaces);
		} else {
			let confirmSharm = confirm(`В группе sharm есть ${sharmPlaces} мест. Вы хотите быть в этой группе?`);
			if(confirmSharm == true){
				sharmPlaces -= num;
				console.log(sharmPlaces);
			} else {
				confirmHurgada = confirm(`В группе hurgada есть ${hurgadaPlaces} мест. Вы хотите быть в этой группе?`);
				if(confirmHurgada == true){
					hurgadaPlaces -= num;
					console.log(hurgadaPlaces);
				} else {
					alert("Вы не выбрали ни одну группу!");
				}
			}
		}
	} else if(num <= sharmPlaces){
		let confirmSharm = confirm(`В группе sharm есть ${sharmPlaces} мест. Вы хотите быть в этой группе?`);
		if(confirmSharm == true){
			sharmPlaces -= num;
			console.log(sharmPlaces);
		} else {
			confirmHurgada = confirm(`В группе hurgada есть ${hurgadaPlaces} мест. Вы хотите быть в этой группе?`);
			if(confirmHurgada == true){
			hurgadaPlaces -= num;
			console.log(hurgadaPlaces);
			} else {
				alert("Вы не выбрали ни одну группу!");
			}
		}
	} else if(num <= hurgadaPlaces){
		confirmHurgada = confirm(`В группе hurgada есть ${hurgadaPlaces} мест. Вы хотите быть в этой группе?`);
		if(confirmHurgada == true){
			hurgadaPlaces -= num;
			console.log(hurgadaPlaces);
		} else {
			alert("Вы не выбрали ни одну группу!");
		}
	} else{
		alert("Мест нет!");
	}