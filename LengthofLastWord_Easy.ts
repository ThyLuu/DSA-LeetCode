// Cách 1:
// function lengthOfLastWord(s: string): number {
//   const splitString = s.trim().split(' ')
//   const lastIndex = splitString.length - 1
  
//   return splitString[lastIndex].length
// };

// Cách 2:
// function lengthOfLastWord(s: string): number {
//   let sTrim = s.trim()
//   let lastSpaceIndex = sTrim.lastIndexOf(' ')
//   let splitLastWord = sTrim.slice(lastSpaceIndex + 1, sTrim.length)

//   console.log(lastSpaceIndex)
//   console.log(splitLastWord)

    // return splitLastWord.length
// };

// Cách 3
function lengthOfLastWord(s: string): number {
  const sTrim = s.trim()
  const sSplit = sTrim.split(' ')
  const getLastWord = sSplit.slice(sSplit.length - 1, sSplit.length)
  const toLength = getLastWord.join().length

  // console.log(sTrim)
  // console.log(sSplit)
  // console.log(getLastWord)
  // console.log(toLength)

  return toLength
}
