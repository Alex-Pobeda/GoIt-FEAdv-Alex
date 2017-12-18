const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const addKeyboardLayout = str => {
	const abc = str.split("");
	const topLine = abc.slice(0, 12);
	const middleLine = abc.slice(12, 23);
	const bottomLine = abc.slice(23);
	let keyboard = [];
	keyboard[0] = topLine;
	keyboard[1] = middleLine;
	keyboard[2] = bottomLine;
	return keyboard;
}

const getRandCharInRow = (row) => {
	const keyboard = ["qwertyuiop[]", "asdfghjkl;'", "zxcvbnm,./"];
	if (row <= keyboard.length && row > 0){
		let keyboardLine = keyboard[row - 1];
		let randChar = Math.floor(Math.random() * (keyboardLine.length - 1));
		return keyboardLine[randChar];
	} else {
		alert("Wrong number!");
	}
}


const abc = "abcdefghijklmnopqrstuvwxyz";
const getRandCharInAlph = () => {
	let randNum = Math.floor(Math.random() * (abc.length - 1));
	let randChar = abc.charAt(randNum);
	return randChar;
}
