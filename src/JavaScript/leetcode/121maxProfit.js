/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 1) return 0;
  let minPrice = Number.MAX_SAFE_INTEGER;
  let res = 0;
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    res = Math.max(prices[i] - minPrice, res);
  }
  return res;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
