function majorityElement(nums: number[]): number {
  let map = new Map<number, number>()
  let maxNum = 0      // phần tử xuất hiện nhiều nhất
  let maxCount = 0    // số lần xuất hiện cao nhất

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]

    map.set(num, (map.get(num) || 0) + 1)

    if (map.get(num)! > maxCount) {
      maxNum = num
      maxCount = map.get(num)!
    }
  }

  return maxNum
};

console.log(majorityElement([3, 2, 3])) // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
