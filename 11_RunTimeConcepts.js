// ==========================================================
// JAVASCRIPT REVISION NOTES
// 11. JAVASCRIPT RUNTIME CONCEPTS
// ==========================================================


// ==========================================================
// 1. WHAT IS THE JAVASCRIPT RUNTIME?
// ==========================================================

// JavaScript is a programming language.
//
// To execute JavaScript, we need a runtime environment.
//
// Examples:
//
// Browser runtime
// Node.js runtime
//
// A JavaScript runtime typically includes:
//
// 1. JavaScript Engine
// 2. Call Stack
// 3. Memory Heap
// 4. Runtime APIs
// 5. Callback/Task Queue
// 6. Microtask Queue
// 7. Event Loop


// Browser example:
//
//       JavaScript Code
//             |
//             v
//       JavaScript Engine
//        /           \
//       /             \
// Call Stack       Memory Heap
//                    |
//                    v
//                Objects/Data
//
// Browser also provides APIs such as:
//
// setTimeout()
// fetch()
// DOM
// localStorage
// events
//
// These APIs are not part of the core JavaScript language.
// They are provided by the browser environment.



// ==========================================================
// 2. JAVASCRIPT ENGINE
// ==========================================================

// A JavaScript engine executes JavaScript code.
//
// Examples:
//
// Chrome / Edge
// -> V8
//
// Firefox
// -> SpiderMonkey
//
// Safari
// -> JavaScriptCore


// The engine is responsible for:
//
// - Parsing code
// - Compiling/interpreting code
// - Executing code
// - Managing memory


// V8 is used by:
//
// - Chrome
// - Node.js
// - Other environments using V8



// ==========================================================
// 3. MEMORY HEAP
// ==========================================================

// The Memory Heap is an area of memory where JavaScript
// stores dynamically allocated data such as objects,
// arrays, functions, etc.


// Example:

const user = {
    name: "John",
    age: 25
};


// The object is stored in memory.
//
// The variable "user" references that object.


// Example:

const numbers = [10, 20, 30];


// The array is also stored in memory.


// Mental model:
//
// Stack                  Heap
// ------                 ------
// user  ------------->   { name: "John", age: 25 }
// numbers ----------->   [10, 20, 30]


// NOTE:
//
// The exact internal memory representation is
// engine-dependent. This is a useful conceptual model,
// not a specification-level implementation detail.



// ==========================================================
// 4. CALL STACK
// ==========================================================

// The Call Stack keeps track of currently executing
// function calls.
//
// JavaScript uses a stack data structure:
//
// LIFO
// Last In, First Out


// Example:

function first() {

    second();

}

function second() {

    third();

}

function third() {

    console.log("Hello");

}

first();


// Call Stack progression:
//
// 1. first()
// 2. second()
// 3. third()
// 4. console.log()
//
// Then functions finish in reverse order.


// Visual:
//
// | third()  |  <- Top
// | second() |
// | first()  |
// | global   |
// ------------


// When third() finishes:
//
// | second() |
// | first()  |
// | global   |
// ------------


// When second() finishes:
//
// | first()  |
// | global   |
// ------------


// When first() finishes:
//
// | global   |
// ------------



// ==========================================================
// 5. STACK FRAME
// ==========================================================

// Every function call creates an execution frame
// on the Call Stack.
//
// A stack frame contains information needed
// to execute that function.
//
// Conceptually:
//
// function A()
// -> stack frame
//
// function B()
// -> another stack frame
//
// function C()
// -> another stack frame


function a() {

    const x = 10;

    b();

}


function b() {

    const y = 20;

    c();

}


function c() {

    const z = 30;

    console.log(z);

}


a();


// At the deepest point:
//
// | c() |
// | b() |
// | a() |
// | global |
// ---------



// ==========================================================
// 6. STACK OVERFLOW
// ==========================================================

// A stack overflow occurs when the Call Stack
// becomes too large.
//
// Usually caused by infinite or extremely deep recursion.


// Example:

function infinite() {

    infinite();

}


// DO NOT RUN:
//
// infinite();


// It would eventually cause an error similar to:
//
// RangeError: Maximum call stack size exceeded


// Why?
//
// infinite()
//     ↓
// infinite()
//     ↓
// infinite()
//     ↓
// infinite()
//     ↓
// ...
//
// The Call Stack keeps growing until its limit is reached.



// ==========================================================
// 7. WEB APIs
// ==========================================================

// Browsers provide Web APIs that JavaScript can use.
//
// Examples:
//
// setTimeout()
// setInterval()
// fetch()
// DOM APIs
// addEventListener()
// localStorage
// Geolocation
// Clipboard API


// These APIs are provided by the browser,
// not by the ECMAScript language itself.


// Example:

console.log("Start");

setTimeout(() => {

    console.log("Timer finished");

}, 2000);

console.log("End");


// Output:
//
// Start
// End
// Timer finished


// Conceptually:
//
// JavaScript
//     |
//     v
// Call Stack
//     |
//     | setTimeout()
//     v
// Browser Web API
//     |
//     | waits 2 seconds
//     v
// Task Queue
//     |
//     v
// Event Loop
//     |
//     v
// Call Stack



// ==========================================================
// 8. CALLBACK QUEUE / TASK QUEUE
// ==========================================================

// The Callback Queue is commonly also called:
//
// Task Queue
//
// It contains callbacks waiting to be executed
// when the Call Stack becomes available.


// Example:

console.log("A");

setTimeout(() => {

    console.log("B");

}, 0);

console.log("C");


// Output:
//
// A
// C
// B


// Why?
//
// 1. A executes.
// 2. setTimeout registers a timer.
// 3. C executes.
// 4. Timer callback is placed into the task queue.
// 5. Event Loop moves it to Call Stack when appropriate.
// 6. B executes.



// ==========================================================
// 9. MICROTASK QUEUE
// ==========================================================

// The Microtask Queue stores high-priority asynchronous
// callbacks.
//
// Common sources:
//
// Promise.then()
// Promise.catch()
// Promise.finally()
// queueMicrotask()
// MutationObserver (browser)


console.log("Start");


Promise.resolve().then(() => {

    console.log("Promise callback");

});


console.log("End");


// Output:
//
// Start
// End
// Promise callback


// Promise callback goes to the Microtask Queue.



// ==========================================================
// 10. MICROTASK QUEUE VS CALLBACK QUEUE
// ==========================================================

// Microtasks generally run before the next task/callback
// after the current Call Stack becomes empty.


// Example:

console.log("1");


setTimeout(() => {

    console.log("2");

}, 0);


Promise.resolve().then(() => {

    console.log("3");

});


console.log("4");


// Output:
//
// 1
// 4
// 3
// 2


// Execution:
//
// Synchronous:
// 1
// 4
//
// Microtask:
// 3
//
// Task:
// 2



// ==========================================================
// 11. EVENT LOOP
// ==========================================================

// The Event Loop coordinates:
//
// Call Stack
// Microtask Queue
// Task/Callback Queue


// Simplified model:
//
//             +----------------+
//             |   Call Stack   |
//             +----------------+
//                     ^
//                     |
//                Event Loop
//                     |
//          +----------+----------+
//          |                     |
//          v                     v
//   Microtask Queue        Task Queue
//   Promise callbacks      setTimeout
//   queueMicrotask         events
//                          etc.


// The Event Loop continuously checks whether
// JavaScript can process queued work.


// Simplified idea:
//
// while (runtime_is_running) {
//
//     execute_current_stack();
//
//     process_microtasks();
//
//     process_next_task();
//
// }



// ==========================================================
// 12. EVENT LOOP EXECUTION ORDER
// ==========================================================

// General simplified order:
//
// 1. Execute synchronous code.
// 2. When Call Stack is empty, process microtasks.
// 3. Then process eligible tasks/events.
// 4. Repeat.


console.log("A");


setTimeout(() => {

    console.log("B");

}, 0);


queueMicrotask(() => {

    console.log("C");

});


console.log("D");


// Output:
//
// A
// D
// C
// B


// Why?
//
// A and D
// -> synchronous
//
// C
// -> microtask
//
// B
// -> timer task



// ==========================================================
// 13. QUEUEMICROTASK()
// ==========================================================

// queueMicrotask() explicitly schedules a microtask.

console.log("Start");


queueMicrotask(() => {

    console.log("Microtask");

});


console.log("End");


// Output:
//
// Start
// End
// Microtask



// ==========================================================
// 14. PROMISES AND MICROTASKS
// ==========================================================

// Promise callbacks are scheduled as microtasks.

Promise.resolve("Hello")
    .then((value) => {

        console.log(value);

    });


// .then() does not execute immediately.
//
// It schedules a microtask.



// ==========================================================
// 15. NESTED MICROTASKS
// ==========================================================

console.log("1");


Promise.resolve().then(() => {

    console.log("2");

    Promise.resolve().then(() => {

        console.log("3");

    });

});


console.log("4");


// Output:
//
// 1
// 4
// 2
// 3


// The microtask created while processing another
// microtask is also processed before moving on
// to later tasks.



// ==========================================================
// 16. WEB API + TASK QUEUE + EVENT LOOP
// ==========================================================

// Example:

console.log("Start");


setTimeout(() => {

    console.log("Timer");

}, 0);


console.log("End");


// Conceptual execution:
//
// Step 1:
//
// Call Stack:
// console.log("Start")
//
// Output:
// Start


// Step 2:
//
// setTimeout() registers timer with browser runtime.
//
// Timer does not immediately go onto the Call Stack.


// Step 3:
//
// console.log("End")
//
// Output:
// End


// Step 4:
//
// Timer finishes.
//
// Callback becomes eligible for the task queue.


// Step 5:
//
// Event Loop sees Call Stack is available.
//
// Callback moves to Call Stack.


// Step 6:
//
// Output:
// Timer



// ==========================================================
// 17. GARBAGE COLLECTION
// ==========================================================

// Garbage Collection (GC) is automatic memory management.
//
// JavaScript automatically identifies objects
// that are no longer reachable and can reclaim
// their memory.


// Example:

let userData = {
    name: "John"
};


// userData references the object.


// Remove the reference:

userData = null;


// If there are no other references to the object,
// it becomes eligible for garbage collection.


// IMPORTANT:
//
// "Eligible for garbage collection"
// does NOT mean memory is freed immediately.
//
// The JavaScript engine decides when and how
// garbage collection occurs.



// ==========================================================
// 18. REACHABILITY
// ==========================================================

// Garbage collection is primarily based on reachability.
//
// An object is considered reachable if it can be accessed
// through references starting from known roots.


let user = {
    name: "John"
};


// user -> object
//
// The object is reachable.


// Remove reference:

user = null;


// If no other reference exists:
//
// object -> unreachable
//
// It can eventually be collected.



// ==========================================================
// 19. GARBAGE COLLECTION EXAMPLE
// ==========================================================

function createUser() {

    const user = {
        name: "John"
    };

    return user;

}


let person = createUser();


// The returned object is referenced by person.


// Later:

person = null;


// If there are no other references,
// the object can become eligible for GC.



// ==========================================================
// 20. MULTIPLE REFERENCES
// ==========================================================

let obj1 = {
    name: "John"
};

let obj2 = obj1;


// There are two references:
//
// obj1 ----┐
//          ↓
//        object
//          ↑
// obj2 ----┘


// Remove one:

obj1 = null;


// Object is still reachable through obj2.


// Remove second:

obj2 = null;


// Now the object may become unreachable.



// ==========================================================
// 21. CIRCULAR REFERENCES
// ==========================================================

// Modern garbage collectors can handle circular references
// as long as the objects are not reachable from roots.


// Example:

let a = {};
let b = {};

a.other = b;
b.other = a;


// Circular reference:
//
// a -> b
// ↑    |
// |    ↓
// +----+


// Remove external references:

a = null;
b = null;


// The cycle itself does not keep the objects alive forever.
// If unreachable from program roots,
// the objects can be garbage collected.



// ==========================================================
// 22. MEMORY LEAKS
// ==========================================================

// A memory leak occurs when memory that is no longer
// needed remains reachable and therefore cannot be
// garbage collected.


// Common causes:
//
// 1. Accidental global variables
// 2. Forgotten event listeners
// 3. Unremoved timers
// 4. Large objects kept in long-lived variables
// 5. Detached DOM elements still referenced
// 6. Growing caches without cleanup
// 7. Closures holding unnecessary data



// ==========================================================
// 23. ACCIDENTAL GLOBALS
// ==========================================================

// Avoid creating variables without declarations.


// BAD:
//
// function test() {
//
//     data = new Array(1000000);
//
// }


// In sloppy mode, this can create a global variable.
//
// Global references can live for a long time.


// GOOD:

function test() {

    const data = new Array(1000000);

}



// ==========================================================
// 24. EVENT LISTENER MEMORY LEAK
// ==========================================================

// Example concept:
//
// const button = document.querySelector("button");
//
// function handleClick() {
//
//     console.log("clicked");
//
// }
//
// button.addEventListener("click", handleClick);


// If the listener or referenced objects are kept
// unnecessarily, they can contribute to memory retention.
//
// Remove listeners when they are no longer needed:

button.removeEventListener("click", handleClick);


// This is especially important in long-lived applications,
// components, and dynamically created/destroyed UI.



// ==========================================================
// 25. TIMER MEMORY ISSUES
// ==========================================================

// Repeating timers continue running until cleared.

const intervalId = setInterval(() => {

    console.log("Running...");

}, 1000);


// Stop it when no longer needed:

clearInterval(intervalId);


// Similarly:

const timeoutId = setTimeout(() => {

    console.log("Hello");

}, 5000);


// Can cancel it:

clearTimeout(timeoutId);



// ==========================================================
// 26. MEMORY MANAGEMENT
// ==========================================================

// JavaScript automatically manages memory,
// but developers still need to avoid unnecessary
// references and excessive memory usage.


// General memory lifecycle:
//
// 1. Allocate memory
// 2. Use memory
// 3. Release/reclaim memory


// Example:

const userInfo = {
    name: "John",
    age: 25
};


// Memory allocated for object.
//
// When no longer needed:
//
// userInfo = null;
//
// But note:
// const cannot be reassigned.
//
// Use let if you need to remove the reference.


// Example:

let temporaryData = {
    largeData: new Array(100000)
};


// Later:

temporaryData = null;


// Object may become eligible for GC
// if no other references exist.



// ==========================================================
// 27. CONST DOES NOT MEAN IMMUTABLE
// ==========================================================

// Important memory/reference concept.

const userObject = {
    name: "John"
};


// This is allowed:

userObject.name = "Alice";


// This is NOT allowed:
//
// userObject = {};


// const prevents reassignment of the variable binding.
//
// It does not make the referenced object immutable.



// ==========================================================
// 28. MEMORY AND REFERENCES
// ==========================================================

let original = {
    name: "John"
};

let copy = original;


// Both variables reference the same object.
//
// original ----┐
//              ↓
//            object
//              ↑
// copy --------┘


copy.name = "Alice";

console.log(original.name);
// Alice


// Why?
//
// No new object was created.
// Both variables point to the same object.



// ==========================================================
// 29. CREATING A REAL COPY
// ==========================================================

const originalUser = {
    name: "John",
    age: 25
};


const copiedUser = {
    ...originalUser
};


copiedUser.name = "Alice";


console.log(originalUser.name);
// John


// A new object was created.
//
// Note:
// Spread creates a SHALLOW copy.
//
// Nested objects still share references.



// ==========================================================
// 30. SHALLOW COPY AND MEMORY
// ==========================================================

const originalData = {

    name: "John",

    address: {
        city: "Delhi"
    }

};


const copiedData = {
    ...originalData
};


copiedData.address.city = "Mumbai";


console.log(originalData.address.city);
// Mumbai


// Why?
//
// The outer object was copied,
// but the nested address object was still shared.


// Mental model:
//
// originalData -----> outer object
//                       |
//                       v
//                    address
//                       ↑
//                       |
// copiedData -----------+



// ==========================================================
// 31. DEEP COPY
// ==========================================================

// For suitable data, structuredClone() can create
// a deep copy.

const originalObject = {

    name: "John",

    address: {
        city: "Delhi"
    }

};


const deepCopy = structuredClone(originalObject);


deepCopy.address.city = "Mumbai";


console.log(originalObject.address.city);
// Delhi


// structuredClone() handles many built-in data types
// and circular references.
//
// It cannot clone every possible JavaScript value,
// such as functions.



// ==========================================================
// 32. CALL STACK + ASYNC EXAMPLE
// ==========================================================

console.log("1");


function firstTask() {

    console.log("2");

}


firstTask();


setTimeout(() => {

    console.log("3");

}, 0);


console.log("4");


// Output:
//
// 1
// 2
// 4
// 3


// Execution:
//
// 1 -> Call Stack
//
// firstTask()
// -> Call Stack
// -> prints 2
// -> removed
//
// setTimeout()
// -> browser/runtime handles timer
//
// 4 -> Call Stack
//
// timer callback
// -> Task Queue
//
// Event Loop
// -> Call Stack
//
// 3



// ==========================================================
// 33. CALL STACK + MICROTASK + TASK
// ==========================================================

console.log("A");


setTimeout(() => {

    console.log("B");

}, 0);


Promise.resolve().then(() => {

    console.log("C");

});


console.log("D");


// Output:
//
// A
// D
// C
// B


// Execution:
//
// Synchronous:
// A
// D
//
// Microtask Queue:
// C
//
// Task Queue:
// B



// ==========================================================
// 34. IMPORTANT EVENT LOOP RULE
// ==========================================================

// After the current synchronous task finishes,
// the runtime generally drains the microtask queue
// before moving to the next task.
//
// Therefore:
//
// Promise callbacks usually run before
// a setTimeout callback scheduled for the same turn.


// Example:

setTimeout(() => {

    console.log("Timer");

}, 0);


Promise.resolve().then(() => {

    console.log("Promise");

});


// Output:
//
// Promise
// Timer



// ==========================================================
// 35. MICROTASK STARVATION
// ==========================================================

// If code continuously schedules new microtasks,
// the runtime can spend a very long time processing
// microtasks before moving to other tasks.
//
// This can delay timers, user interactions,
// rendering, and other work.


// Example concept:
//
// function loop() {
//
//     queueMicrotask(loop);
//
// }
//
// loop();


// DO NOT RUN.
//
// It can continuously schedule microtasks.



// ==========================================================
// 36. JAVASCRIPT RUNTIME MENTAL MODEL
// ==========================================================


//                  JAVASCRIPT RUNTIME
//
//                         |
//             +-----------+-----------+
//             |                       |
//             v                       v
//       JavaScript Engine        Runtime APIs
//             |                  (Browser/Node)
//             |                       |
//       +-----+-----+          +------+-------+
//       |           |          |              |
//       v           v          v              v
//   Call Stack   Memory Heap  Timers        Fetch
//                                  |
//                                  v
//                              Queues
//                         /              \
//                        /                \
//                       v                  v
//                Microtask Queue      Task Queue
//                       \                /
//                        \              /
//                         v            v
//                           Event Loop
//                                |
//                                v
//                           Call Stack



// ==========================================================
// 37. IMPORTANT DISTINCTION
// ==========================================================


// JavaScript language:
//
// - Variables
// - Functions
// - Objects
// - Promises
// - Classes
// - Arrays
// - etc.


// Browser runtime:
//
// - DOM
// - setTimeout()
// - fetch()
// - localStorage
// - Web APIs
// - Event handling


// Node.js runtime:
//
// - File system APIs
// - Networking
// - Timers
// - Process APIs
// - Node-specific runtime features


// The exact runtime architecture differs between
// environments.



// ==========================================================
// 38. COMMON INTERVIEW QUESTIONS
// ==========================================================


// ----------------------------------------------------------
// What is the Call Stack?
// ----------------------------------------------------------

// A LIFO structure used to track currently executing
// JavaScript functions.


// ----------------------------------------------------------
// What is the Memory Heap?
// ----------------------------------------------------------

// A conceptual area where dynamically allocated data
// such as objects can be stored.


// ----------------------------------------------------------
// What are Web APIs?
// ----------------------------------------------------------

// Browser-provided APIs that allow JavaScript to
// interact with browser functionality.
//
// Examples:
//
// DOM
// fetch()
// setTimeout()
// events


// ----------------------------------------------------------
// What is the Callback Queue?
// ----------------------------------------------------------

// A queue containing tasks/callbacks waiting
// for execution when the Call Stack is available.


// ----------------------------------------------------------
// What is the Microtask Queue?
// ----------------------------------------------------------

// A queue for microtasks such as:
//
// Promise callbacks
// queueMicrotask()
// MutationObserver


// ----------------------------------------------------------
// Which runs first: Promise or setTimeout?
// ----------------------------------------------------------

// In the common case:
//
// Promise microtask
// runs before
// setTimeout task.
//
// Example:

setTimeout(() => console.log("Timer"), 0);

Promise.resolve().then(() => console.log("Promise"));


// Output:
//
// Promise
// Timer



// ----------------------------------------------------------
// What is the Event Loop?
// ----------------------------------------------------------

// The mechanism that coordinates the Call Stack
// and queued asynchronous work.


// ----------------------------------------------------------
// What is garbage collection?
// ----------------------------------------------------------

// Automatic reclamation of memory occupied by
// objects that are no longer reachable.


/*
------------------------------------------------------------
// IMPORTANT:
// Garbage collection is not simply:
// "delete every unused variable."
//
// It is based on reachability and is managed
// automatically by the JavaScript engine.
------------------------------------------------------------
*/


// ----------------------------------------------------------
// What is a memory leak?
// ----------------------------------------------------------

// Memory that is no longer logically needed but remains
// reachable, preventing garbage collection.


// Common causes:
//
// - Long-lived references
// - Event listeners
// - Timers
// - Global variables
// - Large caches
// - Detached DOM nodes



// ==========================================================
// 39. QUICK REVISION
// ==========================================================


// JAVASCRIPT ENGINE
//
// Executes JavaScript.
//
// Examples:
// V8
// SpiderMonkey
// JavaScriptCore


// MEMORY HEAP
//
// Conceptual area used for dynamically allocated data.
//
// Objects
// Arrays
// Functions
// etc.


// CALL STACK
//
// Tracks currently executing functions.
//
// LIFO:
// Last In, First Out.


// WEB APIs
//
// Browser-provided functionality:
//
// setTimeout()
// fetch()
// DOM
// events
// localStorage
// etc.


// CALLBACK / TASK QUEUE
//
// Holds tasks waiting to be executed.
//
// Examples:
// setTimeout callbacks
// many browser events


// MICROTASK QUEUE
//
// Higher-priority queued work.
//
// Examples:
// Promise.then()
// Promise.catch()
// Promise.finally()
// queueMicrotask()


// EVENT LOOP
//
// Coordinates:
//
// Call Stack
// Microtask Queue
// Task Queue


// SIMPLIFIED ORDER
//
// 1. Synchronous code
// 2. Microtasks
// 3. Tasks


// GARBAGE COLLECTION
//
// Automatically reclaims memory from unreachable objects.


// MEMORY LEAK
//
// Unnecessary objects remain reachable.
//
// Common causes:
//
// Event listeners
// Timers
// Global references
// Large caches
// Detached DOM elements


// MEMORY MANAGEMENT
//
// Avoid unnecessary references.
// Clear timers.
// Remove listeners when appropriate.
// Avoid accidental globals.
// Manage caches.
// Use appropriate copying strategies.


// ==========================================================
// END OF TOPIC 11
// ==========================================================