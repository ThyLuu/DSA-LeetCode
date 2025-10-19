function plusOne(digits: number[]): number[] {
  const toString = digits.join('')
  const toNumber = BigInt(toString) + 1n
  const toArray = toNumber.toString().split('').map(Number)

  console.log(toArray)
  return toArray
};

// console.log(plusOne([1,2,3]))
plusOne([1,2,3])
