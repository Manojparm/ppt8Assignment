function findAnagrams(s, p) {
    const result = [];
    const pFreq = buildFrequencyCounter(p);
    let sFreq = buildFrequencyCounter(s.substring(0, p.length));
  
    if (areFrequencyCountersEqual(sFreq, pFreq)) {
      result.push(0);
    }
  
    for (let i = p.length; i < s.length; i++) {
      const charToRemove = s.charAt(i - p.length);
      const charToAdd = s.charAt(i);
      sFreq[charToRemove]--;
      sFreq[charToAdd] = (sFreq[charToAdd] || 0) + 1;
  
      if (areFrequencyCountersEqual(sFreq, pFreq)) {
        result.push(i - p.length + 1);
      }
    }
  
    return result;
  }
  
  function buildFrequencyCounter(str) {
    const freq = {};
  
    for (let char of str) {
      freq[char] = (freq[char] || 0) + 1;
    }
  
    return freq;
  }
  
  function areFrequencyCountersEqual(freq1, freq2) {
    const keys1 = Object.keys(freq1);
    const keys2 = Object.keys(freq2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (freq1[key] !== freq2[key]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  const s = "cbaebabacd";
  const p = "abc";
  const startIndices = findAnagrams(s, p);
  console.log(startIndices);  // Output: [0, 6]
  