
/*
=========================================================
                ADVANCED JAVASCRIPT
=========================================================


1. DESTRUCTURING
---------------------------------------------------------

Destructuring is an ES6 feature that allows us to
extract values from arrays or properties from objects
and store them in variables easily.

A. ARRAY DESTRUCTURING
*/

const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

// Skipping elements
const [first, , third] = numbers;

console.log(first); // 10
console.log(third); // 30

// Default values
const [x, y, z = 100] = [10, 20];

console.log(z); // 100

// Swapping variables
let num1 = 5;
let num2 = 10;

[num1, num2] = [num2, num1];

console.log(num1); // 10
console.log(num2); // 5


// B. OBJECT DESTRUCTURING

const student = {
    name: "Rahul",
    age: 21,
    course: "JavaScript"
};

const { name, age, course } = student;

console.log(name);   // Rahul
console.log(age);    // 21
console.log(course); // JavaScript

// Renaming variables
const { name: studentName } = student;

console.log(studentName); // Rahul

// Default values
const { city = "Delhi" } = student;

console.log(city); // Delhi

// Nested destructuring
const user = {
    details: {
        username: "Aman",
        address: {
            city: "Mumbai"
        }
    }
};

const {
    details: {
        address: { city: userCity }
    }
} = user;

console.log(userCity); // Mumbai

/*
IMPORTANT:

Array destructuring depends on position.
Object destructuring depends on property names.

Default values are used when the extracted value
is undefined, not when it is null.


2. SPREAD AND REST OPERATORS
---------------------------------------------------------

Both use the ... syntax but have different purposes.

SPREAD:
Expands elements of an array or properties of an object.

REST:
Collects multiple values into a single array
or object.


A. SPREAD OPERATOR

1. Copying arrays
*/

const arr1 = [1, 2, 3];

const arr2 = [...arr1];

console.log(arr2); // [1, 2, 3]

// 2. Combining arrays

const a1 = [1, 2];
const a2 = [3, 4];

const combined = [...a1, ...a2];

console.log(combined); // [1, 2, 3, 4]

// 3. Adding elements

const updated = [0, ...arr1, 4];

console.log(updated); // [0, 1, 2, 3, 4]

// 4. Copying objects

const person = {
    name: "Aman",
    age: 22
};

const copiedPerson = { ...person };

console.log(copiedPerson);

// 5. Merging objects

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 5, c: 3 };

const merged = { ...obj1, ...obj2 };

console.log(merged); // { a: 1, b: 5, c: 3 }

/*
IMPORTANT:
When properties have the same key, the later
property overwrites the earlier property.

Spread creates a shallow copy, not a deep copy.


// B. REST OPERATOR

Rest collects remaining values into an array.
*/

// 1. Rest in function parameters

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(10, 20, 30)); // 60

// 2. Rest in array destructuring

const values = [10, 20, 30, 40, 50];

const [firstValue, secondValue, ...remaining] = values;

console.log(firstValue);  // 10
console.log(secondValue); // 20
console.log(remaining);   // [30, 40, 50]

// 3. Rest in object destructuring

const employee = {
    name: "Priya",
    age: 25,
    salary: 50000,
    city: "Delhi"
};

const { name: empName, ...otherDetails } = employee;

console.log(empName);      // Priya
console.log(otherDetails); // Remaining properties

/*
IMPORTANT:

Rest must be the last element in its pattern.

Spread expands.
Rest collects.


3. OPTIONAL CHAINING (?.)
---------------------------------------------------------

Optional chaining allows us to safely access
nested object properties without causing an error
when an intermediate value is null or undefined.

Example:
*/

const userDetails = {
    name: "Rahul",
    address: {
        city: "Delhi"
    }
};

console.log(userDetails.address?.city); // Delhi

// Accessing a missing property

console.log(userDetails.contact?.phone); // undefined

// Without optional chaining:

// console.log(userDetails.contact.phone);
// TypeError: Cannot read properties of undefined

// Optional chaining with arrays

const students = [
    { name: "Aman" },
    { name: "Riya" }
];

console.log(students[0]?.name); // Aman
console.log(students[5]?.name); // undefined

// Optional chaining with functions

const userObject = {
    greet() {
        console.log("Hello!");
    }
};

userObject.greet?.(); // Hello!

/*
IMPORTANT:

?. stops property access when the value before it
is null or undefined.

It does NOT stop for:
0, false, or "".

Optional chaining cannot be used on the left side
of an assignment.


4. NULLISH COALESCING (??)
---------------------------------------------------------

The nullish coalescing operator returns the right-hand
value only when the left-hand value is null
or undefined.

Syntax:

value ?? defaultValue

Example:
*/

let username = null;

console.log(username ?? "Guest"); // Guest

let age = 0;

console.log(age ?? 18); // 0

let isLoggedIn = false;

console.log(isLoggedIn ?? true); // false

let city = "";

console.log(city ?? "Unknown"); // ""

/*
Difference between || and ??

OR (||):
Uses the right side when the left side is falsy.

NULLISH (??):
Uses the right side only when the left side is
null or undefined.
*/

console.log(0 || 100);  // 100
console.log(0 ?? 100);  // 0

console.log(false || true); // true
console.log(false ?? true); // false

console.log("" || "Hello"); // Hello
console.log("" ?? "Hello"); // ""

console.log(null || "Default"); // Default
console.log(null ?? "Default"); // Default

/*
IMPORTANT:
?? cannot be directly mixed with && or ||
without parentheses.


5. SHORT-CIRCUITING
---------------------------------------------------------

Short-circuiting means JavaScript stops evaluating
an expression as soon as the final result is known.

It commonly happens with:

1. &&
2. ||
3. ??

A. LOGICAL AND (&&)

If the first operand is falsy, the second operand
is not evaluated.
*/

console.log(false && "Hello"); // false
console.log(true && "Hello");  // Hello

// Practical use
let loggedIn = true;

loggedIn && console.log("Welcome user");

// Output: Welcome user


// B. LOGICAL OR (||)

/*
If the first operand is truthy, the second operand
is not evaluated.
*/

console.log("Hello" || "World"); // Hello
console.log("" || "World");      // World

// Practical use
let displayName = "";

let finalName = displayName || "Guest";

console.log(finalName); // Guest


// C. NULLISH COALESCING (??)

let score = 0;

let finalScore = score ?? 100;

console.log(finalScore); // 0

/*
IMPORTANT:

&& returns the first falsy operand,
or the last operand if all are truthy.

|| returns the first truthy operand,
or the last operand if all are falsy.

?? returns the first operand unless it is
null or undefined.


6. SET
---------------------------------------------------------

A Set is a built-in JavaScript collection that stores
UNIQUE values.

Duplicate values are automatically removed.

Syntax:
*/

const mySet = new Set([1, 2, 2, 3, 3, 4]);

console.log(mySet); // Set {1, 2, 3, 4}

// Adding values
mySet.add(5);
mySet.add(6);

// Adding duplicate value
mySet.add(5);

console.log(mySet); // Set {1, 2, 3, 4, 5, 6}

// Checking existence
console.log(mySet.has(3)); // true

// Deleting values
mySet.delete(2);

// Size of Set
console.log(mySet.size); // 5

// Iterating through Set
mySet.forEach(function (value) {
    console.log(value);
});

// Using for...of
for (const value of mySet) {
    console.log(value);
}

// Clearing Set
mySet.clear();

console.log(mySet.size); // 0

/*
IMPORTANT:

Set stores only unique values.
Set preserves insertion order.
Set is useful for removing duplicates.

Example: Removing duplicate array elements.
*/

const duplicateArray = [1, 2, 2, 3, 4, 4, 5];

const uniqueArray = [...new Set(duplicateArray)];

console.log(uniqueArray); // [1, 2, 3, 4, 5]


7. MAP
---------------------------------------------------------

A Map is a collection of key-value pairs.

Unlike regular objects, Map allows keys of
ANY DATA TYPE.

Example:
*/

const myMap = new Map();

// Adding key-value pairs
myMap.set("name", "Rahul");
myMap.set("age", 21);
myMap.set(1, "One");

// Object as a key
const keyObject = { id: 101 };

myMap.set(keyObject, "Student");

// Getting values
console.log(myMap.get("name")); // Rahul
console.log(myMap.get(1));      // One

// Checking keys
console.log(myMap.has("age")); // true

// Size
console.log(myMap.size); // 4

// Deleting an entry
myMap.delete("age");

// Iterating through Map
myMap.forEach((value, key) => {
    console.log(key, value);
});

// Iterating using for...of
for (const [key, value] of myMap) {
    console.log(key, value);
}

// Clearing Map
myMap.clear();

/*
MAP vs OBJECT:

Object:
- Mainly stores string and symbol keys.
- Has object-specific features.
- Can be created using {}.

Map:
- Supports keys of any data type.
- Has built-in size property.
- Provides set(), get(), has(), delete().
- Directly iterable.


8. WEAKMAP AND WEAKSET
---------------------------------------------------------

WEAKMAP:

A WeakMap stores key-value pairs.

Its keys must be objects or non-registered symbols.

It holds object keys weakly, meaning it does not
prevent those objects from being garbage-collected
when no other strong references exist.

Example:
*/

const weakMap = new WeakMap();

let userKey = { id: 1 };

weakMap.set(userKey, "Private user data");

console.log(weakMap.get(userKey)); // Private user data

console.log(weakMap.has(userKey)); // true

weakMap.delete(userKey);

// WeakMap cannot be iterated.
// It does not have size or clear().

/*
WEAKSET:

A WeakSet stores objects or non-registered symbols
as weakly held values.

Example:
*/

const weakSet = new WeakSet();

let user1 = { name: "Aman" };
let user2 = { name: "Riya" };

weakSet.add(user1);
weakSet.add(user2);

console.log(weakSet.has(user1)); // true

weakSet.delete(user2);

/*
IMPORTANT DIFFERENCE:

Map:
Keys can be any data type.

WeakMap:
Keys must be objects or non-registered symbols.

Set:
Can store values of any data type.

WeakSet:
Stores objects or non-registered symbols.

WeakMap and WeakSet:
- Cannot be iterated.
- Do not have size.
- Do not have clear().
- Support garbage collection of weakly held entries.

They are useful when you want to associate data
with objects without keeping those objects alive.


9. SYMBOLS
---------------------------------------------------------

Symbol is a primitive data type introduced in ES6.

Every Symbol() call creates a unique value.

Symbols are commonly used as unique object property keys.

Example:
*/

const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log(sym1 === sym2); // false

// Using Symbol as an object key

const personData = {
    name: "Rahul",
    [sym1]: 101
};

console.log(personData.name); // Rahul
console.log(personData[sym1]); // 101

// Two symbols with the same description
// are still different.
console.log(Symbol("id") === Symbol("id")); // false

// Symbol.for() creates/retrieves a global symbol
const globalSymbol1 = Symbol.for("user");
const globalSymbol2 = Symbol.for("user");

console.log(globalSymbol1 === globalSymbol2); // true

// Retrieving the registered key
console.log(Symbol.keyFor(globalSymbol1)); // user

/*
IMPORTANT:

1. Symbols are primitive values.
2. Every Symbol() call creates a unique symbol.
3. Symbols can be used as object property keys.
4. Symbol.for() uses the global symbol registry.
5. Symbol keys are not included in Object.keys().

To retrieve symbol keys:
*/

const symbols = Object.getOwnPropertySymbols(personData);

console.log(symbols);


/*
10. ITERATORS
---------------------------------------------------------

An iterator is an object that allows us to access
elements one at a time.

An iterator follows the iterator protocol.

It must have a next() method.

The next() method returns an object containing:

1. value
2. done

done = false means more values are available.
done = true means iteration is complete.

Example:
*/

const numbersIterator = [10, 20, 30][Symbol.iterator]();

console.log(numbersIterator.next());
// { value: 10, done: false }

console.log(numbersIterator.next());
// { value: 20, done: false }

console.log(numbersIterator.next());
// { value: 30, done: false }

console.log(numbersIterator.next());
// { value: undefined, done: true }

/*
Symbol.iterator:

It is a well-known symbol that defines the default
iterator for an iterable object.

Arrays, Strings, Maps and Sets are iterable.

Example:
*/

const text = "JS";

const textIterator = text[Symbol.iterator]();

console.log(textIterator.next()); // { value: "J", done: false }
console.log(textIterator.next()); // { value: "S", done: false }
console.log(textIterator.next()); // { value: undefined, done: true }

/*
An object is iterable when it implements
the [Symbol.iterator]() method.

Example: Custom Iterator
*/

const customIterable = {
    values: [100, 200, 300],

    [Symbol.iterator]() {
        let index = 0;
        const data = this.values;

        return {
            next() {
                if (index < data.length) {
                    return {
                        value: data[index++],
                        done: false
                    };
                }

                return {
                    value: undefined,
                    done: true
                };
            }
        };
    }
};

for (const value of customIterable) {
    console.log(value);
}

// Output: 100 200 300


11. GENERATORS
---------------------------------------------------------

A generator is a special function that can pause
and resume its execution.

It is declared using function*.

The yield keyword pauses the function and returns
a value.

The next() method resumes execution.

Example:
*/

function* generateNumbers() {
    yield 10;
    yield 20;
    yield 30;
}

const generator = generateNumbers();

console.log(generator.next());
// { value: 10, done: false }

console.log(generator.next());
// { value: 20, done: false }

console.log(generator.next());
// { value: 30, done: false }

console.log(generator.next());
// { value: undefined, done: true }

/*
Explanation:

1. function* declares a generator function.
2. Calling it returns a generator object.
3. yield pauses execution and produces a value.
4. next() resumes execution.
5. After completion, done becomes true.


A. GENERATOR WITH LOOP
*/

function* count() {
    for (let i = 1; i <= 5; i++) {
        yield i;
    }
}

const counter = count();

console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3


// B. GENERATOR WITH FOR...OF

function* colors() {
    yield "Red";
    yield "Green";
    yield "Blue";
}

for (const color of colors()) {
    console.log(color);
}

/*
Output:

Red
Green
Blue


C. GENERATOR WITH RETURN

A return statement terminates the generator.
*/

function* example() {
    yield 1;
    yield 2;
    return 3;
    yield 4; // Never executed
}

const gen = example();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: true }
console.log(gen.next()); // { value: undefined, done: true }

/*
IMPORTANT:

yield:
Pauses the generator and produces a value.

return:
Terminates the generator.

Generators are useful for:
- Lazy evaluation.
- Custom iteration.
- Generating sequences.
- Handling large or infinite sequences.


=========================================================
                  QUICK REVISION
=========================================================

DESTRUCTURING:
Extracting values from arrays or objects.

SPREAD (...):
Expands elements or properties.

REST (...):
Collects remaining elements or arguments.

OPTIONAL CHAINING (?.):
Safely accesses nested properties.

NULLISH COALESCING (??):
Provides a default only for null or undefined.

SHORT-CIRCUITING:
Stops evaluation when the result is determined.

SET:
Collection of unique values.

MAP:
Collection of key-value pairs with keys of any type.

WEAKMAP:
Weakly holds object or non-registered symbol keys.

WEAKSET:
Weakly holds objects or non-registered symbols.

SYMBOL:
Unique primitive value used as an identifier.

ITERATOR:
Object that produces values one at a time using next().

GENERATOR:
Special function that pauses and resumes using yield.


=========================================================
                    END OF NOTES
=========================================================
*/
