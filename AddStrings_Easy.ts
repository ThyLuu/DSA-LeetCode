function addStrings(num1: string, num2: string): string {
  let num1ToNumber = BigInt(num1)
  let num2ToNumber = BigInt(num2)

  let sum = num1ToNumber + num2ToNumber

  return sum.toString()
};

console.log(addStrings('11', '123'))
