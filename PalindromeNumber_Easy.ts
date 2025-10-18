function isPalindrome(x: number): boolean {
  let s = x.toString()
  let reversed = s.split('').reverse().join('')
  
  if (s === reversed) return true
  return false
};

console.log(isPalindrome(121))   // true
console.log(isPalindrome(-121))  // false
console.log(isPalindrome(10))    // false
console.log(isPalindrome(12321)) // true
