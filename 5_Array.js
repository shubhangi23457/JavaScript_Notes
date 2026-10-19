/*
============================================================
5. ARRAYS
============================================================

An array is a data structure used to store multiple values
in a single variable.

Arrays are:
- Ordered
- Zero-indexed
- Dynamic in size
- Mutable
*/


// ==========================================================
// 5.1 CREATING & ACCESSING ARRAYS
// ==========================================================

// ---------- Creating an array ----------

const fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits);


// ---------- Accessing array elements ----------

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[3]); // Orange


/*
Array indexing starts from 0.

Index:
0 -> Apple
1 -> Banana
2 -> Mango
3 -> Orange
*/


// ---------- Last element ----------

console.log(fruits[fruits.length - 1]); // Orange

// Modern approach
console.log(fruits.at(-1)); // Orange


// ---------- Array length ----------

console.log(fruits.length); // 4


// ---------- Changing elements ----------

fruits[1] = "Grapes";

console.log(fruits);


// ---------- Creating an empty array ----------

const emptyArray = [];


// ---------- Array constructor ----------

const numbers = new Array(10, 20, 30);

console.log(numbers);


// ---------- Check if value is an array ----------

console.log(Array.isArray(numbers)); // true
console.log(Array.isArray("Hello")); // false


// ==========================================================
// 5.2 ADDING / REMOVING ELEMENTS
// ==========================================================

/*
push()
- Adds element(s) to the END.
- Returns the new length.
*/

const arr = [1, 2, 3];

arr.push(4);

console.log(arr); // [1, 2, 3, 4]


arr.push(5, 6);

console.log(arr); // [1, 2, 3, 4, 5, 6]


/*
pop()
- Removes the LAST element.
- Returns the removed element.
*/

const lastElement = arr.pop();

console.log(lastElement);
console.log(arr);


/*
unshift()
- Adds element(s) to the BEGINNING.
*/

arr.unshift(0);

console.log(arr);


/*
shift()
- Removes the FIRST element.
- Returns the removed element.
*/

const firstElement = arr.shift();

console.log(firstElement);
console.log(arr);


/*
splice()
- Can add, remove, or replace elements.
- MODIFIES the original array.

Syntax:

array.splice(start, deleteCount, item1, item2, ...)
*/


// ---------- Remove elements ----------

const numbers2 = [10, 20, 30, 40, 50];

numbers2.splice(1, 2);

console.log(numbers2);
// [10, 40, 50]


// ---------- Add elements ----------

const numbers3 = [10, 20, 50];

numbers3.splice(2, 0, 30, 40);

console.log(numbers3);
// [10, 20, 30, 40, 50]


// ---------- Replace elements ----------

const numbers4 = [10, 20, 30];

numbers4.splice(1, 1, 200);

console.log(numbers4);
// [10, 200, 30]


/*
slice()
- Extracts a portion of an array.
- DOES NOT modify the original array.

Syntax:

array.slice(start, end)

The `end` index is NOT included.
*/

const numbers5 = [10, 20, 30, 40, 50];

const result = numbers5.slice(1, 4);

console.log(result);
// [20, 30, 40]

console.log(numbers5);
// Original remains unchanged


// ==========================================================
// 5.3 ARRAY DESTRUCTURING
// ==========================================================

/*
Destructuring allows us to extract values from an array
into individual variables.
*/

const colors = ["Red", "Green", "Blue"];

const [first, second, third] = colors;

console.log(first);  // Red
console.log(second); // Green
console.log(third);  // Blue


// ---------- Skip elements ----------

const values = [10, 20, 30, 40];

const [a, , c] = values;

console.log(a); // 10
console.log(c); // 30


// ---------- Default values ----------

const data = ["John"];

const [name, age = 25] = data;

console.log(name); // John
console.log(age);  // 25


// ---------- Rest with destructuring ----------

const nums = [1, 2, 3, 4, 5];

const [firstNum, secondNum, ...remaining] = nums;

console.log(firstNum);  // 1
console.log(secondNum); // 2
console.log(remaining); // [3, 4, 5]


// ---------- Swapping variables ----------

let x = 10;
let y = 20;

[x, y] = [y, x];

console.log(x); // 20
console.log(y); // 10


// ==========================================================
// 5.4 map()
// ==========================================================

/*
map()
- Creates a NEW array.
- Transforms every element.
- Does NOT modify the original array.
- Callback runs once for every element.
*/

const numbers6 = [1, 2, 3, 4];

const doubled = numbers6.map(function (number) {
    return number * 2;
});

console.log(doubled);
// [2, 4, 6, 8]

console.log(numbers6);
// [1, 2, 3, 4]


// ---------- Using arrow function ----------

const squared = numbers6.map(number => number * number);

console.log(squared);
// [1, 4, 9, 16]


// ---------- map() with objects ----------

const users = [
    { name: "John", age: 25 },
    { name: "Alex", age: 30 },
    { name: "Sam", age: 22 }
];

const names = users.map(user => user.name);

console.log(names);
// ["John", "Alex", "Sam"]


// ==========================================================
// 5.5 filter()
// ==========================================================

/*
filter()
- Creates a NEW array.
- Returns elements that satisfy a condition.
- Does NOT modify the original array.
*/

const numbers7 = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers7.filter(number => {
    return number % 2 === 0;
});

console.log(evenNumbers);
// [2, 4, 6]


// ---------- Filter objects ----------

const adults = users.filter(user => user.age >= 25);

console.log(adults);


// ==========================================================
// 5.6 reduce()
// ==========================================================

/*
reduce()
- Reduces an array to a SINGLE value.
- Can be used for:
    sum
    product
    counting
    grouping
    building objects
    etc.

Syntax:

array.reduce((accumulator, currentValue) => {
    return updatedAccumulator;
}, initialValue);
*/


// ---------- Sum ----------

const numbers8 = [10, 20, 30, 40];

const sum = numbers8.reduce((accumulator, currentValue) => {

    return accumulator + currentValue;

}, 0);

console.log(sum); // 100


/*
Step-by-step:

Initial accumulator = 0

0 + 10 = 10
10 + 20 = 30
30 + 30 = 60
60 + 40 = 100
*/


// ---------- Short syntax ----------

const total = numbers8.reduce(
    (acc, current) => acc + current,
    0
);

console.log(total); // 100


// ---------- Product ----------

const product = [1, 2, 3, 4].reduce(
    (acc, current) => acc * current,
    1
);

console.log(product); // 24


// ---------- Count elements ----------

const numbers9 = [1, 2, 2, 3, 2, 4];

const count = numbers9.reduce((acc, number) => {

    if (number === 2) {
        return acc + 1;
    }

    return acc;

}, 0);

console.log(count); // 3


// ==========================================================
// 5.7 find() / findIndex()
// ==========================================================

/*
find()
- Returns the FIRST element that satisfies the condition.
- Returns undefined if no element is found.
*/

const numbers10 = [10, 20, 30, 40];

const found = numbers10.find(number => number > 25);

console.log(found); // 30


// ---------- find() with objects ----------

const user = users.find(user => user.name === "Alex");

console.log(user);
// { name: "Alex", age: 30 }


/*
findIndex()
- Returns the INDEX of the first matching element.
- Returns -1 if no element is found.
*/

const index = numbers10.findIndex(number => number > 25);

console.log(index); // 2


// ==========================================================
// 5.8 some() / every()
// ==========================================================

/*
some()
- Checks whether AT LEAST ONE element satisfies a condition.
- Returns true or false.
*/

const numbers11 = [1, 3, 5, 8];

const hasEven = numbers11.some(number => number % 2 === 0);

console.log(hasEven); // true


/*
every()
- Checks whether ALL elements satisfy a condition.
- Returns true or false.
*/

const allPositive = numbers11.every(number => number > 0);

console.log(allPositive); // true


// ---------- Example ----------

const ages = [20, 25, 30];

console.log(ages.some(age => age < 18)); // false

console.log(ages.every(age => age >= 18)); // true


/*
some()
    -> At least ONE

every()
    -> ALL
*/


// ==========================================================
// 5.9 forEach()
// ==========================================================

/*
forEach()
- Executes a callback for every element.
- Does NOT return a new array.
- Commonly used when you want to perform an action.
*/

const numbers12 = [10, 20, 30];

numbers12.forEach(number => {
    console.log(number);
});


/*
Callback receives:

1. current element
2. index
3. entire array
*/

numbers12.forEach((number, index, array) => {

    console.log(number);
    console.log(index);
    console.log(array);

});


/*
IMPORTANT:

forEach() does NOT work well when you need:
- break
- continue
- return a transformed array

For transformations, prefer map().
*/


// ==========================================================
// 5.10 sort() / reverse()
// ==========================================================

/*
sort()
- Sorts the array.
- MODIFIES the original array.

IMPORTANT:
By default, sort() converts elements to strings and
sorts them lexicographically.
*/

const numbers13 = [10, 2, 30, 4];

numbers13.sort();

console.log(numbers13);

/*
Do NOT rely on default sort for numbers.
*/


// ---------- Numeric ascending sort ----------

const numbers14 = [10, 2, 30, 4];

numbers14.sort((a, b) => a - b);

console.log(numbers14);
// [2, 4, 10, 30]


// ---------- Numeric descending sort ----------

numbers14.sort((a, b) => b - a);

console.log(numbers14);
// [30, 10, 4, 2]


// ---------- Sort strings ----------

const names2 = ["John", "Alex", "Sam", "Bob"];

names2.sort();

console.log(names2);


// ---------- Sort objects ----------

const people = [
    { name: "John", age: 30 },
    { name: "Alex", age: 20 },
    { name: "Sam", age: 25 }
];

people.sort((a, b) => a.age - b.age);

console.log(people);


/*
reverse()
- Reverses the order of elements.
- MODIFIES the original array.
*/

const numbers15 = [1, 2, 3, 4, 5];

numbers15.reverse();

console.log(numbers15);
// [5, 4, 3, 2, 1]


// ==========================================================
// 5.11 SPREAD OPERATOR
// ==========================================================

/*
Spread operator:
    ...

It expands an iterable into individual elements.
*/


// ---------- Copy an array ----------

const originalArray = [1, 2, 3];

const copiedArray = [...originalArray];

console.log(copiedArray);


// ---------- Combine arrays ----------

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combined = [...array1, ...array2];

console.log(combined);
// [1, 2, 3, 4, 5, 6]


// ---------- Add elements ----------

const oldArray = [2, 3, 4];

const newArray = [1, ...oldArray, 5];

console.log(newArray);
// [1, 2, 3, 4, 5]


// ---------- Spread in function calls ----------

const numbers16 = [10, 20, 30];

function addThree(a, b, c) {
    return a + b + c;
}

console.log(addThree(...numbers16));
// 60


// ---------- Spread vs reference ----------

const arrA = [1, 2, 3];

const arrB = arrA;

arrB.push(4);

console.log(arrA);
// [1, 2, 3, 4]


const arrC = [1, 2, 3];

const arrD = [...arrC];

arrD.push(4);

console.log(arrC);
// [1, 2, 3]

console.log(arrD);
// [1, 2, 3, 4]


/*
IMPORTANT:

Spread creates a SHALLOW COPY.

Nested objects/arrays are still shared.
*/

const nestedArray = [
    [1, 2],
    [3, 4]
];

const copiedNestedArray = [...nestedArray];

copiedNestedArray[0].push(100);

console.log(nestedArray);
// [[1, 2, 100], [3, 4]]

/*
Only the outer array was copied.
Nested arrays still share references.
*/


// ==========================================================
// QUICK REVISION
// ==========================================================

/*
CREATING
------------------------------------------------------------

const arr = [10, 20, 30];


ACCESSING
------------------------------------------------------------

arr[0]
arr[arr.length - 1]
arr.at(-1)


ADDING / REMOVING
------------------------------------------------------------

push()       -> Add to end
pop()        -> Remove from end
unshift()    -> Add to beginning
shift()      -> Remove from beginning
splice()     -> Add/remove/replace
slice()      -> Extract portion without modifying original


DESTRUCTURING
------------------------------------------------------------

const [a, b, c] = arr;

Extracts array values into variables.


map()
------------------------------------------------------------

Transforms EVERY element.

Returns a NEW array.

arr.map(item => newValue);


filter()
------------------------------------------------------------

Returns elements that satisfy a condition.

Returns a NEW array.

arr.filter(item => condition);


reduce()
------------------------------------------------------------

Reduces array to a SINGLE value.

arr.reduce((acc, item) => {
    return updatedAcc;
}, initialValue);


find()
------------------------------------------------------------

Returns FIRST matching element.

Returns undefined if not found.


findIndex()
------------------------------------------------------------

Returns INDEX of FIRST matching element.

Returns -1 if not found.


some()
------------------------------------------------------------

Returns true if AT LEAST ONE element satisfies condition.


every()
------------------------------------------------------------

Returns true if ALL elements satisfy condition.


forEach()
------------------------------------------------------------

Executes callback for every element.

Does NOT create a new array.


sort()
------------------------------------------------------------

Sorts array.

MODIFIES original array.

Numbers:

arr.sort((a, b) => a - b);


reverse()
------------------------------------------------------------

Reverses array.

MODIFIES original array.


SPREAD
------------------------------------------------------------

...

Expands array elements.

const copy = [...arr];

const combined = [...arr1, ...arr2];



============================================================
METHOD COMPARISON
============================================================

Method       Returns              Modifies Original?
------------------------------------------------------------
map()        New array             No
filter()     New array             No
reduce()     Single value          No
find()       First element         No
findIndex()  Index                 No
some()       Boolean               No
every()      Boolean               No
forEach()    undefined             No
sort()       Same array            YES
reverse()    Same array            YES
splice()     Same array            YES
slice()      New array             No
push()       New length            YES
pop()        Removed element       YES
shift()      Removed element       YES
unshift()    New length            YES
*/