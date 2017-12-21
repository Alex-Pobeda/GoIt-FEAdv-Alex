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


function getRandCharInAlph(){
	if (keyboard.currentLang == 0){
		const abcEn = ((keyboard.layouts['en']['topRow']).join('') + (keyboard.layouts['en']['middleRow']).join('') + (keyboard.layouts['en']['bottomRow']).join(''));
		let randNum = Math.floor(Math.random() * (abcEn.length - 1));
		let randChar = abcEn.charAt(randNum);
		return randChar;
	} else if(keyboard.currentLang == 1) {
		const abcRu = ((keyboard.layouts['ru']['topRow']).join('') + (keyboard.layouts['ru']['middleRow']).join('') + (keyboard.layouts['ru']['bottomRow']).join(''));
		let randNum = Math.floor(Math.random() * (abcRu.length - 1));
		let randChar = abcRu.charAt(randNum);
		return randChar;
	} else {
		const abcUa = ((keyboard.layouts['ua']['topRow']).join('') + (keyboard.layouts['ua']['middleRow']).join('') + (keyboard.layouts['ua']['bottomRow']).join(''));
		let randNum = Math.floor(Math.random() * (abcUa.length - 1));
		let randChar = abcUa.charAt(randNum);
		return randChar;
	}
}


function getRandCharInAlphV2(){
	const abcEn = ((keyboard.layouts['en']['topRow']).join('') + (keyboard.layouts['en']['middleRow']).join('') + (keyboard.layouts['en']['bottomRow']).join(''));
	const abcRu = ((keyboard.layouts['ru']['topRow']).join('') + (keyboard.layouts['ru']['middleRow']).join('') + (keyboard.layouts['ru']['bottomRow']).join(''));
	const abcUa = ((keyboard.layouts['ua']['topRow']).join('') + (keyboard.layouts['ua']['middleRow']).join('') + (keyboard.layouts['ua']['bottomRow']).join(''));
	let abc = '';
	if (keyboard.currentLang == 0){
		abc = abcEn;
	} else if(keyboard.currentLang == 1) {
		abc = abcRu;
	} else {
		abc = abcUa;
	}
	let randNum = Math.floor(Math.random() * (abc.length - 1));
	let randChar = abc.charAt(randNum);
	return randChar;
}