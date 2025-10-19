function singleNumber(nums: number[]): number {
  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    let count = 0

    if (map.has(nums[i])) {
      count = map.get(nums[i])
    }

    map.set(nums[i], count + 1)
  }

  for (let [key, value] of map) {
    if (value == 1) return key
  }

  return -1
};

console.log(singleNumber([2,2,1]))
console.log(singleNumber([4,1,2,1,2]))
