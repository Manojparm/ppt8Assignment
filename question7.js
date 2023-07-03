function decodeString(s) {
    const stack = [];
    let currString = '';
    let currNum = 0;
  
    for (let char of s) {
      if (char >= '0' && char <= '9') {
        currNum = currNum * 10 + parseInt(char);
      } else if (char === '[') {
        stack.push(currString);
        stack.push(currNum);
        currString = '';
        currNum = 0;
      } else if (char === ']') {
        let num = stack.pop();
        let prevString = stack.pop();
        currString = prevString + currString.repeat(num);
      } else {
        currString += char;
      }
    }
  
    return currString;
  }
  
  // Example usage:
  const s = "3[a]2[bc]";
  const decodedString = decodeString(s);
  console.log(decodedString);  // Output: "aaabcbc"
  