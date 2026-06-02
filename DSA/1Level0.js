function printHelloworld() {
    console.log("hello world")
}
function greet(name) {
    console.log("namaste: ", name)
}
let Arr = [1, 2, 3, 4, 5];
function arrayIndexFinds(Arr, num) {
    let returnNum = 0;
    for (let i = 0; i < Arr.length; i++) {
        if (Arr[i] == (num)) {
            returnNum = i;
        } else {
            returnNum = -1;
        }
    }
    console.log(returnNum);
}
let Arr2 = [2, -9, 17, 0, 1, -10, -4, 8];
function findNegativeNumbers(Arr) {
    let sum = 0;
    for (let i = 0; i < Arr.length; i++) {
        if (Arr[i] < 0) {
            sum = sum + 1;
        }
    }
    return sum;
}
// console.log(findNegativeNumbers(Arr2));
let Arr3 = [5, 0, 10, 8, 17, 1,8989, 999,9999];
function findLargestNumber(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Expected an array');
    }
    if (arr.length === 0) {
        return null; // no numbers to compare
    }
    let max = -Infinity
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (typeof val !== 'number' || Number.isNaN(val)) {
            throw new TypeError(`Non-numeric value at index ${i}: ${val}`);
        } else if (val > max) {
            max = val;
        }
    }
    return max;
}
let Arr4 = [];
function secondLargest(arr) {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] < firstLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
// console.log(secondLargest(Arr3));
// arrayIndexFinds(Arr, 5)
// arrayIndexFinds(Arr, 9)
// console.log(Arr.indexOf(5))
// console.log(Arr.indexOf(9))
// greet("AK");
