
/*
=========================================================
                 JAVASCRIPT - CLOSURES
=========================================================


1. CLOSURES
---------------------------------------------------------

A closure is a combination of a function and its
lexical environment.

It allows an inner function to remember and access
variables from its outer function even after the
outer function has finished executing.

Example:
*/

function outer() {
    let message = "Hello JavaScript";

    function inner() {
        console.log(message);
    }

    return inner;
}

const result = outer();

result(); // Hello JavaScript

/*
Explanation:

1. outer() is executed.
2. A variable message is created.
3. inner() is defined inside outer().
4. outer() returns inner.
5. Even after outer() finishes execution,
   inner() remembers the variable message.

This is called a CLOSURE.


2. LEXICAL ENVIRONMENT
---------------------------------------------------------

A lexical environment is the environment in which
JavaScript stores variable and function declarations.

It consists of:

1. Environment Record:
   Stores local variables and function declarations.

2. Outer Environment Reference:
   Points to the parent lexical environment.

JavaScript uses lexical scoping, which means a function
can access variables based on where it was written
(definition), not where it was called.

Example:
*/

let globalVar = "Global";

function parent() {
    let parentVar = "Parent";

    function child() {
        let childVar = "Child";

        console.log(globalVar);
        console.log(parentVar);
        console.log(childVar);
    }

    child();
}

parent();

/*
Output:

Global
Parent
Child

Explanation:

child() can access:
- Its own variables.
- Variables of parent().
- Global variables.

This is possible because of the lexical environment
and the scope chain.


3. CLOSURE CREATION
---------------------------------------------------------

A closure is created when an inner function maintains
access to variables from its outer lexical environment.

It commonly happens when an inner function is returned
or passed outside its parent function.

Example:
*/

function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const increment = counter();

increment(); // 1
increment(); // 2
increment(); // 3

/*
Explanation:

1. counter() creates count = 0.
2. It returns an inner function.
3. increment stores the returned function.
4. counter() has finished executing.
5. The inner function still remembers count.
6. Every call updates the same count variable.

IMPORTANT:

A closure does not create a copy of the outer variable.
It maintains access to the original variable binding.


4. PRACTICAL USE CASES OF CLOSURES
---------------------------------------------------------

Closures are useful for:

1. Data privacy.
2. Maintaining state.
3. Counters.
4. Function factories.
5. Event handlers.
6. Callbacks.
7. Memoization.


Example 1: Counter
*/

function createCounter() {
    let count = 0;

    return function () {
        return ++count;
    };
}

const counter1 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3


// Example 2: Function Factory

function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15


// Example 3: Event Handler

function attachHandler() {
    let clicks = 0;

    document.getElementById("btn").addEventListener(
        "click",
        function () {
            clicks++;
            console.log("Clicked:", clicks);
        }
    );
}

// attachHandler();

/*
The event handler remembers the clicks variable
even after attachHandler() has finished executing.


5. CLOSURES WITH LOOPS
---------------------------------------------------------

A common problem occurs when using var inside loops.

var is function-scoped, not block-scoped.

All functions created inside the loop share the
same variable i.

Example using var:
*/

for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

/*
Output:

4
4
4

Explanation:

1. var creates only one shared variable i.
2. The loop completes before callbacks execute.
3. The final value of i is 4.
4. All callbacks access the same variable.


SOLUTION 1: Using let
*/

for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

/*
Output:

1
2
3

Explanation:

let creates a new block-scoped binding for each
iteration of the loop.


SOLUTION 2: Using CLOSURES with IIFE
*/

for (var i = 1; i <= 3; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j);
        }, 1000);
    })(i);
}

/*
Output:

1
2
3

Explanation:

1. IIFE stands for Immediately Invoked Function Expression.
2. Each iteration passes the current value of i to j.
3. Each function gets its own lexical environment.
4. The callback remembers its own j through closure.


6. DATA PRIVACY USING CLOSURES
---------------------------------------------------------

Closures can be used to create private variables.

Variables declared inside a function cannot be
directly accessed from outside that function.

An inner function can access and modify those variables.

Example:
*/

function bankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            balance += amount;
            console.log("Deposited:", amount);
        },

        withdraw(amount) {
            if (amount <= balance) {
                balance -= amount;
                console.log("Withdrawn:", amount);
            } else {
                console.log("Insufficient balance");
            }
        },

        getBalance() {
            return balance;
        }
    };
}

const account = bankAccount(1000);

account.deposit(500);
account.withdraw(200);

console.log(account.getBalance()); // 1300

console.log(account.balance); // undefined

/*
Explanation:

1. balance is a private variable.
2. It cannot be directly accessed outside bankAccount().
3. deposit(), withdraw() and getBalance() can access it.
4. These methods maintain access through closures.

Advantages:

- Data hiding.
- Controlled access to variables.
- Prevents accidental modification.
- Helps implement encapsulation.

IMPORTANT:

Closures provide data privacy through scope,
but they are not a complete security mechanism.


=========================================================
                 END OF CLOSURES
=========================================================
*/
