//Задание 4. Создайте массив, ключами которого служат артикулы товара (любое пятизначное число), а значениями – ассоциативный массив, который содержит название товара, стоимость, вес единицы товара, ссылку на изображение, отметку о доступности товара на складе.
//Выведите массив в консоль. Выведите на страницу HTML описание первого товара.
var goods = {
	'12345': {
		'name': 'pen',
		'cost': 10,
		'weight': 5,
		'image': '',
		'available': 'yes'
	},
	'23456': {
		'name': 'pencil',
		'cost': 5,
		'weight': 10,
		'image': '',
		'available': 'yes'
	},
	'34567': {
		'name': 'ruler',
		'cost': 20,
		'weight': 15,
		'image': '',
		'available': 'yes'
	},
	'45678': {
		'name': 'rubber',
		'cost': 15,
		'weight': 20,
		'image': '',
		'available': 'yes'
	}
};
console.log(goods);

document.writeln(`Название: ${goods[12345].name} <br />Цена: ${goods[12345].cost} <br />Вес: ${goods[12345].weight} <br />Доступность: ${goods[12345].available} <br />`);