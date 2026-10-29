// ==========================================================
// JAVASCRIPT REVISION NOTES
// 8. DOM MANIPULATION
// ==========================================================


// ==========================================================
// 1. DOM BASICS
// ==========================================================

// DOM = Document Object Model
//
// The browser converts an HTML document into a tree of objects.
//
// JavaScript can use the DOM to:
// - Read HTML
// - Change HTML
// - Change CSS
// - Add elements
// - Remove elements
// - Handle user interaction
// - Work with forms


// Example HTML:
//
// <body>
//     <h1 id="title">Hello</h1>
//     <p class="text">Welcome</p>
// </body>
//
// JavaScript can access and modify these elements.


// The main entry point is:

console.log(document);


// document represents the entire HTML page.


// ----------------------------------------------------------
// DOM TREE
// ----------------------------------------------------------

// Example:
//
//          document
//              |
//            html
//           /    \
//        head    body
//                  |
//                 h1
//                  |
//               "Hello"


// Common DOM node types:
//
// Element node   -> <div>, <h1>, <p>
// Text node      -> "Hello"
// Attribute      -> id, class, src, href
// Document       -> entire page



// ==========================================================
// 2. SELECTING ELEMENTS
// ==========================================================


// ----------------------------------------------------------
// getElementById()
// ----------------------------------------------------------

// Selects one element using its id.

const title = document.getElementById("title");

console.log(title);


// HTML:
//
// <h1 id="title">Hello</h1>


// ----------------------------------------------------------
// getElementsByClassName()
// ----------------------------------------------------------

// Returns a live HTMLCollection.

const items = document.getElementsByClassName("item");

console.log(items);


// HTML:
//
// <p class="item">One</p>
// <p class="item">Two</p>


// Access individual elements:

console.log(items[0]);
console.log(items[1]);


// ----------------------------------------------------------
// getElementsByTagName()
// ----------------------------------------------------------

const paragraphs = document.getElementsByTagName("p");

console.log(paragraphs);


// ----------------------------------------------------------
// querySelector()
// ----------------------------------------------------------

// Returns the FIRST matching element.

const heading = document.querySelector("h1");


// ID selector:

const element1 = document.querySelector("#title");


// Class selector:

const element2 = document.querySelector(".item");


// Tag selector:

const element3 = document.querySelector("p");


// CSS selector:

const element4 = document.querySelector(".container p");


// ----------------------------------------------------------
// querySelectorAll()
// ----------------------------------------------------------

// Returns ALL matching elements as a NodeList.

const allItems = document.querySelectorAll(".item");

console.log(allItems);


// Can use forEach():

allItems.forEach((item) => {
    console.log(item);
});


// ----------------------------------------------------------
// COMMON SELECTORS
// ----------------------------------------------------------

// #id       -> ID
// .class    -> class
// tag       -> element
// div p     -> p inside div
// div > p   -> direct child p
// input[type="text"] -> input with type text



// ==========================================================
// 3. CHANGING CONTENT
// ==========================================================


// ----------------------------------------------------------
// textContent
// ----------------------------------------------------------

// Gets or changes text content.

const heading1 = document.querySelector("h1");

heading1.textContent = "Hello JavaScript";


// HTML becomes:
//
// <h1>Hello JavaScript</h1>


// ----------------------------------------------------------
// innerHTML
// ----------------------------------------------------------

// Gets or sets HTML content.

const box = document.querySelector(".box");

box.innerHTML = "<strong>Hello</strong>";


// HTML becomes:
//
// <div class="box">
//     <strong>Hello</strong>
// </div>


// ----------------------------------------------------------
// textContent vs innerHTML
// ----------------------------------------------------------

// textContent treats the value as plain text.

heading1.textContent = "<strong>Hello</strong>";


// Displays:
//
// <strong>Hello</strong>


// innerHTML parses the value as HTML.

heading1.innerHTML = "<strong>Hello</strong>";


// Displays:
//
// Hello
// with bold formatting


// IMPORTANT:
// Avoid putting untrusted user input directly into innerHTML.
// It can create XSS/security problems.


// ----------------------------------------------------------
// innerText
// ----------------------------------------------------------

// Gets/sets visible rendered text.

heading1.innerText = "Visible text";


// General difference:
//
// textContent -> all text content
// innerText   -> rendered/visible text
// innerHTML   -> HTML content



// ==========================================================
// 4. CHANGING STYLES
// ==========================================================


// ----------------------------------------------------------
// style.property
// ----------------------------------------------------------

const title2 = document.querySelector("h1");

title2.style.color = "blue";

title2.style.backgroundColor = "yellow";

title2.style.fontSize = "30px";


// CSS property names with hyphens become camelCase:
//
// background-color
// backgroundColor
//
// font-size
// fontSize
//
// margin-top
// marginTop


// ----------------------------------------------------------
// MULTIPLE STYLES
// ----------------------------------------------------------

const box2 = document.querySelector(".box");

box2.style.width = "200px";
box2.style.height = "100px";
box2.style.padding = "20px";


// ----------------------------------------------------------
// cssText
// ----------------------------------------------------------

box2.style.cssText = `
    color: red;
    background-color: black;
    padding: 20px;
`;


// ----------------------------------------------------------
// getComputedStyle()
// ----------------------------------------------------------

// Gets the final computed CSS values.

const styles = getComputedStyle(box2);

console.log(styles.color);
console.log(styles.width);
console.log(styles.height);


// IMPORTANT:
// For large styling changes, prefer CSS classes
// instead of changing many inline styles with JavaScript.



// ==========================================================
// 5. CREATING ELEMENTS
// ==========================================================


// ----------------------------------------------------------
// createElement()
// ----------------------------------------------------------

const newParagraph = document.createElement("p");

console.log(newParagraph);


// Add text:

newParagraph.textContent = "This is a new paragraph.";


// Add to page:

document.body.appendChild(newParagraph);


// ----------------------------------------------------------
// Creating a complete element
// ----------------------------------------------------------

const newButton = document.createElement("button");

newButton.textContent = "Click Me";

document.body.appendChild(newButton);


// ----------------------------------------------------------
// append()
// ----------------------------------------------------------

// Can append multiple values.

const container = document.querySelector(".container");

const p1 = document.createElement("p");

p1.textContent = "Hello";

container.append(p1);


// Can also append text:

container.append("Some text");


// ----------------------------------------------------------
// prepend()
// ----------------------------------------------------------

// Adds content at the beginning.

container.prepend("First content");


// ----------------------------------------------------------
// appendChild()
// ----------------------------------------------------------

// Adds one Node as the last child.

container.appendChild(p1);


// appendChild() returns the added node.



// ==========================================================
// 6. REMOVING ELEMENTS
// ==========================================================


// ----------------------------------------------------------
// remove()
// ----------------------------------------------------------

const unwanted = document.querySelector(".unwanted");

unwanted.remove();


// ----------------------------------------------------------
// removeChild()
// ----------------------------------------------------------

const parent = document.querySelector(".parent");

const child = document.querySelector(".child");

parent.removeChild(child);


// Difference:
//
// element.remove()
// -> Element removes itself.
//
// parent.removeChild(child)
// -> Parent removes the child.



// ==========================================================
// 7. INSERTING ELEMENTS
// ==========================================================


// ----------------------------------------------------------
// before()
// ----------------------------------------------------------

const element = document.querySelector(".box");

const newElement = document.createElement("p");

newElement.textContent = "Before box";

element.before(newElement);


// ----------------------------------------------------------
// after()
// ----------------------------------------------------------

const anotherElement = document.createElement("p");

anotherElement.textContent = "After box";

element.after(anotherElement);


// ----------------------------------------------------------
// insertBefore()
// ----------------------------------------------------------

const list = document.querySelector("ul");

const newItem = document.createElement("li");

newItem.textContent = "New Item";

const firstItem = list.querySelector("li");

list.insertBefore(newItem, firstItem);



// ==========================================================
// 8. ATTRIBUTES
// ==========================================================


// HTML:
//
// <img id="photo" src="image.jpg" alt="Profile">


// ----------------------------------------------------------
// getAttribute()
// ----------------------------------------------------------

const image = document.querySelector("#photo");

console.log(image.getAttribute("src"));

console.log(image.getAttribute("alt"));


// ----------------------------------------------------------
// setAttribute()
// ----------------------------------------------------------

image.setAttribute("alt", "Profile Image");

image.setAttribute("title", "My Profile");


// ----------------------------------------------------------
// hasAttribute()
// ----------------------------------------------------------

console.log(image.hasAttribute("src"));
// true


// ----------------------------------------------------------
// removeAttribute()
// ----------------------------------------------------------

image.removeAttribute("title");


// ----------------------------------------------------------
// Direct property access
// ----------------------------------------------------------

console.log(image.src);

console.log(image.alt);


// Change:

image.alt = "New Image";


// ----------------------------------------------------------
// Data attributes
// ----------------------------------------------------------

// HTML:
//
// <button data-id="101">Delete</button>


const button = document.querySelector("button");

console.log(button.dataset.id);


// Change data attribute:

button.dataset.id = "202";


// dataset.id corresponds to:
//
// data-id



// ==========================================================
// 9. CLASSES
// ==========================================================


// HTML:
//
// <div id="box" class="box active"></div>


const box3 = document.querySelector("#box");


// ----------------------------------------------------------
// className
// ----------------------------------------------------------

console.log(box3.className);


// Set classes:

box3.className = "container active";


// WARNING:
// className replaces the entire class attribute.


// ----------------------------------------------------------
// classList
// ----------------------------------------------------------

// classList is preferred for manipulating individual classes.


// add()

box3.classList.add("active");


// remove()

box3.classList.remove("active");


// toggle()

box3.classList.toggle("active");


// contains()

console.log(box3.classList.contains("active"));


// replace()

box3.classList.replace("active", "inactive");


// Example:

if (box3.classList.contains("active")) {
    console.log("Box is active");
}



// ==========================================================
// 10. TRAVERSING THE DOM
// ==========================================================

// DOM traversal means moving between related elements.


// Example:
//
// <div class="parent">
//     <p class="child">Hello</p>
// </div>


const childElement = document.querySelector(".child");


// ----------------------------------------------------------
// parentElement
// ----------------------------------------------------------

console.log(childElement.parentElement);


// ----------------------------------------------------------
// parentNode
// ----------------------------------------------------------

console.log(childElement.parentNode);


// Usually parentElement is preferred when working
// specifically with HTML elements.


// ----------------------------------------------------------
// children
// ----------------------------------------------------------

const parentElement = document.querySelector(".parent");

console.log(parentElement.children);


// Returns only element children.


// ----------------------------------------------------------
// firstElementChild
// ----------------------------------------------------------

console.log(parentElement.firstElementChild);


// ----------------------------------------------------------
// lastElementChild
// ----------------------------------------------------------

console.log(parentElement.lastElementChild);


// ----------------------------------------------------------
// nextElementSibling
// ----------------------------------------------------------

console.log(childElement.nextElementSibling);


// ----------------------------------------------------------
// previousElementSibling
// ----------------------------------------------------------

console.log(childElement.previousElementSibling);


// ----------------------------------------------------------
// childNodes
// ----------------------------------------------------------

// Includes text nodes, comments, and elements.

console.log(parentElement.childNodes);


// IMPORTANT:
//
// children
// -> only element children
//
// childNodes
// -> all child nodes



// ==========================================================
// 11. FORMS & INPUTS
// ==========================================================


// Example HTML:
//
// <form id="loginForm">
//     <input id="username" type="text">
//     <input id="password" type="password">
//     <button type="submit">Login</button>
// </form>


// ----------------------------------------------------------
// Selecting an input
// ----------------------------------------------------------

const usernameInput = document.querySelector("#username");


// ----------------------------------------------------------
// Getting input value
// ----------------------------------------------------------

console.log(usernameInput.value);


// ----------------------------------------------------------
// Setting input value
// ----------------------------------------------------------

usernameInput.value = "John";


// ----------------------------------------------------------
// Checking checkbox
// ----------------------------------------------------------

// HTML:
//
// <input type="checkbox" id="terms">


const checkbox = document.querySelector("#terms");

console.log(checkbox.checked);


// Set:

checkbox.checked = true;


// ----------------------------------------------------------
// Getting selected option
// ----------------------------------------------------------

// HTML:
//
// <select id="country">
//     <option value="india">India</option>
//     <option value="usa">USA</option>
// </select>


const country = document.querySelector("#country");

console.log(country.value);


// ----------------------------------------------------------
// Form submit event
// ----------------------------------------------------------

const form = document.querySelector("#loginForm");

form.addEventListener("submit", function(event) {

    // Prevent page reload/default form submission
    event.preventDefault();

    console.log("Form submitted");

});


// ----------------------------------------------------------
// Reading form values
// ----------------------------------------------------------

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const username = usernameInput.value;

    console.log(username);

});


// ----------------------------------------------------------
// Form reset
// ----------------------------------------------------------

form.reset();


// Resets all form controls to their initial values.



// ==========================================================
// 12. COMMON FORM EVENTS
// ==========================================================


// submit
// -> Form submitted


// input
// -> Fires whenever input value changes.

usernameInput.addEventListener("input", function(event) {

    console.log(event.target.value);

});


// change
// -> Fires when value is committed/changed.

usernameInput.addEventListener("change", function(event) {

    console.log(event.target.value);

});


// focus
// -> Element receives focus.

usernameInput.addEventListener("focus", function() {

    console.log("Input focused");

});


// blur
// -> Element loses focus.

usernameInput.addEventListener("blur", function() {

    console.log("Input lost focus");

});


// ==========================================================
// 13. DOM CONTENT LOADED
// ==========================================================

// JavaScript may need to wait until HTML is loaded.

document.addEventListener("DOMContentLoaded", function() {

    console.log("DOM is ready");

});


// If your script is placed at the end of <body>,
// DOM elements are generally already available.


// Example:
//
// <body>
//
//     <h1 id="title">Hello</h1>
//
//     <script src="script.js"></script>
// </body>



// ==========================================================
// 14. PRACTICAL DOM EXAMPLE
// ==========================================================


// HTML:
//
// <h1 id="title">Todo List</h1>
// <input id="taskInput" type="text">
// <button id="addBtn">Add</button>
// <ul id="taskList"></ul>


const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");


addBtn.addEventListener("click", function() {

    const taskText = taskInput.value.trim();

    // Don't add empty tasks
    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");

    li.textContent = taskText;

    taskList.appendChild(li);

    taskInput.value = "";

});


// This example demonstrates:
//
// Selecting elements
// Reading input
// Creating elements
// Changing content
// Appending elements
// Clearing input



// ==========================================================
// 15. DOM PERFORMANCE & BEST PRACTICES
// ==========================================================


// Prefer:
//
// querySelector()
// querySelectorAll()
// classList
// textContent
// createElement()
// append()
// remove()


// Instead of changing many inline styles:
//
// element.style.color = "red";
// element.style.fontSize = "20px";
// element.style.padding = "10px";


// Prefer a CSS class:
//
// element.classList.add("highlight");


// CSS:
//
// .highlight {
//     color: red;
//     font-size: 20px;
//     padding: 10px;
// }


// Benefits:
//
// - Cleaner JavaScript
// - Easier maintenance
// - Reusable styles
// - Better separation of concerns



// ==========================================================
// 16. COMMON INTERVIEW POINTS
// ==========================================================


// ----------------------------------------------------------
// querySelector vs querySelectorAll
// ----------------------------------------------------------

// querySelector()
// -> Returns first matching element.

// querySelectorAll()
// -> Returns all matching elements as NodeList.


// ----------------------------------------------------------
// getElementById vs querySelector
// ----------------------------------------------------------

// getElementById("title")
// -> Selects by ID.
//
// querySelector("#title")
// -> Uses CSS selector syntax.


// ----------------------------------------------------------
// textContent vs innerHTML
// ----------------------------------------------------------

// textContent
// -> Plain text.
//
// innerHTML
// -> HTML content.
//
// Never blindly insert untrusted user input using innerHTML.


// ----------------------------------------------------------
// children vs childNodes
// ----------------------------------------------------------

// children
// -> Element children only.
//
// childNodes
// -> Includes text nodes, comments, and elements.


// ----------------------------------------------------------
// className vs classList
// ----------------------------------------------------------

// className
// -> Can replace entire class attribute.
//
// classList
// -> Add/remove/toggle individual classes.


// ----------------------------------------------------------
// append vs appendChild
// ----------------------------------------------------------

// append()
// -> Can add multiple nodes/text.
//
// appendChild()
// -> Adds one Node.


// ----------------------------------------------------------
// remove()
// ----------------------------------------------------------

// element.remove()
// -> Removes the element from the DOM.


// ==========================================================
// 17. QUICK REVISION
// ==========================================================


// DOM
//
// document
// DOM tree
// Element
// Node
// Text node
// Attribute


// SELECTING
//
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()


// CONTENT
//
// textContent
// innerText
// innerHTML


// STYLES
//
// element.style.color
// element.style.backgroundColor
// element.style.fontSize
// getComputedStyle()


// CREATE / INSERT
//
// document.createElement()
// append()
// appendChild()
// prepend()
// before()
// after()
// insertBefore()


// REMOVE
//
// element.remove()
// parent.removeChild()


// ATTRIBUTES
//
// getAttribute()
// setAttribute()
// hasAttribute()
// removeAttribute()
// element.src
// element.id
// element.value
// dataset


// CLASSES
//
// className
// classList.add()
// classList.remove()
// classList.toggle()
// classList.contains()
// classList.replace()


// TRAVERSAL
//
// parentElement
// parentNode
// children
// childNodes
// firstElementChild
// lastElementChild
// nextElementSibling
// previousElementSibling


// FORMS
//
// input.value
// checkbox.checked
// form.submit
// form.reset()
// submit event
// input event
// change event
// focus event
// blur event
// event.preventDefault()


// ==========================================================
// END OF TOPIC 8
// ==========================================================