
/*
=========================================================
                JAVASCRIPT - ERROR HANDLING
=========================================================


1. ERROR HANDLING
---------------------------------------------------------

Error handling is the process of detecting,
managing and responding to errors that occur
during program execution.

It prevents unexpected errors from crashing
the entire application.

JavaScript provides the following keywords:

1. try
2. catch
3. finally
4. throw

Common types of errors:

1. SyntaxError:
   Occurs when JavaScript syntax is incorrect.

2. ReferenceError:
   Occurs when accessing a variable that does not exist
   or is not accessible.

3. TypeError:
   Occurs when an operation is performed on an
   inappropriate data type.

4. RangeError:
   Occurs when a value is outside its allowed range.

5. URIError:
   Occurs due to incorrect URI handling.


2. TRY BLOCK
---------------------------------------------------------

The try block contains code that may produce an error.

If an error occurs inside try, JavaScript stops
executing the remaining statements in that try block
and transfers control to catch (if present).

Syntax:
*/

try {
    // Code that may cause an error
    let result = 10 / 2;

    console.log(result); // 5

} catch (error) {
    console.log("An error occurred");
}

/*
IMPORTANT:

The try block must be followed by at least one
catch or finally block.


3. CATCH BLOCK
---------------------------------------------------------

The catch block handles errors thrown inside
the corresponding try block.

It prevents the application from terminating
unexpectedly due to an unhandled exception.

Example:
*/

try {
    let result = x + 10;

    console.log(result);

} catch (error) {
    console.log("Error:", error.message);
}

/*
Output:
Error: x is not defined

Explanation:

1. x is not declared.
2. JavaScript throws a ReferenceError.
3. Execution moves to catch.
4. error.message provides the error description.

Common error properties:

error.name:
Returns the error type.

error.message:
Returns the error message.

error.stack:
Provides stack trace information.
*/

try {
    let result = 10 / 0;

    throw new Error("Invalid calculation");

} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

/*
Output:

Error
Invalid calculation


4. FINALLY BLOCK
---------------------------------------------------------

The finally block contains code that executes
after try and catch, regardless of whether
an error occurs or not.

It is commonly used for cleanup operations.

Example:
*/

try {
    console.log("Try block executed");

    let result = 10 / 0;

    console.log(result);

} catch (error) {
    console.log("Error caught");

} finally {
    console.log("Finally block executed");
}

/*
Output:

Try block executed
Infinity
Finally block executed

NOTE:
10 / 0 does not throw an error in JavaScript.
It produces Infinity.

Example with an actual error:
*/

try {
    console.log("Starting operation");

    throw new Error("Something went wrong");

} catch (error) {
    console.log(error.message);

} finally {
    console.log("Cleanup completed");
}

/*
Output:

Starting operation
Something went wrong
Cleanup completed

IMPORTANT:

finally executes whether an error occurs or not.

It is useful for:
1. Closing files.
2. Releasing resources.
3. Cleaning up operations.
4. Hiding loading indicators.

A return or throw inside finally can override
a previous return or thrown error, so avoid
using them unnecessarily.


5. THROW KEYWORD
---------------------------------------------------------

The throw keyword is used to manually generate
an exception.

It allows developers to define when an error
should occur.

Syntax:

throw expression;

Example:
*/

function divide(a, b) {

    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }

    return a / b;
}

try {
    console.log(divide(10, 2)); // 5

    console.log(divide(10, 0));

} catch (error) {
    console.log(error.message);
}

/*
Output:

5
Division by zero is not allowed

Explanation:

1. divide() checks whether b is zero.
2. If b is zero, throw creates an error.
3. Execution stops inside the function.
4. Control moves to the nearest matching catch block.

IMPORTANT:

throw can throw different types of values,
but throwing Error objects is recommended.
*/

/*
6. CUSTOM ERRORS
---------------------------------------------------------

Custom errors are errors created by developers
to represent application-specific problems.

JavaScript allows us to create custom error classes
using the Error class.

Syntax:

class CustomError extends Error

Example:
*/

class AgeError extends Error {

    constructor(message) {
        super(message);

        this.name = "AgeError";
    }
}

function checkAge(age) {

    if (age < 18) {
        throw new AgeError("Age must be 18 or above");
    }

    return "Access granted";
}

try {
    console.log(checkAge(15));

} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

/*
Output:

AgeError
Age must be 18 or above

Explanation:

1. AgeError extends the built-in Error class.
2. super(message) calls the parent Error constructor.
3. this.name assigns a custom error name.
4. throw creates an instance of AgeError.
5. catch handles the custom error.

Another example:
*/

class InsufficientBalanceError extends Error {

    constructor(message) {
        super(message);
        this.name = "InsufficientBalanceError";
    }
}

function withdraw(balance, amount) {

    if (amount > balance) {
        throw new InsufficientBalanceError(
            "Insufficient account balance"
        );
    }

    return balance - amount;
}

try {
    console.log(withdraw(1000, 1500));

} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

/*
Output:

InsufficientBalanceError
Insufficient account balance

Advantages of custom errors:

1. Makes errors meaningful.
2. Improves debugging.
3. Helps identify specific problems.
4. Makes error handling more organized.


7. HANDLING ASYNCHRONOUS ERRORS
---------------------------------------------------------

Asynchronous operations include:

1. API requests.
2. Fetch operations.
3. Timers.
4. File operations.
5. Database requests.

Errors in asynchronous code need proper handling.

JavaScript commonly handles asynchronous errors
using:

1. Promises with .catch()
2. async/await with try...catch
3. Promise rejection handling.


A. HANDLING ERRORS USING PROMISES
---------------------------------------------------------

A Promise represents the eventual completion
or failure of an asynchronous operation.

A Promise has three states:

1. Pending:
   Initial state.

2. Fulfilled:
   Operation completed successfully.

3. Rejected:
   Operation failed.

The .catch() method handles rejected Promises.

Example:
*/

const myPromise = new Promise((resolve, reject) => {

    let success = false;

    if (success) {
        resolve("Operation successful");
    } else {
        reject(new Error("Operation failed"));
    }

});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("Error:", error.message);
    });

/*
Output:

Error: Operation failed


B. HANDLING ERRORS USING ASYNC/AWAIT
---------------------------------------------------------

async functions always return a Promise.

await pauses execution inside an async function
until the Promise settles.

try...catch is used to handle rejected Promises.

Example:
*/

function fetchData() {

    return new Promise((resolve, reject) => {

        let success = false;

        if (success) {
            resolve("Data received successfully");
        } else {
            reject(new Error("Failed to fetch data"));
        }

    });
}

async function getData() {

    try {
        const result = await fetchData();

        console.log(result);

    } catch (error) {
        console.log("Error:", error.message);
    }

}

getData();

/*
Output:

Error: Failed to fetch data

Explanation:

1. fetchData() returns a Promise.
2. await waits for the Promise to settle.
3. If fulfilled, execution continues inside try.
4. If rejected, the error is thrown at the await.
5. catch handles the error.


C. HANDLING ERRORS USING FETCH API
---------------------------------------------------------

fetch() is used to make HTTP requests.

IMPORTANT:
fetch() does not automatically reject for HTTP
error status codes like 404 or 500.

We must check response.ok manually.

Example:
*/

async function getUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(
                "HTTP Error: " + response.status
            );
        }

        const users = await response.json();

        console.log(users);

    } catch (error) {

        console.log("Failed to fetch users:", error.message);

    }

}

// getUsers();

/*
Explanation:

1. fetch() sends an HTTP request.
2. await waits for the response.
3. response.ok checks whether the HTTP status
   is in the successful 200-299 range.
4. If not successful, throw generates an error.
5. response.json() converts response data into JSON.
6. catch handles network, HTTP (manually thrown)
   and parsing errors.


D. HANDLING ERRORS USING FINALLY
---------------------------------------------------------

finally can also be used with asynchronous functions.

Example:
*/

async function loadData() {

    try {

        console.log("Loading data...");

        await Promise.reject(
            new Error("Data loading failed")
        );

    } catch (error) {

        console.log(error.message);

    } finally {

        console.log("Loading completed");

    }

}

loadData();

/*
Output:

Loading data...
Data loading failed
Loading completed


E. HANDLING UNCAUGHT PROMISE REJECTIONS
---------------------------------------------------------

If a Promise is rejected without a rejection
handler, it becomes an unhandled rejection.

Browsers and Node.js provide an
unhandledrejection event or process-level
unhandled rejection handling.

Browser example:
*/

// window.addEventListener("unhandledrejection", (event) => {
//     console.log("Unhandled rejection:", event.reason);
// });

/*
IMPORTANT:

Always handle Promise rejections using .catch()
or try...catch with await.

A try...catch around a Promise call does not catch
a later rejection unless the Promise is awaited
or explicitly handled.

Example:
*/

// Incorrect:
try {
    fetchData(); // Rejection is not caught here.
} catch (error) {
    console.log(error);
}

// Correct:
async function example() {
    try {
        await fetchData();
    } catch (error) {
        console.log(error.message);
    }
}

// example();


// =========================================================
                //    QUICK REVISION
// =========================================================

// TRY:
// Contains code that may generate an error.

// CATCH:
// Handles errors thrown inside try.

// FINALLY:
// Executes after try/catch, regardless of success or failure.

// THROW:
// Manually generates an exception.

// ERROR:
// Built-in object representing an error.

// CUSTOM ERROR:
// Developer-defined error class extending Error.

// PROMISE:
// Represents the eventual success or failure
// of an asynchronous operation.

// .CATCH():
// Handles rejected Promises.

// ASYNC/AWAIT:
// Provides a cleaner way to write asynchronous code.

// RESPONSE.OK:
// Checks whether an HTTP response has a successful status.

// UNHANDLED REJECTION:
// A rejected Promise without a rejection handler.


// =========================================================
//                     END OF NOTES
// =========================================================
