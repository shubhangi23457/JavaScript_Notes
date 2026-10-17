/*
============================================================
3. FUNCTIONS
============================================================

A function is a reusable block of code designed to perform
a specific task.

Functions help with:
- Reusability
- Organization
- Avoiding repetitive code
- Breaking large problems into smaller parts
*/


// ==========================================================
// 3.1 FUNCTION DECLARATIONS
// ==========================================================

/*
Syntax:

function functionName() {
    // code
}

Function declarations are hoisted, so they can be called
before they are defined.
*/

greet();

function greet() {
    console.log("Hello!");
}


/*
Function with parameters
*/

function greetUser(name) {
    console.log("Hello " + name);
}

greetUser("John");
greetUser("Alex");


/*
A function can have multiple parameters.
*/

function add(a, b) {
    console.log(a + b);
}

add(10, 20);


// ==========================================================
// 3.2 FUNCTION EXPRESSIONS
// ==========================================================

/*
A function expression is a function stored inside a variable.

Syntax:

const variableName = function () {
    // code
};

Function expressions are NOT hoisted like function
declarations.
*/

const sayHello = function () {
    console.log("Hello!");
};

sayHello();


/*
Function expression with parameters.
*/

const multiply = function (a, b) {
    console.log(a * b);
};

multiply(5, 4);


/*
Named function expression
*/

const factorial = function calculateFactorial(n) {

    if (n <= 1) {
        return 1;
    }

    return n * calculateFactorial(n - 1);
};

console.log(factorial(5));


// ==========================================================
// 3.3 ARROW FUNCTIONS
// ==========================================================

/*
Arrow functions provide a shorter syntax for writing
functions.

Syntax:

const functionName = () => {
    // code
};
*/

const greetArrow = () => {
    console.log("Hello!");
};

greetArrow();


/*
One parameter:

Parentheses can be omitted when there is only ONE parameter.
*/

const square = number => {
    return number * number;
};

console.log(square(5));


/*
Multiple parameters:

Parentheses are required.
*/

const addNumbers = (a, b) => {
    return a + b;
};

console.log(addNumbers(10, 20));


/*
Implicit return

When an arrow function has only one expression,
the return keyword and curly braces can be omitted.
*/

const squareNumber = number => number * number;

console.log(squareNumber(5));


const addition = (a, b) => a + b;

console.log(addition(10, 20));


/*
IMPORTANT:

Arrow functions do NOT have their own `this`.

They also do not have their own:
- arguments object
- prototype
- constructor behavior
*/


// ==========================================================
// 3.4 PARAMETERS & ARGUMENTS
// ==========================================================

/*
PARAMETERS
------------------------------------------------------------
Variables defined in the function definition.
*/

function introduce(name, age) { // name and age = parameters

    console.log(name);
    console.log(age);
}


/*
ARGUMENTS
------------------------------------------------------------
Actual values passed when calling the function.
*/

introduce("John", 25);
// "John" and 25 = arguments


/*
Example:

function add(a, b) {
              ↑  ↑
          parameters
}

add(10, 20);
    ↑   ↑
  arguments
*/


// ---------- More arguments than parameters ----------

function showName(name) {
    console.log(name);
}

showName("John", "Extra");

/*
Extra arguments are ignored when there are no parameters
to receive them.

Output:
John
*/


// ---------- Fewer arguments than parameters ----------

function displayUser(name, age) {
    console.log(name);
    console.log(age);
}

displayUser("John");

/*
Output:

John
undefined

Missing arguments get the value `undefined`.
*/


// ==========================================================
// 3.5 DEFAULT PARAMETERS
// ==========================================================

/*
Default parameters provide a default value when an argument
is not passed or is undefined.
*/

function greetPerson(name = "Guest") {
    console.log("Hello " + name);
}

greetPerson("John");
greetPerson();


/*
Example:

function calculatePrice(price, tax = 18) {
    ...
}
*/

function calculatePrice(price, tax = 18) {

    return price + (price * tax / 100);

}

console.log(calculatePrice(1000));
console.log(calculatePrice(1000, 10));


/*
Default parameter is used when the argument is undefined.
*/

function test(value = 10) {
    console.log(value);
}

test();          // 10
test(undefined); // 10
test(null);      // null


// ==========================================================
// 3.6 REST PARAMETERS
// ==========================================================

/*
Rest parameter allows a function to accept any number
of arguments.

Syntax:

function functionName(...parameter) {
    ...
}

The rest parameter collects arguments into an ARRAY.
*/

function sum(...numbers) {

    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40));


/*
Rest parameter must be the LAST parameter.
*/

function userInfo(name, ...hobbies) {

    console.log(name);
    console.log(hobbies);

}

userInfo(
    "John",
    "Reading",
    "Gaming",
    "Music"
);

/*
Output:

John
["Reading", "Gaming", "Music"]
*/


/*
REST vs SPREAD

Rest:
    Collects multiple values into an array.

Spread:
    Expands an iterable/object into individual values.

Example:

function sum(...numbers) {}
                  ↑
                REST

sum(...numbers);
    ↑
  SPREAD
*/


// ==========================================================
// 3.7 RETURN VALUES
// ==========================================================

/*
`return` sends a value back from a function.

It also immediately stops function execution.
*/

function addTwoNumbers(a, b) {

    return a + b;

}

let result = addTwoNumbers(10, 20);

console.log(result);


/*
A function can return any type of value.
*/

function getName() {
    return "John";
}

function getNumbers() {
    return [10, 20, 30];
}

function getUser() {
    return {
        name: "John",
        age: 25
    };
}

console.log(getName());
console.log(getNumbers());
console.log(getUser());


/*
If a function does not return anything,
it returns undefined.
*/

function sayHi() {
    console.log("Hi");
}

let output = sayHi();

console.log(output); // undefined


/*
IMPORTANT:

Code after return does not execute.
*/

function testReturn() {

    return 10;

    console.log("Hello"); // Never executes
}


// ==========================================================
// 3.8 CALLBACK FUNCTIONS
// ==========================================================

/*
A callback is a function passed as an argument to another
function and executed later/by that function.
*/

function greetCallback(name) {
    console.log("Hello " + name);
}

function processUser(callback) {

    const name = "John";

    callback(name);

}

processUser(greetCallback);


/*
Anonymous callback
*/

processUser(function (name) {
    console.log("Welcome " + name);
});


/*
Arrow function callback
*/

processUser(name => {
    console.log("Hi " + name);
});


/*
Common example with setTimeout
*/

setTimeout(function () {
    console.log("This runs later");
}, 1000);


/*
Array methods also commonly use callbacks.
*/

const numbersArray = [1, 2, 3, 4];

numbersArray.forEach(function (number) {
    console.log(number);
});


numbersArray.forEach(number => {
    console.log(number);
});


// ==========================================================
// 3.9 HIGHER-ORDER FUNCTIONS
// ==========================================================

/*
A Higher-Order Function (HOF) is a function that:

1. Takes another function as an argument
OR
2. Returns another function
OR
3. Does both
*/


// ---------- Function accepting another function ----------

function calculate(a, b, operation) {

    return operation(a, b);

}

function addOperation(a, b) {
    return a + b;
}

function multiplyOperation(a, b) {
    return a * b;
}

console.log(
    calculate(10, 5, addOperation)
);

console.log(
    calculate(10, 5, multiplyOperation)
);


/*
Here:

calculate() = Higher-Order Function

addOperation() = Callback
multiplyOperation() = Callback
*/


// ---------- Function returning another function ----------

function createMultiplier(number) {

    return function (value) {

        return value * number;

    };

}

const double = createMultiplier(2);

console.log(double(5)); // 10


const triple = createMultiplier(3);

console.log(triple(5)); // 15


/*
Common Higher-Order Array Methods:

map()
filter()
reduce()
forEach()
find()
some()
every()
*/


// ==========================================================
// 3.10 PURE vs IMPURE FUNCTIONS
// ==========================================================

/*
PURE FUNCTION

A pure function:

1. Always gives the same output for the same input.
2. Does not modify external state/data.
*/

function addPure(a, b) {

    return a + b;

}

console.log(addPure(10, 20));
console.log(addPure(10, 20));

/*
Same input:
    10, 20

Same output:
    30

No external data is changed.
*/


// ---------- Another pure function ----------

function squarePure(number) {

    return number * number;

}

console.log(squarePure(5)); // 25
console.log(squarePure(5)); // 25


/*
IMPURE FUNCTION

An impure function can:

- Modify external variables
- Depend on external state
- Produce different results for the same input
- Perform side effects
*/


let total = 0;

function addToTotal(value) {

    total += value;

}

addToTotal(10);
console.log(total); // 10

addToTotal(10);
console.log(total); // 20

/*
The function modifies an external variable.

Therefore, it is impure.
*/


// ---------- Impure because of external state ----------

let multiplier = 2;

function multiplyByExternalValue(number) {

    return number * multiplier;

}

console.log(multiplyByExternalValue(5)); // 10

multiplier = 5;

console.log(multiplyByExternalValue(5)); // 25

/*
Same input (5), but different output because the function
depends on external state.
*/


// ==========================================================
// PURE vs IMPURE - QUICK COMPARISON
// ==========================================================

/*
PURE FUNCTION
------------------------------------------------------------

function add(a, b) {
    return a + b;
}

- Same input -> same output
- No side effects
- Does not modify external state
- Easier to test
- Easier to reason about


IMPURE FUNCTION
------------------------------------------------------------

let count = 0;

function increase() {
    count++;
}

- Can modify external state
- Can have side effects
- Output may depend on external state
*/


// ==========================================================
// QUICK REVISION
// ==========================================================

/*
FUNCTION DECLARATION
------------------------------------------------------------

function greet() {
    console.log("Hello");
}

- Hoisted
- Can be called before declaration


FUNCTION EXPRESSION
------------------------------------------------------------

const greet = function () {
    console.log("Hello");
};

- Function stored in a variable
- Not callable before initialization


ARROW FUNCTION
------------------------------------------------------------

const add = (a, b) => a + b;

- Short syntax
- No own `this`
- No own `arguments`
- No prototype
- Cannot be used as a constructor


PARAMETERS vs ARGUMENTS
------------------------------------------------------------

function add(a, b) {
             ↑  ↑
         parameters
}

add(10, 20);
    ↑   ↑
  arguments


DEFAULT PARAMETERS
------------------------------------------------------------

function greet(name = "Guest") {
    ...
}

Used when argument is missing or undefined.


REST PARAMETERS
------------------------------------------------------------

function sum(...numbers) {
    ...
}

- Collects multiple arguments
- Creates an array
- Must be the last parameter


RETURN
------------------------------------------------------------

return value;

- Sends value back to caller
- Stops function execution


CALLBACK
------------------------------------------------------------

A function passed to another function.

example:

setTimeout(() => {
    console.log("Hello");
}, 1000);


HIGHER-ORDER FUNCTION
------------------------------------------------------------

A function that:
- Accepts a function
OR
- Returns a function
OR
- Does both


PURE FUNCTION
------------------------------------------------------------

Same input -> Same output
No side effects
Doesn't modify external state


IMPURE FUNCTION
------------------------------------------------------------

May:
- Modify external state
- Depend on external state
- Produce side effects
- Produce different results for same input
*/