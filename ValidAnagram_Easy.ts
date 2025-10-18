function isAnagram(s: string, t: string): boolean {
  const sToString = s.split('').sort().join()
  const tToString = t.split('').sort().join()

  console.log(sToString)
  console.log(tToString)

  if (sToString === tToString) return true
  return false
};

console.log(isAnagram('anagram', 'nagaram'))
// isAnagram('anagram', 'nagaram')
