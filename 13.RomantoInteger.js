/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman_numerals={
			'I':1,
			'V':5,
			'X':10,
			'L':50,
			'C':100,
			'D':500,
			'M':1000,
		}
		let new_num = 0;
		for (let index = 0; index < s.length; index++) {
			if(index<s.length-1 && roman_numerals[s[index]]<roman_numerals[s[index+1]]){
				new_num-=roman_numerals[s[index]];
			}else{
				new_num+=roman_numerals[s[index]];
			}
		}
		return new_num;
};
