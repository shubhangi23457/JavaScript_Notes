
/*
=========================================================
              JAVASCRIPT - PROTOTYPES & OOP
=========================================================


1. PROTOTYPES
---------------------------------------------------------

A prototype is an object from which another object
can inherit properties and methods.

Every JavaScript object has an internal link to
another object called its prototype (or null).

JavaScript uses prototype-based inheritance.

Example:
*/

const person = {
    greet: function () {
        console.log("Hello!");
    }
};

const student = {
    name: "Rahul"
};

// Setting person as the prototype of student
Object.setPrototypeOf(student, person);

student.greet(); // Hello!
console.log(student.name); // Rahul

/*
Explanation:

1. person contains the greet() method.
2. student has its own name property.
3. student inherits from person.
4. student can access greet() without defining it.

IMPORTANT:
The prototype is not the same as the object itself.
An object can access inherited properties through
its prototype.


2. PROTOTYPE CHAIN
---------------------------------------------------------

The prototype chain is the mechanism through which
JavaScript searches for properties and methods.

When a property is accessed:

1. JavaScript checks the object itself.
2. If not found, it checks its prototype.
3. It continues searching up the prototype chain.
4. If not found anywhere, it returns undefined.

Example:
*/

const animal = {
    eat: function () {
        console.log("Animal is eating");
    }
};

const dog = {
    bark: function () {
        console.log("Dog is barking");
    }
};

Object.setPrototypeOf(dog, animal);

dog.bark(); // Dog is barking
dog.eat();  // Animal is eating

console.log(dog.toString()); // Inherited from Object.prototype

/*
Prototype chain:

dog
  |
  v
animal
  |
  v
Object.prototype
  |
  v
null

To check the prototype:
*/

console.log(Object.getPrototypeOf(dog) === animal); // true

/*
To check whether a property belongs directly
to an object:
*/

console.log(dog.hasOwnProperty("bark")); // true
console.log(dog.hasOwnProperty("eat"));  // false


3. PROTOTYPE PROPERTY
---------------------------------------------------------

In JavaScript, functions have a prototype property.

It is mainly used when a function is called
as a constructor using the new keyword.

Objects created using that constructor inherit
from the constructor's prototype object.

Example:
*/

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log("Hello, " + this.name);
};

const p1 = new Person("Aman");
const p2 = new Person("Riya");

p1.greet(); // Hello, Aman
p2.greet(); // Hello, Riya

/*
Explanation:

1. Person is a constructor function.
2. Person.prototype stores shared methods.
3. p1 and p2 inherit greet() from Person.prototype.
4. The greet() method is not separately created
   inside every instance.

IMPORTANT DIFFERENCE:

Person.prototype:
The prototype object used by instances created
with new Person().

Object.getPrototypeOf(p1):
Returns the actual prototype of p1.

p1.__proto__:
Legacy accessor for the object's prototype.
Prefer Object.getPrototypeOf() instead.


4. CONSTRUCTOR FUNCTIONS
---------------------------------------------------------

A constructor function is a regular function used
to create and initialize multiple objects.

By convention, constructor function names start
with an uppercase letter.

The new keyword is used to create an instance.

Example:
*/

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

const car1 = new Car("Toyota", "Fortuner", 2024);
const car2 = new Car("Honda", "City", 2023);

console.log(car1.brand); // Toyota
console.log(car2.model); // City

/*
What happens when new is used?

1. A new empty object is created.
2. The object's prototype is linked to
   ConstructorFunction.prototype.
3. The constructor function executes with this
   referring to the new object.
4. The new object is returned (unless an object
   is explicitly returned by the constructor).

Without new, this function does not behave
as a normal constructor.


5. CLASSES
---------------------------------------------------------

Classes provide a cleaner syntax for creating
objects and implementing OOP in JavaScript.

JavaScript classes are built on top of
prototype-based inheritance.

Syntax:
*/

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(this.name, this.age);
    }
}

const s1 = new Student("Aman", 21);

s1.display(); // Aman 21

/*
Explanation:

class:
Defines a class.

constructor():
Initializes object properties.

new:
Creates an instance of the class.

display():
Defines an instance method.

IMPORTANT:
Class declarations are not hoisted in the same
usable way as function declarations.
You must declare a class before accessing it.


6. CONSTRUCTOR
---------------------------------------------------------

A constructor is a special method inside a class.

It is automatically called when an object
is created using the new keyword.

It is mainly used to initialize object properties.

Example:
*/

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}

const emp1 = new Employee("Rahul", 50000);
const emp2 = new Employee("Priya", 60000);

console.log(emp1.name);   // Rahul
console.log(emp2.salary); // 60000

/*
IMPORTANT POINTS:

1. A class can have only one constructor method.
2. Constructor executes automatically during object creation.
3. It initializes the instance properties.
4. If no constructor is provided, JavaScript
   supplies a default constructor.


7. INSTANCE METHODS
---------------------------------------------------------

Instance methods are methods defined inside a class
that can be called using its objects (instances).

They are stored on the class prototype and shared
by instances.

Example:
*/

class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add() {
        return this.a + this.b;
    }

    subtract() {
        return this.a - this.b;
    }

    multiply() {
        return this.a * this.b;
    }
}

const calc = new Calculator(10, 5);

console.log(calc.add());      // 15
console.log(calc.subtract()); // 5
console.log(calc.multiply()); // 50

/*
IMPORTANT:

Instance methods are different from static methods.

Instance method:
Called using an object.

Static method:
Called using the class itself.


8. INHERITANCE
---------------------------------------------------------

Inheritance allows one class to acquire properties
and methods from another class.

It promotes code reusability.

The class being inherited from is called:
Parent class / Base class / Superclass.

The class inheriting is called:
Child class / Derived class / Subclass.

Example:
*/

class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}

const dog1 = new Dog();

dog1.eat();  // Animal is eating
dog1.bark(); // Dog is barking

/*
Explanation:

1. Animal is the parent class.
2. Dog is the child class.
3. Dog extends Animal.
4. Dog inherits the eat() method.
5. Dog also has its own bark() method.


9. ENCAPSULATION
---------------------------------------------------------

Encapsulation means combining data and methods
inside a single unit (class) and controlling
access to the internal data.

JavaScript supports encapsulation using:

1. Public properties.
2. Private properties (#).
3. Getters and setters.

Example using private properties:
*/

class BankAccount {
    #balance = 0;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(5000);

account.deposit(2000);
account.withdraw(1000);

console.log(account.getBalance()); // 6000

// console.log(account.#balance); 
// SyntaxError: Private field cannot be accessed.

/*
Explanation:

#balance is a private field.

It cannot be directly accessed outside the class.

It can only be accessed inside the class body.

Advantages:

1. Data protection.
2. Controlled access.
3. Better code organization.
4. Prevents accidental modification.


10. POLYMORPHISM
---------------------------------------------------------

Polymorphism means "many forms".

It allows the same method name to behave differently
depending on the object or class using it.

In JavaScript, polymorphism can be achieved through
method overriding and a shared interface-like design.

Example: Method Overriding
*/

class Animal {
    sound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    sound() {
        console.log("Cat meows");
    }
}

const animals = [
    new Dog(),
    new Cat(),
    new Animal()
];

animals.forEach(function (animal) {
    animal.sound();
});

/*
Output:

Dog barks
Cat meows
Animal makes a sound

Explanation:

1. All classes have a method called sound().
2. Each class implements it differently.
3. The same method call produces different outputs.

This is runtime polymorphism through method overriding.


11. EXTENDS AND SUPER
---------------------------------------------------------

EXTENDS:

The extends keyword is used to create a child class
that inherits from a parent class.

SUPER:

The super keyword is used to access the parent class
constructor or parent class methods.

Example:
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(
            "My name is " + this.name
        );
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {

        // Calls the parent constructor
        super(name, age);

        this.subject = subject;
    }

    introduce() {
        super.introduce();

        console.log(
            "I teach " + this.subject
        );
    }
}

const teacher1 = new Teacher("Rahul", 30, "JavaScript");

teacher1.introduce();

/*
Output:

My name is Rahul
I teach JavaScript


IMPORTANT RULES OF SUPER:

1. super() calls the parent constructor.
2. In a derived class constructor, super() must be
   called before accessing this.
3. super.methodName() calls a parent class method.
4. super cannot be used outside an appropriate
   class method or constructor.


=========================================================
                  QUICK REVISION
=========================================================

PROTOTYPE:
Object from which another object can inherit.

PROTOTYPE CHAIN:
Mechanism used to search for inherited properties.

PROTOTYPE PROPERTY:
Property of constructor functions used to set
the prototype of their instances.

CONSTRUCTOR FUNCTION:
Regular function used to create and initialize objects.

CLASS:
Cleaner syntax for creating objects and implementing OOP.

CONSTRUCTOR:
Special class method that initializes an instance.

INSTANCE METHOD:
Method called using an object of a class.

INHERITANCE:
One class acquiring features from another class.

ENCAPSULATION:
Bundling data and methods while controlling access.

POLYMORPHISM:
Same method name having different implementations.

EXTENDS:
Used to inherit from another class.

SUPER:
Used to call the parent constructor or parent methods.


                    END OF NOTES
*/
