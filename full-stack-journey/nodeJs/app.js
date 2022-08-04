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

//Inherating event module from different file
const MyEvent = require('./myEvents');
const myEvent = new MyEvent();

myEvent.on('event1', () => {
    console.log('inherited Event Emitted');
})

myEvent.function1();

//HTTP Module

const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write('Hello World');
        response.end();
    }

    if (request.url === '/students') {
        response.write(JSON.stringify([
            { name: "Rahim" },
            { name: "Karim" }
        ]))
        response.end();
    }
});

server.listen(3000); //3000=>Port Number

console.log("Listening on Port 3000....");