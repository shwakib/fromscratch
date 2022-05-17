
//normal function
function saySomething() {
    console.log("Hello World");
    console.log("Comilla City");
    console.log("Sifat Hasan Wakib");
}
saySomething();

function sayHello(greetmsg) {
    console.log(`Hello ${greetmsg}`);
}
let msg = "Sifat Hasan Wakib";
sayHello(msg);

function addnumbers(a, b) {
    //console.log(a+b);
    return a + b;
}
let c = addnumbers(4, 2);
console.log(c);
//console.log(addnumbers(4,2));

//function expression
let saySomething1 = function (greetmsg) {
    console.log("Hi!, I Am Sifat Hasan Wakib");
    console.log(`Hello ${greetmsg}`);
}
saySomething1(msg);

//Arrow function(ES6)
let saySomething2 = (greetmsg) => {
    console.log("Hello!, I am Sifat Hasan Wakib");
    console.log(`Hello ${greetmsg}`);
}
saySomething2(msg);

//array iteration with function
let food = ["Cake", "Coke", "Pasta", "Pizza"];
let numbers = [1, 35, 45, 85];
// food.forEach(function(item,i,abc)
let printFood = function (item, i) {
    console.log(`Index: ${i} Value: ${item}`);
}
food.forEach(printFood/*function(item,i)
{
    console.log(`Index: ${i} Value: ${item}`);
}*/);

//array iteration using mapping
function addSomething(item) {
    return `${item} is a Food`;
}
let arr_res = food.map(addSomething);
console.log(arr_res);

let arr_sqr = numbers.map(function (item) {
    return item * item;
});
console.log(arr_sqr);

//Object method
let person = {
    fname: "Shakib",
    lname: "Al Hasan",
    dob: "9-10-1995",
    fullname: function () {
        return `${this.fname} ${this.lname}`;
    }
}

console.log(person.fname);
console.log(person.fullname());

//Math Object
let value1;
value1 = Math.PI;
value1 = Math.E;
value1 = Math.round(3.1);
value1 = Math.ceil(1.1);
value1 = Math.floor(1.9);
value1 = Math.sqrt(81);
value1 = Math.abs(-8);
value1 = Math.pow(2, 3);
value1 = Math.min(1, 8, -8, 1, 0);
value1 = Math.max(1, 8, -8, 1, 0);
value1 = Math.random();
value1 = Math.random() * 100;
value1 = Math.floor(Math.random() * 100 + 1);
console.log(value1);

//Date Object
let value2;
let today = new Date();
let bday = new Date('08-26-1996 11:25:27');
bday = new Date('August 26 1996');
bday = new Date('8/26/1996');
value2 = today;
value2 = today.toString();
value2 = bday;
value2 = today.getMonth();
value2 = today.getDate();
value2 = today.getDay();
value2 = today.getFullYear();
value2 = today.getHours();
value2 = today.getMinutes();
value2 = today.getMilliseconds();
value2 = today.getTime();

bday.setMonth(3);
bday.setDate(27);
bday.setFullYear(1998);
console.log(bday);
console.log(value2);

//Glocal Scope
var a = 1;
let b = 2;
const d = 3;
//var e = 10;
console.log(`Global Scope: `, a, b, d);

//Local Scope
function test() {
    var a = 4;
    let b = 5;
    const d = 6;
    var e = 10;
    console.log(`Functions Scope: `, a, b, d, e);
}
test();
console.log(`Global Scope: `, a, b, d/*,e*/);

if (true) {
    var a = 7;
    let b = 8;
    const d = 9;
    console.log(`If Scope: `, a, b, d);
}
console.log(`Global Scope: `, a, b, d/*,e*/);

for (var a = 0; a < 10; a++) {
    console.log("Loop scope: ", a);
}
console.log(`Global Scope: `, a, b, d/*,e*/);

for (let a = 0; a < 15; a++) {
    console.log("Loop scope: ", a);
}
console.log(`Global Scope: `, a, b, d/*,e*/);//getting value from for(var scope)