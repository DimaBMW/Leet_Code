/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  s = s.trim(); // удаляем ведущие и завершающие пробелы
  let sign = 1; // знак по умолчанию - положительный
  let num = 0; // результат

  if (s[0] === '-') {
    sign = -1;
    s = s.slice(1);
  } else if (s[0] === '+') {
    s = s.slice(1);
  }

  for (let i = 0; i < s.length; i++) {
    if (!/\d/.test(s[i])) break;
    num = num * 10 + parseInt(s[i]);
  }
  
  num *= sign;
  if (num < -Math.pow(2, 31)) return -Math.pow(2, 31);
  if (num > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;

  return num;
};
