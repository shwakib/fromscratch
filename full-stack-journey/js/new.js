
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