/*
============================================================
6. OBJECTS
============================================================

An object is a collection of key-value pairs.

Objects are commonly used to represent real-world entities.

Example:

person = {
    name: "John",
    age: 25
}

Here:
    name -> key/property
    "John" -> value
*/


// ==========================================================
// 6.1 CREATING OBJECTS
// ==========================================================

// ---------- Object literal ----------

const person = {
    name: "John",
    age: 25,
    city: "Delhi"
};

console.log(person);


// ---------- Empty object ----------

const user = {};


// ---------- Using new Object() ----------

const employee = new Object();

employee.name = "Alex";
employee.age = 30;

console.log(employee);


// ---------- Object with different data types ----------

const student = {
    name: "Sam",
    age: 21,
    isStudent: true,
    marks: [80, 90, 85],
    address: {
        city: "Mumbai",
        country: "India"
    }
};

console.log(student);


// ==========================================================
// 6.2 PROPERTIES & METHODS
// ==========================================================

/*
Property:
    A key-value pair that stores data.

Method:
    A function stored as a property of an object.
*/

const person2 = {

    name: "John",
    age: 25,

    greet: function () {
        console.log("Hello!");
    }

};

console.log(person2.name);
console.log(person2.age);

person2.greet();


/*
Modern shorthand for methods:
*/

const person3 = {

    name: "Alex",

    greet() {
        console.log("Hello " + this.name);
    }

};

person3.greet();


// ---------- Adding properties ----------

person3.city = "Delhi";

console.log(person3);


// ---------- Updating properties ----------

person3.city = "Mumbai";

console.log(person3);


// ---------- Deleting properties ----------

delete person3.city;

console.log(person3);


// ==========================================================
// 6.3 ACCESSING PROPERTIES
// ==========================================================

const user2 = {
    name: "John",
    age: 25,
    city: "Delhi"
};


// ---------- Dot notation ----------

console.log(user2.name);
console.log(user2.age);


// ---------- Bracket notation ----------

console.log(user2["name"]);
console.log(user2["age"]);


/*
Bracket notation is useful when the property name is stored
inside a variable.
*/

const property = "name";

console.log(user2[property]);


// ---------- Dynamic property access ----------

const propertyName = "city";

console.log(user2[propertyName]);


// ---------- Property with spaces ----------

const user3 = {
    "first name": "John",
    age: 25
};

console.log(user3["first name"]);

// console.log(user3.first name); // Invalid


// ---------- Checking if property exists ----------

console.log("name" in user2); // true
console.log("email" in user2); // false


// ---------- hasOwn() ----------

console.log(
    Object.hasOwn(user2, "name")
); // true

console.log(
    Object.hasOwn(user2, "email")
); // false


// ==========================================================
// 6.4 NESTED OBJECTS
// ==========================================================

/*
An object can contain another object as a property.
*/

const user4 = {

    name: "John",

    address: {
        city: "Delhi",
        country: "India",

        location: {
            latitude: 28.6139,
            longitude: 77.2090
        }
    }

};


// ---------- Accessing nested properties ----------

console.log(user4.address.city);

console.log(
    user4.address.location.latitude
);


// ---------- Modifying nested properties ----------

user4.address.city = "Mumbai";

console.log(user4.address.city);


// ---------- Nested arrays ----------

const company = {

    name: "Tech Company",

    employees: [
        {
            name: "John",
            role: "Developer"
        },
        {
            name: "Alex",
            role: "Designer"
        }
    ]

};

console.log(company.employees[0].name);
console.log(company.employees[1].role);


// ---------- Optional chaining ----------

console.log(
    company.address?.city
);

/*
If address doesn't exist:

Instead of throwing an error,
optional chaining returns undefined.
*/


// ==========================================================
// 6.5 OBJECT DESTRUCTURING
// ==========================================================

/*
Destructuring allows us to extract properties from an object
into variables.
*/

const person4 = {
    name: "John",
    age: 25,
    city: "Delhi"
};

const { name, age, city } = person4;

console.log(name);
console.log(age);
console.log(city);


// ---------- Rename variables ----------

const person5 = {
    name: "Alex",
    age: 30
};

const {
    name: userName,
    age: userAge
} = person5;

console.log(userName);
console.log(userAge);


// ---------- Default values ----------

const person6 = {
    name: "Sam"
};

const {
    name: personName,
    city: personCity = "Delhi"
} = person6;

console.log(personName);
console.log(personCity);


// ---------- Nested destructuring ----------

const student2 = {

    name: "John",

    address: {
        city: "Mumbai",
        country: "India"
    }

};

const {
    address: {
        city: studentCity,
        country
    }
} = student2;

console.log(studentCity);
console.log(country);


// ---------- Destructuring in function parameters ----------

function displayUser({ name, age }) {

    console.log(name);
    console.log(age);

}

displayUser({
    name: "John",
    age: 25
});


// ==========================================================
// 6.6 OBJECT SPREAD OPERATOR
// ==========================================================

/*
Spread operator:
    ...

It expands properties from one object into another object.
*/


// ---------- Copy an object ----------

const original = {
    name: "John",
    age: 25
};

const copy = {
    ...original
};

console.log(copy);


// ---------- Add new properties ----------

const updatedUser = {

    ...original,

    city: "Delhi"

};

console.log(updatedUser);


// ---------- Override properties ----------

const updatedUser2 = {

    ...original,

    age: 30

};

console.log(updatedUser2);

/*
The later property overrides the earlier property.
*/


// ---------- Combine objects ----------

const obj1 = {
    name: "John",
    age: 25
};

const obj2 = {
    city: "Delhi",
    country: "India"
};

const combinedObject = {
    ...obj1,
    ...obj2
};

console.log(combinedObject);


// ---------- Property collision ----------

const firstObject = {
    name: "John",
    age: 25
};

const secondObject = {
    name: "Alex",
    city: "Delhi"
};

const mergedObject = {
    ...firstObject,
    ...secondObject
};

console.log(mergedObject);

/*
If the same property exists:

Later object wins.
*/


// ==========================================================
// 6.7 Object.keys()
// ==========================================================

/*
Object.keys()
- Returns an ARRAY containing the object's own enumerable
  property names (keys).
*/

const user5 = {
    name: "John",
    age: 25,
    city: "Delhi"
};

const keys = Object.keys(user5);

console.log(keys);

/*
Output:

["name", "age", "city"]
*/


// ---------- Using Object.keys() with loop ----------

Object.keys(user5).forEach(key => {

    console.log(key);
    console.log(user5[key]);

});


// ==========================================================
// 6.8 Object.values()
// ==========================================================

/*
Object.values()
- Returns an ARRAY containing the object's own enumerable
  property values.
*/

const values = Object.values(user5);

console.log(values);

/*
Output:

["John", 25, "Delhi"]
*/


// ---------- Example ----------

const prices = {
    product1: 100,
    product2: 200,
    product3: 300
};

const totalPrice = Object.values(prices)
    .reduce((total, price) => total + price, 0);

console.log(totalPrice);
// 600


// ==========================================================
// 6.9 Object.entries()
// ==========================================================

/*
Object.entries()
- Returns an ARRAY of [key, value] pairs.
*/

const entries = Object.entries(user5);

console.log(entries);

/*
Output:

[
    ["name", "John"],
    ["age", 25],
    ["city", "Delhi"]
]
*/


// ---------- Using entries() ----------

Object.entries(user5).forEach(([key, value]) => {

    console.log(key, value);

});


// ---------- Convert object to useful format ----------

const product = {
    name: "Laptop",
    price: 50000,
    brand: "ABC"
};

for (const [key, value] of Object.entries(product)) {

    console.log(`${key}: ${value}`);

}


// ==========================================================
// 6.10 SHALLOW vs DEEP COPY
// ==========================================================

/*
SHALLOW COPY
------------------------------------------------------------

A shallow copy creates a new outer object.

But nested objects/arrays are still shared references.
*/


// ---------- Shallow copy using spread ----------

const originalUser = {

    name: "John",

    address: {
        city: "Delhi"
    }

};

const shallowCopy = {
    ...originalUser
};


// Change top-level property

shallowCopy.name = "Alex";

console.log(originalUser.name);
// John

console.log(shallowCopy.name);
// Alex


// Change nested property

shallowCopy.address.city = "Mumbai";

console.log(originalUser.address.city);
// Mumbai

console.log(shallowCopy.address.city);
// Mumbai

/*
Why?

Because:

originalUser.address
        ↓
   same object
        ↑
shallowCopy.address
*/


// ==========================================================
// DEEP COPY
// ==========================================================

/*
A deep copy creates a completely independent copy,
including nested objects.

One common modern approach:

structuredClone()
*/

const originalData = {

    name: "John",

    address: {
        city: "Delhi"
    },

    hobbies: [
        "Reading",
        "Gaming"
    ]

};

const deepCopy = structuredClone(originalData);

deepCopy.name = "Alex";

deepCopy.address.city = "Mumbai";

deepCopy.hobbies.push("Music");

console.log(originalData);

console.log(deepCopy);

/*
Changing deepCopy does NOT affect originalData.
*/


// ==========================================================
// JSON DEEP COPY
// ==========================================================

/*
Another commonly seen technique:

JSON.parse(JSON.stringify(object))

However, it has limitations.

It can lose or change certain values such as:
- undefined
- functions
- Symbol
- BigInt
- Date objects
- Map
- Set
- special values

So prefer structuredClone() when appropriate.
*/

const data2 = {
    name: "John",
    age: 25
};

const deepCopy2 = JSON.parse(
    JSON.stringify(data2)
);

console.log(deepCopy2);


// ==========================================================
// SHALLOW vs DEEP COPY - VISUAL
// ==========================================================

/*
SHALLOW COPY:

original
   |
   |---- name
   |
   |---- address ----> { city: "Delhi" }
                         ↑
                         |
                     shared object
                         |
                         ↓
copy
   |
   |---- name
   |
   |---- address


DEEP COPY:

original
   |
   |---- address ----> { city: "Delhi" }


copy
   |
   |---- address ----> { city: "Delhi" }

Nested objects are independent.
*/


// ==========================================================
// QUICK REVISION
// ==========================================================

/*
OBJECT
------------------------------------------------------------

const user = {
    name: "John",
    age: 25
};


PROPERTY
------------------------------------------------------------

name: "John"


METHOD
------------------------------------------------------------

const user = {
    greet() {
        console.log("Hello");
    }
};


ACCESSING PROPERTIES
------------------------------------------------------------

user.name
user["name"]


DYNAMIC ACCESS
------------------------------------------------------------

const key = "name";

user[key]


NESTED OBJECT
------------------------------------------------------------

const user = {
    address: {
        city: "Delhi"
    }
};

user.address.city


OBJECT DESTRUCTURING
------------------------------------------------------------

const { name, age } = user;


RENAME DURING DESTRUCTURING
------------------------------------------------------------

const { name: userName } = user;


OBJECT SPREAD
------------------------------------------------------------

const copy = { ...user };

const updated = {
    ...user,
    age: 30
};


Object.keys()
------------------------------------------------------------

Returns array of keys.

Object.keys(user);


Object.values()
------------------------------------------------------------

Returns array of values.

Object.values(user);


Object.entries()
------------------------------------------------------------

Returns array of [key, value] pairs.

Object.entries(user);


SHALLOW COPY
------------------------------------------------------------

Copies the outer object.

Nested objects remain shared.

Examples:

{ ...object }
Object.assign({}, object)


DEEP COPY
------------------------------------------------------------

Copies nested objects as well.

Preferred modern approach:

structuredClone(object)


============================================================
QUICK COMPARISON
============================================================

                    keys()       values()       entries()

Returns:
                    Keys         Values         [key, value]

Example object:

{
    name: "John",
    age: 25
}

Object.keys()
-> ["name", "age"]

Object.values()
-> ["John", 25]

Object.entries()
-> [["name", "John"], ["age", 25]]


============================================================
MUTATION vs NON-MUTATION
============================================================

Direct property change:
    user.name = "Alex"
    -> Mutates object

delete user.name
    -> Mutates object

Spread:
    { ...user }
    -> Creates new outer object

structuredClone(user)
    -> Creates independent deep copy
*/