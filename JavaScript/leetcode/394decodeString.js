/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  if (!s) return s;

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === ']') {
      let curDecodeString = '';
      let innerStr = '';
      while (stack.length) {
        let top = stack.pop();
        if (top === '[') break;
        innerStr = top + innerStr;
      }
      let repeatNumStr = '';
      while (stack.length) {
        let top = stack[stack.length - 1];
        if (/^[A-Za-z]+|\[$/.test(top)) break;
        repeatNumStr = stack.pop() + repeatNumStr;
      }
      let repeatNum = parseInt(repeatNumStr);
      for (let i = 0; i < repeatNum; i++) curDecodeString += innerStr;

      while (stack.length) {
        let top = stack[stack.length - 1];
        if (top === '[') break;
        curDecodeString = stack.pop() + curDecodeString;
      }
      stack.push(curDecodeString);
    } else stack.push(char);
  }
  return stack.join('');
};

console.log(decodeString('3[z]2[2[y]pq4[2[jk]e1[f]]]ef'));
