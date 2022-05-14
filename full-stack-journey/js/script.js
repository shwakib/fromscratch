
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
b="Adib";
//alert(b);
var c=20;
var d=c;
console.log(c);
console.log(d);
c=30;
console.log(c);
console.log(d);
var e=c+d;
console.log(e);
const a=20;
// a=3;
var line1="HEllo ";
var line2="world";
var line3=line1+" "+line2;
console.log(line3);
var f=line1+34+4;
console.log(f);

var tempinc=prompt("Enter temperature in celsius:");
var tempinf=(9/5*tempinc+32);
alert("Temperature in Farenheit: "+tempinf+" degree");
console.log("Task Complete");

let v=7;
let u=v;
v=45;
console.log(u);

//Primitive & Refrence
let arr=[1,2,3];
let newArr=arr;
console.log(newArr);
arr[0]=500;
console.log(arr);
console.log(newArr);

//Template Literals
let lines=`First line
Second line`;
console.log(lines);
let age=38;
console.log(`His age is ${age}`);

let name1="adib";
let age1=28;
let address="Dhaka";
console.log(`His name is  ${name1}
His age is ${age1}
His address is ${address}`);

let n1=65;
let n2=60;
console.log(`The summation of ${n1}+${n2} is ${n1+n2}`);
var age2=prompt("Enter You arge:");
if(age2>=70)
{
    console.log("Over 70");
}
else if(age2>=50 && age2<70)
{
    console.log("Below 70 but over 50");
}
else if(age2>=18 && age2<50)
{
    console.log("Between 18-50")
}
else{
    alert("Invalid Input");
}
console.log("End of If statement");