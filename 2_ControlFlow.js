/*
============================================================
2. CONTROL FLOW
============================================================

Control flow determines the order in which JavaScript
executes statements.
*/


// ==========================================================
// 2.1 if, else if, else
// ==========================================================

/*
if
- Executes code when a condition is true.
*/

let age = 20;

if (age >= 18) {
    console.log("Adult");
}


/*
if...else
- if condition is true  -> first block runs
- if condition is false -> else block runs
*/

let number = 7;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


/*
if...else if...else
- Used when there are multiple conditions.
*/

let marks = 85;

if (marks >= 90) {
    console.log("Grade A+");
} else if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


/*
Nested if
- An if statement inside another if statement.
*/

let userAge = 25;
let hasID = true;

if (userAge >= 18) {
    if (hasID) {
        console.log("Entry allowed");
    }
}


/*
Multiple conditions
*/

let userAge2 = 25;
let hasTicket = true;

if (userAge2 >= 18 && hasTicket) {
    console.log("You can enter");
}


/*
Truthy / Falsy values can also be used as conditions.
*/

let username = "John";

if (username) {
    console.log("Username exists");
}


// ==========================================================
// 2.2 switch
// ==========================================================

/*
switch is useful when comparing one value against
multiple possible values.

Syntax:

switch (expression) {
    case value:
        // code
        break;

    case value:
        // code
        break;

    default:
        // code
}
*/

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    default:
        console.log("Invalid day");
}


/*
IMPORTANT:
break prevents execution from continuing into the
next case.
*/


// ---------- switch without break ----------

let fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("Apple");

    case "banana":
        console.log("Banana");

    default:
        console.log("Other fruit");
}

/*
Without break, JavaScript continues executing the
following cases. This is called FALL-THROUGH.
*/


// ---------- Multiple cases ----------

let month = 12;

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;

    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;

    default:
        console.log("Other season");
}


// ---------- default ----------

let option = 10;

switch (option) {
    case 1:
        console.log("Option 1");
        break;

    case 2:
        console.log("Option 2");
        break;

    default:
        console.log("Invalid option");
}


// ==========================================================
// 2.3 TERNARY OPERATOR
// ==========================================================

/*
Ternary operator is a short form of if...else.

Syntax:

condition ? valueIfTrue : valueIfFalse
*/

let age3 = 20;

let result = age3 >= 18 ? "Adult" : "Minor";

console.log(result);


/*
Equivalent if...else:

if (age3 >= 18) {
    result = "Adult";
} else {
    result = "Minor";
}
*/


// ---------- Ternary with variables ----------

let marks2 = 75;

let grade = marks2 >= 50 ? "Pass" : "Fail";

console.log(grade);


// ---------- Nested ternary ----------

let score = 85;

let grade2 =
    score >= 90 ? "A+" :
    score >= 80 ? "A" :
    score >= 70 ? "B" :
    score >= 60 ? "C" :
    "Fail";

console.log(grade2);

/*
Avoid deeply nested ternary operators because they
can become difficult to read.
*/


// ==========================================================
// 2.4 for LOOP
// ==========================================================

/*
for loop is commonly used when you know how many times
you want to execute a block of code.

Syntax:

for (initialization; condition; update) {
    // code
}
*/

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


/*
Execution:

1. let i = 1       -> initialization
2. i <= 5          -> condition
3. console.log(i)  -> code
4. i++             -> update
5. Repeat
*/


// ---------- Reverse loop ----------

for (let i = 5; i >= 1; i--) {
    console.log(i);
}


// ---------- Loop through an array ----------

let numbers = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


// ---------- Nested for loop ----------

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {
        console.log(i, j);
    }

}


// ==========================================================
// 2.5 while LOOP
// ==========================================================

/*
while loop executes as long as the condition is true.

Syntax:

while (condition) {
    // code
}
*/

let i = 1;

while (i <= 5) {
    console.log(i);

    i++;
}


/*
IMPORTANT:

Make sure the condition eventually becomes false.

Otherwise, you can create an INFINITE LOOP.
*/


// ---------- Example ----------

let count = 5;

while (count > 0) {
    console.log(count);

    count--;
}


// ==========================================================
// 2.6 do...while LOOP
// ==========================================================

/*
do...while executes the code at least ONCE.

Syntax:

do {
    // code
} while (condition);
*/

let number2 = 1;

do {
    console.log(number2);

    number2++;
} while (number2 <= 5);


/*
Difference:

while:
    condition is checked BEFORE execution.

do...while:
    code executes FIRST,
    then condition is checked.
*/


// ---------- Example ----------

let value = 10;

do {
    console.log("Executed");
} while (value < 5);

/*
Output:
Executed

Even though value < 5 is false,
the code executes once.
*/


// ==========================================================
// 2.7 break
// ==========================================================

/*
break immediately stops the loop or switch statement.
*/


// ---------- break in for loop ----------

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}

/*
Output:

1
2
3
4
*/


// ---------- break in while loop ----------

let count2 = 1;

while (count2 <= 10) {

    if (count2 === 6) {
        break;
    }

    console.log(count2);

    count2++;
}


// ---------- break in switch ----------

let choice = 2;

switch (choice) {

    case 1:
        console.log("One");
        break;

    case 2:
        console.log("Two");
        break;

    default:
        console.log("Other");
}


// ==========================================================
// 2.8 continue
// ==========================================================

/*
continue skips the CURRENT iteration and moves to
the next iteration of the loop.
*/


// ---------- continue in for loop ----------

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}

/*
Output:

1
2
4
5
*/


// ---------- Skip even numbers ----------

for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}

/*
Output:

1
3
5
7
9
*/


// ==========================================================
// break vs continue
// ==========================================================

/*
break
------------------------------------------------------------
Stops the ENTIRE loop.

Example:

for (...) {
    if (...) {
        break;
    }
}


continue
------------------------------------------------------------
Skips the CURRENT iteration and continues the loop.

Example:

for (...) {
    if (...) {
        continue;
    }
}
*/


// ==========================================================
// QUICK REVISION
// ==========================================================

/*
if / else
------------------------------------------------------------
Used for conditional decision-making.

if (condition) {
    // true
} else {
    // false
}


else if
------------------------------------------------------------
Used to check multiple conditions.

if (condition1) {
    ...
} else if (condition2) {
    ...
} else {
    ...
}


switch
------------------------------------------------------------
Used when comparing one expression against multiple values.

switch (value) {
    case 1:
        ...
        break;

    case 2:
        ...
        break;

    default:
        ...
}


TERNARY
------------------------------------------------------------
Short form of if...else.

condition ? trueValue : falseValue


for
------------------------------------------------------------
Best when the number of iterations is known.

for (initialization; condition; update) {
    ...
}


while
------------------------------------------------------------
Runs while a condition is true.

while (condition) {
    ...
}


do...while
------------------------------------------------------------
Runs at least once.

do {
    ...
} while (condition);


break
------------------------------------------------------------
Completely exits the loop.


continue
------------------------------------------------------------
Skips the current iteration.


IMPORTANT DIFFERENCES
------------------------------------------------------------

for
    -> Usually used when iteration count is known.

while
    -> Usually used when iteration count is unknown.

do...while
    -> Executes at least once.

break
    -> Stops the loop.

continue
    -> Skips one iteration.
*/