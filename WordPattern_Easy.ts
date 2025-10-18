function wordPattern(pattern: string, s: string): boolean {
  let patternMap = new Map()
  let sMap = new Map()

  let toArray = s.split(' ')

  if (pattern.length !== toArray.length) return false

  for (let i = 0; i < pattern.length; i++) {
    const a = pattern[i]
    const b = toArray[i]

    if ((patternMap.has(a) && patternMap.get(a) !== b) || (sMap.has(b) && sMap.get(b) !== a)) {
      return false
    }

    patternMap.set(a, b)
    sMap.set(b, a)
  }
  return true
};

console.log(wordPattern("abba", "dog cat cat dog"))
console.log(wordPattern("abba", "dog cat cat fish"))
