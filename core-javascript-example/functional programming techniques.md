Common **functional programming techniques** in JavaScript include:

1. **Pure functions**  
   Same input always produces the same output without side effects.

2. **Immutability**  
   Create new values instead of modifying existing data.

3. **First-class functions**  
   Store functions in variables, pass them as arguments, and return them.

4. **Higher-order functions**  
   Functions that receive or return other functions.

5. **Function composition**  
   Combine small functions to create more complex behavior.

6. **Closures**  
   Functions retain access to variables from their outer scope.

7. **Currying**  
   Convert a multi-argument function into a sequence of single-argument functions.

8. **Partial application**  
   Pre-fill some arguments of a function.

9. **Recursion**  
   A function calls itself to solve smaller versions of a problem.

10. **Declarative programming**  
    Describe what should happen instead of specifying every step.

11. **Map, filter, and reduce**  
    Transform, select, and accumulate collection data.

```javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers
    .filter(number => number % 2 === 1)
    .map(number => number * 2)
    .reduce((total, number) => total + number, 0);

console.log(result); // 18
```

This example uses **immutability**, **pure arrow functions**, **higher-order functions**, and **function composition** through `filter`, `map`, and `reduce`.