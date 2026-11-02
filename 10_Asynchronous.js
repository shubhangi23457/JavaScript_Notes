// ==========================================================
// JAVASCRIPT REVISION NOTES
// 10. ASYNCHRONOUS JAVASCRIPT
// ==========================================================


// ==========================================================
// 1. WHAT IS SYNCHRONOUS JAVASCRIPT?
// ==========================================================

// Synchronous code executes one statement at a time,
// in order.
//
// Each operation must finish before the next operation starts.

console.log("Start");

console.log("Middle");

console.log("End");


// Output:
//
// Start
// Middle
// End


// Example:

function task1() {
    console.log("Task 1");
}

function task2() {
    console.log("Task 2");
}

task1();
task2();


// Task 2 waits until Task 1 finishes.



// ==========================================================
// 2. WHAT IS ASYNCHRONOUS JAVASCRIPT?
// ==========================================================

// Asynchronous code allows certain operations to start
// and complete later without blocking the rest of the code.
//
// Common asynchronous operations:
//
// - setTimeout()
// - setInterval()
// - Fetch API
// - Promises
// - async/await
// - DOM events
// - Many Web APIs


console.log("Start");

setTimeout(() => {

    console.log("Async task");

}, 2000);

console.log("End");


// Output:
//
// Start
// End
// Async task
//
// The timeout callback executes later.


// IMPORTANT:
//
// JavaScript itself is single-threaded,
// but the runtime environment (browser/Node.js)
// provides mechanisms for handling asynchronous work.



// ==========================================================
// 3. SYNCHRONOUS VS ASYNCHRONOUS
// ==========================================================


// Synchronous:
//
// console.log("A");
// console.log("B");
// console.log("C");
//
// Output:
//
// A
// B
// C


// Asynchronous:
//
// console.log("A");
//
// setTimeout(() => {
//     console.log("B");
// }, 1000);
//
// console.log("C");
//
// Output:
//
// A
// C
// B



// ==========================================================
// 4. CALLBACKS
// ==========================================================

// A callback is a function passed to another function
// to be executed later or when an operation is completed.


// Simple example:

function greet(name, callback) {

    console.log(`Hello ${name}`);

    callback();

}


function sayBye() {

    console.log("Goodbye");

}


greet("John", sayBye);


// Output:
//
// Hello John
// Goodbye


// ----------------------------------------------------------
// CALLBACK WITH ASYNCHRONOUS CODE
// ----------------------------------------------------------

function fetchData(callback) {

    setTimeout(() => {

        const data = {
            id: 1,
            name: "John"
        };

        callback(data);

    }, 2000);

}


fetchData((data) => {

    console.log(data);

});


// The callback runs after the asynchronous operation
// completes.



// ==========================================================
// 5. CALLBACK WITH ERROR HANDLING
// ==========================================================

// A common callback pattern is:
//
// callback(error, result)


function getUser(callback) {

    setTimeout(() => {

        const success = true;

        if (success) {

            callback(null, {
                id: 1,
                name: "John"
            });

        } else {

            callback("Failed to fetch user", null);

        }

    }, 1000);

}


getUser((error, user) => {

    if (error) {

        console.log(error);

        return;
    }

    console.log(user);

});


// This is sometimes called the
// "error-first callback pattern."



// ==========================================================
// 6. CALLBACK HELL
// ==========================================================

// Callback hell happens when many asynchronous operations
// depend on each other and callbacks become deeply nested.


// Example:

getUser((user) => {

    getPosts(user, (posts) => {

        getComments(posts, (comments) => {

            getLikes(comments, (likes) => {

                console.log(likes);

            });

        });

    });

});


// Structure:
//
// getUser()
//     ↓
// getPosts()
//     ↓
// getComments()
//     ↓
// getLikes()


// Problems:
//
// - Hard to read
// - Hard to maintain
// - Difficult error handling
// - Deep nesting
// - Difficult debugging


// Promises were introduced to make asynchronous code
// easier to manage.



// ==========================================================
// 7. PROMISES
// ==========================================================

// A Promise represents the eventual completion or failure
// of an asynchronous operation.
//
// A Promise can eventually produce:
//
// - a value
// OR
// - an error


// Creating a Promise:

const promise = new Promise((resolve, reject) => {

    // asynchronous operation

    const success = true;

    if (success) {

        resolve("Operation successful");

    } else {

        reject("Operation failed");

    }

});


// Consuming Promise:

promise
    .then((result) => {

        console.log(result);

    })
    .catch((error) => {

        console.log(error);

    });



// ==========================================================
// 8. PROMISE STATES
// ==========================================================

// A Promise has three states:
//
// 1. Pending
// 2. Fulfilled
// 3. Rejected


// ----------------------------------------------------------
// PENDING
// ----------------------------------------------------------

// Initial state.
//
// Operation has not completed yet.

const pendingPromise = new Promise((resolve, reject) => {

    // still waiting...

});


// ----------------------------------------------------------
// FULFILLED
// ----------------------------------------------------------

// Operation completed successfully.

const fulfilledPromise = Promise.resolve("Success");


// ----------------------------------------------------------
// REJECTED
// ----------------------------------------------------------

// Operation failed.

const rejectedPromise = Promise.reject("Failed");


// Promise state flow:
//
// Pending
//    |
//    +----> Fulfilled
//    |
//    +----> Rejected


// IMPORTANT:
//
// A Promise can settle only once.
//
// Once fulfilled or rejected,
// its state cannot change again.



// ==========================================================
// 9. Promise.resolve()
// ==========================================================

// Creates an already fulfilled Promise.

const p1 = Promise.resolve("Hello");

p1.then((value) => {

    console.log(value);

});


// ==========================================================
// 10. Promise.reject()
// ==========================================================

// Creates an already rejected Promise.

const p2 = Promise.reject("Something went wrong");

p2.catch((error) => {

    console.log(error);

});



// ==========================================================
// 11. .then()
// ==========================================================

// .then() runs when the Promise is fulfilled.

Promise.resolve("Data received")
    .then((data) => {

        console.log(data);

    });


// .then() receives the resolved value.



// ==========================================================
// 12. .catch()
// ==========================================================

// .catch() handles rejected Promises/errors.

Promise.reject("Network error")
    .catch((error) => {

        console.log("Error:", error);

    });


// Example:

const dataPromise = new Promise((resolve, reject) => {

    reject("Failed to load data");

});


dataPromise
    .then((data) => {

        console.log(data);

    })
    .catch((error) => {

        console.log(error);

    });



// ==========================================================
// 13. .finally()
// ==========================================================

// .finally() runs whether the Promise succeeds or fails.

fetchData()
    .then((data) => {

        console.log(data);

    })
    .catch((error) => {

        console.log(error);

    })
    .finally(() => {

        console.log("Operation finished");

    });


// Common use:
//
// - Hide loading spinner
// - Close connection
// - Cleanup resources
// - Reset UI state



// ==========================================================
// 14. PROMISE CHAINING
// ==========================================================

// Promises can be chained.

Promise.resolve(10)

    .then((number) => {

        return number * 2;

    })

    .then((number) => {

        return number + 5;

    })

    .then((result) => {

        console.log(result);

    });


// Output:
//
// 25


// Each .then() can return a value,
// which becomes the input of the next .then().



// ==========================================================
// 15. PROMISE CHAINING WITH ASYNC OPERATIONS
// ==========================================================

function getUserData() {

    return Promise.resolve({
        id: 1,
        name: "John"
    });

}


function getUserPosts(userId) {

    return Promise.resolve([
        "Post 1",
        "Post 2"
    ]);

}


getUserData()

    .then((user) => {

        console.log(user);

        return getUserPosts(user.id);

    })

    .then((posts) => {

        console.log(posts);

    })

    .catch((error) => {

        console.log(error);

    });


// Returning the Promise is important.
//
// return getUserPosts(user.id);
//
// Without returning it,
// the next .then() may not wait for it.



// ==========================================================
// 16. ASYNC FUNCTIONS
// ==========================================================

// An async function always returns a Promise.

async function greetUser() {

    return "Hello";

}


console.log(greetUser());


// The return value is automatically wrapped in a Promise.


// Equivalent concept:
//
// function greetUser() {
//     return Promise.resolve("Hello");
// }



// ==========================================================
// 17. AWAIT
// ==========================================================

// await pauses execution inside an async function
// until the Promise settles.
//
// It makes asynchronous code look more like
// synchronous code.


// Example:

function getData() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Data received");

        }, 2000);

    });

}


async function showData() {

    const data = await getData();

    console.log(data);

}


showData();


// IMPORTANT:
//
// await can normally be used inside an async function.
//
// Modern JavaScript also supports top-level await
// in appropriate ES module contexts.



// ==========================================================
// 18. ASYNC / AWAIT FLOW
// ==========================================================

async function example() {

    console.log("Start");

    const result = await Promise.resolve("Hello");

    console.log(result);

    console.log("End");

}


example();


// await pauses the async function,
// but it does NOT block the entire JavaScript runtime.



// ==========================================================
// 19. ERROR HANDLING WITH ASYNC / AWAIT
// ==========================================================

// Use try/catch.

async function fetchUser() {

    try {

        const response = await Promise.reject("Failed");

        console.log(response);

    } catch (error) {

        console.log("Error:", error);

    }

}


fetchUser();


// ----------------------------------------------------------
// try / catch / finally
// ----------------------------------------------------------

async function loadData() {

    try {

        const data = await getData();

        console.log(data);

    } catch (error) {

        console.log("Something went wrong:", error);

    } finally {

        console.log("Finished");

    }

}


loadData();



// ==========================================================
// 20. ERROR HANDLING WITH PROMISES
// ==========================================================

Promise.resolve("Success")

    .then((result) => {

        console.log(result);

        throw new Error("Something went wrong");

    })

    .catch((error) => {

        console.log(error.message);

    });


// Errors thrown inside a .then()
// can be handled by a later .catch().



// ==========================================================
// 21. PROMISE.ALL()
// ==========================================================

// Promise.all() runs multiple Promises concurrently
// and waits for all of them to fulfill.

const promise1 = Promise.resolve("A");
const promise2 = Promise.resolve("B");
const promise3 = Promise.resolve("C");


Promise.all([
    promise1,
    promise2,
    promise3
])
.then((results) => {

    console.log(results);

});


// Output:
//
// ["A", "B", "C"]


// Result order matches the input order,
// not necessarily completion order.


// ----------------------------------------------------------
// Promise.all() WITH REJECTION
// ----------------------------------------------------------

const pA = Promise.resolve("A");
const pB = Promise.reject("B failed");
const pC = Promise.resolve("C");


Promise.all([pA, pB, pC])

    .then((results) => {

        console.log(results);

    })

    .catch((error) => {

        console.log(error);

    });


// If ANY Promise rejects,
// Promise.all() rejects.


// Use Promise.all() when:
//
// "I need all operations to succeed."



// ==========================================================
// 22. PROMISE.RACE()
// ==========================================================

// Promise.race() settles as soon as the FIRST
// Promise settles.
//
// The first settled Promise can be:
// - fulfilled
// - rejected


const slow = new Promise((resolve) => {

    setTimeout(() => {

        resolve("Slow");

    }, 2000);

});


const fast = new Promise((resolve) => {

    setTimeout(() => {

        resolve("Fast");

    }, 1000);

});


Promise.race([slow, fast])

    .then((result) => {

        console.log(result);

    });


// Output:
//
// Fast


// Use Promise.race() when:
//
// "I only care about whichever Promise settles first."



// ==========================================================
// 23. PROMISE.ALL() VS PROMISE.RACE()
// ==========================================================


// Promise.all()
//
// Waits for all Promises.
//
// If all succeed:
//
// [result1, result2, result3]
//
// If one rejects:
//
// Rejects.


// Promise.race()
//
// Waits for the first Promise to settle.
//
// First fulfilled -> resolves
// First rejected  -> rejects



// ==========================================================
// 24. EVENT LOOP
// ==========================================================

// JavaScript is single-threaded.
//
// It uses the Event Loop to coordinate
// synchronous and asynchronous tasks.


// Important components:
//
// 1. Call Stack
// 2. Web APIs / Runtime APIs
// 3. Callback Queue (Task Queue)
// 4. Microtask Queue
// 5. Event Loop


// Basic flow:
//
// JavaScript code
//      ↓
// Call Stack
//      ↓
// Web APIs
//      ↓
// Callback / Microtask Queue
//      ↓
// Event Loop
//      ↓
// Call Stack



// ==========================================================
// 25. EVENT LOOP EXAMPLE
// ==========================================================

console.log("1");

setTimeout(() => {

    console.log("2");

}, 0);

console.log("3");


// Output:
//
// 1
// 3
// 2


// Why?
//
// 1. "1" executes immediately.
// 2. setTimeout callback is scheduled.
// 3. "3" executes.
// 4. After the current synchronous code finishes,
//    the callback can run.



// ==========================================================
// 26. MICROTASK QUEUE VS CALLBACK QUEUE
// ==========================================================

// Promise callbacks go into the Microtask Queue.
//
// setTimeout callbacks go into the Task/Callback Queue.

console.log("Start");


setTimeout(() => {

    console.log("setTimeout");

}, 0);


Promise.resolve().then(() => {

    console.log("Promise");

});


console.log("End");


// Output:
//
// Start
// End
// Promise
// setTimeout


// Why?
//
// Synchronous code runs first.
//
// Then microtasks are processed.
//
// Then tasks such as setTimeout callbacks
// are processed when the event loop gets to them.


// IMPORTANT:
//
// Microtasks generally have priority over regular tasks
// once the current call stack is empty.



// ==========================================================
// 27. EVENT LOOP + MULTIPLE PROMISES
// ==========================================================

console.log("A");


Promise.resolve().then(() => {

    console.log("B");

});


Promise.resolve().then(() => {

    console.log("C");

});


console.log("D");


// Output:
//
// A
// D
// B
// C


// Synchronous code first:
// A
// D
//
// Then microtasks:
// B
// C



// ==========================================================
// 28. EVENT LOOP + NESTED TASKS
// ==========================================================

console.log("1");


setTimeout(() => {

    console.log("2");

    Promise.resolve().then(() => {

        console.log("3");

    });

}, 0);


Promise.resolve().then(() => {

    console.log("4");

});


console.log("5");


// Output:
//
// 1
// 5
// 4
// 2
// 3


// Explanation:
//
// 1. Synchronous:
//    1
//    5
//
// 2. Microtask:
//    4
//
// 3. Timer callback:
//    2
//
// 4. Microtask created inside timer:
//    3



// ==========================================================
// 29. CALLBACKS vs PROMISES vs ASYNC/AWAIT
// ==========================================================


// CALLBACK:
//
// getData(function(data) {
//
//     console.log(data);
//
// });


// PROMISE:
//
// getData()
//     .then((data) => {
//
//         console.log(data);
//
//     })
//     .catch((error) => {
//
//         console.log(error);
//
//     });


// ASYNC/AWAIT:
//
// async function load() {
//
//     try {
//
//         const data = await getData();
//
//         console.log(data);
//
//     } catch (error) {
//
//         console.log(error);
//
//     }
//
// }


// General progression:
//
// Callbacks
//     ↓
// Promises
//     ↓
// async / await


// async/await is built on top of Promises.



// ==========================================================
// 30. REAL-WORLD FETCH EXAMPLE
// ==========================================================


// fetch() returns a Promise.

async function getUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );


        // Check HTTP status.

        if (!response.ok) {

            throw new Error(
                `HTTP error: ${response.status}`
            );

        }


        // response.json() also returns a Promise.

        const users = await response.json();

        console.log(users);

    } catch (error) {

        console.error("Failed:", error);

    }

}


getUsers();


// Important:
//
// fetch() rejects for certain network-level failures,
// but an HTTP error such as 404 does not automatically
// reject the Promise.
//
// Check response.ok or response.status.



// ==========================================================
// 31. CONCURRENT VS SEQUENTIAL AWAIT
// ==========================================================


// ----------------------------------------------------------
// SEQUENTIAL
// ----------------------------------------------------------

// These run one after another.

async function sequential() {

    const result1 = await getData();

    const result2 = await getData();

    console.log(result1);
    console.log(result2);

}


// If each takes 2 seconds,
// total time can be roughly 4 seconds.


// ----------------------------------------------------------
// CONCURRENT
// ----------------------------------------------------------

// Start both operations first.

async function concurrent() {

    const promiseA = getData();
    const promiseB = getData();

    const [resultA, resultB] = await Promise.all([
        promiseA,
        promiseB
    ]);

    console.log(resultA);
    console.log(resultB);

}


// If both take 2 seconds,
// total time can be roughly 2 seconds.



// ==========================================================
// 32. COMMON ASYNC MISTAKES
// ==========================================================


// ----------------------------------------------------------
// MISTAKE 1: Forgetting await
// ----------------------------------------------------------

async function example1() {

    const data = getData();

    console.log(data);

}


// data is a Promise,
// not the resolved value.


// Correct:

async function example2() {

    const data = await getData();

    console.log(data);

}


// ----------------------------------------------------------
// MISTAKE 2: Forgetting return in Promise chain
// ----------------------------------------------------------

function wrong() {

    getData().then((data) => {

        getData();

    });

}


// The second Promise isn't returned.


// Correct:

function correct() {

    return getData().then((data) => {

        return getData();

    });

}


// ----------------------------------------------------------
// MISTAKE 3: Not handling errors
// ----------------------------------------------------------

async function badExample() {

    const data = await Promise.reject("Error");

}


// Better:

async function goodExample() {

    try {

        const data = await Promise.reject("Error");

    } catch (error) {

        console.log(error);

    }

}



// ==========================================================
// 33. IMPORTANT PROMISE METHODS
// ==========================================================


// Promise.all()
// -> Wait for all.
// -> Rejects if any rejects.


// Promise.race()
// -> First settled Promise wins.


// Promise.allSettled()
// -> Waits for all, regardless of success/failure.
//
// Example:

Promise.allSettled([
    Promise.resolve("Success"),
    Promise.reject("Failed")
])
.then((results) => {

    console.log(results);

});


// Promise.any()
// -> Resolves when the first Promise fulfills.
// -> Rejects only if all Promises reject.

Promise.any([
    Promise.reject("Failed 1"),
    Promise.resolve("Success"),
    Promise.resolve("Success 2")
])
.then((result) => {

    console.log(result);

})
.catch((error) => {

    console.log(error);

});


// NOTE:
// Promise.allSettled() and Promise.any()
// are useful Promise combinators in modern JavaScript.



// ==========================================================
// 34. QUICK REVISION
// ==========================================================


// SYNCHRONOUS
//
// Executes line by line.
// Each operation waits for the previous operation.


// ASYNCHRONOUS
//
// Allows operations to complete later.
// Common examples:
// setTimeout()
// fetch()
// Promise
// async/await


// CALLBACK
//
// Function passed to another function.


// CALLBACK HELL
//
// Deeply nested callbacks.
// Hard to read and maintain.


// PROMISE
//
// Represents future completion/failure.
//
// States:
// Pending
// Fulfilled
// Rejected


// PROMISE METHODS
//
// .then()
// -> Success
//
// .catch()
// -> Error
//
// .finally()
// -> Always executes


// ASYNC
//
// Makes a function return a Promise.


// AWAIT
//
// Waits for a Promise inside an async function.
// Makes async code easier to read.


// ERROR HANDLING
//
// try
// catch
// finally
//
// Promise:
// .catch()


// PROMISE.ALL()
//
// Wait for all.
// One rejection causes rejection.


// PROMISE.RACE()
//
// First settled Promise wins.


// EVENT LOOP
//
// Call Stack
//     ↓
// Web APIs
//     ↓
// Queues
//     ↓
// Event Loop
//     ↓
// Call Stack


// QUEUES
//
// Microtask Queue:
// Promise.then()
// Promise.catch()
// Promise.finally()
//
// Task/Callback Queue:
// setTimeout()
// setInterval()
// Many browser events


// IMPORTANT ORDER
//
// 1. Synchronous code
// 2. Microtasks
// 3. Tasks such as timers/events


// END OF TOPIC 10
