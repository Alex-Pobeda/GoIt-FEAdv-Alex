let keyTrainer = {
	chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
	charCount: 0,
	setCharCount: function () {
		while(true){
			let num = +prompt("Какое количество символов?", "");
			if (this.checkPositiveInteger(num) == true){
				charCount = num;
				break;
			} else {
				alert("Попробуйте снова!");
			}
		}
	},	
	checkPositiveInteger: function (num) {
		if ((num > 0) && (num % 1 == 0) && (isNaN(num) === false)){
			return true;
		} else {
			eturn false;
		}
	},
	task: [],
	createTask: function () {
		for (let i = 0; i < charCount; i++) {
			let randNum = Math.floor(Math.random() * (this.chars.length - 1));
			let randChar = this.chars[randNum];
			this.task.push(randChar);
		}
	},
	startTask: function () {
		let str = prompt("Наберите такую строку: " + this.task.join(""), "");
		this.userInput = String(str);
		let newTask = this.task.join("");
		for (let i = 0; i < newTask.length; i++) {
			if (str[i] != newTask[i]) {
				this.userErrors += 1;
			}
		}
		if(this.userErrors == 0){
			console.log("Поздравляем! Вы не совершили ни одной ошибки!");
		} else {
			console.log("Вы совершили " + this.userErrors + " ошибки!\nПопробуйте выполнить упражнение ещё раз!");
		}
	},
	userInput: '',
	userErrors: 0
};

let run = function () {
	keyTrainer.setCharCount();
	keyTrainer.createTask();
	keyTrainer.startTask();
};

run();