function findTheDifference(s: string, t: string): string {
  let sToArray = s.split('')
  let tToArray = t.split('')

  let result: string[] = []

  for (let i = 0; i < sToArray.length; i++) {
    for (let j = 0; j < tToArray.length; j++) {
      if (sToArray[i] === tToArray[j]) {
        tToArray.splice(j, 1)
        break
      }
    }
  }
  result = tToArray

  let toString = result.join('')

  return toString
};

console.log(findTheDifference('abcd', 'abcde'))
