const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (request, response) => {
    response.send("Hello from expressJs!");
})

app.get('/api/students', (req, res) => {
    fs.readFile('./db.json', 'utf-8', (err, data) => {
        console.log(data);
        const students = JSON.parse(data).students;
        res.send(students);
    })
})

const port = 3000;
app.listen(port, () => {
    console.log('Listening on port 3000!');
})