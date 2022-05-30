//Array Destruction
let fruits=["Apple","Grape","Orange"];

let [fruit1,fruit2,fruit3]=fruits;
// let [fruit1, ,fruit3]=fruits; If we want to skip any element from middle just use white space with ,

console.log(fruit1,fruit2,fruit3);

//Swapping
let a, b;
a = 8; b= 20;

// let temp = a;
// a = b;
// b = temp;

[a, b] = [b , a];

console.log(`a = ${a} and b = ${b}`);

//Object Destructing
let person = {
    firstName: "Fazle",
    lastName: "Rahat",
    dob: '09-27-1995'
}

// let fname=person.firstName;
// let lname=person.lastName;
// let dob=person.dob;

let {firstName,lastName,dob}=person; // Same name should be provided as the object
let {firstName:fname,lastName:lname,dob:bday}=person;

function display({firstName:fname,lastName:lname,dob:bday})
{
    console.log(fname +" Object",lname,bday);
}
display(person);

console.log(firstName,lastName,dob);
console.log(fname,lname,bday);

// Spread Operator ...
let str = "Bohubrihi";
let newStr = [...str];

console.log(newStr);

let fruit4 = ["Apple", "Pine-apple", "Mango"];
let fruit5 = ["Orange", "Grape"];
let newFruit = "Jackfruit";

let newArr=[...fruit4,...fruit5,newFruit];
console.log(newArr);

//Spred On Object
// let newPerson={...person}
let newPerson={...person,dob:"27-04-1998"}
console.log(newPerson);

// Spread Operator ...
let numbers = [23, 1, 0, -1];
console.log(Math.max(...numbers));

let person1 = ["Simanta", "Paul"]

let test = (fname, lname) => {
    console.log(`Hello ${fname} ${lname}`);
}

test(...person1);

//Rest Operator ...
let fruits1 = ['apple', 'grape', 'mango', 'jackfruit'];
let [first, second,...third] = fruits1;
console.log(first);
console.log(second);
console.log(third);

let {firstName1,...lastName1}=person;
console.log(firstName1,lastName1);

let moreNum = [78,1,2,5,6];

let test1 =(name,...numbers) => { // Rest
    console.log(name);
    console.log(numbers);
}

test1("Simanta", 67,3,3);
test1("Simanta", ...moreNum); // Spread
// test1("Simanta", moreNum);