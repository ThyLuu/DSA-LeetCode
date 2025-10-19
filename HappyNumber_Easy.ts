function isHappy(n: number): boolean {
  let arr = new Set<Number>()

  while (n != 1 && !arr.has(n)) {
    let nSplit = n.toString().split('')
    let toArray = nSplit.map(Number)

    let sum = 0
    arr.add(n)

    for (let i = 0; i < toArray.length; i++) {
      let square = toArray[i] * toArray[i]
      sum += square
    }

    n = sum
  }

  if (n == 1) return true

  return false
};

console.log(isHappy(19))
console.log(isHappy(2))
console.log(isHappy(11))
console.log(isHappy(7))
