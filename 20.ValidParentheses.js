/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	let stack = [];
    let map = new Map([[')', '('], [']', '['], ['}', '{']]);
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
						console.log(stack);
        } else {
            if(stack.length === 0 || stack[stack.length - 1] !== map.get(s[i])) {
                return false;
            }
            stack.pop();
        }
    }
    
    return stack.length === 0;
};

console.log(isValid("()"));
