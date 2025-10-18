// function removeDuplicates(nums: number[]): number {
//   let i = 0

//   for (let j = 0; j < nums.length; j++) {
//     if(nums[i] !== nums[j]) {
//       i++
//       nums[i] = nums[j]
//     }
//   }

//   return i + 1
// };

function removeDuplicates(nums: number[]): number {
  let i = 0
  let j = 1

  while (j < nums.length) {
    if(nums[j] == nums[i]) {
      nums.splice(j, 1)
    }
    else {
      i++
      j++
    }
  }

  return nums.length
}

// console.log(removeDuplicates([1,1,2]))
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
const nums = [1,1,2]
const result = removeDuplicates(nums)
console.log(result, nums.slice(0, result))
