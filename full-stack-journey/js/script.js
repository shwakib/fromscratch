
// window.alert("Hello I am Sifat Hasan Wakib");
// alert("Hello I am Sifat Hasan Wakib");
document.write("Hello I am Sifat Hasan Wakib");
document.getElementById("root").innerHTML = 'I Am learning Js!';
document.getElementById("root1").innerHTML = 'I Am learning node!';
document.getElementById("root2").innerHTML = 'I Am learning mongo!';
console.log("See you not for mind");
var x;
// x=prompt("Enter Your Name:");
// console.log(x);
// document.write(x);
let b;
b = "Adib";
//alert(b);
var c = 20;
var d = c;
console.log(c);
console.log(d);
c = 30;
console.log(c);
console.log(d);
var e = c + d;
console.log(e);
const a = 20;
// a=3;
var line1 = "HEllo ";
var line2 = "world";
var line3 = line1 + " " + line2;
console.log(line3);
var f = line1 + 34 + 4;
console.log(f);

var tempinc = prompt("Enter temperature in celsius:");
var tempinf = (9 / 5 * tempinc + 32);
alert("Temperature in Farenheit: " + tempinf + " degree");
console.log("Task Complete");

let v = 7;
let u = v;
v = 45;
console.log(u);

//Primitive & Refrence
let arr = [1, 2, 3];
let newArr = arr;
console.log(newArr);
arr[0] = 500;
console.log(arr);
console.log(newArr);

//Template Literals
let lines = `First line
Second line`;
console.log(lines);
let age = 38;
console.log(`His age is ${age}`);

let name1 = "adib";
let age1 = 28;
let address = "Dhaka";
console.log(`His name is  ${name1}
His age is ${age1}
His address is ${address}`);

let n1 = 65;
let n2 = 60;
console.log(`The summation of ${n1}+${n2} is ${n1 + n2}`);

//if
var age2 = prompt("Enter You age:");
if (age2 >= 70) {
    console.log("Over 70");
}
else if (age2 >= 50 && age2 < 70) {
    console.log("Below 70 but over 50");
}
else if (age2 >= 18 && age2 < 50) {
    console.log("Between 18-50")
}
else {
    alert("Invalid Input");
}
console.log("End of If statement");

//nested if
var k1 = parseInt(prompt("Enter 1st number"));
var k2 = parseInt(prompt("Enter 2nd number"));
var k3 = parseInt(prompt("Enter 3rd number"));

// if(k1>=k2 && k1>=k3)
// {
//     console.log(k1+"is the largest number");
// }
// else if(k2>=k1 && k2>=k3)
// {
//     console.log(k2+"is the largest number");
// }
// else
// {
//     console.log(k3+"is the largest number");
// }

if (k1 >= k2) {
    if (k1 >= k3) {
        console.log(k1 + "is the largest number");
    }
    else {
        console.log(k3 + "is the largest number");
    }
}
else {
    if (n2 >= n1) {
        console.log(k2 + "is the largest number");
    }
    else {
        console.log(k3 + "is the largest number");
    }
}

//switch
let choice = prompt("Enter your choice:");
switch (choice) {
    case "a":
        text = "Option 1 is selected";
        break;
    case "b":
        text = "Option 2 is selected";
        break;
    case "c":
        text = "Option 3 is selected";
        break;

    default:
        text = "No Option is selected";
        break;
}
console.log(text);

//if Exercise
var grade = parseInt(prompt("Enter your number:"));
if (grade >= 90) {
    console.log('Your grade is A+');
}
else if (grade >= 85 && grade < 90) {
    console.log('Your grade is A');
}
else if (grade >= 80 && grade < 85) {
    console.log('Your grade is B+');
}
else if (grade >= 75 && grade < 80) {
    console.log('Your grade is B');
}
else if (grade >= 70 && grade < 75) {
    console.log('Your grade is C+');
}
else if (grade >= 70 && grade < 75) {
    console.log('Your grade is C+');
}
else if (grade>0 && grade < 50) {
    console.log('Your grade is F');
}
else {
    console.log('Invalid Input');
}

//switch exercise
console.log("Select an option: \n 1.Add \n 2.Subtract \n 3.Multiply \n 4.Division");
let operator = parseInt(prompt("Enter operator choice"));
var operand1 = parseInt(prompt("Enter first number:"));
var operand2 = parseInt(prompt("Enter second number:"));
switch (operator) {
    case 1:
        var result = operand1 + operand2;
        console.log("The result is: " + result);
        break;
    case 2:
        var result = operand1 - operand2;
        console.log("The result is: " + result);
        break;
    case 3:
        var result = operand1 * operand2;
        console.log("The result is: " + result);
        break;
    case 4:
        var result = operand1 / operand2;
        console.log("The result is: " + result);
        break;
    default:
        console.log("Invalid Input");
        break;
}

//Bohubrihi
/*console.log("Select an Option: n1. Add n2. Subtractn3. Mulitply n4. Divide");

var num1 = prompt("Enter First Number: ");
var num2 = prompt("Enter Second Number: ");
var option = prompt("Choose an operation: ");
var result = null;

num1 = parseInt(num1);
num2 = parseInt(num2);
option = parseInt(option);

var num1Con = isNaN(num1);
var num2Con = isNaN(num2);
var optionCon = isNaN(option);

if (num1Con || num2Con || optionCon) {
    console.log("Invalid Input!");
} else {
    switch (option) {
        case 1:
            result = num1 + num2;
            break;
        case 2:
            result = num1 - num2;
            break;
        case 3:
            result = num1 * num2;
            break;
        case 4:
            result = num1 / num2;
            break;
        default:
            break;
    }

    if (result == null) {
        console.log("No Result!");
    }
    else {
        console.log("Result: " + result);
    }
}*/