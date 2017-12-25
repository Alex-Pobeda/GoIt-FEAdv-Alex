const keyboard = {
    layouts: {
        en: {
            topRow: ["qwertyuiop[]"],
            middleRow: ["asdfghjkl;'"],
            bottomRow: ["zxcvbnm,./"]
        },
        ru: {
            topRow: ["йцукенгшщзхъ"],
            middleRow: ["фывапролджэ"],
            bottomRow: ["ячсмитьбю."]
        },
        ua: {
            topRow: ["йцукенгшщзхї"],
            middleRow: ["фівапролджє"],
            bottomRow: ["ячсмитьбю."]
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};


function selectLang(){
	while(true){
		let val = prompt("What language do you want to use?\nen-0, ru-1, ua-2", "");
		let num = parseInt(val);
		if(val == null){
			break;
		} else if(num >= 0 && num < 3){
			keyboard.currentLang = String(num);
			break;
		} else {
			alert("You've selected an inaccessible language!\nTry again!");
		}
	}
}

let a = keyboard.currentLang;

function joinKeyboard(a){
	let abc = '';
	if(a == 0){
		abc = ((keyboard.layouts['en']['topRow']).join('') + (keyboard.layouts['en']['middleRow']).join('') + (keyboard.layouts['en']['bottomRow']).join(''));
	} else if(a == 1){
		abc = ((keyboard.layouts['ru']['topRow']).join('') + (keyboard.layouts['ru']['middleRow']).join('') + (keyboard.layouts['ru']['bottomRow']).join(''));
	} else {
		abc = ((keyboard.layouts['ua']['topRow']).join('') + (keyboard.layouts['ua']['middleRow']).join('') + (keyboard.layouts['ua']['bottomRow']).join(''));
	}
	return abc;
}


function getRandCharInAlph(){
	let randAbc = joinKeyboard();
	let randNum = Math.floor(Math.random() * (randAbc.length - 1));
	let randChar = randAbc.charAt(randNum);
	return randChar;
}