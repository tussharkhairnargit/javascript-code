let obj1 = { name: "Alice", age: 30 };

//lets use reference first

let obj2 = obj1; // this is reference assignment
// Let change the name in obj2
obj2.name = "Bob";

console.log(obj1.name);
console.log(obj2.name);

// Lets create a shallow copy of obj1
let shallowCopy = { ...obj1 }; // this is shallow copy using spread operator
shallowCopy.name = "Charlie";

console.log(obj1.name);
console.log(shallowCopy.name);

// Lets create a deep copy of obj1
let deepCopy = JSON.parse(JSON.stringify(obj1)); // this is deep copy using JSON methods
deepCopy.name = "David";

console.log(obj1.name);
console.log(deepCopy);  