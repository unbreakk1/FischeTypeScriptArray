// Step 1:`.map`
const numbers: number[] = [1, 2, 3, 4, 5]
const doubledNumbers: number[] = numbers.map((num: number) => num * 2);
console.log("Doubled Numbers:", doubledNumbers) // Output: [2, 4, 6, 8, 10]

// Step 2:`.filter`
const words: string[] = ["apple", "banana", "cherry", "plum"];
const longWords: string[] = words.filter((word: string) => word.length > 5)
console.log("Words longer than 5 letters:", longWords); // Output: ["banana", "cherry"]

// Step 3:`.reduce`
const numsToSum: number[] = [10, 20, 30]
const totalSum: number = numsToSum.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0)
console.log("Sum of Numbers:", totalSum) // Output: 60

// Step 4:`.some`
const numArray: number[] = [5, 8, 12, 4]
const hasNumberGreaterThan10: boolean = numArray.some((num: number) => num > 10);
console.log("Has number greater than 10:", hasNumberGreaterThan10) // Output: true