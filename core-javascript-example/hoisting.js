// Unlike modern declarations (let, const), a var variable is automatically initialized with a default value of undefined

console.log(myVar); // Output: undefined (no error)
var myVar = 10;
console.log(myVar); // Output: 10

//Temporal Dead Zone - There's a name for the period during execution where let/const variables are hoisted but not accessible: it's called the Temporal Dead Zone.

    // // --- TDZ for blockVar starts here ---
    // console.log(blockVar); // Throws ReferenceError: Cannot access 'blockVar' before initialization
    
    // let blockVar = 20; // --- TDZ ends here ---
    // console.log(blockVar); // Output: 20


console.log(number2) //error: ReferenceError: number2 is not defined

let number = 10


//https://www.freecodecamp.org/news/javascript-let-and-const-hoisting/


//Declaration Hoisting: During the compilation phase, JavaScript moves the variable declaration to the top of its enclosing scope before any code runs.
//Automatic Initialization: Unlike modern declarations, a var variable is automatically initialized with a default value of undefined.

//let can be declared without a value (defaulting to undefined once the TDZ ends)
//const stands for "constant" and requires you to bind a value exactly at the moment of declaration.
//var : No Errors on Early Access: Because it initializes to undefined, reading a var variable before its physical line in the code does not throw a reference error—it simply returns undefined.