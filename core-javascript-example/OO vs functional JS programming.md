Use **object-oriented JavaScript** when your code models entities with:

- Data and behavior that belong together
- Multiple instances with shared behavior
- Stateful objects whose state changes over time
- Inheritance or polymorphism that genuinely simplifies the design

Example:

```javascript
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }
}

const account = new BankAccount(100);
account.deposit(50);
```

Use **functional JavaScript** when your code primarily transforms data:

- Functions can be independent and reusable
- Avoiding mutation makes behavior easier to reason about
- You are processing arrays, API data, or collections
- You want simple unit testing and predictable results

Example:

```javascript
const addTax = (price) => price * 1.1;

const pricesWithTax = [10, 20, 30].map(addTax);
```

A practical rule:

- **Objects with changing state**: prefer classes or object-oriented design.
- **Data transformations and calculations**: prefer functional design.
- **Most applications**: use both. For example, classes can manage application state while functional methods transform data.

Do not choose classes merely because the code has related functions. If a few pure functions solve the problem clearly, functional JavaScript is usually simpler.