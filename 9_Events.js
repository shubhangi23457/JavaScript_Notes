// ==========================================================
// JAVASCRIPT REVISION NOTES
// 9. EVENTS
// ==========================================================


// ==========================================================
// 1. WHAT ARE EVENTS?
// ==========================================================

// An event is an action or occurrence that happens in the browser.
//
// Examples:
// - User clicks a button
// - User types on keyboard
// - Mouse moves
// - Form is submitted
// - Input value changes
// - Page loads
// - Element gets focus
//
// JavaScript can listen for these events and execute code.


// Common events:
//
// click
// dblclick
// mouseenter
// mouseleave
// mousemove
// keydown
// keyup
// keypress (older/deprecated; avoid in modern code)
// input
// change
// submit
// focus
// blur
// load
// DOMContentLoaded



// ==========================================================
// 2. EVENT LISTENERS
// ==========================================================

// addEventListener() is the preferred way to handle events.


// Syntax:
//
// element.addEventListener("event", function);


// Example:

const button = document.querySelector("#btn");

button.addEventListener("click", function() {

    console.log("Button clicked");

});


// ----------------------------------------------------------
// ARROW FUNCTION
// ----------------------------------------------------------

button.addEventListener("click", () => {

    console.log("Button clicked");

});


// ----------------------------------------------------------
// NAMED FUNCTION
// ----------------------------------------------------------

function handleClick() {

    console.log("Button clicked");

}

button.addEventListener("click", handleClick);


// ----------------------------------------------------------
// REMOVE EVENT LISTENER
// ----------------------------------------------------------

// To remove a listener, the same function reference
// must be passed.

function sayHello() {

    console.log("Hello");

}

button.addEventListener("click", sayHello);

button.removeEventListener("click", sayHello);


// This will NOT work:

button.addEventListener("click", function() {
    console.log("Hello");
});

button.removeEventListener("click", function() {
    console.log("Hello");
});

// Because these are two different function objects.


// ----------------------------------------------------------
// MULTIPLE EVENT LISTENERS
// ----------------------------------------------------------

button.addEventListener("click", () => {
    console.log("First listener");
});

button.addEventListener("click", () => {
    console.log("Second listener");
});


// Both listeners can execute.



// ==========================================================
// 3. EVENT OBJECT
// ==========================================================

// When an event occurs, the browser creates an Event object.
//
// It contains information about the event.

button.addEventListener("click", function(event) {

    console.log(event);

});


// "event" is commonly written as:
//
// event
// e
// evt


// Example:

button.addEventListener("click", function(e) {

    console.log(e.type);

});


// Output:
//
// click


// ----------------------------------------------------------
// target
// ----------------------------------------------------------

// event.target = element that triggered the event.

button.addEventListener("click", function(e) {

    console.log(e.target);

});


// ----------------------------------------------------------
// currentTarget
// ----------------------------------------------------------

// event.currentTarget = element whose event listener
// is currently executing.

button.addEventListener("click", function(e) {

    console.log(e.currentTarget);

});


// Important difference:
//
// target
// -> Actual element where event originated.
//
// currentTarget
// -> Element on which the listener is running.


// ----------------------------------------------------------
// preventDefault()
// ----------------------------------------------------------

// Prevents browser's default action.


// ----------------------------------------------------------
// stopPropagation()
// ----------------------------------------------------------

// Stops the event from propagating to other elements.


// ----------------------------------------------------------
// key information
// ----------------------------------------------------------

document.addEventListener("keydown", function(e) {

    console.log(e.key);
    console.log(e.code);
});


// Example:
//
// Press A
//
// e.key  -> "a"
// e.code -> "KeyA"


// ----------------------------------------------------------
// Mouse information
// ----------------------------------------------------------

document.addEventListener("click", function(e) {

    console.log(e.clientX);
    console.log(e.clientY);

});



// ==========================================================
// 4. EVENT BUBBLING
// ==========================================================

// Event bubbling means an event starts at the target element
// and moves upward through its ancestors.
//
// Direction:
//
// Child
//   ↑
// Parent
//   ↑
// Grandparent
//   ↑
// document


// Example HTML:
//
// <div id="parent">
//     <button id="child">Click</button>
// </div>


const parent = document.querySelector("#parent");
const child = document.querySelector("#child");


child.addEventListener("click", function() {

    console.log("Child clicked");

});


parent.addEventListener("click", function() {

    console.log("Parent clicked");

});


// When button is clicked:
//
// Child clicked
// Parent clicked


// This happens because the event bubbles upward.


// ----------------------------------------------------------
// BUBBLING EXAMPLE
// ----------------------------------------------------------

const grandParent = document.querySelector("#grandParent");
const parentBox = document.querySelector("#parentBox");
const childButton = document.querySelector("#childButton");


grandParent.addEventListener("click", () => {

    console.log("Grandparent");

});


parentBox.addEventListener("click", () => {

    console.log("Parent");

});


childButton.addEventListener("click", () => {

    console.log("Child");

});


// Clicking child:
//
// Child
// Parent
// Grandparent



// ==========================================================
// 5. EVENT CAPTURING
// ==========================================================

// Event capturing is the opposite direction of bubbling.
//
// Direction:
//
// document
//   ↓
// Grandparent
//   ↓
// Parent
//   ↓
// Child


// By default, addEventListener() listens during bubbling phase.
//
// To use capturing:

parent.addEventListener("click", function() {

    console.log("Parent capturing");

}, true);


// Or:

parent.addEventListener("click", function() {

    console.log("Parent capturing");

}, { capture: true });


// Example:

grandParent.addEventListener("click", () => {

    console.log("Grandparent");

}, { capture: true });


parentBox.addEventListener("click", () => {

    console.log("Parent");

}, { capture: true });


childButton.addEventListener("click", () => {

    console.log("Child");

});


// Clicking child can produce:
//
// Grandparent
// Parent
// Child
//
// because parent/grandparent listeners are in capture phase.



// ==========================================================
// 6. EVENT PROPAGATION
// ==========================================================

// Event propagation has three phases:
//
// 1. Capturing phase
// 2. Target phase
// 3. Bubbling phase


// Overall flow:
//
// document
//    ↓
// capture phase
//    ↓
// target
//    ↓
// bubble phase
//    ↑
// document


// Most event handlers are commonly used in bubbling phase.



// ==========================================================
// 7. STOPPING EVENT PROPAGATION
// ==========================================================


// stopPropagation()
// prevents the event from moving further through
// the propagation path.


child.addEventListener("click", function(event) {

    event.stopPropagation();

    console.log("Child clicked");

});


// Parent listener will not receive this click
// through propagation.



// ==========================================================
// 8. EVENT DELEGATION
// ==========================================================

// Event delegation means:
//
// Add one event listener to a parent instead of
// adding separate listeners to every child.
//
// It works because of event bubbling.


// Example HTML:
//
// <ul id="list">
//     <li>Apple</li>
//     <li>Banana</li>
//     <li>Mango</li>
// </ul>


const list = document.querySelector("#list");


list.addEventListener("click", function(event) {

    if (event.target.matches("li")) {

        console.log(event.target.textContent);

    }

});


// Clicking:
//
// Apple
// -> Apple
//
// Banana
// -> Banana
//
// Mango
// -> Mango


// ----------------------------------------------------------
// WHY USE EVENT DELEGATION?
// ----------------------------------------------------------

// Without delegation:
//
// Every child gets its own listener.
//
// With delegation:
//
// One parent listener handles all children.
//
// Benefits:
//
// - Less code
// - Better performance for many elements
// - Works well with dynamically added elements
// - Easier event management


// ----------------------------------------------------------
// closest()
// ----------------------------------------------------------

// Useful when the clicked element may be inside
// another element.

list.addEventListener("click", function(event) {

    const item = event.target.closest("li");

    if (!item) {
        return;
    }

    console.log(item.textContent);

});


// Example:
//
// <li>
//     <button>
//         Delete
//     </button>
// </li>
//
// event.target may be the button.
//
// closest("li") finds the related li.



// ==========================================================
// 9. PREVENTING DEFAULT BEHAVIOR
// ==========================================================

// Some browser actions happen automatically.
//
// Examples:
//
// Clicking <a>
// -> Navigates to another URL.
//
// Submitting <form>
// -> Usually submits/reloads page.
//
// event.preventDefault()
// -> Prevents that default behavior.


// ----------------------------------------------------------
// LINK EXAMPLE
// ----------------------------------------------------------

// HTML:
//
// <a href="https://example.com" id="link">Open</a>


const link = document.querySelector("#link");


link.addEventListener("click", function(event) {

    event.preventDefault();

    console.log("Navigation prevented");

});


// ----------------------------------------------------------
// FORM EXAMPLE
// ----------------------------------------------------------

const form = document.querySelector("#form");


form.addEventListener("submit", function(event) {

    event.preventDefault();

    console.log("Form submission prevented");

});


// This is commonly used when JavaScript handles
// form submission manually.



// ==========================================================
// 10. KEYBOARD EVENTS
// ==========================================================

// Main modern keyboard events:
//
// keydown
// keyup


// ----------------------------------------------------------
// keydown
// ----------------------------------------------------------

// Fires when a key is pressed.

document.addEventListener("keydown", function(event) {

    console.log("Key down:", event.key);

});


// ----------------------------------------------------------
// keyup
// ----------------------------------------------------------

// Fires when a key is released.

document.addEventListener("keyup", function(event) {

    console.log("Key up:", event.key);

});


// ----------------------------------------------------------
// key vs code
// ----------------------------------------------------------

document.addEventListener("keydown", function(event) {

    console.log("Key:", event.key);
    console.log("Code:", event.code);

});


// Example:
//
// Press A:
//
// key  -> "a"
// code -> "KeyA"


// Press Enter:
//
// key  -> "Enter"
// code -> "Enter"


// Press Space:
//
// key  -> " "
// code -> "Space"


// ----------------------------------------------------------
// Detect Enter key
// ----------------------------------------------------------

document.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        console.log("Enter pressed");

    }

});


// ----------------------------------------------------------
// Detect Escape key
// ----------------------------------------------------------

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        console.log("Escape pressed");

    }

});


// ----------------------------------------------------------
// Modifier keys
// ----------------------------------------------------------

document.addEventListener("keydown", function(event) {

    if (event.ctrlKey) {
        console.log("Ctrl pressed");
    }

    if (event.shiftKey) {
        console.log("Shift pressed");
    }

    if (event.altKey) {
        console.log("Alt pressed");
    }

    if (event.metaKey) {
        console.log("Meta pressed");
    }

});


// Useful shortcut example:

document.addEventListener("keydown", function(event) {

    if (event.ctrlKey && event.key === "s") {

        event.preventDefault();

        console.log("Custom save action");

    }

});



// ==========================================================
// 11. MOUSE EVENTS
// ==========================================================


// Common mouse events:
//
// click
// dblclick
// mousedown
// mouseup
// mousemove
// mouseenter
// mouseleave
// mouseover
// mouseout


// ----------------------------------------------------------
// click
// ----------------------------------------------------------

button.addEventListener("click", function() {

    console.log("Clicked");

});


// ----------------------------------------------------------
// dblclick
// ----------------------------------------------------------

button.addEventListener("dblclick", function() {

    console.log("Double clicked");

});


// ----------------------------------------------------------
// mousedown
// ----------------------------------------------------------

button.addEventListener("mousedown", function() {

    console.log("Mouse button pressed");

});


// ----------------------------------------------------------
// mouseup
// ----------------------------------------------------------

button.addEventListener("mouseup", function() {

    console.log("Mouse button released");

});


// ----------------------------------------------------------
// mousemove
// ----------------------------------------------------------

document.addEventListener("mousemove", function(event) {

    console.log(event.clientX, event.clientY);

});


// ----------------------------------------------------------
// mouseenter
// ----------------------------------------------------------

button.addEventListener("mouseenter", function() {

    console.log("Mouse entered button");

});


// ----------------------------------------------------------
// mouseleave
// ----------------------------------------------------------

button.addEventListener("mouseleave", function() {

    console.log("Mouse left button");

});


// ----------------------------------------------------------
// mouseover vs mouseenter
// ----------------------------------------------------------

// mouseover:
// Can fire when moving between parent and child elements.
//
// mouseenter:
// Fires when entering the element itself.
//
// mouseenter is often preferable for simple hover behavior.



// ==========================================================
// 12. MOUSE EVENT COORDINATES
// ==========================================================

document.addEventListener("click", function(event) {

    console.log("clientX:", event.clientX);
    console.log("clientY:", event.clientY);

    console.log("pageX:", event.pageX);
    console.log("pageY:", event.pageY);

});


// clientX / clientY
// -> Position relative to viewport.
//
// pageX / pageY
// -> Position relative to entire document/page.



// ==========================================================
// 13. FORM EVENTS
// ==========================================================


// Common form events:
//
// submit
// input
// change
// focus
// blur
// reset


// ----------------------------------------------------------
// input
// ----------------------------------------------------------

// Fires whenever the value changes while typing.

const input = document.querySelector("#username");


input.addEventListener("input", function(event) {

    console.log(event.target.value);

});


// Useful for:
//
// - Live validation
// - Search suggestions
// - Character counters
// - Live preview


// ----------------------------------------------------------
// change
// ----------------------------------------------------------

// Fires when the value has been changed/committed.

input.addEventListener("change", function(event) {

    console.log("Changed:", event.target.value);

});


// ----------------------------------------------------------
// focus
// ----------------------------------------------------------

input.addEventListener("focus", function() {

    console.log("Input focused");

});


// ----------------------------------------------------------
// blur
// ----------------------------------------------------------

input.addEventListener("blur", function() {

    console.log("Input lost focus");

});


// Useful for validation after leaving an input.


// ----------------------------------------------------------
// submit
// ----------------------------------------------------------

form.addEventListener("submit", function(event) {

    event.preventDefault();

    console.log("Form submitted");

});


// ----------------------------------------------------------
// reset
// ----------------------------------------------------------

form.addEventListener("reset", function() {

    console.log("Form reset");

});



// ==========================================================
// 14. FORM VALIDATION WITH EVENTS
// ==========================================================

const emailInput = document.querySelector("#email");


emailInput.addEventListener("input", function(event) {

    const email = event.target.value;

    if (!email.includes("@")) {

        console.log("Invalid email");

    } else {

        console.log("Valid email");

    }

});


// A better application would normally use
// more complete validation rules.



// ==========================================================
// 15. EVENT TARGET
// ==========================================================


// Example:

button.addEventListener("click", function(event) {

    console.log(event.target);

});


// If the button is clicked:
//
// event.target
// -> clicked button


// ----------------------------------------------------------
// currentTarget
// ----------------------------------------------------------

button.addEventListener("click", function(event) {

    console.log(event.currentTarget);

});


// event.currentTarget
// -> element that owns the listener


// IMPORTANT:
//
// event.target !== event.currentTarget
//
// They can be the same when the listener is directly
// attached to the clicked element.
//
// They can be different when event delegation is used.



// ==========================================================
// 16. PRACTICAL EVENT DELEGATION EXAMPLE
// ==========================================================


// HTML:
//
// <ul id="todoList">
//     <li>
//         <span>Learn JavaScript</span>
//         <button class="delete">Delete</button>
//     </li>
// </ul>


const todoList = document.querySelector("#todoList");


todoList.addEventListener("click", function(event) {

    if (event.target.classList.contains("delete")) {

        const item = event.target.closest("li");

        item.remove();

    }

});


// Benefits:
//
// - Only one listener
// - Works for dynamically created items
// - No need to attach listener to every delete button



// ==========================================================
// 17. DYNAMIC ELEMENTS + EVENTS
// ==========================================================


// If an element is dynamically created after the
// original JavaScript runs, directly attaching a listener
// before it exists will not work.


// Event delegation solves this problem.


// Parent exists:

const container2 = document.querySelector("#container");


container2.addEventListener("click", function(event) {

    if (event.target.matches(".dynamic-button")) {

        console.log("Dynamic button clicked");

    }

});


// Later:

const dynamicButton = document.createElement("button");

dynamicButton.classList.add("dynamic-button");

dynamicButton.textContent = "Dynamic Button";

container2.append(dynamicButton);


// The parent listener can handle the click.



// ==========================================================
// 18. EVENT LISTENER OPTIONS
// ==========================================================


// addEventListener() can accept an options object.

element.addEventListener("click", function() {

    console.log("Clicked");

}, {
    capture: false,
    once: true
});


// ----------------------------------------------------------
// once
// ----------------------------------------------------------

// Listener runs only once.

button.addEventListener("click", function() {

    console.log("This runs only once");

}, {
    once: true
});


// ----------------------------------------------------------
// capture
// ----------------------------------------------------------

button.addEventListener("click", function() {

    console.log("Capture phase");

}, {
    capture: true
});


// ----------------------------------------------------------
// passive
// ----------------------------------------------------------

// Tells the browser that the listener will not call
// preventDefault().
//
// Commonly useful for certain scrolling/touch events.

document.addEventListener("touchstart", function() {

    console.log("Touch started");

}, {
    passive: true
});



// ==========================================================
// 19. COMMON INTERVIEW QUESTIONS
// ==========================================================


// ----------------------------------------------------------
// What is event bubbling?
// ----------------------------------------------------------

// Event travels from target element upward
// through its ancestors.


// ----------------------------------------------------------
// What is event capturing?
// ----------------------------------------------------------

// Event travels from the outer ancestor toward
// the target element.


// ----------------------------------------------------------
// What is event delegation?
// ----------------------------------------------------------

// Attaching one listener to a parent to handle
// events from multiple child elements.


// ----------------------------------------------------------
// preventDefault vs stopPropagation
// ----------------------------------------------------------

// preventDefault()
// -> Stops browser's default action.
//
// Example:
// Prevent form submission or link navigation.
//
//
// stopPropagation()
// -> Stops event propagation through the DOM.


// ----------------------------------------------------------
// target vs currentTarget
// ----------------------------------------------------------

// target
// -> Element that triggered the event.
//
// currentTarget
// -> Element whose listener is currently executing.


// ----------------------------------------------------------
// addEventListener vs onclick
// ----------------------------------------------------------

// onclick:
//
// button.onclick = function() {
//     console.log("Clicked");
// };


// addEventListener():

button.addEventListener("click", function() {
    console.log("Clicked");
});


// addEventListener() is generally preferred because:
//
// - Multiple listeners can be attached
// - Better separation of code
// - Supports options such as once/capture/passive


// ==========================================================
// 20. QUICK REVISION
// ==========================================================


// EVENT LISTENER
//
// element.addEventListener("click", handler)
// element.removeEventListener("click", handler)


// EVENT OBJECT
//
// event
// event.type
// event.target
// event.currentTarget
// event.key
// event.code
// event.clientX
// event.clientY
// event.preventDefault()
// event.stopPropagation()


// EVENT PROPAGATION
//
// Capturing
//     ↓
// Target
//     ↓
// Bubbling


// EVENT BUBBLING
//
// Child
//   ↑
// Parent
//   ↑
// Grandparent


// EVENT CAPTURING
//
// Grandparent
//      ↓
// Parent
//      ↓
// Child


// EVENT DELEGATION
//
// Parent listener
// + event.target
// + event bubbling
// = handle many children


// PREVENT DEFAULT
//
// event.preventDefault()


// STOP PROPAGATION
//
// event.stopPropagation()


// KEYBOARD EVENTS
//
// keydown
// keyup
//
// event.key
// event.code
// event.ctrlKey
// event.shiftKey
// event.altKey
// event.metaKey


// MOUSE EVENTS
//
// click
// dblclick
// mousedown
// mouseup
// mousemove
// mouseenter
// mouseleave
// mouseover
// mouseout


// FORM EVENTS
//
// submit
// input
// change
// focus
// blur
// reset


// EVENT LISTENER OPTIONS
//
// { once: true }
// { capture: true }
// { passive: true }


// END OF TOPIC 9
