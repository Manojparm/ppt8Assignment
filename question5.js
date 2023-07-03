function compress(chars) {
    let write = 0;
    let count = 1;
  
    for (let read = 0; read < chars.length; read++) {
      if (read + 1 === chars.length || chars[read] !== chars[read + 1]) {
        chars[write] = chars[read];
        write++;
  
        if (count > 1) {
          const countStr = String(count);
          for (let i = 0; i < countStr.length; i++) {
            chars[write] = countStr[i];
            write++;
          }
        }
  
        count = 1;
      } else {
        count++;
      }
    }
  
    return write;
  }
  
  // Example usage:
  const chars = ["a", "a", "b", "b", "c", "c", "c"];
  const compressedLength = compress(chars);
  const compressedChars = chars.slice(0, compressedLength);
  console.log(compressedLength);  // Output: 6
  
  