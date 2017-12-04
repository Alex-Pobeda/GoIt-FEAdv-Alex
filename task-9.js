//Задание 9. Дан массив товаров, выведите товары на страницу HTML, цены которых лежат в диапазоне от 220 до 300 и количество (amount) больше 200

var goods = {
	"apple" : {
		"name": "Яблоки",
		"cost": 230,
		"amount":300
	},
	"pear" : {
		"name": "Груши",
		"cost": 34,
		"amount":100
	},
	"apricot" : {
		"name": "Абрикосы",
		"cost": 23,
		"amount":170
	},
	"plum" : {
		"name": "Сливы",
		"cost": 21,
		"amount":250
	},
	"cherry" : {
		"name": "Вишни",
		"cost": 19,
		"amount":312
	},
};

for(let key in goods){
	if((goods[key].cost > 220 && goods[key].cost < 300) || goods[key].amount > 200){
		document.writeln(`${goods[key].name}<br />`);
	}
}