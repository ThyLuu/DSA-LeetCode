function firstUniqChar(s: string): number {
  for (let i = 0; i < s.length; i++) {
    let j = 0

    for (; j < s.length; j++) {
      if (s[i] === s[j] && i !== j) {
        break
      }
    }

    if (j == s.length) return i
  }

  return -1
};

console.log(firstUniqChar("leletcode")) // 0
console.log(firstUniqChar("loveleetcode")) // 2
