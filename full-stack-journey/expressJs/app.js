const express = require('express');
const db = require('./dbread');
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.send("Hello from expressJs!");
})

app.get('/api/students', (req, res) => {
    db.getDbStudents()
        .then(students => {
            res.send(students);
        })
})

app.post('/api/students', (req, res) => {
    const newStudent = req.body;
    db.getDbStudents()
        .then(students => {
            students.push(newStudent);
            db.insertDbStudent(students)
                .then(data => {
                    res.send(newStudent);
                })
        })
})

const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
})