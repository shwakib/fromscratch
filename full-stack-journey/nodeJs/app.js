// const circleApp = require("./circle");

// console.log("Loaded Module:", circleApp);
// // console.log(circleApp.area(3));
// console.log(circleApp.msg);
// console.log(circleApp.circumference(3));
// console.log(area(3));

const fs = require('fs');

let text = fs.readFileSync('./files/input.txt', 'utf-8');

text = `Copied Text: ${text}`;
fs.writeFileSync('./files/output.txt', text);