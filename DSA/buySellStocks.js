/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i];
    } else if (prices[i] - min > profit) {
      profit = prices[i] - min;
    }
  }
  return profit;
};

let Arr = [7, 1, 5, 3, 6, 4];
let Arr2 = [7, 6, 4, 3, 1];
let Arr3 = [1, 2, 3, 4, 5];
console.log(maxProfit(Arr));
console.log(maxProfit(Arr2));
console.log(maxProfit(Arr3));
