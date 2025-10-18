// function longestCommonPrefix(strs: string[]): string {
//   let first = strs[0]
//   let result = ''

//   for (let i = 0; i < first.length; i++) {
//     result += first[i]

//     for(let j = 1; j < strs.length; j++){
//       if(!strs[j].startsWith(result)) {
//         return result.slice(0, result.length - 1)
//       }
//     }
//   }

//   return result
// };

// function longestCommonPrefix(strs: string[]): string {
//   if (!strs.length) return "";
//   for (let i = 0; i < strs[0].length; i++) {
//     const char = strs[0][i];
//     for (let j = 1; j < strs.length; j++) {
//       if (strs[j][i] !== char) {
//         return strs[0].slice(0, i);
//       }
//     }
//   }
//   return strs[0];
// }

function longestCommonPrefix(strs: string[]): string {
  if(strs.length === 0) return ''

  let first = strs[0]

  for (let i = 0; i < first.length; i++) {
    const char = first[i]

    for (let j = 1; j < strs.length; j++) {
      if (char !== strs[j][i]) {
        return strs[0].slice(0, i)
      }
    }
  }

  return strs[0]
}
