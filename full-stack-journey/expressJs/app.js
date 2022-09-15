const express = require('express');
const db = require('./dbread');
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.send("Hello from expressJs!");
})

const studentList = (req, res) => {
    db.getDbStudents()
        .then(students => {
            res.send(students);
        })
};

const newStudent = (req, res) => {
    const newStudent = req.body;
    db.getDbStudents()
        .then(students => {
            students.push(newStudent);
            db.insertDbStudent(students)
                .then(data => {
                    res.send(newStudent);
                })
        })
};

const studentDetail = (req, res) => {
    const id = parseInt(req.params.id);
    db.getDbStudents()
        .then(students => {
            const student = students.find(s => s.id === id);
            if (!student) res.status(404).send("No Student found with this ID!");
            else res.send(student);
        });
};

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedData = req.body;
    db.getDbStudents()
        .then(students => {
            const student = students.find(s => s.id === id);
            if (!student) res.status(404).send("No Student found with this ID!");
            else {
                const i = students.findIndex(s => s.id === id);
                students[i] = updatedData;
                db.insertDbStudent(students)
                    .then(msg => res.send(updatedData))
            }
        });
};

const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);
    db.getDbStudents()
        .then(students => {
            const student = students.find(s => s.id === id);
            if (!student) res.status(404).send("No Student found with this ID!");
            const updatedStudents = students.filter(s => s.id !== id);
            db.insertDbStudent(updatedStudents)
                .then(msg => res.send(student))
        });
};

app.get('/api/students', studentList);

app.post('/api/students', newStudent);

app.get('/api/students/:id', studentDetail);

app.put('/api/students/:id', updateStudent);

app.delete('/api/students/:id', deleteStudent);

const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
})