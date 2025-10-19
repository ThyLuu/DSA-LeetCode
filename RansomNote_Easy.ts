function canConstruct(ransomNote: string, magazine: string): boolean {
  let ransomToArray = ransomNote.split('')
  let magazineToArray = magazine.split('')

  for (let i = 0; i < ransomToArray.length; i++) {
    let isDeleted = false

    for (let j = 0; j < magazineToArray.length; j++) {
      if (ransomToArray[i] === magazineToArray[j]) {
        magazineToArray.splice(j, 1)
        isDeleted = true
        break
      }
    }

    if (!isDeleted) return false
  }

  return true
};

console.log(canConstruct('aa', 'aab')) // true
console.log(canConstruct('aa', 'ab')) // false
console.log(canConstruct('aa', 'baa'))
console.log(canConstruct('aab', 'baa'))
