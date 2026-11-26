
/*
=========================================================
                 JAVASCRIPT - MODULES
=========================================================


1. MODULES
---------------------------------------------------------

A module is a separate JavaScript file that contains
variables, functions, classes or objects.

Modules help divide a large application into
smaller, reusable and manageable files.

Each module can export its functionality and
allow other files to import and use it.

Advantages:

1. Code reusability.
2. Better code organization.
3. Easier maintenance.
4. Avoids global scope pollution.
5. Supports separation of concerns.

Example folder structure:

project/
|
|-- index.html
|-- main.js
|-- math.js
|-- user.js

math.js:
*/

export function add(a, b) {
    return a + b;
}

/*
main.js:
*/

// import { add } from "./math.js";

// console.log(add(10, 20)); // 30

/*
IMPORTANT:

JavaScript modules use import and export statements
to share functionality between files.


2. EXPORT
---------------------------------------------------------

The export keyword is used to make variables,
functions, classes or objects available to other modules.

There are two main types of exports:

1. Named exports.
2. Default exports.

A module can have multiple named exports but
only ONE default export.


3. NAMED EXPORTS
---------------------------------------------------------

Named exports allow us to export multiple values
from a single module.

They are imported using the exact exported names,
unless aliases are used.

Example:

math.js:
*/

export const PI = 3.14;

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export class Calculator {
    multiply(a, b) {
        return a * b;
    }
}

/*
main.js:
*/

// Importing named exports

// import { PI, add, subtract, Calculator } from "./math.js";

// console.log(PI);         // 3.14
// console.log(add(5, 3));  // 8
// console.log(subtract(5, 3)); // 2

/*
NAMED EXPORT ALIAS:

We can rename an imported value using as.
*/

// import { add as addition } from "./math.js";

// console.log(addition(10, 5)); // 15

/*
IMPORTING ALL NAMED EXPORTS:

We can import all named exports using * as.
*/

// import * as MathUtils from "./math.js";

// console.log(MathUtils.PI);
// console.log(MathUtils.add(10, 20));

/*
IMPORTANT:

1. Named exports use curly braces during import.
2. Import names must match exported names unless aliased.
3. A module can have multiple named exports.
4. Named exports can be imported individually.


4. DEFAULT EXPORTS
---------------------------------------------------------

A default export allows a module to export one
main value as its default functionality.

A module can have only ONE default export.

Example:

greeting.js:
*/

function greet(name) {
    return "Hello " + name;
}

export default greet;

/*
main.js:
*/

// Importing a default export

// import greet from "./greeting.js";

// console.log(greet("Rahul")); // Hello Rahul

/*
IMPORTANT:

1. Default exports do not require curly braces.
2. The imported name can be changed freely.
3. Only one default export is allowed per module.

Example:
*/

// import sayHello from "./greeting.js";

// Both greet and sayHello can refer to the same
// default exported function.

/*
COMBINING NAMED AND DEFAULT EXPORTS:

math.js:
*/

// export const PI = 3.14;

// export function add(a, b) {
//     return a + b;
// }

// export default function multiply(a, b) {
//     return a * b;
// }

/*
main.js:
*/

// import multiply, { PI, add } from "./math.js";

// console.log(multiply(2, 3)); // 6
// console.log(PI);              // 3.14
// console.log(add(2, 3));       // 5


5. IMPORT
---------------------------------------------------------

The import keyword is used to access functionality
exported from another JavaScript module.

There are different ways to import values.

A. Named import
*/

import { add } from "./math.js";

// console.log(add(5, 5)); // 10

/*
B. Default import
*/

// import greet from "./greeting.js";

/*
C. Import with alias
*/

// import { add as sum } from "./math.js";

/*
D. Import everything
*/

// import * as MathUtils from "./math.js";

/*
E. Importing both default and named exports
*/

// import multiply, { PI, add } from "./math.js";

/*
F. Side-effect import

Imports and executes a module without importing
any specific value.

Example:
*/

// import "./styles.js";

/*
G. Dynamic import

Dynamic import loads a module when required.

It returns a Promise.

Syntax:
*/

// import("./math.js")
//     .then((module) => {
//         console.log(module.add(10, 20));
//     })
//     .catch((error) => {
//         console.log(error);
//     });

/*
Using async/await:
*/

// async function loadModule() {
//     const module = await import("./math.js");

//     console.log(module.add(10, 20));
// }

// loadModule();

/*
IMPORTANT:

Static imports are generally written at the top
level of a module.

Dynamic imports can be used conditionally
and inside functions.

Static imports are resolved before the module runs.
Dynamic imports return a Promise.


6. MODULE SCOPE
---------------------------------------------------------

Every JavaScript module has its own scope.

Variables and functions declared inside one module
are not automatically accessible in another module.

They must be explicitly exported and imported.

Example:

file1.js:
*/

const secret = "Private Data";

function display() {
    console.log("Hello from file1");
}

// export { display };

/*
file2.js:
*/

// import { display } from "./file1.js";

// display(); // Hello from file1

// console.log(secret);
// ReferenceError: secret is not defined

/*
Explanation:

1. secret belongs to file1.js module scope.
2. It is not automatically available in file2.js.
3. display() can be accessed because it is exported.
4. Modules prevent unnecessary global variables.

IMPORTANT MODULE FEATURES:

1. Modules use strict mode automatically.
2. Each module has its own scope.
3. Top-level variables are not global variables.
4. Modules are executed only once per module instance
   and their exports are shared by importers.
5. Modules support import and export.


7. COMMONJS VS ES MODULES
---------------------------------------------------------

JavaScript has two popular module systems:

1. CommonJS (CJS).
2. ECMAScript Modules (ESM).

A. COMMONJS

CommonJS is traditionally used in Node.js.

It uses:

require()
module.exports
exports

Example:

math.js:
*/

function addNumbers(a, b) {
    return a + b;
}

function subtractNumbers(a, b) {
    return a - b;
}

module.exports = {
    addNumbers,
    subtractNumbers
};

/*
main.js:
*/

// const math = require("./math.js");

// console.log(math.addNumbers(10, 20)); // 30

/*
We can also import using destructuring:
*/

// const { addNumbers } = require("./math.js");

// console.log(addNumbers(5, 5)); // 10


// B. ES MODULES (ESM)

/*
ES Modules are the official JavaScript module system.

They use:

export
import

math.js:
*/

// export function add(a, b) {
//     return a + b;
// }

/*
main.js:
*/

// import { add } from "./math.js";

// console.log(add(10, 20)); // 30


/*
COMMONJS VS ES MODULES:

---------------------------------------------------------

CommonJS:
- Uses require() to import.
- Uses module.exports to export.
- Traditionally used in Node.js.
- Loads modules synchronously.
- Supports dynamic require() calls.

ES Modules:
- Uses import to import.
- Uses export to export.
- Used in modern browsers and Node.js.
- Supports static analysis.
- Supports static and dynamic imports.
- Static imports are resolved before execution.
- Supports top-level await in compatible environments.

---------------------------------------------------------

HOW TO USE ES MODULES:

In HTML:

<script type="module" src="main.js"></script>

In Node.js:

Option 1:
Use .mjs file extension.

Option 2:
Set the following in package.json:

{
    "type": "module"
}

This allows .js files in that package scope
to be treated as ES modules.

IMPORTANT:

CommonJS and ES Modules are different module systems.

Do not directly mix their import/export syntax
without understanding the interoperability rules.


=========================================================
                 QUICK REVISION
=========================================================

MODULE:
A separate JavaScript file containing reusable code.

EXPORT:
Makes functionality available to other modules.

IMPORT:
Accesses functionality exported by another module.

NAMED EXPORT:
Allows multiple exports using specific names.

DEFAULT EXPORT:
Allows one default export per module.

MODULE SCOPE:
Each module has its own independent scope.

COMMONJS:
Uses require() and module.exports.

ES MODULES:
Uses import and export.

DYNAMIC IMPORT:
Loads a module when needed and returns a Promise.

STATIC IMPORT:
Imports modules using import declarations.


=========================================================
                    END OF NOTES
=========================================================
*/
