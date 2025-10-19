function isValid(s: string): boolean {
  let stack = []
  let map: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '[',
  }

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char)
    }
    else {
      const top = stack.pop()

      if (map[char] !== top) {
        return false
      }
    }
  }

  return true
}

console.log(isValid('(){}[]')) // true
console.log(isValid('([])')) // true
console.log(isValid('(]')) // false
