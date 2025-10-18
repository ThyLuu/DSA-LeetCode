function isIsomorphic(s: string, t: string): boolean {
  let sMap = new Map()
  let tMap = new Map()

  for (let i = 0; i < s.length; i++) {
    const a = s[i]
    const b = t[i]

    if ((sMap.has(a) && sMap.get(a) !== b) || (tMap.has(b) && tMap.get(b) !== a)) return false

    sMap.set(a, b)
    tMap.set(b, a)
  }

  return true
};
