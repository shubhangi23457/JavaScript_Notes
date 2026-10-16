/*
============================================================
1. JAVASCRIPT FUNDAMENTALS
============================================================
*/


// ==========================================================
// 1.1 VARIABLES: var, let, const
// ==========================================================

/*
Variables are used to store data.

var
- Function-scoped
- Can be redeclared
- Can be reassigned
- Hoisted and initialized with undefined
*/

var name = "John";
var name = "Alex"; // Allowed
name = "Sam";      // Allowed

/*
let
- Block-scoped
- Cannot be redeclared in the same scope
- Can be reassigned
*/

let age = 25;
// let age = 30;  // Error
age = 30;         // Allowed

/*
const
- Block-scoped
- Cannot be redeclared
- Cannot be reassigned
- Must be initialized when declared
*/

const country = "India";
// country = "USA"; // Error


/*
IMPORTANT:

Prefer:
    const -> when value will not be reassigned
    let   -> when value will be reassigned

Avoid:
    var   -> in modern JavaScript
*/


// ==========================================================
// 1.2 DATA TYPES
// ==========================================================

/*
JavaScript has two broad categories:

1. Primitive Data Types
2. Non-Primitive / Reference Data Types
*/


// ---------- Primitive Data Types ----------

/*
1. String
2. Number
3. BigInt
4. Boolean
5. Undefined
6. Null
7. Symbol
*/

let userName = "Shubhangi";    // String
let marks = 95;                // Number
let bigNumber = 123456789n;    // BigInt
let isLoggedIn = true;         // Boolean
let result;                    // Undefined
let data = null;               // Null
let id = Symbol("id");         // Symbol


// ---------- Reference / Non-Primitive Data Types ----------

/*
1. Object
2. Array
3. Function

Arrays and functions are technically objects in JavaScript.
*/

let person = {
    name: "John",
    age: 25
};

let numbers = [10, 20, 30];

function greet() {
    console.log("Hello");
}


// ---------- typeof Operator ----------

console.log(typeof "Hello");       // "string"
console.log(typeof 100);           // "number"
console.log(typeof true);          // "boolean"
console.log(typeof undefined);     // "undefined"
console.log(typeof 123n);          // "bigint"
console.log(typeof Symbol("id"));  // "symbol"

console.log(typeof {});            // "object"
console.log(typeof []);            // "object"
console.log(typeof function() {}); // "function"

/*
SPECIAL CASE:

typeof null === "object"

This is a historical behavior/bug in JavaScript.
*/

console.log(typeof null); // "object"


// ==========================================================
// 1.3 PRIMITIVE vs REFERENCE TYPES
// ==========================================================

/*
PRIMITIVE TYPES

- Store the actual value
- Immutable
- Copied by value

Examples:
String, Number, Boolean, Undefined, Null, BigInt, Symbol
*/

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

/*
Changing b does not affect a because the value was copied.
*/


// ---------- Reference Types ----------

/*
Objects, arrays and functions are reference types.

Variables hold a reference to the object in memory.
*/

let obj1 = {
    name: "John"
};

let obj2 = obj1;

obj2.name = "Alex";

console.log(obj1.name); // "Alex"
console.log(obj2.name); // "Alex"

/*
Both variables refer to the same object.

Changing the object through obj2 also affects obj1.
*/


// ---------- Array Example ----------

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]


// ---------- Copying an Object ----------

/*
Spread operator creates a shallow copy.
*/

let original = {
    name: "John",
    age: 25
};

let copy = { ...original };

copy.name = "Alex";

console.log(original.name); // "John"
console.log(copy.name);     // "Alex"


// ==========================================================
// 1.4 TYPE COERCION
// ==========================================================

/*
Type coercion means JavaScript automatically converts
one data type into another during an operation.
*/


// ---------- String Coercion ----------

console.log("5" + 2); // "52"

/*
When + is used with a string, JavaScript converts the
other value into a string.
*/


// ---------- Number Coercion ----------

console.log("5" - 2); // 3
console.log("5" * 2); // 10
console.log("10" / 2); // 5

/*
-, *, / usually convert strings into numbers.
*/


// ---------- Boolean Coercion ----------

console.log(Boolean(1));      // true
console.log(Boolean(0));      // false
console.log(Boolean("hello")); // true
console.log(Boolean(""));      // false

/*
Falsy values:

false
0
-0
0n
""
null
undefined
NaN

Almost everything else is truthy.
*/


// ---------- Implicit Coercion ----------

let value = "10";

console.log(value + 5); // "105"
console.log(value - 5); // 5


// ==========================================================
// 1.5 TYPE CONVERSION
// ==========================================================

/*
Type conversion means explicitly converting a value
from one type to another.

Unlike coercion, we intentionally perform the conversion.
*/


// ---------- String() ----------

let num = 100;

console.log(String(num)); // "100"

console.log(String(true));  // "true"
console.log(String(null));  // "null"


// ---------- Number() ----------

console.log(Number("100"));   // 100
console.log(Number("10.5"));  // 10.5
console.log(Number("hello")); // NaN

console.log(Number(true));    // 1
console.log(Number(false));   // 0

console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN


// ---------- Boolean() ----------

console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean("hello")); // true
console.log(Boolean(""));      // false


// ---------- parseInt() ----------

console.log(parseInt("100"));    // 100
console.log(parseInt("100px"));  // 100
console.log(parseInt("10.50"));  // 10


// ---------- parseFloat() ----------

console.log(parseFloat("10.50"));   // 10.5
console.log(parseFloat("10.5px"));  // 10.5


// ---------- Unary + ----------

let stringNumber = "50";

console.log(+stringNumber); // 50


// ==========================================================
// 1.6 OPERATORS
// ==========================================================


// ---------- Arithmetic Operators ----------

let x = 10;
let y = 3;

console.log(x + y); // Addition
console.log(x - y); // Subtraction
console.log(x * y); // Multiplication
console.log(x / y); // Division
console.log(x % y); // Remainder
console.log(x ** y); // Exponentiation


// ---------- Assignment Operators ----------

let n = 10;

n += 5;  // n = n + 5
n -= 2;  // n = n - 2
n *= 2;  // n = n * 2
n /= 2;  // n = n / 2
n %= 3;  // n = n % 3


// ---------- Comparison Operators ----------

console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 >= 10); // true
console.log(10 <= 10); // true
console.log(10 == 10); // true
console.log(10 != 5);  // true


// ---------- Logical Operators ----------

/*
&&  AND
||  OR
!   NOT
*/

console.log(true && true);   // true
console.log(true && false);  // false

console.log(true || false);  // true
console.log(false || false); // false

console.log(!true);          // false
console.log(!false);         // true


// ---------- Increment / Decrement ----------

let count = 5;

count++;
console.log(count); // 6

count--;
console.log(count); // 5


// ---------- Ternary Operator ----------

let ageValue = 20;

let status = ageValue >= 18 ? "Adult" : "Minor";

console.log(status); // "Adult"


// ---------- Nullish Coalescing Operator ----------

/*
?? returns the right-hand value only when the left-hand
value is null or undefined.
*/

let username = null;

console.log(username ?? "Guest"); // "Guest"

let user = "";

console.log(user ?? "Guest"); // ""


/*
Difference:

|| checks for any falsy value.
?? checks only for null or undefined.
*/

console.log(0 || 100);  // 100
console.log(0 ?? 100);  // 0


// ---------- Optional Chaining ----------

let student = {
    name: "John",
    address: {
        city: "Delhi"
    }
};

console.log(student.address?.city); // "Delhi"

console.log(student.contact?.phone); // undefined


// ==========================================================
// 1.7 STRICT vs LOOSE EQUALITY
// ==========================================================

/*
==  -> Loose equality
=== -> Strict equality
*/


// ---------- Loose Equality (==) ----------

/*
== compares values after performing type coercion.
*/

console.log(5 == "5"); // true

console.log(true == 1); // true

console.log(false == 0); // true


// ---------- Strict Equality (===) ----------

/*
=== compares both:

1. Value
2. Data type

No type coercion is performed.
*/

console.log(5 === "5"); // false

console.log(5 === 5); // true

console.log(true === 1); // false


// ---------- Inequality ----------

console.log(5 != "5");  // false
console.log(5 !== "5"); // true


/*
IMPORTANT:

Prefer === and !== in modern JavaScript.

Use:

===  -> strict equality
!==  -> strict inequality

Avoid == and != unless you specifically understand
and want JavaScript's type coercion behavior.
*/


// ==========================================================
// QUICK REVISION
// ==========================================================

/*
VARIABLES
------------------------------------------------------------
var   -> function scoped, can redeclare, can reassign
let   -> block scoped, cannot redeclare, can reassign
const -> block scoped, cannot redeclare, cannot reassign


DATA TYPES
------------------------------------------------------------
Primitive:
String
Number
BigInt
Boolean
Undefined
Null
Symbol

Reference:
Object
Array
Function


PRIMITIVE vs REFERENCE
------------------------------------------------------------
Primitive -> copied by value
Reference -> variables refer to the same object


TYPE COERCION
------------------------------------------------------------
Automatic type conversion by JavaScript.

Example:
"5" + 2  -> "52"
"5" - 2  -> 3


TYPE CONVERSION
------------------------------------------------------------
Manual/explicit conversion.

String(value)
Number(value)
Boolean(value)
parseInt(value)
parseFloat(value)


OPERATORS
------------------------------------------------------------
Arithmetic     -> + - * / % **
Assignment     -> = += -= *= /= %=
Comparison     -> > < >= <=
Equality       -> == != === !==
Logical        -> && || !
Ternary        -> ? :
Nullish        -> ??
Optional chain -> ?.
Increment      -> ++
Decrement      -> --


EQUALITY
------------------------------------------------------------
==  -> compares after type coercion
=== -> compares value + type

PREFER === AND !==
*/