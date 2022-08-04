// const circleApp = require("./circle");

// console.log("Loaded Module:", circleApp);
// // console.log(circleApp.area(3));
// console.log(circleApp.msg);
// console.log(circleApp.circumference(3));
// console.log(area(3));


//File System Module
const fs = require('fs');

let text = fs.readFileSync('./files/input.txt', 'utf-8');

text = `Copied Text: ${text}`;
fs.writeFileSync('./files/output.txt', text);

//Events Module
// addEventListener('click',(e)=>{

// })
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('event1', (e) => {
    console.log("EVENT 1 called", e);
})

emitter.on('event2', () => {
    console.log("EVENT 2 called");
})

emitter.emit('event1', { name: "Sifat Hasan", id: 1 });
emitter.emit('event2');