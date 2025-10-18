/**
 Do not return anything, modify nums1 in-place instead.
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const getMValue = nums1.slice(0, m)
  const getNValue = nums2.slice(0, n)
  const merged = getMValue.concat(getNValue)
  const sorted = merged.sort((a, b) => a - b)

//   Lưu ý:
//   - a - b là tăng dần
//   - b - a là giảm dần

  for (let i = 0; i < sorted.length; i++) {
    nums1[i] = sorted[i]
  }

  console.log(sorted)
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
// console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))
