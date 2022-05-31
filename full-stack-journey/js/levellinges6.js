//Array Destruction
let fruits = ["Apple", "Grape", "Orange"];

let [fruit1, fruit2, fruit3] = fruits;
// let [fruit1, ,fruit3]=fruits; If we want to skip any element from middle just use white space with ,

console.log(fruit1, fruit2, fruit3);

console.log("Array Destructing End ***");

//Swapping
let a, b;
a = 8; b = 20;

// let temp = a;
// a = b;
// b = temp;

[a, b] = [b, a];

console.log(`a = ${a} and b = ${b}`);

console.log("Swapping End ***");

//Object Destructing
let person = {
    firstName: "Fazle",
    lastName: "Rahat",
    dob: '09-27-1995'
}

// let fname=person.firstName;
// let lname=person.lastName;
// let dob=person.dob;

let { firstName, lastName, dob } = person; // Same name should be provided as the object
let { firstName: fname, lastName: lname, dob: bday } = person;

function display({ firstName: fname, lastName: lname, dob: bday }) {
    console.log(fname + " Object", lname, bday);
}
display(person);

console.log(firstName, lastName, dob);
console.log(fname, lname, bday);

console.log("Object Destruction End ***");

// Spread Operator ...
let str = "Bohubrihi";
let newStr = [...str];

console.log(newStr);

let fruit4 = ["Apple", "Pine-apple", "Mango"];
let fruit5 = ["Orange", "Grape"];
let newFruit = "Jackfruit";

let newArr = [...fruit4, ...fruit5, newFruit]; //adds frui4,fruit5 and newFruit and create a new array
console.log(newArr);

//Spred On Object
// let newPerson={...person}
let newPerson = { ...person, dob: "27-04-1998" }
console.log(newPerson); //add dob with existing Person

// Spread Operator ...
let numbers = [23, 1, 0, -1];
console.log(Math.max(...numbers)); //Split the arrat and find the max

let person1 = ["Simanta", "Paul"]

let test = (fname, lname) => {
    console.log(`Hello ${fname} ${lname}`);
}

test(...person1); // Split person1 into 2 and pass to test

console.log("Spread End ***");

//Rest Operator ...
let fruits1 = ['apple', 'grape', 'mango', 'jackfruit'];
let [first, second, ...third] = fruits1;
console.log(first);
console.log(second);
console.log(third); //add mango & Jackfruit into 1 array

let person3 = {
    fname1: "Simanta",
    lname1: "Paul",
    dob: "8-26-1995"
}

let { fname1, ...lname1 } = person3;
console.log(fname1, lname1);

let moreNum = [78, 1, 2, 5, 6];

let test1 = (name, ...numbers) => { // Rest
    console.log(name);
    console.log(numbers);
}

test1("Simanta", 67, 3, 3);
test1("Simanta", ...moreNum); // Spread
// test1("Simanta", moreNum);

console.log("Rest End ***");

//ES6 classes before
// function Person(age,name)
// {
//     this.age=age;
//     this.name=name;
// }

// Person.prototype.getName=function()
// {
//     console.log(this.name);
// }
// let person4=new Person(24,"Wakib");
// console.log(person4);
// console.log(person4.getName());

//Es6 class ->Now
class Person {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}

let person5 = new Person(25, "Wakib");
console.log(person5);
console.log(person5.getName());

console.log("Class End ***");

//Symbols
let c = Symbol();
let d = Symbol();
console.log(c, d);

let person2 = {
    name: "Simanta",
    age: 25,
    [a]: "Hello World!"
}
console.log(person2);
console.log(Object.getOwnPropertyNames(person2));
console.log(Object.getOwnPropertySymbols(person2));
console.log(Object.keys(person2));
console.log(JSON.stringify(person2));

for (x in person2) {
    console.log(x);
}
let sym1 = Symbol("Hello");
let sym2 = Symbol("Hello");
console.log(sym1 == sym2);
console.log(sym1);

console.log("Symbols End ***");

//Iterator
let iterable = "Hello";
iterable = [1, 2, 3, 4, 5, 5];
let iter = iterable[Symbol.iterator]();
// console.log(iter);

// console.log(iter.next());
// console.log(iter.next());

// console.log("Other Codes...");

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

let names = ["Rahim", "Kahim", "Zahim", "Kahim"];

//Custom Iterator
function customIterator(arr) {
    let i = 0;

    return {
        next: function () {
            return i < arr.length ? { value: arr[i++], done: false } : { value: undefined, done: true };
        }
    };
}

let members = customIterator(names);
console.log(members.next());
console.log(members.next());
// console.log("Random codes...");
console.log(members.next());
console.log(members.next());
console.log(members.next());
console.log("Iterator End ***");
//Generators
function* genFunction() {
    console.log("I am some code");
    yield 1;
    // return;
    console.log("I am some code");
    console.log("I am some code");
    console.log("I am some code");
    yield "Rahim";
    yield 4;
    console.log("I am some code");
    yield "Karim";
    yield "Hello World";
}

let genIter = genFunction();
console.log(genIter.next());
console.log(genIter.next());
// console.log(genIter.next());
// console.log(genIter.next());
// console.log(genIter.next());
// console.log(genIter.next());

console.log("Generators End ***");

//Promises
let prom = new Promise((resolve, reject) => {
    let a;
    setTimeout(() => {
        a = 1 + 1;
        if (a == 2) {
            resolve('Success');
        }
        else {
            reject('Failed');
        }
    },/*4000*/0);
});

prom.then((message) => {
    console.log('I am from then ' + message);
}).catch((message) => {
    console.log('I am from Catch ' + message);
});
console.log("I am after Promise");

console.log("promise End ***");

//Async Wait
fetch('http://api.icndb.com/jokes/random/5000')
    .then(response => response.json())
    .then(data => { });

async function getJokes() {
    let response = await fetch('http://api.icndb.com/jokes/random/5000');
    let data = await response.json();
    return data;
}

getJokes().then(jokes => console.log(jokes));

console.log("Async & Awaits End ***");

//Sets
let mySet = new Set([1, 2, 3, 2, 4, 4]);
mySet.add("Hello");
mySet.add(2);
mySet.delete(4);
// mySet.clear();

console.log(mySet.has(4));
console.log(mySet.size);
console.log(mySet);

for (x of mySet.values()) {
    console.log(x);
}

let iterSet = mySet.entries();
console.log(iterSet);
// console.log(iterSet.next());
// console.log(iterSet.next());
// console.log(iterSet.next());

for (let [x] of mySet.entries()) {
    console.log(x);
}

let iterSet2 = [...mySet.entries()];
console.log(iterSet2);

mySet.forEach(value => console.log(value));

console.log("Sets End ***");

//Maps
let myMap = new Map(
    [
        ['first key', 10],
        ['second key', 'Wakib'],
    ]
);
myMap.set('third key', 'hello world');

console.log(myMap);
console.log(myMap.get('first key'));
console.log(myMap.has('first key'));
console.log(myMap.size);

for (let [x, y] of myMap) {
    console.log(x, y);
}
for (let x of myMap.keys()) {
    console.log(x);
}
for (let x of myMap.values()) {
    console.log(x);
}
for (let x of myMap.entries()) {
    console.log(x);
}
myMap.forEach((x, y) => {
    console.log(x, y)
});

// let arr = Array.from(myMap);
// let arr = Array.from(myMap.keys());
let arr = Array.from(myMap.values());
console.log(arr);

console.log("Maps End ***");