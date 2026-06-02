function countNumbers(n) {
    count = 0;
    if(n<0){
        n=-n;
    }
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}
// console.log(countNumbers(-55555555555555555));
function countNumbersRecursion(n){
  n = Math.abs(n);
  if(n===0) return 1;
  count = 0;
  function helper(x){
    if(x===0) return 0;
    return 1+helper(Math.floor(x/10));
  }
  return helper(n);
}
console.log(countNumbersRecursion(5555))
console.log(countNumbersRecursion(-5555))
console.log(countNumbersRecursion(2))
console.log(countNumbersRecursion(0))
console.log(countNumbersRecursion(1234567890))

