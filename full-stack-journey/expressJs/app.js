const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

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

app.post('/api/students', (req, res) => {
    const newStudent = req.body;
    fs.readFile('./db.json', 'utf-8', (err, data) => {
        const students = JSON.parse(data);
        students.students.push(newStudent);
        fs.writeFile('./db.json', JSON.stringify(students), (err) => {
            res.send(newStudent);
        })
    })
})

const port = 3000;
app.listen(port, () => {
    console.log('Listening on port 3000!');
})