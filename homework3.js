const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const abc = alphabet.split("");
const topLine = abc.slice(0, 12);
const middleLine = abc.slice(12, 23);
const bottomLine = abc.slice(23);

const keyboard = [];
keyboard[0] = topLine;
keyboard[1] = middleLine;
keyboard[2] = bottomLine;

const greeting = `${keyboard[1][5]}${keyboard[0][2]}${keyboard[1][8]}${keyboard[1][8]}${keyboard[0][8]}`;
const language = `${keyboard[1][6]}${keyboard[1][0]}${keyboard[2][3]}${keyboard[1][0]}${keyboard[1][1]}${keyboard[2][2]}${keyboard[0][3]}${keyboard[0][7]}${keyboard[0][9]}${keyboard[0][4]}`;
const coach = `${keyboard[0][4]}${keyboard[0][3]}${keyboard[1][0]}${keyboard[0][7]}${keyboard[2][5]}${keyboard[0][2]}${keyboard[0][3]}`;