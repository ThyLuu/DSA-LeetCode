// function addBinary(a: string, b: string): string {
//   const aToNumber = parseInt(a, 2)
//   const bToNumber = parseInt(b, 2)
//   const sum = aToNumber + bToNumber
//   const binary = sum.toString(2)

//   console.log(aToNumber)
//   console.log(bToNumber)
//   console.log(binary)

//   return binary
// };

// // console.log(addBinary('11', '1'))
// // console.log(addBinary('1010', '1011'))

// addBinary('11', '1')
// // addBinary('1010', '1011')

function addBinary(a: string, b: string): string {
  const aBig = BigInt("0b" + a);
  const bBig = BigInt("0b" + b);
  const sum = aBig + bBig;

  return sum.toString(2);
}

console.log(addBinary("11", "1"));       // "100"
console.log(addBinary("1010", "1011"));  // "10101"
console.log(addBinary("1111111111111111111111111111111", "1")); // "10000000000000000000000000000000"
