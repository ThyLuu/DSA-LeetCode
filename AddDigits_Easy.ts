function addDigits(num: number): number {

  while (num >= 10) {
    let toSplit = num.toString().split('').map(Number)
    let sum = 0

    for (let i = 0; i < toSplit.length; i++) {
      sum += toSplit[i]
    }

    num = sum
  }
  
  return num
};

console.log(addDigits(38))
