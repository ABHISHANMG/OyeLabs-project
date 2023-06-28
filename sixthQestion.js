const array = [2, 5, 1, 6, 3, 9, 8, 7, 10]; 
const n = 10; 

const expectSumVal = (n * (n + 1)) / 2;
const actualSumVal = array.reduce((sum, num) => sum + num, 0);
const missingNumber = expectSumVal - actualSumVal;

console.log(missingNumber);
