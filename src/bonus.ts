const list: number[] = [15, 6, 3213, 9, 0, 12, 8464, 1, 1264, 481, 186, 1031, 194]

// 1. Sort descending
const sortedDescending: number[] = [...list].sort((a, b) => b - a)
console.log("Sorted in descending order:", sortedDescending)
// Output: [8464, 3213, 1264, 1031, 481, 194, 186, 15, 12, 9, 6, 1, 0]

// 2. Square numbers
const squaredNumbers: number[] = list.map((num: number) => num * num);
console.log("Squared numbers:", squaredNumbers)
// Output: [225, 36, 10326069, 81, 0, 144, 71639296, 1, 1598208, 231361, 34596, 1062961, 37636]

// 3. Remove lowest two numbers and highest four
const reducedList: number[] = [...list]
    .sort((a, b) => a - b)
    .slice(2, list.length - 4)
console.log("List after removing lowest 2 and highest 4 numbers:", reducedList)
// Output: [6, 9, 12, 15, 186, 194, 481, 1031]

// 4. Remove numbers divisible by 4
const noDivisibleByFour: number[] = list.filter((num: number) => num % 4 !== 0)
console.log("List after removing divisible by 4:", noDivisibleByFour)
// Output: [15, 3213, 9, 1, 481, 1031]

// 5. Sum
const sumOfNumbers: number = list.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0)
console.log("Sum of all numbers:", sumOfNumbers)
// Output: 14876