// ==========================================================
// JAVASCRIPT REVISION NOTES
// 7. STRINGS, NUMBERS & BUILT-IN OBJECTS
// ==========================================================


// ==========================================================
// 1. STRINGS
// ==========================================================

// A string is a sequence of characters.

// Different ways to create strings:

let str1 = "Hello";
let str2 = 'World';
let str3 = `JavaScript`;


// ----------------------------------------------------------
// STRING LENGTH
// ----------------------------------------------------------

let text = "JavaScript";

console.log(text.length); // 10


// ----------------------------------------------------------
// ACCESSING CHARACTERS
// ----------------------------------------------------------

let word = "Hello";

console.log(word[0]); // H
console.log(word[1]); // e
console.log(word[word.length - 1]); // o


// charAt()

console.log(word.charAt(0)); // H
console.log(word.charAt(4)); // o


// ----------------------------------------------------------
// toUpperCase()
// ----------------------------------------------------------

let name = "john";

console.log(name.toUpperCase());
// JOHN


// ----------------------------------------------------------
// toLowerCase()
// ----------------------------------------------------------

let language = "JAVASCRIPT";

console.log(language.toLowerCase());
// javascript


// ----------------------------------------------------------
// trim()
// ----------------------------------------------------------

// Removes whitespace from both ends.

let username = "   john   ";

console.log(username.trim());
// "john"


// trimStart()

console.log(username.trimStart());
// "john   "


// trimEnd()

console.log(username.trimEnd());
// "   john"


// ----------------------------------------------------------
// includes()
// ----------------------------------------------------------

// Checks whether a string contains a specific value.

let sentence = "I love JavaScript";

console.log(sentence.includes("JavaScript"));
// true

console.log(sentence.includes("Python"));
// false


// ----------------------------------------------------------
// startsWith()
// ----------------------------------------------------------

console.log(sentence.startsWith("I"));
// true

console.log(sentence.startsWith("JavaScript"));
// false


// ----------------------------------------------------------
// endsWith()
// ----------------------------------------------------------

console.log(sentence.endsWith("JavaScript"));
// true


// ----------------------------------------------------------
// indexOf()
// ----------------------------------------------------------

// Returns the first index where a value occurs.
// Returns -1 if not found.

let message = "Hello JavaScript";

console.log(message.indexOf("JavaScript"));
// 6

console.log(message.indexOf("Python"));
// -1


// ----------------------------------------------------------
// lastIndexOf()
// ----------------------------------------------------------

let repeated = "hello hello";

console.log(repeated.lastIndexOf("hello"));
// 6


// ----------------------------------------------------------
// slice()
// ----------------------------------------------------------

// Extracts part of a string.
// Does not modify the original string.

let str = "JavaScript";

console.log(str.slice(0, 4));
// Java

console.log(str.slice(4));
// Script

console.log(str.slice(-6));
// Script


// ----------------------------------------------------------
// substring()
// ----------------------------------------------------------

console.log(str.substring(0, 4));
// Java

// Negative values are treated as 0.

console.log(str.substring(-3, 4));
// Java


// ----------------------------------------------------------
// replace()
// ----------------------------------------------------------

// Replaces the first matching occurrence.

let sentence2 = "I like JavaScript";

console.log(sentence2.replace("JavaScript", "Python"));
// I like Python


// ----------------------------------------------------------
// replaceAll()
// ----------------------------------------------------------

let fruits = "apple apple apple";

console.log(fruits.replaceAll("apple", "banana"));
// banana banana banana


// ----------------------------------------------------------
// split()
// ----------------------------------------------------------

// Converts a string into an array.

let colors = "red,green,blue";

console.log(colors.split(","));
// ["red", "green", "blue"]


let letters = "ABC";

console.log(letters.split(""));
// ["A", "B", "C"]


// ----------------------------------------------------------
// concat()
// ----------------------------------------------------------

let firstName = "John";
let lastName = "Doe";

console.log(firstName.concat(" ", lastName));
// John Doe


// ----------------------------------------------------------
// repeat()
// ----------------------------------------------------------

console.log("Hi ".repeat(3));
// Hi Hi Hi


// ----------------------------------------------------------
// padStart()
// ----------------------------------------------------------

let number = "5";

console.log(number.padStart(3, "0"));
// 005


// ----------------------------------------------------------
// padEnd()
// ----------------------------------------------------------

console.log(number.padEnd(3, "0"));
// 500


// ----------------------------------------------------------
// STRING IMMUTABILITY
// ----------------------------------------------------------

// Strings are immutable.
// String methods return a new string.
// They do not modify the original string.

let original = "hello";

let upper = original.toUpperCase();

console.log(original);
// hello

console.log(upper);
// HELLO



// ==========================================================
// 2. TEMPLATE LITERALS
// ==========================================================

// Template literals use backticks ` `.

let user = "John";
let age = 25;

console.log(`My name is ${user} and I am ${age} years old.`);


// ----------------------------------------------------------
// STRING INTERPOLATION
// ----------------------------------------------------------

let a = 10;
let b = 20;

console.log(`Sum = ${a + b}`);
// Sum = 30


// ----------------------------------------------------------
// MULTI-LINE STRINGS
// ----------------------------------------------------------

let paragraph = `
This is line one.
This is line two.
This is line three.
`;

console.log(paragraph);


// ----------------------------------------------------------
// EXPRESSIONS INSIDE TEMPLATE LITERALS
// ----------------------------------------------------------

let price = 100;
let quantity = 3;

console.log(`Total price: ${price * quantity}`);
// Total price: 300


// ----------------------------------------------------------
// FUNCTION CALLS
// ----------------------------------------------------------

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("John"));
// Hello, John



// ==========================================================
// 3. NUMBERS
// ==========================================================

// JavaScript has one main numeric type:
// Number

let num1 = 10;
let num2 = 10.5;
let negative = -20;

console.log(typeof num1);
// number


// ----------------------------------------------------------
// SPECIAL NUMBER VALUES
// ----------------------------------------------------------

console.log(Infinity);
console.log(-Infinity);
console.log(NaN);


// NaN = Not a Number

console.log("hello" * 2);
// NaN


// ----------------------------------------------------------
// Number.isNaN()
// ----------------------------------------------------------

console.log(Number.isNaN(NaN));
// true

console.log(Number.isNaN(10));
// false


// ----------------------------------------------------------
// Number.isFinite()
// ----------------------------------------------------------

console.log(Number.isFinite(100));
// true

console.log(Number.isFinite(Infinity));
// false


// ----------------------------------------------------------
// Number.isInteger()
// ----------------------------------------------------------

console.log(Number.isInteger(10));
// true

console.log(Number.isInteger(10.5));
// false


// ----------------------------------------------------------
// Number.isSafeInteger()
// ----------------------------------------------------------

console.log(Number.isSafeInteger(100));
// true


// ==========================================================
// 4. NUMBER METHODS
// ==========================================================


// ----------------------------------------------------------
// toString()
// ----------------------------------------------------------

let num = 100;

console.log(num.toString());
// "100"

console.log(typeof num.toString());
// string


// ----------------------------------------------------------
// toFixed()
// ----------------------------------------------------------

// Controls the number of digits after decimal.

let decimal = 10.5678;

console.log(decimal.toFixed(2));
// "10.57"

// IMPORTANT:
// toFixed() returns a STRING.


// ----------------------------------------------------------
// toPrecision()
// ----------------------------------------------------------

let value = 123.456;

console.log(value.toPrecision(4));
// "123.5"


// ----------------------------------------------------------
// parseInt()
// ----------------------------------------------------------

// Converts a value/string to an integer.

console.log(parseInt("100"));
// 100

console.log(parseInt("100px"));
// 100


// ----------------------------------------------------------
// parseFloat()
// ----------------------------------------------------------

// Converts a value/string to a floating-point number.

console.log(parseFloat("10.50"));
// 10.5

console.log(parseFloat("10.50px"));
// 10.5


// ----------------------------------------------------------
// Number()
// ----------------------------------------------------------

// Converts a value to Number.

console.log(Number("100"));
// 100

console.log(Number("10.5"));
// 10.5

console.log(Number("hello"));
// NaN


// Difference:

console.log(parseInt("100px"));
// 100

console.log(Number("100px"));
// NaN



// ==========================================================
// 5. MATH OBJECT
// ==========================================================

// Math is a built-in object containing mathematical functions
// and constants.


// ----------------------------------------------------------
// Math.PI
// ----------------------------------------------------------

console.log(Math.PI);
// 3.141592653589793


// ----------------------------------------------------------
// Math.round()
// ----------------------------------------------------------

// Rounds to nearest integer.

console.log(Math.round(4.4));
// 4

console.log(Math.round(4.6));
// 5


// ----------------------------------------------------------
// Math.floor()
// ----------------------------------------------------------

// Rounds DOWN.

console.log(Math.floor(4.9));
// 4


// ----------------------------------------------------------
// Math.ceil()
// ----------------------------------------------------------

// Rounds UP.

console.log(Math.ceil(4.1));
// 5


// ----------------------------------------------------------
// Math.trunc()
// ----------------------------------------------------------

// Removes decimal part.

console.log(Math.trunc(4.9));
// 4

console.log(Math.trunc(-4.9));
// -4


// ----------------------------------------------------------
// Math.abs()
// ----------------------------------------------------------

// Returns absolute value.

console.log(Math.abs(-10));
// 10


// ----------------------------------------------------------
// Math.pow()
// ----------------------------------------------------------

console.log(Math.pow(2, 3));
// 8

// Modern alternative:

console.log(2 ** 3);
// 8


// ----------------------------------------------------------
// Math.sqrt()
// ----------------------------------------------------------

console.log(Math.sqrt(25));
// 5


// ----------------------------------------------------------
// Math.cbrt()
// ----------------------------------------------------------

console.log(Math.cbrt(27));
// 3


// ----------------------------------------------------------
// Math.max()
// ----------------------------------------------------------

console.log(Math.max(10, 20, 5, 30));
// 30


// ----------------------------------------------------------
// Math.min()
// ----------------------------------------------------------

console.log(Math.min(10, 20, 5, 30));
// 5


// ----------------------------------------------------------
// Math.random()
// ----------------------------------------------------------

// Returns a random number between 0 (inclusive)
// and 1 (exclusive).

console.log(Math.random());


// Random number between 0 and 9:

let randomNumber = Math.floor(Math.random() * 10);

console.log(randomNumber);


// Random number between 1 and 10:

let random1to10 = Math.floor(Math.random() * 10) + 1;

console.log(random1to10);


// Random integer between min and max (inclusive):

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInt(1, 100));



// ==========================================================
// 6. DATE OBJECT
// ==========================================================

// Date is used to work with dates and times.


// ----------------------------------------------------------
// CURRENT DATE AND TIME
// ----------------------------------------------------------

let now = new Date();

console.log(now);


// ----------------------------------------------------------
// CREATE DATE
// ----------------------------------------------------------

let date1 = new Date("2025-01-15");

console.log(date1);


// Specific date/time:

let date2 = new Date(2025, 0, 15);

console.log(date2);

// IMPORTANT:
// Months are zero-indexed.

// January = 0
// February = 1
// March = 2
// ...
// December = 11


// ----------------------------------------------------------
// GET DATE COMPONENTS
// ----------------------------------------------------------

let today = new Date();

console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());

console.log(today.getDay());


// getDay():
// Sunday = 0
// Monday = 1
// Tuesday = 2
// ...
// Saturday = 6


// ----------------------------------------------------------
// GET HOURS / MINUTES / SECONDS
// ----------------------------------------------------------

console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMilliseconds());


// ----------------------------------------------------------
// UTC METHODS
// ----------------------------------------------------------

console.log(today.getUTCFullYear());
console.log(today.getUTCMonth());
console.log(today.getUTCDate());
console.log(today.getUTCHours());


// ----------------------------------------------------------
// SET DATE VALUES
// ----------------------------------------------------------

let d = new Date();

d.setFullYear(2030);
d.setMonth(5);
d.setDate(20);

console.log(d);


// ----------------------------------------------------------
// DATE DIFFERENCE
// ----------------------------------------------------------

// Dates can be converted to milliseconds.

let start = new Date("2025-01-01");
let end = new Date("2025-01-10");

let difference = end - start;

console.log(difference);


// Convert milliseconds to days:

let days = difference / (1000 * 60 * 60 * 24);

console.log(days);
// 9


// ----------------------------------------------------------
// toISOString()
// ----------------------------------------------------------

console.log(today.toISOString());


// Example:
// "2025-01-15T10:30:00.000Z"


// ----------------------------------------------------------
// toDateString()
// ----------------------------------------------------------

console.log(today.toDateString());


// ----------------------------------------------------------
// toLocaleDateString()
// ----------------------------------------------------------

console.log(today.toLocaleDateString());


// ----------------------------------------------------------
// toLocaleString()
// ----------------------------------------------------------

console.log(today.toLocaleString());



// ==========================================================
// 7. JSON
// ==========================================================

// JSON = JavaScript Object Notation
//
// Used for storing and exchanging data.
//
// Commonly used with APIs.


// Example JavaScript object:

let person = {
    name: "John",
    age: 25,
    city: "Delhi"
};


// ----------------------------------------------------------
// JSON.stringify()
// ----------------------------------------------------------

// Converts JavaScript object -> JSON string.

let jsonData = JSON.stringify(person);

console.log(jsonData);

console.log(typeof jsonData);
// string


// ----------------------------------------------------------
// JSON.parse()
// ----------------------------------------------------------

// Converts JSON string -> JavaScript object.

let parsedData = JSON.parse(jsonData);

console.log(parsedData);

console.log(parsedData.name);
// John


// ----------------------------------------------------------
// JSON WITH ARRAYS
// ----------------------------------------------------------

let users = [
    {
        name: "John",
        age: 25
    },
    {
        name: "Alice",
        age: 30
    }
];

let jsonUsers = JSON.stringify(users);

console.log(jsonUsers);


// Convert back:

let usersArray = JSON.parse(jsonUsers);

console.log(usersArray[0].name);
// John


// ----------------------------------------------------------
// IMPORTANT JSON RULES
// ----------------------------------------------------------

// JSON property names must use double quotes.
//
// Valid JSON:

/*
{
    "name": "John",
    "age": 25
}
*/


// JSON supports:
// string
// number
// boolean
// null
// object
// array


// JSON does NOT directly support:
// undefined
// functions
// Symbol
// BigInt


// ==========================================================
// 8. REGULAR EXPRESSIONS (REGEX)
// ==========================================================

// Regular expressions are patterns used to search,
// match, and manipulate strings.


// Basic regex:

let pattern = /hello/;

console.log(pattern.test("hello world"));
// true


console.log(pattern.test("JavaScript"));
// false


// ----------------------------------------------------------
// REGEX test()
// ----------------------------------------------------------

let regex = /javascript/i;

console.log(regex.test("JavaScript"));
// true


// "i" flag = case insensitive


// ----------------------------------------------------------
// COMMON REGEX FLAGS
// ----------------------------------------------------------

// i = case-insensitive
// g = global
// m = multiline
// s = dotAll
// u = Unicode


// ----------------------------------------------------------
// GLOBAL FLAG
// ----------------------------------------------------------

let regex2 = /apple/g;

let text2 = "apple banana apple";

console.log(text2.match(regex2));
// ["apple", "apple"]


// ----------------------------------------------------------
// CHARACTER SET
// ----------------------------------------------------------

// [] matches one character from the set.

let vowel = /[aeiou]/;

console.log(vowel.test("cat"));
// true


// ----------------------------------------------------------
// RANGE
// ----------------------------------------------------------

let lowercase = /[a-z]/;

console.log(lowercase.test("hello"));
// true


let digit = /[0-9]/;

console.log(digit.test("123"));
// true


// ----------------------------------------------------------
// SPECIAL CHARACTER CLASSES
// ----------------------------------------------------------

// \d = digit
// \D = non-digit
// \w = word character
// \W = non-word character
// \s = whitespace
// \S = non-whitespace


let digits = /\d+/;

console.log(digits.test("Age: 25"));
// true


// ----------------------------------------------------------
// QUANTIFIERS
// ----------------------------------------------------------

// +  = one or more
// *  = zero or more
// ?  = zero or one
// {n} = exactly n
// {n,} = n or more
// {n,m} = between n and m


let numbers = /\d+/;

console.log("12345".match(numbers));
// ["12345"]


// Exactly 3 digits:

let threeDigits = /^\d{3}$/;

console.log(threeDigits.test("123"));
// true

console.log(threeDigits.test("1234"));
// false


// ----------------------------------------------------------
// ^ AND $
// ----------------------------------------------------------

// ^ = start of string
// $ = end of string


let onlyNumbers = /^\d+$/;

console.log(onlyNumbers.test("12345"));
// true

console.log(onlyNumbers.test("123abc"));
// false


// ----------------------------------------------------------
// match()
// ----------------------------------------------------------

let sentence3 = "I have 10 apples and 20 oranges.";

console.log(sentence3.match(/\d+/g));
// ["10", "20"]


// ----------------------------------------------------------
// replace() WITH REGEX
// ----------------------------------------------------------

let text3 = "hello hello";

console.log(text3.replace(/hello/g, "hi"));
// hi hi


// ----------------------------------------------------------
// SEARCHING EMAIL PATTERN
// ----------------------------------------------------------

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(emailRegex.test("test@example.com"));
// true

console.log(emailRegex.test("invalid-email"));
// false


// NOTE:
// Regex email validation can become very complex.
// For simple frontend validation, a basic pattern is often enough.



// ==========================================================
// 9. USEFUL STRING + NUMBER COMBINATIONS
// ==========================================================


// Convert input string to number:

let input = "100";

let converted = Number(input);

console.log(converted);
// 100


// Convert number to string:

let score = 95;

console.log(score.toString());
// "95"


// Remove extra spaces and convert:

let userInput = "   250   ";

let cleanNumber = Number(userInput.trim());

console.log(cleanNumber);
// 250


// Format number:

let amount = 1234.567;

console.log(amount.toFixed(2));
// "1234.57"


// Convert to number after toFixed():

let formatted = Number(amount.toFixed(2));

console.log(formatted);
// 1234.57



// ==========================================================
// 10. COMMON INTERVIEW POINTS
// ==========================================================


// ----------------------------------------------------------
// parseInt() vs Number()
// ----------------------------------------------------------

console.log(parseInt("100px"));
// 100

console.log(Number("100px"));
// NaN


// ----------------------------------------------------------
// toFixed() returns a string
// ----------------------------------------------------------

let n = 10.456;

console.log(n.toFixed(2));
// "10.46"

console.log(typeof n.toFixed(2));
// string


// ----------------------------------------------------------
// Math.floor() vs Math.trunc()
// ----------------------------------------------------------

console.log(Math.floor(4.9));
// 4

console.log(Math.trunc(4.9));
// 4


console.log(Math.floor(-4.9));
// -5

console.log(Math.trunc(-4.9));
// -4


// ----------------------------------------------------------
// Date months are zero-indexed
// ----------------------------------------------------------

let date = new Date(2025, 0, 15);

console.log(date.getMonth());
// 0 = January


// ----------------------------------------------------------
// JSON.stringify vs JSON.parse
// ----------------------------------------------------------

// Object -> JSON string
JSON.stringify();


// JSON string -> Object
JSON.parse();


// ==========================================================
// 11. QUICK REVISION
// ==========================================================

// STRINGS
//
// length
// toUpperCase()
// toLowerCase()
// trim()
// includes()
// startsWith()
// endsWith()
// indexOf()
// lastIndexOf()
// slice()
// substring()
// replace()
// replaceAll()
// split()
// concat()
// repeat()
// padStart()
// padEnd()


// TEMPLATE LITERALS
//
// `Hello ${name}`
// Multi-line strings
// Expressions inside ${}


// NUMBERS
//
// Number
// NaN
// Infinity
// Number.isNaN()
// Number.isFinite()
// Number.isInteger()
// Number.isSafeInteger()
// toString()
// toFixed()
// toPrecision()
// parseInt()
// parseFloat()
// Number()


// MATH
//
// Math.PI
// Math.round()
// Math.floor()
// Math.ceil()
// Math.trunc()
// Math.abs()
// Math.pow()
// Math.sqrt()
// Math.cbrt()
// Math.max()
// Math.min()
// Math.random()


// DATE
//
// new Date()
// getFullYear()
// getMonth()
// getDate()
// getDay()
// getHours()
// getMinutes()
// getSeconds()
// setFullYear()
// setMonth()
// setDate()
// toISOString()
// toLocaleDateString()


// JSON
//
// JSON.stringify()
// JSON.parse()


// REGEX
//
// /pattern/
// test()
// match()
// replace()
// Flags: i, g, m, s, u
// Character sets: [a-z], [0-9]
// Classes: \d, \w, \s
// Quantifiers: +, *, ?, {n}
// Anchors: ^, $


// ==========================================================
// END OF TOPIC 7
// ==========================================================