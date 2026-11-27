
/*
=========================================================
              BROWSER APIs IN JAVASCRIPT
=========================================================

WHAT ARE BROWSER APIs?

Browser APIs are built-in features provided by the web
browser that allow JavaScript to interact with the browser
and the user's device.

Examples:
1. localStorage
2. sessionStorage
3. Cookies
4. Fetch API
5. URL API
6. Timers
7. Geolocation API
8. Clipboard API

These APIs are provided by the browser environment,
not by core JavaScript itself.


=========================================================
1. LOCAL STORAGE
=========================================================

WHAT IS localStorage?

- localStorage allows us to store data in the browser.
- Data remains stored even after closing the browser.
- Data is stored as key-value pairs.
- Data is stored as strings.
- It has no automatic expiration time.

IMPORTANT METHODS:

1. localStorage.setItem(key, value)
   Stores data.

2. localStorage.getItem(key)
   Retrieves data.

3. localStorage.removeItem(key)
   Removes a particular item.

4. localStorage.clear()
   Removes all localStorage data.

5. localStorage.key(index)
   Returns the key at a particular index.

EXAMPLE:

*/

// Store data
localStorage.setItem("username", "Rahul");
localStorage.setItem("age", "21");

// Retrieve data
let username = localStorage.getItem("username");

console.log(username); // Rahul

// Remove one item
localStorage.removeItem("age");

// Remove all items
// localStorage.clear();

/*
IMPORTANT:

localStorage stores everything as a string.

If we want to store an object or array,
we use JSON.stringify().

To retrieve it as an object, use JSON.parse().
*/

const user = {
    name: "Rahul",
    age: 21
};

// Convert object into JSON string
localStorage.setItem("user", JSON.stringify(user));

// Convert JSON string back into object
const storedUser = JSON.parse(localStorage.getItem("user"));

console.log(storedUser.name); // Rahul


/*
=========================================================
2. SESSION STORAGE
=========================================================

WHAT IS sessionStorage?

- sessionStorage stores data for one browser tab session.
- Data remains available while that tab is open.
- Data is generally cleared when the tab or window is closed.
- Data is stored as key-value pairs.
- Values are stored as strings.

METHODS:

sessionStorage.setItem()
sessionStorage.getItem()
sessionStorage.removeItem()
sessionStorage.clear()

EXAMPLE:
*/

sessionStorage.setItem("course", "JavaScript");

const course = sessionStorage.getItem("course");

console.log(course); // JavaScript

sessionStorage.removeItem("course");

// sessionStorage.clear();

/*
LOCAL STORAGE VS SESSION STORAGE

localStorage:
- Data persists until manually removed.
- Shared by same-origin pages across tabs.
- Useful for theme preferences and saved settings.

sessionStorage:
- Data is limited to a page session in a tab.
- Separate tabs generally have separate sessionStorage.
- Useful for temporary form data or a multi-step process.

Both are limited to the same origin.
Origin means the combination of protocol, domain,
and port.

Neither should be used to store passwords or sensitive
authentication data casually.
*/


/*
=========================================================
3. COOKIES
=========================================================

WHAT ARE COOKIES?

- Cookies are small pieces of data stored by the browser.
- They are commonly used for session management,
  authentication-related workflows, and user preferences.
- Cookies can have an expiration date.
- Cookies are automatically sent with matching HTTP requests,
  depending on their domain, path, and security settings.

CREATING A COOKIE:

document.cookie = "username=Rahul";

READING COOKIES:

console.log(document.cookie);

SETTING EXPIRATION:

document.cookie =
    "username=Rahul; max-age=3600; path=/";

Here:
max-age=3600 means the cookie expires after 3600 seconds.
path=/ makes it available across paths on that host.

DELETING A COOKIE:

Set its max-age to zero.

document.cookie =
    "username=Rahul; max-age=0; path=/";


IMPORTANT COOKIE ATTRIBUTES:

1. expires
   Specifies the expiration date.

2. max-age
   Specifies how many seconds the cookie remains valid.

3. path
   Defines the URL path where the cookie is available.

4. domain
   Defines the domain for which the cookie is available.

5. Secure
   Sends the cookie only over HTTPS.

6. HttpOnly
   Prevents JavaScript from accessing the cookie.
   It must be set by the server, not document.cookie.

7. SameSite
   Controls when cookies are sent with cross-site requests.
   Common values: Strict, Lax, None.

EXAMPLE:

document.cookie =
    "theme=dark; max-age=86400; path=/; Secure; SameSite=Lax";

/*
IMPORTANT:

JavaScript cannot read HttpOnly cookies.

Cookies are often used for server-managed sessions.
For sensitive authentication cookies, HttpOnly, Secure,
and an appropriate SameSite policy are important.
*/


/*
=========================================================
4. FETCH API
=========================================================

WHAT IS FETCH API?

- Fetch API is used to make HTTP requests.
- It allows JavaScript to communicate with servers.
- It is commonly used to retrieve or send data.
- It returns a Promise.

SYNTAX:

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

EXAMPLE: GET REQUEST
*/

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        // fetch does not reject automatically for HTTP 404 or 500.
        // We must check response.ok.
        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }

        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("Error:", error.message);
    });

/*
RESPONSE METHODS:

response.json()
    Converts response body into JSON.

response.text()
    Converts response body into text.

response.blob()
    Reads response as a Blob.

response.status
    Returns HTTP status code.

response.ok
    Returns true for successful HTTP status codes (200-299).


POST REQUEST:

Used to send data to a server.

EXAMPLE:
*/

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        title: "JavaScript",
        body: "Learning Fetch API",
        userId: 1
    })
})
    .then(response => {
        if (!response.ok) {
            throw new Error("Request failed");
        }

        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error.message));


/*
FETCH WITH ASYNC/AWAIT:

async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.log(error.message);
    }
}

getUsers();


IMPORTANT:

- fetch() returns a Promise.
- response.json() also returns a Promise.
- await waits for a Promise to settle.
- catch handles network errors and errors thrown in the try block.
- HTTP errors such as 404 need to be checked using response.ok.
*/


/*
=========================================================
5. URL API
=========================================================

WHAT IS URL API?

- URL API is used to create, read, and modify URLs.
- It helps work with URL components.
- It is useful for handling query parameters.

EXAMPLE:
*/

const myURL = new URL(
    "https://example.com/products?id=101&category=books"
);

// Get complete URL
console.log(myURL.href);

// Get domain
console.log(myURL.hostname);

// Get protocol
console.log(myURL.protocol);

// Get pathname
console.log(myURL.pathname);

// Get query string
console.log(myURL.search);

// Get a specific query parameter
console.log(myURL.searchParams.get("id")); // 101

// Add a query parameter
myURL.searchParams.set("page", "2");

// Delete a query parameter
myURL.searchParams.delete("category");

console.log(myURL.href);

/*
IMPORTANT URL PROPERTIES:

href       -> Complete URL
protocol   -> https:
hostname   -> example.com
host       -> example.com plus port, if present
pathname   -> /products
search     -> Query string including ?
hash       -> URL fragment including #

URLSearchParams:

get()      -> Gets a parameter
set()      -> Adds or updates a parameter
append()   -> Adds another value
delete()   -> Removes a parameter
has()      -> Checks if parameter exists

EXAMPLE:
*/

const params = new URLSearchParams("name=Rahul&age=21");

console.log(params.get("name")); // Rahul

params.set("age", "22");

console.log(params.toString()); // name=Rahul&age=22


/*
=========================================================
6. TIMERS
=========================================================

Timers allow JavaScript to execute code after a delay
or repeatedly at a specified interval.

There are two commonly used timer functions:

1. setTimeout()
2. setInterval()


-------------------------
A. setTimeout()
-------------------------

WHAT IS setTimeout()?

- Executes a function once after a specified delay.
- Delay is measured in milliseconds.

SYNTAX:

setTimeout(callback, delay);

EXAMPLE:
*/

setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);

/*
2000 milliseconds = 2 seconds.

CLEAR TIMEOUT:

clearTimeout() cancels a timeout that has not executed yet.
*/

const timeoutId = setTimeout(() => {
    console.log("This will not execute");
}, 3000);

// Cancel the timeout
clearTimeout(timeoutId);


/*
-------------------------
B. setInterval()
-------------------------

WHAT IS setInterval()?

- Executes a function repeatedly.
- Runs after every specified interval.
- Continues until it is stopped.

SYNTAX:

setInterval(callback, delay);

EXAMPLE:
*/

let count = 1;

const intervalId = setInterval(() => {
    console.log("Count:", count);

    count++;

    if (count > 5) {
        clearInterval(intervalId);
    }
}, 1000);

/*
CLEAR INTERVAL:

clearInterval() stops repeated execution.

IMPORTANT DIFFERENCE:

setTimeout():
Executes once after a delay.

setInterval():
Executes repeatedly after each interval.

NOTE:

Timer delays are not guaranteed exact execution times.
The callback runs when the event loop can process it.
*/


/*
=========================================================
7. GEOLOCATION API
=========================================================

WHAT IS GEOLOCATION API?

- Geolocation API provides the geographical location
  of the user's device.
- It can provide latitude and longitude.
- It requires user permission.
- It generally works in secure contexts (HTTPS),
  with localhost treated as secure for development.

MAIN METHOD:

navigator.geolocation.getCurrentPosition()

It accepts:
1. Success callback
2. Error callback
3. Optional configuration object

EXAMPLE:
*/

if ("geolocation" in navigator) {

    navigator.geolocation.getCurrentPosition(

        // Success callback
        (position) => {

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            console.log("Latitude:", latitude);
            console.log("Longitude:", longitude);
        },

        // Error callback
        (error) => {
            console.log("Error:", error.message);
        }
    );

} else {
    console.log("Geolocation is not supported");
}

/*
IMPORTANT PROPERTIES:

position.coords.latitude
    Returns latitude.

position.coords.longitude
    Returns longitude.

position.coords.accuracy
    Returns accuracy in meters.

ERROR TYPES:

1. PERMISSION_DENIED
   User denied location permission.

2. POSITION_UNAVAILABLE
   Location information is unavailable.

3. TIMEOUT
   Request took too long.

OTHER METHOD:

watchPosition()

- Continuously watches the user's location.
- Calls the callback when location changes.

clearWatch()

- Stops watching the user's location.

EXAMPLE:

const watchId = navigator.geolocation.watchPosition(
    (position) => {
        console.log(position.coords.latitude);
    },
    (error) => {
        console.log(error.message);
    }
);

// Stop tracking
// navigator.geolocation.clearWatch(watchId);

/*
IMPORTANT:

Always request location only when needed and explain
why it is required.
*/


/*
=========================================================
8. CLIPBOARD API
=========================================================

WHAT IS CLIPBOARD API?

- Clipboard API allows JavaScript to interact with
  the system clipboard.
- It can copy text to the clipboard.
- It can also read clipboard text when permission
  and browser policies allow it.

COPY TEXT:

navigator.clipboard.writeText(text)

EXAMPLE:
*/

async function copyText() {

    try {
        await navigator.clipboard.writeText("Hello JavaScript");

        console.log("Text copied successfully");

    } catch (error) {
        console.log("Unable to copy text:", error.message);
    }
}

// Call this from a user action, such as a button click.
// copyText();


/*
READ TEXT:

navigator.clipboard.readText()

EXAMPLE:
*/

async function readText() {

    try {
        const text = await navigator.clipboard.readText();

        console.log("Clipboard text:", text);

    } catch (error) {
        console.log("Unable to read clipboard:", error.message);
    }
}

// Reading clipboard content may require permission
// and a user interaction, depending on the browser.


/*
IMPORTANT:

- Clipboard API generally requires HTTPS or localhost.
- Copying is commonly allowed after a user gesture,
  such as clicking a button.
- Reading clipboard content is more restricted.
- Clipboard methods return Promises.
*/


/*
=========================================================
              QUICK REVISION SUMMARY
=========================================================

1. localStorage
   Stores data permanently until manually removed.

2. sessionStorage
   Stores data for a browser tab session.

3. Cookies
   Store small pieces of data and can be sent
   automatically with HTTP requests.

4. Fetch API
   Makes HTTP requests and returns a Promise.

5. URL API
   Helps create, read, and modify URLs.

6. setTimeout()
   Executes a function once after a delay.

7. setInterval()
   Executes a function repeatedly.

8. Geolocation API
   Gets the user's geographical location.

9. Clipboard API
   Reads from and writes to the system clipboard.


=========================================================
                    END OF NOTES
=========================================================
*/
