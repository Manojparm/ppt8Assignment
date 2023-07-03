function buddyStrings(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    if (s === goal) {
      // Check if s contains any repeated characters
      const charCount = new Set(s).size;
      return charCount < s.length;
    }
  
    const diffIndices = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        diffIndices.push(i);
      }
      if (diffIndices.length > 2) {
        return false;
      }
    }
  
    if (diffIndices.length !== 2) {
      return false;
    }
  
    const [index1, index2] = diffIndices;
    return s[index1] === goal[index2] && s[index2] === goal[index1];
  }
  
  // Example usage:
  const s = "ab";
  const goal = "ba";
  const canSwap = buddyStrings(s, goal);
  console.log(canSwap);  // Output: true
  