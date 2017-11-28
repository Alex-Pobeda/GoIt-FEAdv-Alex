const topLine = 'qwertyuiop[]\\';
const middleLine = 'asdfghjkl;\'';
const bottomLine = 'zxcvbnm,./';

const topLineLength = topLine.length;
const middleLineLength = middleLine.length;
const bottomLineLength = bottomLine.length;

const firstSymbolTopLine = topLine.charAt(0);
const lastSymbolTopLine = topLine.charAt(topLineLength - 1);
const firstSymbolMiddleLine = middleLine.charAt(0);
const lastSymbolMiddleLine = middleLine.charAt(middleLineLength - 1);
const firstSymbolBottomLine = bottomLine.charAt(0);
const lastSymbolBottomLine = bottomLine.charAt(bottomLineLength - 1);

const rightBracket = topLine.indexOf('[');
const leftBracket = topLine.indexOf(']');

const message1 = `Верхний ряд: ${topLine}\nСредний ряд: ${middleLine}\nНижний ряд: ${bottomLine}`;
const message2 = `Длина верхнего ряда: ${topLineLength}\nДлина среднего ряда: ${middleLineLength}\nДлина нижнего ряда: ${bottomLineLength}`;
const message3 = `Первый символ в верхнем ряду: ${firstSymbolTopLine}\nПоследний символ в верхнем ряду: ${lastSymbolTopLine}`;
const message4 = `Первый символ в среднем ряду: ${firstSymbolMiddleLine}\nПоследний символ в среднем ряду: ${lastSymbolMiddleLine}`;
const message5 = `Первый символ в нижнем ряду: ${firstSymbolBottomLine}\nПоследний символ в нижнем ряду: ${lastSymbolBottomLine}`;
const message6 = `Позиция для символа '[' - ${rightBracket}\nПозиция для символа ']' - ${leftBracket}`;
console.log(message1);
console.log(message2);
console.log(message3);
console.log(message4);
console.log(message5);
console.log(message6);