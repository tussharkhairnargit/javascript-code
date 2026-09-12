const list = [1, 2, 3, 4, 4, 5, 3, 6, 7, 9];

const asc = (a, b) => a - b;  // asc
const desc = (a, b) => b - a; // desc

//Simple way to remove duplicates from an array using Set
const result2 = [...new Set(list)]

//Alternate way to remove duplicates from an array using filter
const uniqueNumbers = result.filter((value, index, self) => self.indexOf(value) === index);

//Alternate way to remove duplicates from an array using reduce
const result = list.sort(asc).reduce((accumulator, currentValue, currentIndex, array) =>
  accumulator.includes(currentValue) ? accumulator : [...accumulator, currentValue]
  , []
)

// Sum of all the elements in the array
const total = result2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Some of even numbers in the array
const evenTotal = result.reduce((accumulator, currentValue) => currentValue % 2 === 0 ? accumulator + currentValue : accumulator, 0);

// Remove Even numbers from the array
const onlyOddNumbers = result.reduce((accumulator, currentValue) => currentValue % 2 !== 0 ? [...accumulator, currentValue] : accumulator, []);


console.log("result: ", result2.toString());
console.log("isArray: ", Array.isArray(result2));
console.log("total: ", total);
console.log("evenTotal: ", evenTotal);
console.log("onlyOddNumbers: ", onlyOddNumbers);