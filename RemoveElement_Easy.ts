// function removeElement(nums: number[], val: number): number {
//   let i = 0

//   for (let j = 0; j < nums.length; j++) {
//     if (nums[j] !== val) {
//       nums[i] = nums[j]
//       i++
//     }
//   }

//   return i
// };

// const nums = [0,1,2,2,3,0,4,2]
// // const nums = [3, 2, 2, 3]
// const val = 2
// const result = removeElement(nums, val)
// console.log(result, nums.slice(0, result))

function removeElement(nums: number[], val: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i--
    }
  }

  return nums.length
}
