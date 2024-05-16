/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1 || s.length < numRows) return s;

	let diration = false;
	let count = 0;

	let arr = new Array(numRows).fill("");

	for (let index = 0; index < s.length; index++) {
		let element = s[index];

		arr[count] += element; // ['P','','']
		if(count === 0 || count >= numRows -1 )diration = !diration;
		diration?count++:count--;
	}
	return arr.join("");
};
