
//Creating an array with a pre-defined dynamic size
console.log(arr); // Output: [ <10 empty items> ]
console.log(arr); // Output:,,,,,,,,,
console.log(arr.length); // Output: 10

const arr = new Array(10);
arr.fill(0)
const array = Array.from(arr, (value) => {
    return !value;
});

console.log(...array);