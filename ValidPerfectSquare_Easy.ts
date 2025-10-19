function isPerfectSquare(num: number): boolean {
  let a = Math.sqrt(num)
  let b = Math.round(a)

  let c = Math.sqrt(num)

  if (b == c) {
    return true
  }

  return false
};

console.log(isPerfectSquare(16))
console.log(isPerfectSquare(14))

