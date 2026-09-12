/**
 * Print "Hello" N Times: Write a function sayHello(n) that logs "Hello" to the console exactly n times using recursion instead of a for loop.
 */

function sayHello(n) {
    if(n <=0) {
        return "";
    }
     // Recursive Step: Build the string by adding the message and a newline
   // return msg + "\n" + sayHello(n - 1, msg);

    console.log("hello");
    return sayHello(n - 1);
}
const result1 = sayHello(5); // Output: "Hello" will be printed 5 times
console.log("result1: ", result1);





function sayHelloWithMessage(n, msg) {
    if(n <=0) {
        return "";
    }
     // Recursive Step: Build the string by adding the message and a newline
    return msg + "\n" + sayHelloWithMessage(n - 1, msg);
}

const result2 = sayHelloWithMessage(5, "Hello"); // Output: "Hello" will be printed 5 times
console.log("result2: ", result2);