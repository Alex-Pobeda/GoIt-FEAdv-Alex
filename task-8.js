//Задание 8. Дан массив товаров, выведите товары на страницу цены которых больше 20

var goods = {
	"dd" : {
		"name": "Яблоки",
		"cost": 13
	},
	"dc" : {
		"name": "Груши",
		"cost": 23
	},
	"cd" : {
		"name": "Абрикосы",
		"cost": 33
	},
	"dee" : {
		"name": "Сливы",
		"cost": 43
	},
	"dd2" : {
		"name": "Вишни",
		"cost": 19
	},
};

for(let key in goods){
	if(goods[key].cost > 20){
		document.writeln(`${goods[key].name}<br />`);
	}
}