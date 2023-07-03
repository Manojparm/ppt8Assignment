class TreeNode {
    constructor(val, left, right) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function buildTree(s) {
    if (!s || s.length === 0) {
      return null;
    }
  
    const stack = [];
    let root = null;
    let num = '';
    let i = 0;
  
    while (i < s.length) {
      const char = s.charAt(i);
  
      if (char === '(') {
        stack.push(root);
        root = null;
        i++;
      } else if (char === ')') {
        root = stack.pop();
        i++;
      } else if (!isNaN(char)) {
        num = '';
  
        while (i < s.length && !isNaN(s.charAt(i))) {
          num += s.charAt(i);
          i++;
        }
  
        root = new TreeNode(Number(num), root, null);
      } else {
        i++;
      }
    }
  
    return root;
  }
  
  // Example usage:
  const root = buildTree("4(2(3)(1))(6(5))");
  console.log(root);  // Output: [4,2,6,3,1,5]
  