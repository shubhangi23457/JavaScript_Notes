/*
============================================================
4. SCOPE & EXECUTION
============================================================

Scope determines WHERE a variable can be accessed.

Execution concepts explain HOW JavaScript creates and
executes code.
*/


// ==========================================================
// 4.1 GLOBAL SCOPE
// ==========================================================

/*
A variable declared outside any function or block is in
the global scope.

It can generally be accessed from anywhere in the script.
*/

let globalName = "John";

function showName() {
    console.log(globalName);
}

showName(); // John


/*
Global variables should be used carefully because they can
be accessed and modified from many parts of the application.
*/


// ==========================================================
// 4.2 FUNCTION SCOPE
// ==========================================================

/*
Variables declared with `var` are function-scoped.

They are accessible throughout the function in which
they are declared.
*/

function testFunctionScope() {

    var message = "Hello";

    console.log(message); // Works

}

testFunctionScope();

// console.log(message); // Error


/*
`let` and `const` are NOT function-scoped only.
They are block-scoped as well.
*/


// ==========================================================
// 4.3 BLOCK SCOPE
// ==========================================================

/*
A block is code inside:

{
    ...
}

Examples:
- if
- for
- while
- switch
- standalone blocks

let and const are block-scoped.
*/

if (true) {

    let blockVariable = "Inside block";
    const blockConstant = 100;

    console.log(blockVariable);
    console.log(blockConstant);

}

// console.log(blockVariable); // Error
// console.log(blockConstant); // Error


/*
`var` does NOT respect block scope.
*/

if (true) {

    var varVariable = "Hello";

}

console.log(varVariable); // Works


/*
IMPORTANT:

var   -> function scoped
let   -> block scoped
const -> block scoped
*/


// ==========================================================
// 4.4 LEXICAL SCOPE
// ==========================================================

/*
Lexical scope means that the scope of a variable is
determined by WHERE the code is written.

A nested function can access variables from its
outer scope.
*/

function outer() {

    let outerVariable = "Outer";

    function inner() {

        console.log(outerVariable);

    }

    inner();
}

outer(); // Outer


/*
The inner function has access to outerVariable because
it is physically written inside outer().
*/


// ---------- Nested lexical scope ----------

let globalValue = "Global";

function outerFunction() {

    let outerValue = "Outer";

    function middleFunction() {

        let middleValue = "Middle";

        function innerFunction() {

            let innerValue = "Inner";

            console.log(globalValue);
            console.log(outerValue);
            console.log(middleValue);
            console.log(innerValue);

        }

        innerFunction();
    }

    middleFunction();
}

outerFunction();

/*
innerFunction can access:

innerValue
middleValue
outerValue
globalValue
*/


// ==========================================================
// 4.5 SCOPE CHAIN
// ==========================================================

/*
When JavaScript looks for a variable, it searches:

1. Current/local scope
2. Outer scope
3. Further outer scopes
4. Global scope

This is called the SCOPE CHAIN.
*/

let a = "Global";

function outerScope() {

    let b = "Outer";

    function innerScope() {

        let c = "Inner";

        console.log(c); // Found in current scope
        console.log(b); // Found in outer scope
        console.log(a); // Found in global scope

    }

    innerScope();
}

outerScope();


/*
If JavaScript cannot find the variable anywhere in the
scope chain, it throws a ReferenceError.

console.log(x);
// ReferenceError
*/


// ---------- Variable Shadowing ----------

let value = "Global";

function shadowExample() {

    let value = "Local";

    console.log(value); // Local

}

shadowExample();

console.log(value); // Global

/*
The local variable shadows the global variable.
*/


// ==========================================================
// 4.6 EXECUTION CONTEXT
// ==========================================================

/*
An Execution Context is the environment in which JavaScript
runs code.

Main types:

1. Global Execution Context
2. Function Execution Context
3. Eval Execution Context (rarely relevant)


When JavaScript runs a script:

1. Global execution context is created.
2. Variables/functions are registered.
3. Code is executed.
4. Function calls create new execution contexts.
*/


// ---------- Example ----------

let x = 10;

function add(a, b) {

    let result = a + b;

    return result;

}

add(5, 10);


/*
Conceptually:

GLOBAL EXECUTION CONTEXT
    |
    |-- x
    |-- add()
    |
    ↓
FUNCTION EXECUTION CONTEXT
    |
    |-- a
    |-- b
    |-- result
*/


/*
Each function call gets its own execution context.

Example:

add(1, 2);
add(10, 20);

Each call creates a separate function execution context.
*/


// ==========================================================
// 4.7 HOISTING
// ==========================================================

/*
Hoisting is JavaScript's behavior of processing declarations
before executing the code.

Different declarations behave differently.
*/


// ---------- Function declaration hoisting ----------

sayHello();

function sayHello() {
    console.log("Hello");
}

/*
This works because function declarations are hoisted.
*/


// ---------- var hoisting ----------

console.log(number);

var number = 10;

/*
Output:

undefined

Conceptually:

var number;
console.log(number);
number = 10;
*/


// ---------- let / const hoisting ----------

/*
let and const are also hoisted internally, but they cannot
be accessed before their declaration.

This leads to the Temporal Dead Zone.
*/

// console.log(age); // ReferenceError
let age = 25;


// ==========================================================
// 4.8 TEMPORAL DEAD ZONE (TDZ)
// ==========================================================

/*
The Temporal Dead Zone is the period between entering a
scope and reaching the declaration of a `let` or `const`
variable.

During this period, accessing the variable causes
ReferenceError.
*/


// console.log(name); // ReferenceError

let name = "John";


/*
Example:

{
    // TDZ starts

    console.log(value); // ReferenceError

    let value = 10;

    // TDZ ends
}
*/


/*
IMPORTANT:

var:
    Hoisted + initialized with undefined

let:
    Hoisted but uninitialized
    Access before declaration -> ReferenceError

const:
    Hoisted but uninitialized
    Access before declaration -> ReferenceError
*/


// ---------- TDZ with const ----------

// console.log(country); // ReferenceError

const country = "India";


// ==========================================================
// 4.9 `this` KEYWORD
// ==========================================================

/*
`this` refers to a value determined by HOW a function
is called.

Its behavior depends on the context.
*/


// ---------- this in an object method ----------

const person = {

    name: "John",

    greet: function () {
        console.log(this.name);
    }

};

person.greet(); // John

/*
Here:

this -> person object
*/


// ---------- this with another object ----------

const user = {

    name: "Alex",

    showName() {
        console.log(this.name);
    }

};

user.showName(); // Alex


// ---------- this in a regular function ----------

function showThis() {

    console.log(this);

}

showThis();

/*
In strict mode:

this -> undefined

In non-strict browser scripts:

this may refer to the global object.

The exact behavior depends on how the function is executed.
*/


// ---------- this in arrow functions ----------

/*
Arrow functions DO NOT have their own `this`.

They inherit `this` from their surrounding lexical scope.
*/

const person2 = {

    name: "John",

    regularFunction: function () {

        console.log(this.name);

    },

    arrowFunction: () => {

        console.log(this.name);

    }

};

person2.regularFunction(); // John

person2.arrowFunction(); // Usually undefined


/*
IMPORTANT:

Regular function:
    `this` depends on how the function is called.

Arrow function:
    `this` is inherited from the surrounding scope.
*/


// ==========================================================
// this WITH call(), apply(), bind()
// ==========================================================

/*
These methods can explicitly set `this` for regular
functions.
*/

function introduce(city) {

    console.log(this.name);
    console.log(city);

}

const person3 = {
    name: "John"
};


// ---------- call() ----------

introduce.call(person3, "Delhi");


// ---------- apply() ----------

introduce.apply(person3, ["Mumbai"]);


// ---------- bind() ----------

const boundFunction = introduce.bind(person3);

boundFunction("Pune");


/*
call()
    -> Calls the function immediately.
    -> Arguments passed individually.

apply()
    -> Calls the function immediately.
    -> Arguments passed as an array.

bind()
    -> Returns a new function with `this` permanently
       associated with the provided object.
*/


// ==========================================================
// QUICK REVISION
// ==========================================================

/*
GLOBAL SCOPE
------------------------------------------------------------
Variables declared outside functions/blocks.

Accessible from multiple parts of the program.


FUNCTION SCOPE
------------------------------------------------------------
`var` is function-scoped.

function test() {
    var x = 10;
}

x cannot be accessed outside test().


BLOCK SCOPE
------------------------------------------------------------
`let` and `const` are block-scoped.

if (true) {
    let x = 10;
}

x cannot be accessed outside the block.


LEXICAL SCOPE
------------------------------------------------------------
Scope is determined by WHERE the code is written.

Inner functions can access variables from outer scopes.


SCOPE CHAIN
------------------------------------------------------------
Variable lookup happens from:

Current scope
    ↓
Outer scope
    ↓
Further outer scope
    ↓
Global scope


EXECUTION CONTEXT
------------------------------------------------------------
Environment created when JavaScript executes code.

Main types:

Global Execution Context
Function Execution Context


HOISTING
------------------------------------------------------------
Declarations are processed before code execution.

var:
    -> initialized as undefined

function declaration:
    -> can generally be called before declaration

let / const:
    -> hoisted but remain uninitialized


TEMPORAL DEAD ZONE
------------------------------------------------------------
Period between entering a scope and reaching a
let/const declaration.

Accessing the variable during TDZ causes ReferenceError.


this
------------------------------------------------------------
`this` depends on how a function is called.

Object method:
    this -> object

Regular function:
    depends on invocation/context

Arrow function:
    no own `this`
    inherits `this` from surrounding scope


var vs let vs const
------------------------------------------------------------

             var          let          const

Scope        Function     Block        Block
Redeclare    Yes          No           No
Reassign     Yes          Yes          No
TDZ          No           Yes          Yes
Hoisted      Yes          Yes          Yes
Initialized  undefined    No           No
*/