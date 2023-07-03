function isValid(s) {
    const stack = [];
  
    for (let i = 0; i < s.length; i++) {
      const char = s.charAt(i);
  
      if (char === '(' || char === '*') {
        stack.push(char);
      } else if (char === ')') {
        if (stack.length === 0) {
          return false;
        }
  
        let foundOpeningParenthesis = false;
  
        while (stack.length > 0 && stack[stack.length - 1] !== '(') {
          stack.pop();
  
          if (stack[stack.length - 1] === '(') {
            stack.pop();
            foundOpeningParenthesis = true;
            break;
          }
        }
  
        if (!foundOpeningParenthesis) {
          stack.pop();
        }
      }
    }
  
    while (stack.length > 0 && stack[stack.length - 1] === '*') {
      stack.pop();
    }
  
    return stack.length === 0;
  }
  
  // Example usage:
  console.log(isValid("()"));  // Output: true
 
  