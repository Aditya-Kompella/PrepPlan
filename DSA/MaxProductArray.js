/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length <= 0) return 0;
  let min = nums[0];
  let max = nums[0];
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let tempMax = max;
    let tempMin = min;
    console.log(
      "min, nums[i], nums[i] * tempMax",
      min,
      nums[i],
      nums[i] * tempMax,
    );
    min = Math.min(nums[i], nums[i] * tempMin, nums[i] * tempMax);
    console.log("min", min);
    console.log(
      "max, nums[i], nums[i] * tempMin",
      max,
      nums[i],
      nums[i] * tempMin,
    );
    max = Math.max(nums[i], nums[i] * tempMin, nums[i] * tempMax);
    console.log("max", max);
    result = Math.max(max, tempMax, result);
  }
  return result;
};
console.log(maxProduct([2, -5, -2, -4, 3]));
// console.log(maxProduct([-2, 0, -1]));
