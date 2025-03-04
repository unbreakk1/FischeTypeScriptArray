// Step 1:`.map`
const numbers: number[] = [1, 2, 3, 4, 5];
const doubledNumbers: number[] = numbers.map((num: number) => num * 2);
console.log("Doubled Numbers:", doubledNumbers);
// Output: [2, 4, 6, 8, 10]

// Step 2:`.filter`
const words: string[] = ["apple", "banana", "cherry", "plum"];
const longWords: string[] = words.filter((word: string) => word.length > 5);
console.log("Words longer than 5 letters:", longWords);
// Output: ["banana", "cherry"]

// Step 3:`.reduce`
const numsToSum: number[] = [10, 20, 30];
const totalSum: number = numsToSum.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0);
console.log("Sum of Numbers:", totalSum);
// Output: 60

// Step 4:`.some`
const numArray: number[] = [5, 8, 12, 4];
const hasNumberGreaterThan10: boolean = numArray.some((num: number) => num > 10);
console.log("Has number greater than 10:", hasNumberGreaterThan10);
// Output: true


// <edit-fold>desc="BONUS">
const list: number[] = [15, 6, 3213, 9, 0, 12, 8464, 1, 1264, 481, 186, 1031, 194];

// 1. Sort descending
const sortedDescending: number[] = [...list].sort((a, b) => b - a); // Use spread operator to avoid mutating the original list
console.log("Sorted in descending order:", sortedDescending);
// Output: [8464, 3213, 1264, 1031, 481, 194, 186, 15, 12, 9, 6, 1, 0]

// 2. Square numbers
const squaredNumbers: number[] = list.map((num: number) => num * num);
console.log("Squared numbers:", squaredNumbers);
// Output: [225, 36, 10326069, 81, 0, 144, 71639296, 1, 1598208, 231361, 34596, 1062961, 37636]

// 3. Remove lowest two numbers and highest four
const reducedList: number[] = [...list]
    .sort((a, b) => a - b)
    .slice(2, list.length - 4);
console.log("List after removing lowest 2 and highest 4 numbers:", reducedList);
// Output: [6, 9, 12, 15, 186, 194, 481, 1031]

// 4. Remove numbers divisible by 4
const noDivisibleByFour: number[] = list.filter((num: number) => num % 4 !== 0);
console.log("List after removing divisible by 4:", noDivisibleByFour);
// Output: [15, 3213, 9, 1, 481, 1031]

// 5. Sum
const sumOfNumbers: number = list.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0);
console.log("Sum of all numbers:", sumOfNumbers);
// Output: 13487
//</edit-fold>