const playSound = note => {
  const audio = document.querySelector(`audio[data-note=${note}]`);
  audio.currentTime = 0;
  audio.play();
};

const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");

let pressedKey = function(e){
	let keyName = e.key;
	let input = document.querySelector("input:checked");
	
	for(var i = 0; i < buttons.length; i++){
		if((buttons[i].textContent == keyName) && (keys.indexOf(keyName) != -1) && input) {
			let note = buttons[i].getAttribute("data-note");
			buttons[i].classList.add("keyboard__btn--active");
			playSound(note);
		} else if ((buttons[i].textContent == "space" && keyName == " ") && (keys.indexOf(keyName) == -1) && input){
			let note = buttons[i].getAttribute("data-note");
			buttons[i].classList.add("keyboard__btn--active");
			playSound(note);
		}
	}
};

let upedKey = function(e){
	for(var i = 0; i < buttons.length; i++){
		buttons[i].classList.remove("keyboard__btn--active");
	}
};
window.addEventListener("keydown", pressedKey);
window.addEventListener("keyup", upedKey);
