
/*
=========================================================
             MODERN JAVASCRIPT (ES6+)
=========================================================

ES6 = ECMAScript 2015

Modern JavaScript introduced features such as:

1. let and const
2. Arrow functions
3. Template literals
4. Destructuring
5. Spread and Rest operators
6. Classes
7. Modules
8. Promises
9. Async / Await
10. Optional chaining
11. Nullish coalescing


=========================================================
1. LET AND CONST
=========================================================

Before ES6, var was commonly used to declare variables.

ES6 introduced let and const.

A. let

- Used to declare variables whose values can change.
- Block-scoped.
- Cannot be redeclared in the same scope.
- Can be reassigned.

*/

let age = 20;

age = 21;

console.log(age); // 21


/*
B. const

- Used to declare variables that cannot be reassigned.
- Block-scoped.
- Must be initialized during declaration.
- Cannot be redeclared or reassigned in the same scope.

*/

const name = "Rahul";

// name = "Aman"; // Error

/*
IMPORTANT:

const does not make objects or arrays completely immutable.
It prevents reassignment of the variable, but their contents
can still be modified.
*/

const student = {
    name: "Rahul",
    age: 20
};

student.age = 21; // Allowed

console.log(student.age); // 21


/*
C. var

- Function-scoped.
- Can be redeclared.
- Can be reassigned.
- Hoisted and initialized with undefined.

*/

var city = "Delhi";

var city = "Mumbai"; // Allowed

/*
DIFFERENCE:

var:
- Function-scoped
- Can be redeclared
- Can be reassigned

let:
- Block-scoped
- Cannot be redeclared in same scope
- Can be reassigned

const:
- Block-scoped
- Cannot be redeclared in same scope
- Cannot be reassigned

BEST PRACTICE:

Use const by default.
Use let when reassignment is required.
Avoid var in modern JavaScript.


=========================================================
2. ARROW FUNCTIONS
=========================================================

Arrow functions provide a shorter syntax for writing functions.

TRADITIONAL FUNCTION:
*/

function add(a, b) {
    return a + b;
}

/*
ARROW FUNCTION:
*/

const addNumbers = (a, b) => {
    return a + b;
};

console.log(addNumbers(10, 20)); // 30

/*
SHORTER SYNTAX:

If there is only one expression, we can omit
the curly braces and return keyword.
*/

const multiply = (a, b) => a * b;

console.log(multiply(5, 4)); // 20

/*
If there is only one parameter, parentheses are optional.
*/

const square = num => num * num;

console.log(square(5)); // 25

/*
If there are no parameters, use empty parentheses.
*/

const greet = () => "Hello!";

console.log(greet());


/*
IMPORTANT DIFFERENCE:

Arrow functions do not have their own 'this'.

They inherit 'this' from their surrounding lexical scope.

They also do not have their own arguments object.

Arrow functions cannot be used as constructors with new.

USE CASES:

- Array methods
- Callbacks
- Short functions
- Event handling in suitable situations

Example:
*/

const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]


/*
=========================================================
3. TEMPLATE LITERALS
=========================================================

Template literals were introduced in ES6.

They use backticks (`) instead of single or double quotes.

Advantages:

1. Variable interpolation
2. Multi-line strings
3. Easier string formatting

A. VARIABLE INTERPOLATION
*/

const studentName = "Rahul";
const studentAge = 21;

const message = `My name is ${studentName} and I am ${studentAge} years old.`;

console.log(message);

/*
${} is used to insert variables or expressions
inside a template literal.

B. EXPRESSIONS
*/

const a = 10;
const b = 20;

console.log(`Sum = ${a + b}`); // Sum = 30

/*
C. MULTI-LINE STRINGS
*/

const paragraph = `
This is line one.
This is line two.
This is line three.
`;

console.log(paragraph);

/*
=========================================================
4. DESTRUCTURING
=========================================================

Destructuring allows us to extract values from arrays
or properties from objects and store them in variables.

A. ARRAY DESTRUCTURING
*/

const colors = ["Red", "Green", "Blue"];

const [first, second, third] = colors;

console.log(first);  // Red
console.log(second); // Green
console.log(third);  // Blue

/*
SKIPPING ELEMENTS:
*/

const values = [10, 20, 30];

const [x, , z] = values;

console.log(x); // 10
console.log(z); // 30

/*
DEFAULT VALUES:
*/

const [p = 100, q = 200] = [50];

console.log(p); // 50
console.log(q); // 200


/*
B. OBJECT DESTRUCTURING
*/

const person = {
    name: "Rahul",
    age: 21,
    city: "Delhi"
};

const { name: personName, age: personAge, city } = person;

console.log(personName);
console.log(personAge);
console.log(city);

/*
NOTE:

When extracting object properties, variable names normally
match property names.

We used aliases above because 'name' and 'age' were already
declared earlier in this file.

DEFAULT VALUES:
*/

const employee = {
    employeeName: "Aman"
};

const { employeeName, salary = 30000 } = employee;

console.log(employeeName);
console.log(salary); // 30000

/*
C. FUNCTION PARAMETER DESTRUCTURING

Useful when a function receives an object.
*/

function displayStudent({ name, age }) {
    console.log(name);
    console.log(age);
}

displayStudent({
    name: "Riya",
    age: 20
});


/*
=========================================================
5. SPREAD AND REST OPERATORS
=========================================================

Both use three dots (...), but their purposes differ.

A. SPREAD OPERATOR

Spread expands elements of an array or properties
of an object.

1. COPYING ARRAYS
*/

const original = [1, 2, 3];

const copied = [...original];

console.log(copied);

/*
2. MERGING ARRAYS
*/

const arr1 = [1, 2];
const arr2 = [3, 4];

const merged = [...arr1, ...arr2];

console.log(merged); // [1, 2, 3, 4]

/*
3. ADDING ELEMENTS
*/

const updated = [0, ...original, 4];

console.log(updated); // [0, 1, 2, 3, 4]

/*
4. COPYING OBJECTS
*/

const user = {
    name: "Rahul",
    age: 21
};

const copiedUser = { ...user };

console.log(copiedUser);

/*
5. MERGING OBJECTS
*/

const details = {
    city: "Delhi"
};

const fullDetails = {
    ...user,
    ...details
};

console.log(fullDetails);


/*
IMPORTANT:

Spread creates a shallow copy.

Nested objects and arrays are still shared references.
*/


/*
B. REST OPERATOR

Rest collects multiple values into a single array
or object.

1. REST PARAMETERS
*/

function sum(...numbers) {

    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log(sum(10, 20, 30)); // 60

/*
Here ...numbers collects all arguments into an array.

2. REST IN ARRAY DESTRUCTURING
*/

const marks = [80, 90, 70, 85];

const [firstMark, ...remainingMarks] = marks;

console.log(firstMark);      // 80
console.log(remainingMarks); // [90, 70, 85]

/*
3. REST IN OBJECT DESTRUCTURING
*/

const userDetails = {
    username: "Rahul",
    age: 21,
    city: "Delhi"
};

const { username, ...otherDetails } = userDetails;

console.log(username);
console.log(otherDetails);


/*
SPREAD VS REST:

Spread:
Expands values.

Rest:
Collects values.

Example:

const arr = [1, 2, 3];
const copy = [...arr];  // Spread

function add(...nums) {} // Rest


=========================================================
6. CLASSES
=========================================================

Classes were introduced in ES6.

They provide a cleaner syntax for creating objects
and implementing object-oriented programming.

A class acts as a blueprint for creating objects.

EXAMPLE:
*/

class Student {

    // Constructor initializes object properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Instance method
    display() {
        console.log(this.name, this.age);
    }
}

// Creating an object
const s1 = new Student("Rahul", 21);

s1.display();

/*
IMPORTANT TERMS:

class:
Defines a class.

constructor:
Special method called automatically when an object
is created using new.

this:
Refers to the current object in an instance method.

new:
Creates an object using a constructor.

INHERITANCE:

One class can inherit properties and methods
from another class using extends.
*/

class Animal {

    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is eating");
    }
}

class Dog extends Animal {

    bark() {
        console.log(this.name + " is barking");
    }
}

const dog1 = new Dog("Tommy");

dog1.eat();
dog1.bark();

/*
super():

Used to call the parent class constructor or methods.

If a child class defines a constructor, it must call
super() before accessing this.
*/

class Person {

    constructor(name) {
        this.name = name;
    }
}

class Teacher extends Person {

    constructor(name, subject) {
        super(name);

        this.subject = subject;
    }
}

const teacher1 = new Teacher("Riya", "JavaScript");

console.log(teacher1.name);
console.log(teacher1.subject);

/*
IMPORTANT:

- Classes support inheritance.
- Classes support encapsulation using private fields (#).
- Class methods are stored on the prototype.
- Class declarations are not usable before initialization.
- JavaScript classes use prototype-based inheritance internally.
*/


/*
=========================================================
7. MODULES
=========================================================

WHAT ARE MODULES?

Modules allow us to divide JavaScript code into
separate files.

Advantages:

1. Code reusability
2. Better organization
3. Easier maintenance
4. Avoids unnecessary global variables
5. Helps manage large projects

There are two main concepts:

1. export
2. import


A. NAMED EXPORT

File: math.js

*/

export const PI = 3.14;

export function add(a, b) {
    return a + b;
}

/*
B. NAMED IMPORT

File: app.js

*/

import { PI, add } from "./math.js";

console.log(PI);
console.log(add(10, 20));

/*
C. DEFAULT EXPORT

A module can have one default export.

File: greeting.js

*/

export default function greet(name) {
    return `Hello ${name}`;
}

/*
D. DEFAULT IMPORT

File: app.js

*/

import greet from "./greeting.js";

console.log(greet("Rahul"));

/*
E. IMPORT WITH ALIAS

*/

import { add as sumNumbers } from "./math.js";

console.log(sumNumbers(5, 10));

/*
IMPORTANT:

Named exports:
- Can have multiple exports.
- Imported using the exported name.
- Can be renamed using 'as'.

Default export:
- Only one default export per module.
- Can be imported using any local name.

To use ES modules in a browser, HTML can include:

<script type="module" src="app.js"></script>

In Node.js, ES modules can be enabled using
the appropriate module configuration, such as
"type": "module" in package.json.


=========================================================
8. PROMISES
=========================================================

WHAT IS A PROMISE?

A Promise represents the eventual success or failure
of an asynchronous operation.

A Promise has three states:

1. Pending
   Initial state. Operation is still running.

2. Fulfilled
   Operation completed successfully.

3. Rejected
   Operation failed.

A Promise is settled when it is either fulfilled or rejected.

CREATING A PROMISE:
*/

const myPromise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }
});

/*
resolve():
Marks the Promise as fulfilled.

reject():
Marks the Promise as rejected.

HANDLING A PROMISE:
*/

myPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Operation completed");
    });

/*
PROMISE METHODS:

1. then()
   Handles fulfilled results.

2. catch()
   Handles rejection.

3. finally()
   Executes after the Promise settles.

4. Promise.all()
   Waits for all Promises to fulfill.
   Rejects if any input Promise rejects.

5. Promise.race()
   Settles with the first Promise that settles.

6. Promise.allSettled()
   Waits for all Promises to settle and gives
   the outcome of each one.

7. Promise.any()
   Fulfills with the first fulfilled Promise.
   Rejects if all input Promises reject.

EXAMPLE: PROMISE.ALL
*/

const promise1 = Promise.resolve("First");
const promise2 = Promise.resolve("Second");

Promise.all([promise1, promise2])
    .then(results => console.log(results));

/*
OUTPUT:

["First", "Second"]

NOTE:

Promise.all() is useful when multiple independent
asynchronous operations must all succeed.


=========================================================
9. ASYNC / AWAIT
=========================================================

async and await provide a cleaner way to work
with Promises.

ASYNC:

- Used before a function.
- Makes the function return a Promise.
- A normal returned value becomes a fulfilled Promise.

AWAIT:

- Used inside async functions (or at top level
  in supported ES modules).
- Pauses execution of that async function until
  the Promise settles.
- Does not block the entire JavaScript thread.

EXAMPLE:
*/

async function getData() {

    return "Data received";
}

getData().then(result => console.log(result));

/*
AWAIT EXAMPLE:
*/

function fetchData() {

    return new Promise(resolve => {

        setTimeout(() => {
            resolve("Data loaded");
        }, 2000);

    });
}

async function displayData() {

    const result = await fetchData();

    console.log(result);
}

displayData();

/*
ERROR HANDLING WITH TRY/CATCH:
*/

async function getUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log("Error:", error.message);

    }
}

// getUsers();

/*
PROMISES VS ASYNC/AWAIT:

Promises:
Use .then(), .catch(), and .finally().

Async/Await:
Use async and await with try/catch.

Both are used to handle asynchronous operations.
Async/await is built on top of Promises.


=========================================================
10. OPTIONAL CHAINING (?.)
=========================================================

Optional chaining allows us to safely access
nested object properties.

It prevents errors when a value is null or undefined.

WITHOUT OPTIONAL CHAINING:
*/

const personDetails = {
    name: "Rahul"
};

// This can cause an error if address is undefined.
// console.log(personDetails.address.city);

/*
WITH OPTIONAL CHAINING:
*/

console.log(personDetails.address?.city);

// Output: undefined

/*
EXAMPLE WITH NESTED OBJECTS:
*/

const studentInfo = {
    name: "Riya",

    address: {
        city: "Delhi"
    }
};

console.log(studentInfo.address?.city); // Delhi

/*
OPTIONAL CHAINING WITH FUNCTIONS:
*/

const userObject = {};

userObject.greet?.();

/*
If greet() exists, it is called.
If it does not exist, undefined is returned
instead of throwing an error.

OPTIONAL CHAINING WITH ARRAYS:
*/

const users = [
    {
        name: "Rahul"
    }
];

console.log(users[0]?.name); // Rahul

/*
IMPORTANT:

?. only prevents errors caused by null or undefined
at the optional access point.

It does not make every possible operation safe.
*/


/*
=========================================================
11. NULLISH COALESCING (??)
=========================================================

Nullish coalescing provides a default value
when the left side is null or undefined.

SYNTAX:

value ?? defaultValue

EXAMPLE:
*/

let userAge = null;

let finalAge = userAge ?? 18;

console.log(finalAge); // 18

/*
If the left side is:
null      -> uses right side
undefined -> uses right side

Otherwise, it uses the left side.

IMPORTANT DIFFERENCE:

NULLISH COALESCING (??) VS OR (||)

|| considers all falsy values:

false
0
""
null
undefined
NaN

?? considers only:

null
undefined
*/

const score = 0;

console.log(score || 100); // 100

console.log(score ?? 100); // 0

/*
Another example:
*/

const usernameValue = "";

console.log(usernameValue || "Guest"); // Guest

console.log(usernameValue ?? "Guest"); // ""


/*
=========================================================
             QUICK REVISION SUMMARY
=========================================================

1. let
   Block-scoped variable that can be reassigned.

2. const
   Block-scoped variable that cannot be reassigned.

3. Arrow functions
   Shorter function syntax with lexical this.

4. Template literals
   Use backticks and ${} for interpolation.

5. Destructuring
   Extracts values from arrays and objects.

6. Spread operator
   Expands array elements or object properties.

7. Rest operator
   Collects multiple values into an array or object.

8. Classes
   Blueprint for creating objects and implementing OOP.

9. Modules
   Divide code into separate files using import/export.

10. Promises
    Handle asynchronous operations.

11. Async/Await
    Cleaner syntax for working with Promises.

12. Optional chaining
    Safely accesses nested properties using ?.

13. Nullish coalescing
    Provides a default only for null or undefined.


=========================================================
                    END OF NOTES
=========================================================
*/
