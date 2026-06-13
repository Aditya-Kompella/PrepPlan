/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let setNums = new Set(nums);
  console.log("setNums:", setNums);
  let uniqueNums = [...setNums];
  console.log("uniqueNums:", uniqueNums);

  for (let i = 0; i < uniqueNums.length; i++) {
    nums[i] = uniqueNums[i];
  }
  console.log("nums:", nums);

  return uniqueNums.length;
};
console.log(removeDuplicates([1, 1, 2]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
